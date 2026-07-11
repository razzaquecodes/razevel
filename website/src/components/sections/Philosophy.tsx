'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{
      background: 'var(--luxury-white)',
      paddingBlock: 'clamp(6rem, 12vw, 12rem)',
      paddingInline: 'var(--gutter)',
    }}>
      <div style={{ maxWidth: 'var(--max-w-narrow)', margin: '0 auto', textAlign: 'center' }}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: E }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}
        >
          <span className="t-label-gold">Our Philosophy</span>
          
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 400, color: 'var(--deep-black)', lineHeight: 1.1, margin: 0,
          }}>
            True luxury cannot be rushed. It is the result of <em style={{ color: 'var(--warm-gold)' }}>uncompromising patience</em> and generational craft.
          </h2>
          
          <p className="t-body-lg" style={{ marginTop: '1rem', maxWidth: '36rem' }}>
            We do not believe in fast fashion or seasonal trends. A RAZEVÉL piece is designed 
            to outlive its creator and be passed down as an heirloom. We measure our success not 
            in volume, but in the enduring beauty of every single stitch.
          </p>

          <div style={{ width: '1px', height: '60px', background: 'var(--warm-gold)', marginTop: '2rem' }} />
        </motion.div>
      </div>
    </section>
  );
}
