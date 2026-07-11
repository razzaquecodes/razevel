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

const STEPS = [
  {
    title: 'The Video Consultation',
    desc: 'Our process begins with a one-on-one video call with our senior atelier staff. We observe your posture, shoulder slope, and natural stance — details a tape measure alone cannot capture.',
  },
  {
    title: 'The 22-Point Profile',
    desc: 'You will be guided through our proprietary 22-point measurement system. You may have a local tailor assist you, or follow our visual guide with a friend. Every measurement is verified by our team before cutting begins.',
  },
  {
    title: 'The Muslin Toile (Optional)',
    desc: 'For highly complex silhouettes or international bridal commissions, we will first construct a muslin toile — a prototype of your garment in inexpensive cotton. We ship this to you for a remote fitting over video to ensure absolute perfection before cutting your luxury silk.',
  },
  {
    title: 'The Final Fit',
    desc: 'Your completed garment is shipped with a built-in alteration allowance. Should minor local adjustments be necessary upon arrival, we provide an alteration reimbursement credit.',
  },
];

export default function MeasurementGuideClient() {
  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 'clamp(4rem, 8vw, 8rem)', paddingInline: 'var(--gutter)', borderBottom: '1px solid rgba(8,8,8,0.06)', background: 'var(--soft-ivory)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center' }} className="measure-hero-grid">
          <div>
            <Reveal>
              <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>Bespoke Process</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 2rem', color: 'var(--color-black)' }}>
                The Art of<br /><em style={{ color: 'var(--color-gold)' }}>Measurement.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="t-body-lg">
                Proximity is no longer a barrier to perfection. Over 60% of our bespoke commissions are executed for clients outside India using our remote measurement protocol.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', background: 'var(--color-black)' }}>
              <Image src="/images/atelier.png" alt="Tailoring measurements" fill style={{ objectFit: 'cover', opacity: 0.85 }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, margin: 0, lineHeight: 1.1, color: 'var(--color-black)' }}>How It Works remotely</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'var(--color-border)' }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div style={{ padding: 'clamp(2rem, 4vw, 3rem)', background: '#FFFFFF', height: '100%' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-gold)', display: 'block', marginBottom: '1.5rem' }}>0{i + 1}</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 400, color: 'var(--color-black)', margin: '0 0 1rem', lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--color-grey)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBlock: 'clamp(5rem, 10vw, 10rem)', paddingInline: 'var(--gutter)', background: 'var(--color-black)', textAlign: 'center' }}>
        <Reveal>
          <span className="t-label" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '1.5rem' }}>Ready to Begin?</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, color: 'var(--color-white)', margin: '0 0 1.5rem', lineHeight: 1.1 }}>
            Create Your<br /><em>Fit Profile.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', margin: '0 auto 3rem', maxWidth: '36rem', lineHeight: 1.75, fontWeight: 300 }}>
            Enter your basic measurements online to create your initial profile, or book a video consultation with our atelier to begin a bespoke commission.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/measurements" className="btn btn-gold">Enter Measurements</Link>
            <Link href="/bespoke" className="btn btn-outline" style={{ color: 'var(--color-white)', borderColor: 'rgba(255,255,255,0.3)' }}>Book Consultation</Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 900px) { .measure-hero-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
