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
    title: 'Bespoke Garments',
    content: 'Because bespoke commissions are crafted exclusively to your precise body measurements and design specifications, they possess no resale value. Consequently, we do not offer monetary refunds for completed bespoke garments. If a structural or fitting issue arises, our commitment is to remake or alter the garment entirely at our expense until it meets our exacting standards.',
  },
  {
    title: 'Ready-to-Commission Collections',
    content: 'Garments ordered from our existing seasonal collections (without custom design modifications) are eligible for exchange credit if returned unworn and unaltered within 14 days. We do not provide cash refunds for these items. Exchange credit will be applied directly to your RAZEVÉL account and never expires.',
  },
  {
    title: 'Refund Timelines',
    content: 'For cancellations made within the 48-hour grace period (as outlined in our Cancellation Policy), refunds are processed to the original payment method within 7–10 business days. Any applicable consultation fees will be deducted before the refund is initiated.',
  },
  {
    title: 'Manufacturing Defects',
    content: 'In the extremely rare event that a garment arrives with a proven manufacturing defect (e.g., compromised fabric integrity or severe embroidery failure), and we determine it cannot be restored to perfection, a full monetary refund will be issued. The item must be returned in its original obsidian packaging.',
  },
  {
    title: 'International Duties & Taxes',
    content: 'For our international clients, please note that any customs duties, import taxes, or clearance fees paid to your local government are strictly non-refundable by RAZEVÉL under any circumstances.',
  },
];

export default function RefundClient() {
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
              Refund<br /><em style={{ color: 'var(--color-gold)' }}>Policy.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="t-body-lg">
              Our financial policies are designed to honor the intensive artisanal labor required to create your luxury commission.
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
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, margin: '0 0 1rem', color: 'var(--color-black)', lineHeight: 1.2 }}>Need clarification?</h2>
          <p className="t-body" style={{ margin: '0 auto 2.5rem', maxWidth: '36rem' }}>Our atelier team can answer any questions regarding financial mechanics.</p>
          <Link href="/contact" className="btn btn-outline">Contact Us</Link>
        </Reveal>
      </section>

    </main>
  );
}
