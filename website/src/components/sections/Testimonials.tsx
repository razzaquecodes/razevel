'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const REVIEWS = [
  { text: "They didn't just make a lehenga for my wedding. They crafted an heirloom that my daughter will wear one day.", author: 'Anya Sharma', location: 'Mumbai' },
  { text: "The bespoke sherwani was a masterclass in fit. Twenty-two measurements, three fittings, absolute perfection.", author: 'Rohan Desai', location: 'London' },
  { text: "I have worn luxury labels from Paris and Milan, but the hand-embroidery from RAZEVÉL exists on another level entirely.", author: 'Meera Kapoor', location: 'New York' },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{
      background: 'var(--soft-ivory)',
      paddingBlock: 'clamp(6rem, 12vw, 12rem)',
      paddingInline: 'var(--gutter)',
      borderTop: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: E }}
          style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 8vw, 8rem)' }}
        >
          <span className="t-label-gold">Client Commissions</span>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(2rem, 5vw, 5rem)'
        }} className="test-grid">
          {REVIEWS.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: E }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <p style={{
                fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'var(--deep-black)',
                lineHeight: 1.4, marginBottom: '2rem'
              }}>"{r.text}"</p>
              <span className="t-label" style={{ color: 'var(--taupe)' }}>{r.author}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'var(--stone)', marginTop: 4 }}>
                {r.location}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .test-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }`}</style>
    </section>
  );
}
