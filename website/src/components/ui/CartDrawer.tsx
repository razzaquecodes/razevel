'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/src/context/CartContext';
import Image from 'next/image';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function CartDrawer() {
  const { state, dispatch, totalItems, totalPrice, tax, shipping, grandTotal, estimatedDelivery } = useCart();
  const { isCartOpen, items } = state;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => dispatch({ type: 'CLOSE_CART' })}
            style={{
              position: 'fixed', inset: 0, zIndex: 1100,
              background: 'rgba(8,8,8,0.6)',
              backdropFilter: 'blur(8px)',
            }}
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.55, ease: E }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              zIndex: 1200, width: 'min(440px, 100vw)',
              background: 'var(--color-white)',
              display: 'flex', flexDirection: 'column',
              boxShadow: 'var(--shadow-lg)',
            }}
            aria-label="Shopping Cart"
          >
            {/* Header */}
            <div style={{
              padding: '2rem 2rem 1.5rem',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
            }}>
              <div>
                <p className="t-label" style={{ marginBottom: 4 }}>Your Selection</p>
                <h2 style={{
                  fontFamily: 'var(--font-serif)', fontSize: '1.5rem',
                  fontWeight: 400, color: 'var(--color-black)', margin: 0,
                }}>
                  Cart {totalItems > 0 && <span style={{ color: 'var(--color-gold)', fontSize: '1rem' }}>({totalItems})</span>}
                </h2>
              </div>
              <button
                onClick={() => dispatch({ type: 'CLOSE_CART' })}
                aria-label="Close cart"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: 8, color: 'var(--color-grey)',
                  fontSize: '1.25rem', lineHeight: 1, transition: 'color var(--transition-fast)',
                }}
              >
                ✕
              </button>
            </div>

            {/* Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem' }}>
              {items.length === 0 ? (
                <div className="empty-state" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '4rem' }}>
                  <Image src="/illustrations/consultation.png" alt="Cart Empty" width={180} height={180} style={{ objectFit: 'contain' }} />
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Your Cart is Empty</h3>
                  <p className="t-body" style={{ marginBottom: '2.5rem', maxWidth: '280px' }}>Discover our latest bespoke commissions and ready-to-wear collections.</p>
                  <button className="btn btn-outline" onClick={() => dispatch({ type: 'CLOSE_CART' })}>
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {items.map(item => (
                    <CartItemRow
                      key={item.id} item={item}
                      onRemove={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}
                      onQtyChange={(qty) => dispatch({ type: 'UPDATE_QTY', id: item.id, qty })}
                      onMoveToWishlist={() => dispatch({ type: 'MOVE_TO_WISHLIST', id: item.id })}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div style={{
                borderTop: '1px solid var(--color-border)',
                padding: '2rem', background: 'var(--soft-ivory)',
                display: 'flex', flexDirection: 'column', gap: '1rem',
              }}>
                
                {/* Cost Breakdown */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p className="t-body" style={{ margin: 0, fontSize: '0.9rem' }}>Subtotal</p>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-black)' }}>₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p className="t-body" style={{ margin: 0, fontSize: '0.9rem' }}>Taxes (12% GST)</p>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-black)' }}>₹{tax.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p className="t-body" style={{ margin: 0, fontSize: '0.9rem' }}>Shipping</p>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: shipping === 0 ? 'var(--color-gold)' : 'var(--color-black)' }}>
                      {shipping === 0 ? 'Complimentary' : `₹${shipping.toLocaleString('en-IN')}`}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                    <p className="t-label" style={{ fontSize: '0.85rem' }}>Grand Total</p>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-black)' }}>₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(201,168,76,0.1)', padding: '0.75rem', borderLeft: '2px solid var(--color-gold)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <p className="t-body" style={{ fontSize: '0.75rem', margin: 0 }}>Est. Delivery: {estimatedDelivery}</p>
                </div>

                <a href="/checkout" className="btn btn-primary"
                  style={{ justifyContent: 'center', marginTop: '0.5rem' }}
                  onClick={() => dispatch({ type: 'CLOSE_CART' })}>
                  Secure Checkout
                </a>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function CartItemRow({
  item, onRemove, onQtyChange, onMoveToWishlist
}: {
  item: import('@/src/context/CartContext').CartItem;
  onRemove: () => void;
  onQtyChange: (qty: number) => void;
  onMoveToWishlist: () => void;
}) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '80px 1fr',
      gap: '1.25rem', paddingBottom: '1.5rem',
      borderBottom: '1px solid var(--color-border)',
    }}>
      {/* Image */}
      <div style={{
        width: 80, height: 100, background: 'var(--soft-ivory)',
        position: 'relative', overflow: 'hidden', flexShrink: 0,
      }}>
        {item.image ? (
          <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
        ) : (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '100%', fontFamily: 'var(--font-serif)',
            fontSize: '1rem', color: 'var(--color-gold)', opacity: 0.5,
          }}>RZ</div>
        )}
      </div>

      {/* Details */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
            <p style={{
              fontFamily: 'var(--font-serif)', fontSize: '1rem',
              color: 'var(--color-black)', fontWeight: 400, lineHeight: 1.3, margin: 0,
            }}>{item.name}</p>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--color-black)', fontWeight: 300 }}>
              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
            </span>
          </div>
          <p className="t-label" style={{ color: 'var(--color-grey-light)', fontSize: '0.65rem', marginTop: 4 }}>
            {item.category} {item.fabric && ` · ${item.fabric}`}
          </p>
          {item.isBespoke && (
            <span style={{
              fontSize: '0.55rem', letterSpacing: '0.15em', display: 'inline-block', marginTop: 4,
              color: 'var(--color-gold)', fontFamily: 'var(--font-sans)', fontWeight: 500,
            }}>BESPOKE COMMISSION</span>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
          {/* Qty Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid var(--color-border)', padding: '0.2rem' }}>
            <button onClick={() => onQtyChange(item.quantity - 1)} style={{
              width: 24, height: 24, background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-grey)',
            }}>−</button>
            <span style={{ fontSize: '0.875rem', fontFamily: 'var(--font-sans)', minWidth: 16, textAlign: 'center' }}>
              {item.quantity}
            </span>
            <button onClick={() => onQtyChange(item.quantity + 1)} style={{
              width: 24, height: 24, background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-grey)',
            }}>+</button>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={onMoveToWishlist} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--color-grey-light)', fontSize: '0.75rem', fontFamily: 'var(--font-sans)',
              textDecoration: 'underline', textUnderlineOffset: '4px',
            }}>Move to Wishlist</button>
            <button onClick={onRemove} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--color-grey-light)', fontSize: '0.75rem', fontFamily: 'var(--font-sans)',
              textDecoration: 'underline', textUnderlineOffset: '4px',
            }}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}
