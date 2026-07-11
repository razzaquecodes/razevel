'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function LuxuryPackaging() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{
      background: 'var(--soft-ivory)',
      paddingBlock: 'var(--section-y)',
      paddingInline: 'var(--gutter)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 'var(--max-w)', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(4rem, 8vw, 8rem)', alignItems: 'center',
      }} className="packaging-grid">
        
        {/* Images / Illustrations */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <motion.div ref={ref}
            initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: E }}
            style={{ position: 'relative', aspectRatio: '3/4', background: 'var(--luxury-white)' }}>
             <Image src="/images/bespoke.png" alt="Luxury Packaging" fill style={{ objectFit: 'cover' }} />
             <div style={{ position: 'absolute', inset: 12, border: '1px solid var(--gold-border)' }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.15, ease: E }}
            style={{ position: 'relative', aspectRatio: '3/4', background: 'var(--deep-black)', marginTop: '4rem' }}>
             <Image src="/illustrations/pattern.png" alt="Garment Tags" fill style={{ objectFit: 'cover', opacity: 0.8 }} />
          </motion.div>
        </div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.3, ease: E }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div>
            <span className="t-label-gold">The Unboxing Experience</span>
            <h2 style={{
              fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              fontWeight: 400, color: 'var(--deep-black)', margin: '1rem 0 0', lineHeight: 1.1,
            }}>
              Presentation is <br /><em style={{ color: 'var(--warm-gold)' }}>Perfection.</em>
            </h2>
          </div>
          <p className="t-body-lg">
            Every RAZEVÉL commission is delivered in our signature presentation box. 
            Accompanied by a certificate of authenticity, fabric care instructions, and 
            finished with a custom wax seal — the unboxing is designed to be as memorable 
            as wearing the garment itself.
          </p>
          <ul style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem',
            listStyle: 'none', padding: 0, margin: 0,
            fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--stone)'
          }}>
            <li>✓ Heritage Leather Patch</li>
            <li>✓ Custom Wax Seal</li>
            <li>✓ Woven Neck Label</li>
            <li>✓ Premium Garment Cover</li>
            <li>✓ Authentication Card</li>
            <li>✓ Signature Shopping Bag</li>
          </ul>
        </motion.div>
      </div>
      <style>{`@media(max-width: 900px){ .packaging-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
