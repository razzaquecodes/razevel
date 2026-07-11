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

const CARE_SECTIONS = [
  {
    title: 'Dry Cleaning Only',
    desc: 'RAZEVÉL garments must never be machine washed or hand washed in water. The raw silks, brocades, and metallic threads will irreparably warp. Trust your pieces only to a premium dry cleaner experienced in handling heavy Indian ethnic wear.',
  },
  {
    title: 'Storage & Preservation',
    desc: 'Never hang heavily embroidered garments by their shoulders, as the weight of the Zardozi will stretch the fabric over time. Fold them gently in the muslin cloth provided, or store them flat in your obsidian box. Keep them in a cool, dry place away from direct sunlight.',
  },
  {
    title: 'Handling Embellishments',
    desc: 'Metallic threads (Zari and Zardozi) can tarnish if exposed to perfumes, deodorants, or prolonged humidity. Apply fragrances before wearing the garment, and ensure the fabric does not come into direct contact with cosmetics.',
  },
  {
    title: 'Post-Wear Airing',
    desc: 'After wearing, allow the garment to air out in a shaded, well-ventilated room for a few hours before storing. This allows natural fibers to breathe and moisture to evaporate without resorting to immediate dry cleaning, which degrades the fabric over time.',
  },
];

export default function CareClient() {
  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 'clamp(4rem, 8vw, 8rem)', paddingInline: 'var(--gutter)', borderBottom: '1px solid rgba(8,8,8,0.06)', background: 'var(--soft-ivory)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center' }} className="care-hero-grid">
          <div>
            <Reveal>
              <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>Client Services</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 2rem', color: 'var(--color-black)' }}>
                Fabric &<br /><em style={{ color: 'var(--color-gold)' }}>Garment Care.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="t-body-lg">
                A RAZEVÉL garment is designed to last generations. Proper preservation ensures that the silk retains its luster and the Zardozi keeps its weight.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', background: 'var(--color-black)' }}>
              <Image src="/images/fabric.png" alt="Fabric details" fill style={{ objectFit: 'cover', opacity: 0.85 }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Guide */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(2rem, 5vw, 5rem)' }} className="care-grid">
            {CARE_SECTIONS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div style={{ padding: 'clamp(2rem, 4vw, 3rem)', background: 'var(--soft-ivory)', height: '100%' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-gold)', display: 'block', marginBottom: '1.5rem' }}>0{i + 1}</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 400, color: 'var(--color-black)', margin: '0 0 1rem', lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--color-grey)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Restoration CTA */}
      <section style={{ paddingBlock: 'clamp(5rem, 10vw, 10rem)', paddingInline: 'var(--gutter)', background: 'var(--color-black)', textAlign: 'center' }}>
        <Reveal>
          <span className="t-label" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '1.5rem' }}>The Restoration Service</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, color: 'var(--color-white)', margin: '0 0 1.5rem', lineHeight: 1.1 }}>
            Preserving Your<br /><em>Heritage.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', margin: '0 auto 3rem', maxWidth: '36rem', lineHeight: 1.75, fontWeight: 300 }}>
            If a beloved RAZEVÉL garment has suffered damage, faded embroidery, or requires resizing, return it to the very hands that crafted it. Our master tailors offer a comprehensive restoration service.
          </p>
          <Link href="/contact" className="btn btn-gold">Contact Atelier for Restoration</Link>
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 900px) { .care-hero-grid, .care-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
