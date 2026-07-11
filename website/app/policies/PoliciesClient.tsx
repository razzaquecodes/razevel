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

const POLICY_LINKS = [
  { title: 'Returns & Exchanges', desc: 'Our policies on returning ready-to-commission and bespoke garments.', href: '/returns' },
  { title: 'Refund Policy', desc: 'The financial mechanics and timelines of our refund process.', href: '/refund' },
  { title: 'Cancellation Policy', desc: 'Understanding the 48-hour cancellation window for commissions.', href: '/cancellation' },
  { title: 'Shipping & Delivery', desc: 'Domestic and international shipping timelines and insurance.', href: '/shipping' },
  { title: 'Privacy Policy', desc: 'How we collect, secure, and respect your personal data.', href: '/privacy' },
  { title: 'Terms of Service', desc: 'The overarching terms governing our bespoke services.', href: '/terms' },
  { title: 'Cookie Policy', desc: 'How we use cookies to deliver a premium digital experience.', href: '/cookies' },
];

export default function PoliciesClient() {
  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 'clamp(4rem, 8vw, 8rem)', paddingInline: 'var(--gutter)', borderBottom: '1px solid rgba(8,8,8,0.06)', background: 'var(--soft-ivory)' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>Client Services</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 2rem', color: 'var(--color-black)' }}>
              Store<br /><em style={{ color: 'var(--color-gold)' }}>Policies.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="t-body-lg">
              Transparency is the foundation of trust. Explore our complete directory of store policies governing our bespoke services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Links Directory */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {POLICY_LINKS.map((link, i) => (
              <Reveal key={link.href} delay={i * 0.05}>
                <Link href={link.href} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'clamp(2rem, 4vw, 3rem) 0', borderBottom: '1px solid rgba(8,8,8,0.06)', gap: '2rem' }} className="policy-link-row">
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 400, color: 'var(--color-black)', margin: '0 0 0.5rem', lineHeight: 1.2 }}>
                      {link.title}
                    </h2>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-grey)', margin: 0, fontWeight: 300 }}>{link.desc}</p>
                  </div>
                  <span style={{ color: 'var(--color-gold)', fontSize: '1.5rem', flexShrink: 0, transition: 'transform 0.3s ease' }} className="arrow">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBlock: 'clamp(4rem, 8vw, 8rem)', paddingInline: 'var(--gutter)', background: 'var(--soft-ivory)', textAlign: 'center', borderTop: '1px solid rgba(8,8,8,0.06)' }}>
        <Reveal>
          <p className="t-body" style={{ margin: '0 auto 2.5rem', maxWidth: '36rem' }}>For specific inquiries not covered by our policies, our atelier is at your disposal.</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/support" className="btn btn-primary">Visit Support Centre</Link>
            <Link href="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        .policy-link-row:hover h2 { color: var(--color-gold) !important; transition: color 0.3s ease; }
        .policy-link-row:hover .arrow { transform: translateX(5px); }
      `}</style>
    </main>
  );
}
