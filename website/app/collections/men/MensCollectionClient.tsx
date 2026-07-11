'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ProductCard from '@/src/components/ui/ProductCard';
import { MOCK_PRODUCTS } from '@/src/lib/mockData';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function MensCollectionClient() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('Recommended');

  const baseProducts = useMemo(() => MOCK_PRODUCTS.filter(p => p.gender === 'men'), []);
  
  const filteredProducts = useMemo(() => {
    let result = baseProducts;
    
    if (selectedOccasions.length > 0) {
      result = result.filter(p => selectedOccasions.includes(p.occasion));
    }
    if (selectedFabrics.length > 0) {
      result = result.filter(p => selectedFabrics.includes(p.fabric));
    }
    if (availability === 'Bespoke') {
      result = result.filter(p => p.isBespoke);
    } else if (availability === 'Ready') {
      result = result.filter(p => !p.isBespoke);
    }
    
    switch (sortBy) {
      case 'Price Low to High': return [...result].sort((a, b) => a.price - b.price);
      case 'Price High to Low': return [...result].sort((a, b) => b.price - a.price);
      case 'Highest Rated': return [...result].sort((a, b) => b.rating - a.rating);
      case 'Newest': return [...result].sort((a, b) => (b.badge === 'New Arrival' ? 1 : -1));
      default: return result;
    }
  }, [baseProducts, selectedOccasions, selectedFabrics, availability, sortBy]);

  const toggleFilter = useCallback((list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, val: string) => {
    setList(list.includes(val) ? list.filter(v => v !== val) : [...list, val]);
  }, []);

  const handleOccasionChange = useCallback((val: string) => {
    toggleFilter(selectedOccasions, setSelectedOccasions, val);
  }, [selectedOccasions, toggleFilter]);

  const handleFabricChange = useCallback((val: string) => {
    toggleFilter(selectedFabrics, setSelectedFabrics, val);
  }, [selectedFabrics, toggleFilter]);

  return (
    <main style={{ background: 'var(--luxury-white)', minHeight: '100vh', position: 'relative' }}>
      
      {/* Editorial Hero Banner */}
      <section style={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/images/hero.png" alt="Mens Collection" fill style={{ objectFit: 'cover' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.4)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'var(--color-white)' }}>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: E }} className="t-label-gold" style={{ display: 'block', marginBottom: '1rem' }}>
            RAZEVÉL Homme
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: E }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 6rem)', margin: 0, fontWeight: 400 }}>
            Men's Collection
          </motion.h1>
        </div>
      </section>

      {/* Collection Story */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) var(--gutter)', textAlign: 'center', maxWidth: 'var(--max-w-narrow)', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-black)', margin: '0 0 1.5rem' }}>
          The Anatomy of a <em style={{ color: 'var(--color-gold)' }}>Gentleman.</em>
        </h2>
        <p className="t-body-lg">
          From the boardroom to the mandap. Our menswear collection bridges the gap between traditional Indian heritage and precise Italian tailoring. Every garment is constructed to tell a story of uncompromising masculine elegance.
        </p>
      </section>

      {/* Main Layout */}
      <section className="container-max" style={{ padding: '0 var(--gutter)' }}>
        
        {/* Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', borderBottom: '1px solid var(--color-border)', position: 'sticky', top: '80px', background: 'rgba(253, 251, 247, 0.95)', backdropFilter: 'blur(10px)', zIndex: 90 }}>
          <button 
            onClick={() => setFilterOpen(true)} 
            style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 500 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            Filters {selectedOccasions.length + selectedFabrics.length > 0 && `(${selectedOccasions.length + selectedFabrics.length})`}
          </button>
          
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setSortOpen(!sortOpen)}
              style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-black)', cursor: 'pointer', fontWeight: 500 }}
            >
              Sort By: {sortBy}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: sortOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <AnimatePresence>
              {sortOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  style={{ position: 'absolute', right: 0, top: '2.5rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', minWidth: '180px', zIndex: 110, display: 'flex', flexDirection: 'column' }}
                >
                  {['Recommended', 'Newest', 'Highest Rated', 'Price Low to High', 'Price High to Low'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSortBy(opt); setSortOpen(false); }}
                      style={{ background: 'none', border: 'none', padding: '0.85rem 1.25rem', textAlign: 'left', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: sortBy === opt ? 'var(--color-gold)' : 'var(--color-grey)', cursor: 'pointer', borderBottom: '1px solid rgba(8,8,8,0.05)' }}
                    >
                      {opt}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div style={{ padding: '2rem 0 6rem' }}>
          
          {/* Slide-out Overlay Filters */}
          <AnimatePresence>
            {filterOpen && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setFilterOpen(false)}
                  style={{ position: 'fixed', inset: 0, background: 'black', zIndex: 140 }}
                />
                <motion.aside
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ duration: 0.4, ease: E }}
                  style={{ position: 'fixed', top: 0, left: 0, bottom: 0, width: '380px', maxWidth: '100vw', background: 'var(--color-white)', zIndex: 150, padding: '3rem var(--gutter)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '10px 0 40px rgba(0,0,0,0.1)' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', overflowY: 'auto', flex: 1, paddingRight: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
                      <span className="t-label" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-black)' }}>Filter Collection</span>
                      <button onClick={() => setFilterOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem', color: 'var(--color-black)' }}>✕</button>
                    </div>

                    <div>
                      <h4 className="t-label" style={{ marginBottom: '1.25rem', display: 'block' }}>Availability</h4>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {[
                          { key: 'All', label: 'All Items' },
                          { key: 'Bespoke', label: 'Couture' },
                          { key: 'Ready', label: 'Ready' }
                        ].map((btn) => (
                          <button
                            key={btn.key}
                            onClick={() => setAvailability(btn.key)}
                            style={{
                              flex: 1,
                              padding: '0.65rem 0.5rem',
                              border: '1px solid var(--color-border)',
                              background: availability === btn.key ? 'var(--color-black)' : 'transparent',
                              color: availability === btn.key ? 'var(--color-white)' : 'var(--color-black)',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.75rem',
                              cursor: 'pointer',
                              fontWeight: 500,
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <FilterGroup 
                      title="Occasion" 
                      options={['Wedding', 'Reception', 'Business', 'Black Tie', 'Festive', 'Casual']} 
                      selected={selectedOccasions}
                      onChange={handleOccasionChange}
                    />
                    <FilterGroup 
                      title="Fabric" 
                      options={['Banarasi Silk', 'Italian Wool', 'Velvet', 'Linen', 'Egyptian Cotton']} 
                      selected={selectedFabrics}
                      onChange={handleFabricChange}
                    />
                  </div>

                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                    <button 
                      className="btn btn-outline" 
                      style={{ flex: 1, justifyContent: 'center' }}
                      onClick={() => {
                        setSelectedOccasions([]);
                        setSelectedFabrics([]);
                        setAvailability('All');
                      }}
                    >
                      Reset
                    </button>
                    <button 
                      className="btn btn-primary" 
                      style={{ flex: 1, justifyContent: 'center' }}
                      onClick={() => setFilterOpen(false)}
                    >
                      Apply
                    </button>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div style={{ flex: 1 }}>
            {filteredProducts.length > 0 ? (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
                gap: 'clamp(2rem, 3vw, 3rem)' 
              }} className="plp-grid">
                
                {filteredProducts.map((prod, i) => (
                  <div key={prod.id}>
                    <ProductCard product={prod} index={i} />
                  </div>
                ))}

              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 0', textAlign: 'center' }}>
                <Image src="/illustrations/pattern.png" alt="Empty state" width={150} height={150} style={{ opacity: 0.5, marginBottom: '2rem' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem' }}>No Products Found</h3>
                <p className="t-body" style={{ maxWidth: '400px', marginBottom: '2rem' }}>We couldn't find any products matching your current filters. Try removing some to see more results.</p>
                <button className="btn btn-outline" onClick={() => {
                  setSelectedOccasions([]);
                  setSelectedFabrics([]);
                  setAvailability('All');
                }}>Clear All Filters</button>
              </div>
            )}
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { 
          .plp-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; } 
        }
      `}</style>
    </main>
  );
}

const FilterGroup = React.memo(function FilterGroup({ title, options, selected, onChange }: { title: string, options: string[], selected: string[], onChange: (val: string) => void }) {
  return (
    <div>
      <h4 className="t-label" style={{ marginBottom: '1.25rem', display: 'block' }}>{title}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {options.map(opt => {
          const checked = selected.includes(opt);
          return (
            <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', userSelect: 'none' }} onClick={() => onChange(opt)}>
              <span style={{
                width: 16,
                height: 16,
                border: '1px solid var(--color-border)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: checked ? 'var(--color-black)' : 'transparent',
                transition: 'all 0.25s var(--ease)',
              }}>
                {checked && <div style={{ width: 6, height: 6, background: 'var(--color-gold)' }} />}
              </span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: checked ? 'var(--color-black)' : 'var(--color-grey)', fontWeight: checked ? 500 : 300 }}>{opt}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
});

