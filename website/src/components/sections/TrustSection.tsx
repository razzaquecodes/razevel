'use client';

import { motion } from 'framer-motion';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const TRUST_POINTS = [
  { title: 'Secure Payments', desc: 'Encrypted checkout and premium buyer protection.' },
  { title: 'Premium Packaging', desc: 'Delivered in our signature obsidian box with wax seal.' },
  { title: 'Worldwide Shipping', desc: 'White-glove delivery via DHL Express to 150+ countries.' },
  { title: 'Easy Alteration', desc: 'Complimentary lifetime alterations for bespoke pieces.' },
  { title: 'Made To Measure', desc: 'Pattern drafted to your precise 22 body measurements.' },
  { title: 'Luxury Craftsmanship', desc: 'Over 200 hours of hand-embroidery by master artisans.' },
  { title: 'Authenticity Guarantee', desc: 'Every piece is verified and signed by our atelier.' },
];

export default function TrustSection() {
  return (
    <section style={{ paddingBlock: '4rem', paddingInline: 'var(--gutter)', background: 'var(--deep-black)', color: 'var(--luxury-white)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', margin: 0 }}>
            The RAZEVÉL Standard
          </h2>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '2rem' }} className="hide-scrollbar">
          {TRUST_POINTS.map((pt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: E }}
              style={{ minWidth: 240, borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '1.5rem' }}
            >
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--warm-gold)', margin: '0 0 0.5rem' }}>{pt.title}</h4>
              <p className="t-body" style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '0.85rem' }}>{pt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
