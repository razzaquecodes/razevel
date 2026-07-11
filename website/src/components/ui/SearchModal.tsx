'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/src/lib/mockData';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      if (query !== '') setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, query]);

  const searchResults = query.trim().length > 1 
    ? MOCK_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.fabric.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1100, display: 'flex', flexDirection: 'column' }}>
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
            onClick={onClose}
            style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.85)', backdropFilter: 'blur(24px)' }}
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: 0.6, ease: E }}
            style={{ position: 'relative', width: '100%', background: 'var(--color-white)', color: 'var(--color-black)' }}
            className="search-panel"
          >
            <div className="container-max" style={{ padding: '2rem var(--gutter) 4rem' }}>
              
              {/* Header / Input */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid var(--color-black)', paddingBottom: '1rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search bespoke commissions, fabrics, or collections..."
                    style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontFamily: 'var(--font-serif)', outline: 'none', color: 'var(--color-black)' }}
                  />
                  {query && (
                    <button onClick={() => setQuery('')} style={{ background: 'none', border: 'none', color: 'var(--color-grey-light)', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Clear
                    </button>
                  )}
                </div>
                <button onClick={onClose} aria-label="Close search" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-black)', padding: '0 0 0 2rem' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              {/* Results or Suggestions */}
              <div style={{ minHeight: '40vh' }}>
                {query.length > 1 ? (
                  searchResults.length > 0 ? (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                        <span className="t-label">Search Results for &quot;{query}&quot;</span>
                        <Link href="/collections/men" onClick={onClose} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', textDecoration: 'underline', color: 'var(--color-black)', textUnderlineOffset: '4px' }}>
                          View All Results ({searchResults.length * 3})
                        </Link>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
                        {searchResults.map(p => (
                          <Link href={`/product/${p.id}`} key={p.id} onClick={onClose} style={{ textDecoration: 'none', color: 'inherit' }} className="search-result-card">
                            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', background: 'var(--soft-ivory)', marginBottom: '1rem', overflow: 'hidden' }}>
                              <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} className="search-result-img" />
                            </div>
                            <span className="t-label" style={{ fontSize: '0.6rem' }}>{p.category}</span>
                            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', margin: '0.25rem 0', fontWeight: 400 }}>{p.name}</h4>
                            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-grey-light)' }}>₹{p.price.toLocaleString('en-IN')}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', paddingTop: '4rem' }}>
                      <Image src="/illustrations/pattern.png" alt="No results" width={200} height={200} style={{ objectFit: 'contain', opacity: 0.8 }} />
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', margin: '2rem 0 1rem' }}>No results found</h3>
                      <p className="t-body-lg" style={{ textAlign: 'center', maxWidth: '400px' }}>We couldn&apos;t find anything matching &quot;{query}&quot;. Try adjusting your search or explore our curated collections.</p>
                    </div>
                  )
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
                    
                    {/* Trending Searches */}
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-grey-light)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Trending Searches</h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {['Bridal Lehenga', 'Italian Wool Suit', 'Banarasi Silk', 'Tuxedo', 'Zardozi Embroidery'].map(term => (
                          <li key={term}>
                            <button onClick={() => setQuery(term)} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-black)', cursor: 'pointer', textAlign: 'left', padding: 0 }} className="search-suggestion-btn">
                              {term} <span style={{ opacity: 0, transition: 'opacity 0.3s', fontSize: '1rem' }}>→</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Curated Collections */}
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-grey-light)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Curated Collections</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                        <Link href="/collections/men" onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }} className="collection-link-card">
                          <div style={{ position: 'relative', width: 60, height: 60, background: 'var(--stone)' }}>
                            <Image src="/images/hero.png" alt="Men" fill style={{ objectFit: 'cover' }} />
                          </div>
                          <div>
                            <span className="t-label">RAZEVÉL Homme</span>
                            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', margin: 0 }}>The Wedding Edit</p>
                          </div>
                        </Link>
                        <Link href="/collections/women" onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }} className="collection-link-card">
                          <div style={{ position: 'relative', width: 60, height: 60, background: 'var(--stone)' }}>
                            <Image src="/images/journal.png" alt="Women" fill style={{ objectFit: 'cover' }} />
                          </div>
                          <div>
                            <span className="t-label">RAZEVÉL Femme</span>
                            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', margin: 0 }}>Bridal Couture</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            </div>
          </motion.div>
          
          <style>{`
            .search-suggestion-btn:hover { color: var(--color-gold) !important; }
            .search-suggestion-btn:hover span { opacity: 1 !important; margin-left: 0.5rem; }
            
            .collection-link-card:hover p { color: var(--color-gold); }
            
            .search-result-img { transition: transform 1.2s var(--ease-slow); }
            .search-result-card:hover .search-result-img { transform: scale(1.05); }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
}
