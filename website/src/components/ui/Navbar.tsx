'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useCart } from '@/src/context/CartContext';
import SearchModal from './SearchModal';
import { SearchIcon, HeartIcon, UserIcon, BagIcon, MenuIcon } from '@/src/icons';
import { useAuth } from '@/src/context/AuthContext';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const menuVars = {
  initial: { opacity: 0, y: '-100%' },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
  exit: { opacity: 0, y: '-100%', transition: { duration: 0.6, ease: E, delay: 0.2 } },
};

const containerVars = {
  initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.2, staggerChildren: 0.1, staggerDirection: 1 } },
};

const linkVars = {
  initial: { opacity: 0, y: 30 },
  open: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { state: { items: cart }, dispatch } = useCart();
  const { user } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleToggleSearch = () => setSearchOpen(true);
    window.addEventListener('toggle-search', handleToggleSearch);
    return () => window.removeEventListener('toggle-search', handleToggleSearch);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Men', href: '/collections/men' },
    { label: 'Women', href: '/collections/women' },
    { label: 'Bespoke', href: '/bespoke' },
    { label: 'Craftsmanship', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isDarkThemePage = pathname === '/' || pathname === '/bespoke';
  const navBg = isScrolled 
    ? 'rgba(255, 255, 255, 0.85)' 
    : (isDarkThemePage ? 'transparent' : 'rgba(255, 255, 255, 0.85)');
  
  const navColor = isScrolled 
    ? 'var(--color-black)' 
    : (isDarkThemePage ? 'var(--color-white)' : 'var(--color-black)');
    
  const navBorder = isScrolled
    ? '1px solid rgba(8, 8, 8, 0.08)'
    : (isDarkThemePage ? '1px solid transparent' : '1px solid rgba(8, 8, 8, 0.08)');

  const shadow = isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.04)' : 'none';

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: '-120%' }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: E }}
        style={{
          position: 'fixed',
          top: isScrolled ? '1rem' : '0',
          left: isScrolled ? '1rem' : '0',
          right: isScrolled ? '1rem' : '0',
          margin: '0 auto',
          maxWidth: isScrolled ? 'calc(var(--container-max) - 2rem)' : '100%',
          borderRadius: isScrolled ? '16px' : '0px',
          zIndex: 100,
          height: 'var(--nav-height)',
          background: mobileMenuOpen ? 'transparent' : navBg,
          backdropFilter: (isScrolled || !isDarkThemePage) && !mobileMenuOpen ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: (isScrolled || !isDarkThemePage) && !mobileMenuOpen ? 'blur(24px)' : 'none',
          border: mobileMenuOpen ? '1px solid transparent' : navBorder,
          boxShadow: shadow,
          transition: 'background 0.4s ease, border-radius 0.4s ease, top 0.4s ease, left 0.4s ease, right 0.4s ease, max-width 0.4s ease, color 0.4s ease',
          color: mobileMenuOpen ? 'var(--color-white)' : navColor,
        }}
      >
        <div style={{ height: '100%', width: '100%', margin: '0 auto', padding: '0 var(--space-4)' }}>
          
          {/* DESKTOP LAYOUT */}
          <div className="nav-desktop-layout" style={{ display: 'grid', gridTemplateColumns: '1fr max-content 1fr', alignItems: 'center', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Link href="/" style={{
                fontFamily: 'var(--font-serif)', fontSize: '1.5rem',
                color: 'currentColor', textDecoration: 'none', 
                letterSpacing: '0.2em', transition: 'color var(--transition-base)'
              }}>
                RAZEVÉL
              </Link>
            </div>

            <div style={{ display: 'grid', gridAutoFlow: 'column', gap: 'var(--space-4)', alignItems: 'center', height: '100%' }}>
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className={`nav-link ${pathname === link.href ? 'active' : ''}`}>
                  {link.label}
                  {pathname === link.href && (
                    <motion.div layoutId="underline" className="nav-underline" style={{ background: mobileMenuOpen ? 'var(--color-white)' : 'var(--color-black)' }} />
                  )}
                </Link>
              ))}
            </div>

            <div style={{ display: 'grid', gridAutoFlow: 'column', gap: 'var(--space-2)', alignItems: 'center', justifyContent: 'end', height: '100%' }}>
              <button onClick={() => setSearchOpen(true)} className="nav-icon-btn" aria-label="Search">
                <SearchIcon />
              </button>
              <Link href="/profile" className="nav-icon-btn" aria-label="Wishlist">
                <HeartIcon />
              </Link>
              <Link href={user ? "/profile" : "/login"} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'currentColor', textDecoration: 'none' }} aria-label="Profile">
                <div className="nav-icon-btn" style={{ minWidth: '44px' }}>
                  <UserIcon />
                  {user && (
                    <span style={{ position: 'absolute', bottom: '8px', right: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }} />
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
                        background: 'currentColor', color: 'var(--color-white)', 
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
                style={{ opacity: mobileMenuOpen ? 0 : 1, pointerEvents: mobileMenuOpen ? 'none' : 'auto' }}
              >
                <MenuIcon />
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', zIndex: 201 }}>
              <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{
                fontFamily: 'var(--font-serif)', fontSize: '1.25rem',
                color: 'currentColor', textDecoration: 'none', letterSpacing: '0.2em'
              }}>
                RAZEVÉL
              </Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', zIndex: 201 }}>
              <button 
                onClick={() => mobileMenuOpen ? setMobileMenuOpen(false) : setSearchOpen(true)} 
                className="nav-icon-btn" 
                aria-label={mobileMenuOpen ? "Close Menu" : "Search"}
              >
                {mobileMenuOpen ? (
                  <span style={{ fontSize: '1.5rem', fontWeight: 300, lineHeight: 1 }}>✕</span>
                ) : (
                  <SearchIcon />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* FULLSCREEN LUXURY MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--color-black)',
              zIndex: 99, // Behind the navbar mobile layout (which has z-index 100/201)
              display: 'flex',
              flexDirection: 'column',
              padding: 'calc(var(--nav-height) + 2rem) var(--gutter) 3rem',
              justifyContent: 'space-between'
            }}
          >
            <motion.div 
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}
            >
              {navLinks.map((link) => (
                <div key={link.label} style={{ overflow: 'hidden' }}>
                  <motion.div variants={linkVars}>
                    <Link 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                        color: 'var(--color-white)',
                        textDecoration: 'none',
                        display: 'block',
                        lineHeight: 1.1
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
            >
              <div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', margin: '0 0 1rem' }}>
                  Client Services
                </p>
                <Link href={user ? "/profile" : "/login"} onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-white)', textDecoration: 'none', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>My Account</Link>
                <Link href="/profile" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-white)', textDecoration: 'none', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>Wishlist</Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-white)', textDecoration: 'none', fontSize: '0.85rem', display: 'block' }}>Contact Atelier</Link>
              </div>
            </motion.div>
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
        }
        
        .nav-icon-btn {
          background: none; border: none; cursor: pointer; padding: 0;
          color: currentColor;
          display: flex; align-items: center; justify-content: center;
          transition: color var(--transition-base), opacity 0.3s;
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

        @media (max-width: 1024px) {
          .nav-desktop-layout { display: none !important; }
          .nav-mobile-layout { display: grid !important; }
        }
      `}</style>
    </>
  );
}
