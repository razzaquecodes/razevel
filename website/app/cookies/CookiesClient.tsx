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
    title: 'What Are Cookies?',
    content: 'Cookies are small text files placed on your device when you visit our digital flagship. They allow us to remember your preferences, keep your session secure, and ensure that your bespoke wishlist is preserved between visits.',
  },
  {
    title: 'Essential Cookies',
    content: 'We use strictly necessary cookies to operate the core functions of our website. These include session tokens for authentication via Supabase and temporary identifiers that maintain your shopping cart. Because they are essential to the functioning of the site, they cannot be disabled.',
  },
  {
    title: 'Performance & Analytics',
    content: 'To continuously refine the luxury experience of our website, we use anonymized analytics cookies (via Vercel Analytics). These help us understand how clients navigate our collections and read our journal. They do not collect personally identifiable information.',
  },
  {
    title: 'Third-Party Advertising',
    content: 'RAZEVÉL does not participate in third-party programmatic advertising networks. We do not place tracking cookies on your device for the purpose of serving you targeted ads on other websites. Your data remains entirely within our house.',
  },
  {
    title: 'Managing Your Preferences',
    content: 'You can control or delete cookies through your browser settings. However, disabling essential cookies may prevent you from logging into your client profile or placing a bespoke commission online.',
  },
];

export default function CookiesClient() {
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
              Cookie<br /><em style={{ color: 'var(--color-gold)' }}>Policy.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="t-body-lg">
              We respect your digital privacy as much as we respect your physical measurements. We only use cookies that enhance your experience.
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
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, margin: '0 0 1rem', color: 'var(--color-black)', lineHeight: 1.2 }}>Questions?</h2>
          <p className="t-body" style={{ margin: '0 auto 2.5rem', maxWidth: '36rem' }}>For inquiries regarding our use of cookies, contact our privacy team.</p>
          <Link href="/privacy" className="btn btn-outline">Read Privacy Policy</Link>
        </Reveal>
      </section>

    </main>
  );
}
