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
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the RAZEVÉL website, placing an order, or engaging our services, you agree to these Terms of Service in full.',
      'If you disagree with any part of these terms, you may not use our services.',
      'These terms are governed by the laws of India. Any disputes are subject to the jurisdiction of courts in Patna, Bihar.',
    ],
  },
  {
    title: '2. Our Services',
    content: [
      'RAZEVÉL provides luxury handcrafted ethnic wear including bespoke commissions, ready-to-commission garments, and related consultation services.',
      'All bespoke garments are made exclusively to the client\'s specifications and measurements. We reserve the right to decline any commission that conflicts with our design philosophy or production capacity.',
      'Product images on our website are representative. Due to the handcrafted nature of our work, minor variations in embroidery pattern, fabric texture, and colour tone are inherent and do not constitute defects.',
    ],
  },
  {
    title: '3. Orders & Payment',
    content: [
      'A commission is confirmed only upon receipt of the agreed deposit (typically 50% of the total commission value for bespoke orders).',
      'Prices are listed in Indian Rupees (INR). International customers are responsible for applicable customs duties and taxes at the point of import.',
      'We accept UPI, NEFT/RTGS, credit/debit cards, and international wire transfers. Payment processing is handled by PCI DSS compliant partners.',
      'All prices are inclusive of GST. A detailed invoice is provided with every order.',
    ],
  },
  {
    title: '4. Bespoke Commission Terms',
    content: [
      'Bespoke commissions begin only after a consultation, measurement collection, and deposit payment.',
      'The client is responsible for providing accurate measurements. RAZEVÉL is not liable for fit issues arising from incorrect client-provided measurements.',
      'Design changes after fabric cutting are not guaranteed and may incur additional charges.',
      'Estimated delivery dates are provided in good faith. RAZEVÉL is not liable for delays caused by force majeure, shipping carrier delays, or material unavailability.',
    ],
  },
  {
    title: '5. Intellectual Property',
    content: [
      'All designs, embroidery patterns, digital content, photographs, and branding on this website are the exclusive intellectual property of RAZEVÉL.',
      'You may not reproduce, distribute, or commercially exploit any RAZEVÉL content without written permission.',
      'Client garments are designed for the client\'s personal use. Re-sale or commercial reproduction of RAZEVÉL designs is prohibited.',
    ],
  },
  {
    title: '6. Limitation of Liability',
    content: [
      'RAZEVÉL\'s maximum liability for any claim related to a commission is limited to the total value of that specific commission.',
      'We are not liable for indirect, consequential, or incidental damages, including loss of profits or business opportunities.',
      'Our liability for delivery-related issues is limited to the value of transit insurance covering the shipment.',
    ],
  },
  {
    title: '7. Amendments',
    content: [
      'RAZEVÉL reserves the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date.',
      'Continued use of our services after changes constitutes acceptance of the revised Terms.',
      'For questions about these Terms, contact us at legal@razevel.com.',
    ],
  },
];

export default function TermsClient() {
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
              Terms of<br /><em style={{ color: 'var(--color-gold)' }}>Service.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="t-body-lg">
              These terms govern the relationship between RAZEVÉL and its clients. We have written them to be clear and fair.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-grey-light)', marginTop: '1.5rem' }}>Effective: January 2026</p>
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
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, margin: '0 0 1rem', color: 'var(--color-black)', lineHeight: 1.2 }}>Questions About These Terms?</h2>
          <p className="t-body" style={{ margin: '0 auto 2.5rem', maxWidth: '36rem' }}>Contact our team at <a href="mailto:legal@razevel.com" style={{ color: 'var(--color-gold)' }}>legal@razevel.com</a></p>
          <Link href="/contact" className="btn btn-outline">Contact Us</Link>
        </Reveal>
      </section>

    </main>
  );
}
