'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

function Reveal({ children, delay = 0, style = {} }: {
  children: React.ReactNode; delay?: number; style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} style={style}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: E }}>
      {children}
    </motion.div>
  );
}

const MEN = [
  { id: 'wedding-suits', name: 'Wedding Suits', count: '12 styles', img: '/images/fabric.png' },
  { id: 'sherwani', name: 'Sherwani', count: '18 styles', img: '/images/hero.png' },
  { id: 'bandhgala', name: 'Bandhgala', count: '10 styles', img: '/images/fabric.png' },
  { id: 'indo-western', name: 'Indo Western', count: '14 styles', img: '/images/atelier.png' },
  { id: 'blazers', name: 'Blazers', count: '8 styles', img: '/images/bespoke.png' },
  { id: 'kurta-sets', name: 'Kurta Sets', count: '20 styles', img: '/images/fabric.png' },
];

const WOMEN = [
  { id: 'bridal-lehenga', name: 'Bridal Lehenga', count: '24 styles', img: '/images/hero.png' },
  { id: 'designer-sarees', name: 'Designer Sarees', count: '16 styles', img: '/images/journal.png' },
  { id: 'anarkali', name: 'Anarkali', count: '14 styles', img: '/images/craftsmanship.png' },
  { id: 'indo-western-w', name: 'Indo Western', count: '12 styles', img: '/images/atelier.png' },
  { id: 'wedding-gowns', name: 'Wedding Gowns', count: '8 styles', img: '/images/bespoke.png' },
  { id: 'kurti-collection', name: 'Kurti Collection', count: '22 styles', img: '/images/fabric.png' },
];

export default function CollectionsPreview() {
  const [tab, setTab] = useState<'men' | 'women'>('men');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const items = tab === 'men' ? MEN : WOMEN;

  return (
    <section id="collections"
      style={{ background: 'var(--ivory)', paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* Header */}
        <div ref={ref} style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: 'clamp(2.5rem, 5vw, 5rem)',
          flexWrap: 'wrap', gap: '1.5rem',
        }} className="collections-header">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.div className="eyebrow"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}>
              <span className="t-label-gold">Collections</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: E }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                fontWeight: 400, color: 'var(--black)',
                lineHeight: 1.05, letterSpacing: '-0.015em', margin: 0,
              }}>
              Singular Pieces,<br /><em>Singular Stories.</em>
            </motion.h2>
          </div>

          {/* Tab switcher */}
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              display: 'flex',
              border: '1px solid var(--border)',
              background: '#FFFFFF',
            }}>
            {(['men', 'women'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.6875rem',
                  fontWeight: tab === t ? 500 : 300,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  padding: '0.75rem 1.75rem',
                  background: tab === t ? 'var(--black)' : 'transparent',
                  color: tab === t ? '#FFFFFF' : 'var(--stone)',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.3s var(--ease)',
                }}>
                {t === 'men' ? "Men's" : "Women's"}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Category grid */}
        <AnimatePresence mode="wait">
          <motion.div key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: E }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'var(--border)',
            }} className="collections-grid">
            {items.map((item, i) => (
              <CollectionCard key={item.id} item={item} index={i} tab={tab} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all CTA */}
        <Reveal delay={0.3} style={{ marginTop: '3rem', textAlign: 'center' }}>
          <a href={`/collections/${tab}`} className="btn btn-outline"
            style={{ justifyContent: 'center' }}>
            View Full {tab === 'men' ? "Men's" : "Women's"} Collection
          </a>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .collections-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .collections-header { flex-direction: column; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .collections-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function CollectionCard({ item, index, tab }: {
  item: typeof MEN[0]; index: number; tab: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={`/collections/${tab}#${item.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: E }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block', textDecoration: 'none',
        background: '#FFFFFF', position: 'relative',
        overflow: 'hidden', aspectRatio: '4/5',
      }}>
      {/* Image */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <Image src={item.img} alt={item.name} fill
          style={{
            objectFit: 'cover',
            transition: 'transform 0.8s var(--ease-out)',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }} />
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,15,15,0.7) 0%, transparent 60%)',
          opacity: hovered ? 1 : 0.7,
          transition: 'opacity 0.4s var(--ease)',
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      }}>
        <p className="t-label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 6, fontSize: '0.55rem' }}>
          {item.count}
        </p>
        <h3 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
          fontWeight: 400, color: '#FFFFFF', margin: 0, lineHeight: 1.2,
        }}>{item.name}</h3>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          style={{ marginTop: 10 }}>
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.6rem',
            fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>Explore →</span>
        </motion.div>
      </div>
    </motion.a>
  );
}
