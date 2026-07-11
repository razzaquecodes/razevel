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

const POLICIES = [
  {
    title: 'The 48-Hour Window',
    content: 'Bespoke commissions and made-to-order garments may be cancelled for a full refund within 48 hours of placing the order, provided the design consultation has not yet occurred. We understand that a luxury commission is a significant commitment, and we offer this grace period for your peace of mind.',
  },
  {
    title: 'Post-Consultation Cancellations',
    content: 'If you choose to cancel after your initial design consultation but before fabric cutting begins, a ₹2,500 consultation and design fee will be deducted from your refund. This covers the time and expertise our master tailors dedicate to your initial measurements and design blueprint.',
  },
  {
    title: 'After Fabric Cutting',
    content: 'Once the fabric for your garment has been cut, a 30% material and preparation charge becomes non-refundable. At this stage, the garment has been permanently altered to your specific measurements and cannot be used for another client.',
  },
  {
    title: 'During Embroidery & Production',
    content: 'Once the embroidery process (Zardozi, Aari, or hand-beading) has commenced, cancellations can no longer be accepted. The garment is now entirely bespoke to your vision and represents dozens of hours of dedicated artisanal labor.',
  },
  {
    title: 'How to Request a Cancellation',
    content: 'To request a cancellation, please email our atelier immediately at atelier@razevel.com or contact your dedicated WhatsApp concierge with your Order Number. Verbal cancellations cannot be processed; all requests must be submitted in writing.',
  },
];

export default function CancellationClient() {
  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 'clamp(4rem, 8vw, 8rem)', paddingInline: 'var(--gutter)', borderBottom: '1px solid rgba(8,8,8,0.06)', background: 'var(--soft-ivory)' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <Reveal>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>Store Policies</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 2rem', color: 'var(--color-black)' }}>
              Cancellation<br /><em style={{ color: 'var(--color-gold)' }}>Policy.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="t-body-lg">
              Because every RAZEVÉL garment is handcrafted exclusively to your measurements, our cancellation windows are structured around the physical stages of production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 5vw, 5rem)' }}>
          {POLICIES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div style={{ borderBottom: '1px solid rgba(8,8,8,0.06)', paddingBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 400, color: 'var(--color-black)', margin: '0 0 1.5rem', lineHeight: 1.2 }}>
                  <span style={{ color: 'var(--color-gold)', marginRight: '1rem', fontSize: '0.8em' }}>0{i + 1}</span>
                  {s.title}
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.95rem, 1vw, 1.05rem)', color: 'var(--color-grey)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                  {s.content}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBlock: 'clamp(4rem, 8vw, 8rem)', paddingInline: 'var(--gutter)', background: 'var(--soft-ivory)', textAlign: 'center', borderTop: '1px solid rgba(8,8,8,0.06)' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, margin: '0 0 1rem', color: 'var(--color-black)', lineHeight: 1.2 }}>Need to cancel an order?</h2>
          <p className="t-body" style={{ margin: '0 auto 2.5rem', maxWidth: '36rem' }}>Contact our atelier immediately to stop production.</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:atelier@razevel.com" className="btn btn-primary">Email Atelier</a>
            <Link href="/contact" className="btn btn-outline">Contact Options</Link>
          </div>
        </Reveal>
      </section>

    </main>
  );
}
