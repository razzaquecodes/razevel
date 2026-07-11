'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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

const GUARANTEES = [
  {
    title: 'Lifetime Alteration Support',
    desc: 'A bespoke garment should evolve with you. We offer complimentary structural alterations on all RAZEVÉL commissions for the first 12 months, and lifelong alteration services thereafter.',
  },
  {
    title: 'Authentic Materials Only',
    desc: 'We never use synthetic substitutes. Our silks are pure Banarasi, our organzas are hand-loomed, and our embroidery relies entirely on genuine Zari and Zardozi metal threads.',
  },
  {
    title: 'The Uncompromising Fit',
    desc: 'We will remake a bespoke garment entirely if the structural fit cannot be corrected to our exacting standards. We do not deliver until the drape is perfect.',
  },
  {
    title: 'Ethical Craftsmanship',
    desc: 'Every artisan in our atelier is a respected master of their trade, compensated fairly and working in an environment that honors their skill. We do not outsource our embroidery.',
  },
];

export default function PromiseClient() {
  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 'var(--section-y)', paddingInline: 'var(--gutter)', background: 'var(--color-black)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Reveal>
            <span className="t-label" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '1.5rem' }}>Our Philosophy</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 6.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 2rem', color: 'var(--color-white)' }}>
              The Craftsmanship<br /><em style={{ color: 'var(--color-gold)' }}>Guarantee.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: 'rgba(255,255,255,0.7)', margin: '0 auto', maxWidth: '42rem', lineHeight: 1.6, fontWeight: 300 }}>
              At RAZEVÉL, we do not compromise. Not on the materials we source, not on the hours we dedicate, and never on the promise we make to you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(2rem, 5vw, 5rem)' }} className="promise-grid">
            {GUARANTEES.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.1}>
                <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', background: 'var(--soft-ivory)', height: '100%', border: '1px solid rgba(8,8,8,0.04)' }}>
                  <div style={{ width: 40, height: 2, background: 'var(--color-gold)', marginBottom: '2rem' }} />
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 400, color: 'var(--color-black)', margin: '0 0 1rem', lineHeight: 1.2 }}>{g.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--color-grey)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                    {g.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature */}
      <section style={{ paddingBlock: 'clamp(4rem, 8vw, 8rem)', paddingInline: 'var(--gutter)', borderTop: '1px solid rgba(8,8,8,0.06)' }}>
        <div style={{ maxWidth: '42rem', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--color-black)', lineHeight: 1.4, margin: '0 0 3rem' }}>
              "A luxury garment is a trust placed in our hands. We treat every commission as if it were for our own family."
            </p>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-gold)', fontStyle: 'italic', marginBottom: '0.5rem' }}>Mohammad Raza</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--color-grey)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Founder & Master Tailor</div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .promise-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
