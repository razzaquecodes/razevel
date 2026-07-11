'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ENTRIES = [
  {
    category: 'Bridal',
    title: 'The Art of the Bridal Lehenga',
    excerpt: 'Why the bridal lehenga is not just a garment — it is the most important piece of textile in an Indian woman\'s life.',
    date: 'June 2026', readTime: '5 min',
    img: '/images/journal.png',
  },
  {
    category: 'Craft',
    title: 'Zardozi: 400 Years of Gold Thread',
    excerpt: 'The ancient Mughal embroidery that RAZEVÉL practises in its purest form.',
    date: 'May 2026', readTime: '8 min',
    img: '/images/craftsmanship.png',
  },
  {
    category: 'Bespoke',
    title: 'What Bespoke Really Means',
    excerpt: 'In a world of ready-to-wear, bespoke is radical patience.',
    date: 'April 2026', readTime: '4 min',
    img: '/images/bespoke.png',
  },
];

export default function Journal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="journal"
      style={{ background: 'var(--ivory)', paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* Header */}
        <div ref={ref} style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: 'clamp(3rem, 5vw, 5rem)',
          flexWrap: 'wrap', gap: '2rem',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.div className="eyebrow"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}>
              <span className="t-label-gold">The Journal</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: E }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 400, color: 'var(--black)',
                lineHeight: 1.05, letterSpacing: '-0.015em', margin: 0,
              }}>
              Stories of<br /><em>Craft & Culture.</em>
            </motion.h2>
          </div>
          <motion.a href="/journal" className="btn btn-ghost"
            style={{ color: 'var(--black)', borderColor: 'rgba(15,15,15,0.2)' }}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>
            All Stories →
          </motion.a>
        </div>

        {/* Grid: 1 large + 2 side */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.5fr 1fr',
          gap: 2,
        }} className="journal-grid">
          <JournalCard entry={ENTRIES[0]} index={0} featured />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <JournalCard entry={ENTRIES[1]} index={1} />
            <JournalCard entry={ENTRIES[2]} index={2} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .journal-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function JournalCard({ entry, index, featured = false }: {
  entry: typeof ENTRIES[0]; index: number; featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.article ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: E }}
      style={{
        position: 'relative', overflow: 'hidden',
        aspectRatio: featured ? '16/10' : '16/9',
        background: 'var(--cream)', cursor: 'pointer',
      }}
      className="journal-card">
      <Image src={entry.img} alt={entry.title} fill
        style={{ objectFit: 'cover', transition: 'transform 0.8s var(--ease-out)' }}
        className="journal-img" />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(15,15,15,0.88) 0%, rgba(15,15,15,0.2) 60%, transparent 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        padding: featured ? 'clamp(1.5rem, 3vw, 2.5rem)' : '1.25rem',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '0.6rem',
      }}>
        <span className="t-label-gold" style={{ fontSize: '0.55rem' }}>{entry.category}</span>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: featured ? 'clamp(1.2rem, 2.2vw, 1.8rem)' : 'clamp(0.95rem, 1.6vw, 1.2rem)',
          fontWeight: 400, color: '#FFFFFF', margin: 0, lineHeight: 1.25,
        }}>{entry.title}</h3>
        {featured && (
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.825rem',
            fontWeight: 300, color: 'rgba(255,255,255,0.55)', margin: 0,
            lineHeight: 1.7, maxWidth: '34rem',
          }}>{entry.excerpt}</p>
        )}
        <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>{entry.date}</span>
          <span style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>{entry.readTime} read</span>
        </div>
      </div>
      <style>{`.journal-card:hover .journal-img { transform: scale(1.04) !important; }`}</style>
    </motion.article>
  );
}
