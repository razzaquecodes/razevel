'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import ProductCard from '../ui/ProductCard';
import { MOCK_PRODUCTS } from '@/src/lib/mockData';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function MenCollectionsHome() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{
      background: 'var(--luxury-white)',
      paddingBlock: 'var(--section-y)',
      paddingInline: 'var(--gutter)',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        {/* Header */}
        <div ref={ref} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: 'clamp(3rem, 5vw, 4rem)', flexWrap: 'wrap', gap: '2rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.span 
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1 }}
              className="t-label-gold">Homme
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.1, ease: E }}
              style={{
                fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400, color: 'var(--deep-black)', margin: 0, lineHeight: 1.05
              }}>
              Men's <em style={{ color: 'var(--warm-gold)' }}>Collection.</em>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Link href="/collections/men" className="btn btn-ghost">
              Explore All Men's →
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem'
        }} className="products-grid">
            {MOCK_PRODUCTS.filter(p => p.gender === 'men').slice(0, 4).map((prod, i) => (
              <div key={prod.id} style={{ minWidth: 280, flexShrink: 0 }}>
                <ProductCard product={prod} index={i} />
              </div>
            ))}</div>
      </div>
      <style>{`
        @media(max-width: 1024px) { .products-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media(max-width: 600px) { .products-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
