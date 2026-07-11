'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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

const MILESTONES = [
  { year: '1994', title: 'The Beginning', body: 'Mohammad Raza opens a small tailoring workshop in the lanes of Patna, Bihar. His reputation for precision and care spreads quietly, entirely by word of mouth.' },
  { year: '2007', title: 'The Bridal Chapter', body: 'The first major bridal commission — a complete trousseau for a senator\'s daughter — establishes RAZEVÉL as the preferred house for Bihar\'s most discerning families.' },
  { year: '2015', title: 'The Atelier Expands', body: 'A dedicated design studio and master embroidery team of twelve artisans is established. The atelier begins accepting commissions from Mumbai, Delhi, and London.' },
  { year: '2019', title: 'Entering the International Stage', body: 'RAZEVÉL\'s first international commission ships to Toronto, Canada. The house is now serving clients across the UK, UAE, and North America.' },
  { year: '2024', title: 'The Digital Flagship', body: 'RAZEVÉL launches its official digital flagship — the first step in making our atelier experience accessible to discerning clients everywhere, while preserving the handcrafted soul of every commission.' },
  { year: '2026', title: 'The Next Chapter', body: 'With over 2,000 bespoke commissions completed and a growing international clientele, RAZEVÉL continues its singular mission: crafted for forever.' },
];

const VALUES = [
  { title: 'Heritage', body: 'Thirty years of craft passed from master to apprentice. Every technique is earned, not assumed.' },
  { title: 'Precision', body: 'Three hundred measurements. Two fittings. One standard: perfection or nothing.' },
  { title: 'Materials', body: 'Banarasi silks, Kanjeevaram brocades, Mukaish georgettes — sourced directly, never compromised.' },
  { title: 'Exclusivity', body: 'Nothing is made in advance. Every garment begins the moment you say yes.' },
];

export default function CompanyClient() {
  return (
    <main style={{ background: 'var(--soft-ivory)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 'var(--section-y)', paddingInline: 'var(--gutter)', background: 'var(--color-black)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 30%, rgba(201, 168, 76, 0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <Reveal>
            <span className="t-label" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '1.5rem' }}>Our Heritage</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 6.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 2.5rem', color: 'var(--color-white)' }}>
              A Legacy Born<br /><em style={{ color: 'var(--color-gold)' }}>in Every Stitch.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="t-body-lg" style={{ maxWidth: '44rem', color: 'rgba(255,255,255,0.7)' }}>
              RAZEVÉL began in a single workshop in Patna, where my father's hands shaped the most important garments of hundreds of families. Thirty years later, we carry that same devotion — now combined with a modern luxury sensibility that India has never seen before.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>What We Stand For</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, margin: 0, lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--color-black)' }}>
              Four Principles.<br /><em>One Commitment.</em>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--color-border)' }} className="values-grid">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div style={{ padding: 'clamp(2rem, 4vw, 3rem)', background: 'var(--soft-ivory)', height: '100%' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--color-gold)', display: 'block', marginBottom: '1.25rem' }}>0{i + 1}</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 400, color: 'var(--color-black)', margin: '0 0 1rem', lineHeight: 1.2 }}>{v.title}</h3>
                  <p className="t-body" style={{ margin: 0 }}>{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)', background: 'var(--soft-ivory)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>The Journey</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, margin: 0, lineHeight: 1.05, color: 'var(--color-black)' }}>Thirty Years<br /><em>of Craft.</em></h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div style={{ display: 'grid', gridTemplateColumns: '8rem 1fr', gap: 'clamp(2rem, 5vw, 5rem)', padding: 'clamp(2rem, 4vw, 3rem) 0', borderBottom: '1px solid rgba(8,8,8,0.08)', alignItems: 'start' }} className="milestone-row">
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-gold)', fontWeight: 400, lineHeight: 1 }}>{m.year}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', fontWeight: 400, color: 'var(--color-black)', margin: '0 0 0.75rem', lineHeight: 1.2 }}>{m.title}</h3>
                    <p className="t-body" style={{ margin: 0 }}>{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBlock: 'clamp(5rem, 10vw, 10rem)', paddingInline: 'var(--gutter)', background: 'var(--color-black)', textAlign: 'center' }}>
        <Reveal>
          <span className="t-label" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '1.5rem' }}>Begin Your Commission</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, color: 'var(--color-white)', margin: '0 0 1.5rem', lineHeight: 1.05 }}>
            Become Part of<br /><em>the Story.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', margin: '0 auto 3rem', maxWidth: '36rem', lineHeight: 1.75, fontWeight: 300 }}>
            Every RAZEVÉL commission adds a new chapter to this legacy. Let us begin yours.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/bespoke" className="btn btn-gold">Begin Bespoke Journey</Link>
            <Link href="/about" className="btn btn-outline" style={{ color: 'var(--color-white)', borderColor: 'rgba(255,255,255,0.3)' }}>Our Craftsmanship</Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .values-grid { grid-template-columns: 1fr !important; } .milestone-row { grid-template-columns: 5rem 1fr !important; } }
      `}</style>
    </main>
  );
}
