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

const TIERS = [
  {
    title: 'India — Standard',
    time: '3–7 business days',
    note: 'After completion & QC',
    price: 'Free above ₹15,000',
    sub: '₹299 for orders below ₹15,000',
    highlight: false,
  },
  {
    title: 'India — Express',
    time: '1–3 business days',
    note: 'Dispatched same day if ordered before 12 PM',
    price: '₹799 surcharge',
    sub: 'Available across major cities',
    highlight: true,
  },
  {
    title: 'South Asia International',
    time: '7–14 business days',
    note: 'UAE, Singapore, Sri Lanka, Nepal',
    price: 'Calculated at checkout',
    sub: 'DHL Express or FedEx',
    highlight: false,
  },
  {
    title: 'Global International',
    time: '14–21 business days',
    note: 'UK, USA, Canada, Australia & 100+ countries',
    price: 'Calculated at checkout',
    sub: 'Duties & taxes at destination',
    highlight: false,
  },
];

const PACKAGING = [
  { num: '01', label: 'Obsidian Gift Box', desc: 'Our signature matte black box with gold embossing.' },
  { num: '02', label: 'Tissue Wrap', desc: 'Acid-free tissue, folded with care around every layer.' },
  { num: '03', label: 'Wax Seal', desc: 'Hand-pressed with the RAZEVÉL signet in warm gold.' },
  { num: '04', label: 'Garment Bag', desc: 'Breathable cotton bag for long-term garment storage.' },
  { num: '05', label: 'Rigid Outer Carton', desc: 'Shock-resistant outer packaging for full transit protection.' },
  { num: '06', label: 'Handwritten Card', desc: 'A personal note from our atelier with care instructions.' },
];

export default function ShippingClient() {
  return (
    <main style={{ background: 'var(--soft-ivory)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 'var(--section-y)', paddingInline: 'var(--gutter)', background: '#FFFFFF', borderBottom: '1px solid rgba(8,8,8,0.06)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>Global Delivery</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 2rem', color: 'var(--color-black)' }}>
              Delivered to Every<br /><em style={{ color: 'var(--color-gold)' }}>Corner of the World.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="t-body-lg" style={{ maxWidth: '44rem' }}>
              From Patna to Paris, every RAZEVÉL piece travels in the same luxury packaging — protected, insured, and tracked until it reaches your hands.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Shipping Tiers */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>Shipping Options</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, margin: 0, lineHeight: 1.1 }}>
              Rates & Timelines
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'var(--color-border)' }}>
            {TIERS.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.08}>
                <div style={{
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  background: t.highlight ? 'var(--color-black)' : '#FFFFFF',
                  color: t.highlight ? 'var(--color-white)' : 'var(--color-black)',
                  height: '100%',
                }}>
                  {t.highlight && <span className="t-label-gold" style={{ display: 'block', marginBottom: '1rem', fontSize: '0.6rem' }}>POPULAR</span>}
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 400, margin: '0 0 1rem', color: t.highlight ? 'var(--color-white)' : 'var(--color-black)' }}>{t.title}</h3>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-gold)', margin: '0 0 0.5rem' }}>{t.time}</div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: t.highlight ? 'rgba(255,255,255,0.6)' : 'var(--color-grey-light)', margin: '0 0 1.5rem', lineHeight: 1.6 }}>{t.note}</p>
                  <div style={{ borderTop: `1px solid ${t.highlight ? 'rgba(255,255,255,0.1)' : 'rgba(8,8,8,0.08)'}`, paddingTop: '1.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 500, color: t.highlight ? 'var(--color-white)' : 'var(--color-black)', display: 'block', marginBottom: '0.25rem' }}>{t.price}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: t.highlight ? 'rgba(255,255,255,0.5)' : 'var(--color-grey-light)' }}>{t.sub}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)', background: 'var(--color-black)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }} className="insurance-grid">
          <Reveal>
            <span className="t-label" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '1.5rem' }}>Transit Protection</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--color-white)', margin: '0 0 1.5rem', lineHeight: 1.1 }}>
              Every Garment,<br /><em>Fully Insured.</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
              All RAZEVÉL shipments valued above ₹25,000 are fully insured in transit at no additional cost. High-value bridal and bespoke pieces travel with specialist fine art freight coverage. In the rare event of damage or loss, we replace the garment entirely.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {['Full replacement guarantee on lost shipments', 'Real-time tracking on every order', 'Specialist packaging for embroidered garments', 'Signature-required delivery on high-value pieces'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '1rem', flexShrink: 0, marginTop: '0.1rem' }}>—</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontWeight: 300 }}>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Packaging */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>The Unboxing</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, margin: 0, lineHeight: 1.1 }}>
              Luxury Packaging<br /><em>as Standard.</em>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--color-border)' }} className="packaging-grid">
            {PACKAGING.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.07}>
                <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', background: 'var(--soft-ivory)' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--color-gold)', display: 'block', marginBottom: '1rem' }}>{p.num}</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--color-black)', margin: '0 0 0.5rem' }}>{p.label}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-grey-light)', margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track CTA */}
      <section style={{ background: 'var(--soft-ivory)', paddingBlock: 'clamp(4rem, 8vw, 8rem)', paddingInline: 'var(--gutter)', textAlign: 'center', borderTop: '1px solid rgba(8,8,8,0.06)' }}>
        <Reveal>
          <span className="t-label" style={{ display: 'block', marginBottom: '1.5rem' }}>Track Your Commission</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, margin: '0 0 1.5rem', color: 'var(--color-black)', lineHeight: 1.1 }}>
            Where Is My Order?
          </h2>
          <p className="t-body" style={{ margin: '0 auto 3rem', maxWidth: '36rem' }}>
            Use your order ID to track your commission from our atelier to your door.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/profile" className="btn btn-primary">Track in My Account</Link>
            <Link href="/contact" className="btn btn-outline">Contact Atelier</Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 900px) { .insurance-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .packaging-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .packaging-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
