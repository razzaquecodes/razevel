'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/src/context/CartContext';
import { SearchIcon, HeartIcon, UserIcon, BagIcon } from '@/src/icons';

const HomeIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { state: { items: cart }, dispatch } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Hide on checkout, track, or measurements wizard for distraction-free flows
  if (pathname.includes('/checkout') || pathname.includes('/track') || pathname.includes('/measurements')) {
    return null;
  }


  const navItems = [
    { id: 'home', label: 'Home', href: '/', icon: <HomeIcon /> },
    { id: 'search', label: 'Search', href: '#', action: 'search', icon: <SearchIcon /> },
    { id: 'wishlist', label: 'Wishlist', href: '/profile', icon: <HeartIcon /> },
    { id: 'cart', label: 'Cart', href: '#', action: 'cart', icon: <BagIcon />, badge: cartCount > 0 ? cartCount : null },
    { id: 'profile', label: 'Profile', href: '/profile', icon: <UserIcon /> },
  ];

  return (
    <>
      <div className="mobile-bottom-nav">
        {navItems.map(item => {
          const isActive = pathname === item.href && item.id !== 'search' && item.id !== 'cart';
          
          const content = (
            <div className="nav-item-content" style={{ color: isActive ? 'var(--deep-black)' : 'var(--taupe)' }}>
              {item.icon}
              <span className="nav-item-label">{item.label}</span>
              {item.badge && (
                <div className="nav-badge">
                  {item.badge}
                </div>
              )}
            </div>
          );

          if (item.action) {
            return (
              <button key={item.id} className="nav-btn" onClick={() => {
                if (item.action === 'cart') dispatch({ type: 'TOGGLE_CART' });
                if (item.action === 'search') window.dispatchEvent(new CustomEvent('toggle-search'));
              }}>
                {content}
              </button>
            );
          }

          return (
            <Link key={item.id} href={item.href} className="nav-link-btn">
              {content}
            </Link>
          );
        })}
      </div>
      <style>{`
        .mobile-bottom-nav {
          display: none;
          position: fixed;
          bottom: 0; left: 0; right: 0;
          height: 80px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid var(--border);
          z-index: 99;
          padding: 0 var(--space-2);
          padding-bottom: env(safe-area-inset-bottom);
        }
        
        .nav-item-content {
          display: flex; flex-direction: column; alignItems: center; gap: 4px;
          position: relative; transition: color 0.3s var(--ease);
        }
        
        .nav-item-label {
          font-size: 0.65rem; font-family: var(--font-sans); font-weight: 500;
          letter-spacing: 0.05em; text-transform: uppercase;
        }

        .nav-badge {
          position: absolute; top: -6px; right: -8px; width: 16px; height: 16px;
          border-radius: 50%; background: var(--warm-gold); color: var(--deep-black);
          font-size: 0.6rem; display: flex; align-items: center; justify-content: center;
          font-weight: 600; border: 1px solid var(--luxury-white);
        }

        .nav-btn, .nav-link-btn {
          background: none; border: none; padding: 0; cursor: pointer; text-decoration: none;
          flex: 1; display: flex; justify-content: center; align-items: center; padding-top: 12px;
        }

        @media (max-width: 900px) {
          .mobile-bottom-nav { display: flex; }
        }
      `}</style>
    </>
  );
}
