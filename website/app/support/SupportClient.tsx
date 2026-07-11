'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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

const FAQS = [
  {
    category: 'Orders & Commissions',
    items: [
      { q: 'How long does a bespoke order take?', a: 'Our bespoke garments require between 6 and 14 weeks from the time of consultation, depending on the complexity of embroidery and embellishment. Bridal pieces with full Zardozi work may require up to 20 weeks. We will always give you an honest timeline at the start of your commission.' },
      { q: 'Can I make changes after placing my order?', a: 'Design changes are accepted within the first week of placing your commission, before fabric cutting begins. After this point, structural changes cannot be accommodated, though we remain flexible on embellishment details and finishing choices throughout the process.' },
      { q: 'What is your minimum order value?', a: 'There is no minimum for ready-to-commission pieces from our existing collection. For fully custom bespoke garments, commissions begin at ₹45,000. Bridal bespoke commissions begin at ₹1,20,000.' },
      { q: 'Do you offer ready-to-wear garments?', a: 'RAZEVÉL does not operate a traditional ready-to-wear line. All our pieces are either made-to-order from existing designs, or fully bespoke. This ensures every garment fits your body precisely and is crafted exclusively for you.' },
    ],
  },
  {
    category: 'Measurements & Fitting',
    items: [
      { q: 'How are measurements taken?', a: 'For clients visiting our Patna atelier, measurements are taken in person by our senior tailor. For outstation and international clients, we conduct a detailed video consultation where we guide you or a tailor near you through our 22-point measurement process. We also accept measurements from a trusted local tailor.' },
      { q: 'What if I live outside Patna?', a: 'Approximately 60% of our clients are outstation. We have a refined remote process: an initial video consultation, a measurement guide we send you, and a trial garment (muslin toile) for complex bespoke pieces. Our concierge team will coordinate every step with you.' },
      { q: 'How many fittings will I have?', a: 'In-person clients typically have two to three fitting appointments: a muslin toile fitting, a first garment fitting, and a final pickup. For remote clients, we send the garment with clear alteration instructions and provide a local alteration allowance.' },
      { q: 'What if my measurements change after ordering?', a: 'We understand that bodies change, particularly during bridal seasons. Please inform us immediately if your measurements change significantly after ordering. We accommodate measurement changes up to four weeks before your delivery date at no additional charge.' },
    ],
  },
  {
    category: 'Shipping & Delivery',
    items: [
      { q: 'Do you ship internationally?', a: 'Yes. We ship to India, the United Kingdom, the United States, Canada, the UAE, Singapore, Australia, and most other countries. International shipments are dispatched via DHL or FedEx and are fully insured. Duties and customs taxes at the destination are the responsibility of the client.' },
      { q: 'How is the garment packaged?', a: 'Every RAZEVÉL garment is placed in our signature obsidian gift box, tissue-wrapped, and hand-sealed with our wax stamp. The box is then placed inside a breathable garment bag and packed within a rigid outer shipping carton to protect it completely in transit.' },
      { q: 'Is my shipment insured?', a: 'All shipments valued above ₹25,000 are fully insured in transit at no additional cost to you. For high-value bridal pieces, we use specialist fine art freight solutions with end-to-end insurance coverage.' },
      { q: 'What is the delivery timeline after completion?', a: 'Domestic India delivery takes 3–7 business days after your garment is completed and quality-checked. Express delivery (1–2 days) is available for an additional charge. International delivery varies by destination: 7–14 business days for South Asia, 14–21 for other regions.' },
    ],
  },
  {
    category: 'Care & Maintenance',
    items: [
      { q: 'How do I care for embroidered garments?', a: 'All RAZEVÉL garments should be dry-cleaned by a specialist in Indian ethnic wear. Never machine wash embroidered pieces. Store flat or on a padded hanger in a breathable cotton bag. Keep away from direct sunlight. We include a care card with every garment.' },
      { q: 'Do you offer alteration services?', a: 'Yes. We offer alterations for all RAZEVÉL garments, regardless of when they were purchased. Our standard alteration service takes 5–10 business days. For complex alterations involving embroidery, please allow additional time.' },
      { q: 'Can I have my garment re-embroidered or updated?', a: 'Yes — this is one of the most meaningful services we offer. We can refresh faded embroidery, add new embellishments, update a garment to a more contemporary silhouette, or restore a heirloom piece. Contact our atelier to discuss your specific garment.' },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(8,8,8,0.08)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '1.5rem 0', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem',
        }}
      >
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'var(--color-black)', fontWeight: 400, lineHeight: 1.4 }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: E }}
          style={{ color: 'var(--color-gold)', fontSize: '1.5rem', flexShrink: 0, lineHeight: 1, fontWeight: 300 }}
        >+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: E }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem, 1vw, 1rem)', lineHeight: 1.8, color: 'var(--color-grey)', paddingBottom: '1.5rem', margin: 0, fontWeight: 300 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SupportClient() {
  return (
    <main style={{ background: 'var(--soft-ivory)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 'var(--section-y)', paddingInline: 'var(--gutter)', borderBottom: '1px solid rgba(8,8,8,0.06)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>Client Services</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 2rem', color: 'var(--color-black)' }}>
              How Can We<br /><em style={{ color: 'var(--color-gold)' }}>Help You?</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="t-body-lg" style={{ maxWidth: '44rem' }}>
              Our atelier team is available to assist with every aspect of your RAZEVÉL experience — from your first consultation to final delivery and beyond.
            </p>
          </Reveal>
          <Reveal delay={0.3} style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="mailto:atelier@razevel.com" className="btn btn-primary">Email the Atelier</a>
            <a href="https://wa.me/916207506369" className="btn btn-outline" target="_blank" rel="noreferrer">WhatsApp Concierge</a>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          {FAQS.map((section, si) => (
            <Reveal key={section.category} delay={si * 0.05} style={{ marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(2rem, 6vw, 6rem)', alignItems: 'start' }} className="faq-grid">
                <div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 400, color: 'var(--color-black)', margin: 0, lineHeight: 1.2 }}>{section.category}</h2>
                </div>
                <div>
                  {section.items.map(item => <FaqItem key={item.q} q={item.q} a={item.a} />)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-black)', paddingBlock: 'clamp(5rem, 10vw, 10rem)', paddingInline: 'var(--gutter)', textAlign: 'center' }}>
        <Reveal>
          <span className="t-label" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '1.5rem' }}>Still have questions?</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 400, color: 'var(--color-white)', margin: '0 0 1.5rem' }}>Our Concierge<br /><em>Is Here.</em></h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', margin: '0 auto 3rem', maxWidth: '36rem', lineHeight: 1.7, fontWeight: 300 }}>
            For anything not covered above, reach out directly to our atelier. We respond within 24 hours on business days.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-gold">Visit Contact Page</Link>
            <a href="tel:+916207506369" className="btn btn-outline" style={{ color: 'var(--color-white)', borderColor: 'rgba(255,255,255,0.3)' }}>+91 62075 06369</a>
          </div>
        </Reveal>
      </section>

      {/* Related */}
      <section style={{ paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal style={{ marginBottom: '3rem' }}>
            <span className="t-label" style={{ display: 'block' }}>Helpful Resources</span>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'var(--color-border)' }}>
            {[
              { label: 'Returns & Exchanges', href: '/returns', desc: 'Our satisfaction guarantee.' },
              { label: 'Worldwide Shipping', href: '/shipping', desc: 'Delivery timelines and packaging.' },
              { label: 'Bespoke Journey', href: '/bespoke', desc: 'Begin a custom commission.' },
              { label: 'Contact Atelier', href: '/contact', desc: 'Speak directly to our team.' },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ textDecoration: 'none', display: 'block', padding: '2rem', background: 'var(--soft-ivory)', transition: 'background 0.3s var(--ease)' }} className="resource-card">
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-black)', display: 'block', marginBottom: '0.5rem', fontWeight: 400 }}>{r.label} →</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-grey-light)', fontWeight: 300 }}>{r.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .faq-grid { grid-template-columns: 1fr !important; } }
        .resource-card:hover { background: #FFFFFF !important; }
      `}</style>
    </main>
  );
}
