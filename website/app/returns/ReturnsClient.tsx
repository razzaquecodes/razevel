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
    num: '01',
    title: 'Bespoke Garments',
    content: 'Every RAZEVÉL bespoke piece is made exclusively to your measurements and specifications. Because these garments have no resale possibility, standard monetary returns do not apply. However, we stand completely behind the quality of our craft. Should a garment not fit due to an error on our part, we will correct it without charge. One complimentary re-fitting and alteration is included within 30 days of delivery.',
  },
  {
    num: '02',
    title: 'Ready-to-Commission Pieces',
    content: 'Garments from our existing ready-to-commission designs may be exchanged within 14 days of delivery, provided they are unworn, unaltered, and returned in original packaging. We do not offer monetary refunds on these pieces unless a manufacturing defect is confirmed by our atelier. Exchange credit is applied to your next commission.',
  },
  {
    num: '03',
    title: 'Manufacturing Defect Guarantee',
    content: 'If any RAZEVÉL garment has a manufacturing defect — including structural failures, embroidery detachment, or material flaws — we will correct or remake the piece entirely at no cost. This guarantee applies for 90 days from delivery. After 90 days, defects are assessed individually and handled at our discretion, always with your satisfaction as the priority.',
  },
  {
    num: '04',
    title: 'Cancellation Policy',
    content: 'Bespoke commissions may be cancelled within 48 hours of placement for a full refund. After 48 hours but before fabric cutting, a ₹2,500 consultation and design fee applies. Once fabric cutting has begun, a 30% material and preparation charge is non-refundable. After the embroidery process has started, no cancellations are accepted.',
  },
];

const PROCESS = [
  { step: '01', title: 'Contact Our Atelier', desc: 'Reach out via email or WhatsApp with your order number and the nature of your concern.' },
  { step: '02', title: 'Assessment & Inspection', desc: 'Our quality team reviews your garment, either in-person or via detailed photographs you send us.' },
  { step: '03', title: 'Resolution', desc: 'We provide a resolution — alteration, exchange credit, or repair — within 14 business days of assessment.' },
];

export default function ReturnsClient() {
  return (
    <main style={{ background: 'var(--soft-ivory)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 'var(--section-y)', paddingInline: 'var(--gutter)', background: '#FFFFFF', borderBottom: '1px solid rgba(8,8,8,0.06)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>Our Commitment</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 2rem', color: 'var(--color-black)' }}>
              Returns &<br /><em style={{ color: 'var(--color-gold)' }}>Exchanges.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="t-body-lg" style={{ maxWidth: '44rem' }}>
              Every RAZEVÉL garment is made expressly for you. We back every piece with the full confidence of our craft — your satisfaction is not optional, it is our standard.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Policy Sections */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--color-black)', lineHeight: 1.1, margin: 0 }}>
              What to Expect
            </h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {POLICIES.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '5rem 1fr', gap: '2rem', padding: 'clamp(2rem, 4vw, 3rem) 0', borderBottom: '1px solid rgba(8,8,8,0.08)', alignItems: 'start' }} className="policy-row">
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--color-gold)', fontWeight: 400, paddingTop: '0.4rem' }}>{p.num}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', fontWeight: 400, color: 'var(--color-black)', margin: '0 0 1rem', lineHeight: 1.2 }}>{p.title}</h3>
                    <p className="t-body" style={{ margin: 0 }}>{p.content}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>How It Works</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, margin: 0, lineHeight: 1.1, color: 'var(--color-black)' }}>The Resolution Process</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(2rem, 5vw, 5rem)' }} className="process-grid">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-gold)', display: 'block', marginBottom: '1rem' }}>{p.step}</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--color-black)', margin: '0 0 0.75rem' }}>{p.title}</h3>
                  <p className="t-body" style={{ margin: 0 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-black)', paddingBlock: 'clamp(5rem, 10vw, 10rem)', paddingInline: 'var(--gutter)', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 400, color: 'var(--color-white)', margin: '0 0 1.5rem' }}>
            Have a Concern?<br /><em>We Will Resolve It.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', margin: '0 auto 3rem', maxWidth: '36rem', lineHeight: 1.7, fontWeight: 300 }}>
            Contact our atelier directly. We respond within 24 hours, and your satisfaction remains our only priority.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:atelier@razevel.com" className="btn btn-gold">atelier@razevel.com</a>
            <Link href="/support" className="btn btn-outline" style={{ color: 'var(--color-white)', borderColor: 'rgba(255,255,255,0.3)' }}>Visit Support Centre</Link>
          </div>
        </Reveal>
      </section>

      <style>{`@media (max-width: 768px) { .process-grid { grid-template-columns: 1fr !important; } .policy-row { grid-template-columns: 1fr !important; } }`}</style>
    </main>
  );
}
