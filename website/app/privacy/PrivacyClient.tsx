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

const SECTIONS = [
  {
    title: '1. Information We Collect',
    content: [
      'Personal identification details (name, email address, phone number, date of birth) provided when creating an account or making a purchase.',
      'Measurement data (body measurements you provide for bespoke commissions). This data is stored securely and used exclusively for garment production.',
      'Payment information processed through our secure payment partners. We do not store complete card details.',
      'Communications you send to us including emails, WhatsApp messages, and contact form submissions.',
      'Usage data including pages visited, time spent on the website, and how you interact with our platform.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'To process and fulfil your commissions and deliveries.',
      'To communicate with you about your orders, appointments, and queries.',
      'To send you newsletters and updates about new collections, if you have opted in to receive them.',
      'To improve our website and services based on usage patterns.',
      'To comply with legal obligations under Indian law, including GST requirements.',
    ],
  },
  {
    title: '3. Data Sharing',
    content: [
      'We do not sell your personal information to any third party, ever.',
      'We share data with trusted service providers who assist us in operating our website (hosting, payment processing, shipping). These providers are bound by confidentiality agreements.',
      'We may share data with law enforcement or regulatory bodies when legally required to do so.',
      'Your measurement data is never shared outside our internal production team.',
    ],
  },
  {
    title: '4. Data Security',
    content: [
      'All data is stored on encrypted, access-controlled servers hosted by Supabase, a SOC 2 Type II compliant platform.',
      'Sensitive payment data is processed by Razorpay, which is PCI DSS Level 1 compliant.',
      'We conduct regular security reviews of our data handling practices.',
      'In the event of a data breach that affects your information, we will notify you within 72 hours.',
    ],
  },
  {
    title: '5. Your Rights',
    content: [
      'You have the right to access a copy of all personal data we hold about you.',
      'You have the right to request correction of inaccurate data.',
      'You have the right to request deletion of your account and associated data.',
      'You have the right to opt out of marketing communications at any time.',
      'To exercise any of these rights, email us at privacy@razevel.com.',
    ],
  },
  {
    title: '6. Cookies',
    content: [
      'We use essential cookies to maintain your session and shopping cart.',
      'We use analytics cookies (via Vercel Analytics) to understand how visitors use our website. These are anonymised.',
      'We do not use third-party advertising cookies.',
      'You may disable cookies in your browser settings, though this may affect website functionality.',
    ],
  },
  {
    title: '7. Contact & Updates',
    content: [
      'For privacy-related queries, contact us at privacy@razevel.com.',
      'This policy was last updated in January 2026.',
      'We may update this policy from time to time. We will notify registered users of any significant changes.',
    ],
  },
];

export default function PrivacyClient() {
  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 'clamp(4rem, 8vw, 8rem)', paddingInline: 'var(--gutter)', borderBottom: '1px solid rgba(8,8,8,0.06)', background: 'var(--soft-ivory)' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <Reveal>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>Legal</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 2rem', color: 'var(--color-black)' }}>
              Privacy<br /><em style={{ color: 'var(--color-gold)' }}>Policy.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="t-body-lg">
              At RAZEVÉL, your privacy is treated with the same care we give every garment. This policy explains what we collect, how we use it, and how you can control it.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-grey-light)', marginTop: '1.5rem' }}>Last updated: January 2026</p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 5vw, 5rem)' }}>
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div style={{ borderBottom: '1px solid rgba(8,8,8,0.06)', paddingBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 400, color: 'var(--color-black)', margin: '0 0 1.5rem', lineHeight: 1.2 }}>{s.title}</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {s.content.map((c, ci) => (
                    <li key={ci} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '0.35rem', fontSize: '0.5rem' }}>◆</span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem, 1vw, 1rem)', color: 'var(--color-grey)', lineHeight: 1.75, fontWeight: 300 }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBlock: 'clamp(4rem, 8vw, 8rem)', paddingInline: 'var(--gutter)', background: 'var(--soft-ivory)', textAlign: 'center', borderTop: '1px solid rgba(8,8,8,0.06)' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, margin: '0 0 1rem', color: 'var(--color-black)', lineHeight: 1.2 }}>Questions About Your Privacy?</h2>
          <p className="t-body" style={{ margin: '0 auto 2.5rem', maxWidth: '36rem' }}>Contact our team at <a href="mailto:privacy@razevel.com" style={{ color: 'var(--color-gold)' }}>privacy@razevel.com</a></p>
          <Link href="/contact" className="btn btn-outline">Contact Us</Link>
        </Reveal>
      </section>

    </main>
  );
}
