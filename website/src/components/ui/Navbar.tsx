'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/src/context/CartContext';
import SearchModal from './SearchModal';
import { SearchIcon, HeartIcon, UserIcon, BagIcon, MenuIcon } from '@/src/icons';
import { useAuth } from '@/src/context/AuthContext';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { state: { items: cart }, dispatch } = useCart();
  const { user } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => {
        if (prev !== scrolled) return scrolled;
        return prev;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleToggleSearch = () => setSearchOpen(true);
    window.addEventListener('toggle-search', handleToggleSearch);
    return () => window.removeEventListener('toggle-search', handleToggleSearch);
  }, []);

  const navLinks = [
    { label: 'Men', href: '/collections/men' },
    { label: 'Women', href: '/collections/women' },
    { label: 'Bespoke', href: '/bespoke' },
    { label: 'Craftsmanship', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isDarkThemePage = pathname === '/' || pathname === '/bespoke';
  const navBg = isScrolled 
    ? 'var(--color-black)' 
    : (isDarkThemePage ? 'transparent' : 'var(--color-white)');
  const navColor = isScrolled 
    ? 'var(--color-white)' 
    : (isDarkThemePage ? 'var(--color-white)' : 'var(--color-black)');
  const navBorder = isScrolled
    ? '1px solid var(--color-gold)'
    : (isDarkThemePage ? '1px solid transparent' : '1px solid rgba(8, 8, 8, 0.08)');

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: E }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 'var(--nav-height)',
          background: navBg,
          backdropFilter: isScrolled || !isDarkThemePage ? 'none' : 'blur(24px)',
          WebkitBackdropFilter: isScrolled || !isDarkThemePage ? 'none' : 'blur(24px)',
          borderBottom: navBorder,
          transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease',
          color: navColor,
        }}
      >
        <div style={{ height: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          
          <div className="nav-desktop-layout" style={{ display: 'grid', gridTemplateColumns: '1fr max-content 1fr', alignItems: 'center', height: '100%' }}>
            
            {/* LEFT: Logo */}
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Link href="/" style={{
                fontFamily: 'var(--font-serif)', fontSize: '1.5rem',
                color: 'currentColor', textDecoration: 'none', 
                letterSpacing: '0.2em', transition: 'color var(--transition-base)'
              }}>
                RAZEVÉL
              </Link>
            </div>

            {/* CENTER: Navigation Links */}
            <div style={{ display: 'grid', gridAutoFlow: 'column', gap: 'var(--space-4)', alignItems: 'center', height: '100%' }}>
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className={`nav-link ${pathname === link.href ? 'active' : ''}`}>
                  {link.label}
                  {pathname === link.href && (
                    <motion.div layoutId="underline" className="nav-underline" />
                  )}
                </Link>
              ))}
            </div>

            {/* RIGHT: Utilities */}
            <div style={{ display: 'grid', gridAutoFlow: 'column', gap: 'var(--space-2)', alignItems: 'center', justifyContent: 'end', height: '100%' }}>
              <button onClick={() => setSearchOpen(true)} className="nav-icon-btn" aria-label="Search">
                <SearchIcon />
              </button>
              <Link href="/profile" className="nav-icon-btn" aria-label="Wishlist">
                <HeartIcon />
              </Link>
              <Link href={user ? "/profile" : "/login"} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'currentColor', textDecoration: 'none' }} aria-label="Profile">
                {user && <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', color: 'var(--color-gold)', whiteSpace: 'nowrap', display: 'none' }} className="nav-welcome">Welcome, {user.firstName}</span>}
                <div className="nav-icon-btn" style={{ minWidth: '44px' }}>
                  <UserIcon />
                  {user && (
                    <span style={{ position: 'absolute', bottom: '8px', right: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-gold)' }} />
                  )}
                </div>
              </Link>
              <button onClick={() => dispatch({ type: 'TOGGLE_CART' })} className="nav-icon-btn" aria-label="Cart" style={{ position: 'relative' }}>
                <BagIcon />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      style={{ 
                        position: 'absolute', top: '8px', right: '4px',
                        background: 'var(--color-gold)', color: 'var(--color-black)', 
                        width: '16px', height: '16px', borderRadius: '50%', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        fontSize: '0.6rem', fontWeight: 600
                      }}>
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* MOBILE LAYOUT */}
          <div className="nav-mobile-layout" style={{ display: 'none', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="nav-icon-btn" 
                aria-label="Menu"
              >
                <MenuIcon />
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="/" style={{
                fontFamily: 'var(--font-serif)', fontSize: '1.25rem',
                color: 'currentColor', textDecoration: 'none', letterSpacing: '0.2em'
              }}>
                RAZEVÉL
              </Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setSearchOpen(true)} className="nav-icon-btn" aria-label="Search">
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU DRAWER OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: E }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--color-black)',
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
              padding: '8rem 2.5rem 3rem',
              justifyContent: 'space-between'
            }}
          >
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'none',
                border: 'none',
                color: 'var(--color-white)',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.25rem',
                    color: 'var(--color-white)',
                    textDecoration: 'none'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', margin: 0 }}>
                RAZEVÉL Atelier
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <style>{`
        .nav-link {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          color: currentColor;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-width: 44px;
          min-height: 44px;
          padding: 0 var(--space-2);
          transition: color var(--transition-base);
        }
        .nav-link:hover {
          color: var(--color-gold);
        }
        .nav-underline {
          position: absolute;
          bottom: 24px;
          left: var(--space-2);
          right: var(--space-2);
          height: 1px;
          background: var(--color-gold);
        }
        
        .nav-icon-btn {
          background: none; border: none; cursor: pointer; padding: 0;
          color: currentColor;
          display: flex; align-items: center; justify-content: center;
          transition: color var(--transition-base);
          min-width: 44px;
          min-height: 44px;
        }
        .nav-icon-btn:hover {
          color: var(--color-gold);
        }
        .nav-icon-btn:focus-visible, .nav-link:focus-visible {
          outline: 2px solid var(--color-gold);
          outline-offset: -2px;
        }

        @media (min-width: 768px) {
          .nav-welcome { display: inline-block !important; }
        }

        @media (max-width: 1024px) {
          .nav-desktop-layout { display: none !important; }
          .nav-mobile-layout { display: grid !important; }
        }
      `}</style>
    </>
  );
}
