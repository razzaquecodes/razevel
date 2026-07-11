'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

function Reveal({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
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

const ENTRIES = [
  {
    category: 'Bridal',
    title: 'The Art of the Bridal Lehenga',
    excerpt: 'Why the bridal lehenga is not just a garment — it is the most important piece of textile in an Indian woman\'s life. An exploration of how RAZEVÉL approaches the sacred responsibility of dressing a bride.',
    date: 'June 2026',
    readTime: '5 min',
    img: '/images/craftsmanship.png',
    featured: true,
  },
  {
    category: 'Craft',
    title: 'Zardozi: 400 Years of Gold Thread',
    excerpt: 'The ancient Mughal embroidery that RAZEVÉL practises in its purest form.',
    date: 'May 2026',
    readTime: '8 min',
    img: '/images/fabric.png',
    featured: false,
  },
  {
    category: 'Bespoke',
    title: 'What Bespoke Really Means',
    excerpt: 'In a world of ready-to-wear, bespoke is radical patience.',
    date: 'April 2026',
    readTime: '4 min',
    img: '/images/bespoke.png',
    featured: false,
  },
  {
    category: 'Heritage',
    title: 'The Weavers of Banaras',
    excerpt: 'A visit to the multigenerational silk weavers who supply our finest fabrics.',
    date: 'March 2026',
    readTime: '6 min',
    img: '/images/atelier.png',
    featured: false,
  },
  {
    category: 'Culture',
    title: 'Dressing for the Wedding Season',
    excerpt: 'How to curate a complete wardrobe for an Indian wedding, from mehendi to reception.',
    date: 'February 2026',
    readTime: '7 min',
    img: '/images/hero.png',
    featured: false,
  },
  {
    category: 'Craft',
    title: 'The Aari Needle: An Artisan\'s Meditation',
    excerpt: 'Inside the studio of our chief embroiderer, who has spent four decades perfecting a single technique.',
    date: 'January 2026',
    readTime: '5 min',
    img: '/images/craftsmanship.png',
    featured: false,
  },
];

const CATEGORIES = ['All', 'Bridal', 'Craft', 'Bespoke', 'Heritage', 'Culture'];

function JournalCard({ entry, featured = false, index }: { entry: typeof ENTRIES[0]; featured?: boolean; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: E }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', background: 'var(--color-black)', aspectRatio: featured ? '16/9' : '4/5' }}
    >
      <Image
        src={entry.img}
        alt={entry.title}
        fill
        style={{ objectFit: 'cover', transition: 'transform 0.8s var(--ease)', transform: hovered ? 'scale(1.04)' : 'scale(1)', opacity: 0.75 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, padding: featured ? 'clamp(2rem, 4vw, 3.5rem)' : '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '0.6rem' }}>
        <span className="t-label-gold" style={{ fontSize: '0.55rem' }}>{entry.category}</span>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: featured ? 'clamp(1.5rem, 2.5vw, 2.2rem)' : 'clamp(1rem, 1.8vw, 1.3rem)', fontWeight: 400, color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>{entry.title}</h3>
        {featured && <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 300, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.7, maxWidth: '42rem' }}>{entry.excerpt}</p>}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginTop: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>{entry.date}</span>
          <span style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>{entry.readTime} read</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function JournalClient() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? ENTRIES : ENTRIES.filter(e => e.category === activeCategory);

  return (
    <main style={{ background: 'var(--soft-ivory)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 'var(--section-y)', paddingInline: 'var(--gutter)', background: '#FFFFFF', borderBottom: '1px solid rgba(8,8,8,0.06)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>The Journal</span>
          </Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <Reveal delay={0.1}>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0, color: 'var(--color-black)' }}>
                Stories of Craft<br /><em style={{ color: 'var(--color-gold)' }}>& Culture.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="t-body-lg" style={{ maxWidth: '32rem' }}>
                Editorial essays from the RAZEVÉL atelier — on embroidery, fabric, bridal traditions, and the art of making things that last.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ paddingBlock: 'clamp(2rem, 4vw, 3rem)', paddingInline: 'var(--gutter)', background: '#FFFFFF', borderBottom: '1px solid rgba(8,8,8,0.06)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'flex', gap: '0', overflowX: 'auto' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: activeCategory === cat ? 500 : 300,
                letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.75rem 1.5rem',
                background: activeCategory === cat ? 'var(--color-black)' : 'transparent',
                color: activeCategory === cat ? 'var(--color-white)' : 'var(--color-grey)',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s var(--ease)', whiteSpace: 'nowrap', flexShrink: 0,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filtered.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', background: 'var(--color-border)', marginBottom: '1px' }}>
                  <JournalCard entry={filtered[0]} featured index={0} />
                </div>
              )}
              {filtered.length > 1 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'var(--color-border)', marginTop: '1px' }}>
                  {filtered.slice(1).map((entry, i) => (
                    <JournalCard key={entry.title} entry={entry} index={i + 1} />
                  ))}
                </div>
              )}
              {filtered.length === 0 && (
                <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
                  <p className="t-body-lg">No articles in this category yet.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-black)', paddingBlock: 'clamp(5rem, 10vw, 10rem)', paddingInline: 'var(--gutter)', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 400, color: 'var(--color-white)', margin: '0 0 1.5rem', lineHeight: 1.05 }}>
            Begin Your Own<br /><em style={{ color: 'var(--color-gold)' }}>Chapter.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', margin: '0 auto 3rem', maxWidth: '36rem', lineHeight: 1.75, fontWeight: 300 }}>
            Every commission becomes a story we tell in our atelier for years to come. Let us make yours.
          </p>
          <Link href="/bespoke" className="btn btn-gold">Begin Bespoke Journey</Link>
        </Reveal>
      </section>

    </main>
  );
}
