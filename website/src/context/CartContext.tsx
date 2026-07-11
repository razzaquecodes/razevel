'use client';

import { createContext, useContext, useReducer, useEffect, useMemo, useCallback, ReactNode, useRef } from 'react';
import { createClient } from '@/src/lib/supabase/client';
import { useAuth } from '@/src/context/AuthContext';

// ─── Types ────────────────────────────────────────────────────────────────────
export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  fabric?: string;
  quantity: number;
  image?: string;
  isBespoke?: boolean;
}

interface CartState {
  items: CartItem[];
  wishlist: string[]; // item IDs
  isCartOpen: boolean;
  isWishlistOpen: boolean; // Future proofing if needed
}

type CartAction =
  | { type: 'ADD_ITEM'; item: CartItem }
  | { type: 'REMOVE_ITEM'; id: string }
  | { type: 'UPDATE_QTY'; id: string; qty: number }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_WISHLIST'; id: string }
  | { type: 'MOVE_TO_WISHLIST'; id: string }
  | { type: 'MOVE_TO_CART'; id: string; item: CartItem }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'TOGGLE_CART' };

type CartActionWithSync = CartAction | { type: 'SYNC_FROM_CLOUD'; items: CartItem[]; wishlist: string[] } | { type: 'MERGE_CLOUD_DATA'; cloudItems?: CartItem[]; cloudWishlist: string[] };

// ─── Reducer ──────────────────────────────────────────────────────────────────
function cartReducer(state: CartState, action: CartActionWithSync): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.item.id);
      return {
        ...state,
        isCartOpen: true,
        items: existing
          ? state.items.map(i =>
              i.id === action.item.id
                ? { ...i, quantity: i.quantity + action.item.quantity }
                : i
            )
          : [...state.items, action.item],
      };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case 'UPDATE_QTY':
      return {
        ...state,
        items:
          action.qty <= 0
            ? state.items.filter(i => i.id !== action.id)
            : state.items.map(i =>
                i.id === action.id ? { ...i, quantity: action.qty } : i
              ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'TOGGLE_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.includes(action.id)
          ? state.wishlist.filter(id => id !== action.id)
          : [...state.wishlist, action.id],
      };
    case 'MOVE_TO_WISHLIST':
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.id),
        wishlist: state.wishlist.includes(action.id) ? state.wishlist : [...state.wishlist, action.id],
      };
    case 'MOVE_TO_CART': {
      const existing = state.items.find(i => i.id === action.id);
      return {
        ...state,
        wishlist: state.wishlist.filter(id => id !== action.id),
        items: existing
          ? state.items.map(i => i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i)
          : [...state.items, { ...action.item, quantity: 1 }],
      };
    }
    case 'OPEN_CART':
      return { ...state, isCartOpen: true };
    case 'CLOSE_CART':
      return { ...state, isCartOpen: false };
    case 'TOGGLE_CART':
      return { ...state, isCartOpen: !state.isCartOpen };
    case 'SYNC_FROM_CLOUD':
      return {
        ...state,
        items: action.items || state.items,
        wishlist: action.wishlist || state.wishlist,
      };
    case 'MERGE_CLOUD_DATA': {
      const mergedWishlist = Array.from(new Set([...state.wishlist, ...action.cloudWishlist]));
      return {
        ...state,
        wishlist: mergedWishlist,
        // (Could merge items similarly if needed)
      };
    }
    default:
      return state;
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  totalItems: number;
  totalPrice: number;
  tax: number;
  shipping: number;
  grandTotal: number;
  estimatedDelivery: string;
  isWishlisted: (id: string) => boolean;
} | null>(null);

const INITIAL: CartState = {
  items: [],
  wishlist: [],
  isCartOpen: false,
  isWishlistOpen: false,
};

export function CartProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const supabase = useMemo(() => createClient(), []);
  const isSyncing = useRef(false);

  const [state, dispatch] = useReducer(cartReducer, INITIAL);
  const isLoaded = useRef(false);

  // 1. Initial Sync from Local Storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('razevel_cart');
      if (stored) {
        const parsed = JSON.parse(stored);
        dispatch({
          type: 'SYNC_FROM_CLOUD',
          items: parsed.items || [],
          wishlist: parsed.wishlist || []
        });
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
    } finally {
      isLoaded.current = true;
    }
  }, []);

  // Pull from Cloud on Login
  useEffect(() => {
    async function pullCloudData() {
      if (!user || isSyncing.current) return;
      isSyncing.current = true;
      try {
        const [{ data: cartData }, { data: wishData }] = await Promise.all([
          supabase.from('cart').select('product_id, quantity').eq('user_id', user.id),
          supabase.from('wishlist').select('product_id').eq('user_id', user.id)
        ]);

        const cloudWishlist = wishData?.map(w => w.product_id) || [];
        
        dispatch({ type: 'MERGE_CLOUD_DATA', cloudWishlist });
      } finally {
        isSyncing.current = false;
      }
    }
    pullCloudData();
  }, [user, supabase]);

  // Push to Cloud / Local on change (only after initial load has completed)
  useEffect(() => {
    if (!isLoaded.current) return;
    const persistData = async () => {
      // Local Storage
      localStorage.setItem('razevel_cart', JSON.stringify({ items: state.items, wishlist: state.wishlist }));
      
      // Cloud Storage
      if (user && !isSyncing.current) {
        await supabase.from('wishlist').delete().eq('user_id', user.id);
        if (state.wishlist.length > 0) {
          const wishInserts = state.wishlist.map(id => ({ user_id: user.id, product_id: id }));
          await supabase.from('wishlist').insert(wishInserts);
        }
      }
    };
    persistData();
  }, [state.items, state.wishlist, user, supabase]);

  // Derived state calculations (useMemoized)
  const totalItems = useMemo(() => state.items.reduce((sum, i) => sum + i.quantity, 0), [state.items]);
  const totalPrice = useMemo(() => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0), [state.items]);
  const tax = useMemo(() => totalPrice * 0.12, [totalPrice]); // 12% GST
  const shipping = useMemo(() => totalPrice > 50000 ? 0 : (totalPrice > 0 ? 1500 : 0), [totalPrice]); // Free shipping over 50k
  const grandTotal = useMemo(() => totalPrice + tax + shipping, [totalPrice, tax, shipping]);
  const isWishlisted = useCallback((id: string) => state.wishlist.includes(id), [state.wishlist]);

  // Dynamic delivery estimate based on cart contents
  const hasBespoke = useMemo(() => state.items.some(i => i.isBespoke), [state.items]);
  const estimatedDelivery = useMemo(() => hasBespoke 
    ? '4-6 Weeks (Bespoke Timeline)' 
    : '7-10 Business Days', [hasBespoke]);

  const contextValue = useMemo(() => ({
    state,
    dispatch,
    totalItems,
    totalPrice,
    tax,
    shipping,
    grandTotal,
    estimatedDelivery,
    isWishlisted
  }), [state, totalItems, totalPrice, tax, shipping, grandTotal, estimatedDelivery, isWishlisted]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
