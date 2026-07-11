'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Input } from '@/src/components/ui/Input';
import { Button } from '@/src/components/ui/Button';
import { useToast } from '@/src/components/ui/Toast';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FAQS = [
  { q: 'What is the standard timeline for a bespoke commission?', a: 'A standard bespoke commission takes 25-30 days to complete, as every garment involves 200–800 hours of hand-embroidery. Express production (15-18 days) is available upon request.' },
  { q: 'Do you offer international shipping?', a: 'Yes. RAZEVÉL ships globally via DHL Express. All international shipments are fully insured and include complimentary luxury packaging.' },
  { q: 'How do virtual measurements work?', a: 'Our master tailors will guide you through a precision measurement process over a video consultation. We also save this profile for your future commissions.' },
  { q: 'What is your alteration policy?', a: 'We offer complimentary alterations within 30 days of delivery to ensure a flawless fit.' },
  { q: 'What is RAZEVÉL Privé?', a: 'RAZEVÉL Privé is our invitation-only membership program offering early access to collections, private trunk show invitations, and priority atelier access.' },
  { q: 'How do I care for my zardozi embroidery?', a: 'All RAZEVÉL pieces must be strictly dry-cleaned by luxury specialists. We recommend storing them in the provided unbleached cotton muslin bags.' }
];

export default function ContactClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock network request
    await new Promise(r => setTimeout(r, 1200));
    setIsSubmitting(false);
    showToast('Your inquiry has been received by our concierge.', 'success');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main style={{ background: 'var(--luxury-white)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* 1. Luxury Hero */}
      <section style={{ height: '70vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--deep-black)' }}>
        <Image src="/images/fabric.png" alt="Fabric" fill priority style={{ objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 var(--gutter)' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: E }}>
            <span className="t-label-gold" style={{ color: 'var(--warm-gold)', marginBottom: '1rem', display: 'block' }}>Client Services</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--luxury-white)', margin: 0, fontWeight: 400 }}>
              Atelier & Concierge
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Concierge Grid (Appointments & Contact info) */}
      <section style={{ maxWidth: 'var(--max-w)', margin: '-4rem auto 6rem', padding: '0 var(--gutter)', position: 'relative', zIndex: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div style={{ background: 'var(--luxury-white)', padding: '3rem', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)' }}>
            <span className="t-label" style={{ color: 'var(--color-gold)' }}>Flagship Atelier</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: '1rem 0' }}>Visit Patna</h3>
            <p className="t-body" style={{ color: 'var(--color-grey)', marginBottom: '1.5rem' }}>
              Rajendra Nagar,<br/>Road No. 11,<br/>Patna, Bihar – 800016
            </p>
            <p className="t-label" style={{ marginBottom: '1.5rem' }}>Mon – Sat: 11:00 AM – 8:00 PM<br/>By Appointment Only.</p>
            <Button variant="outline" fullWidth>Book Store Visit</Button>
          </div>

          <div style={{ background: 'var(--luxury-white)', padding: '3rem', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)' }}>
            <span className="t-label" style={{ color: 'var(--color-gold)' }}>Global Clients</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: '1rem 0' }}>Virtual Concierge</h3>
            <p className="t-body" style={{ color: 'var(--color-grey)', marginBottom: '1.5rem' }}>
              Experience RAZEVÉL from anywhere in the world with our dedicated digital bespoke service.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <span className="t-body" style={{ fontSize: '0.9rem' }}>+91 62075 06369</span>
              <span className="t-body" style={{ fontSize: '0.9rem' }}>atelier@razevel.com</span>
            </div>
            <Button variant="outline" fullWidth>Video Consultation</Button>
          </div>

        </div>
      </section>

      {/* 3. Main Split Section (Form & FAQ) */}
      <section style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(4rem, 8vw, 8rem)' }} className="contact-grid">
          
          {/* Left: Contact Form */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', margin: '0 0 1rem' }}>Direct Inquiry</h2>
            <p className="t-body" style={{ color: 'var(--color-grey)', marginBottom: '3rem' }}>
              For press, wholesale, or bespoke commission inquiries, please leave us a message. Our concierge will reply within 24 hours.
            </p>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <Input label="First Name" required />
                <Input label="Last Name" required />
              </div>
              <Input label="Email Address" type="email" required />
              <Input label="Phone Number (Optional)" type="tel" />
              
              <div style={{ position: 'relative' }}>
                <select required style={{ width: '100%', padding: '0.5rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--color-border)', fontFamily: 'var(--font-sans)', fontSize: '1rem', outline: 'none' }}>
                  <option value="" disabled selected>Select Inquiry Type</option>
                  <option value="bespoke">Bespoke Commission</option>
                  <option value="press">Press & Media</option>
                  <option value="support">Order Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="t-label">Message</label>
                <textarea required rows={5} style={{ width: '100%', padding: '1rem', background: 'var(--soft-ivory)', border: '1px solid var(--color-border)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', outline: 'none', resize: 'vertical' }} />
              </div>

              <Button type="submit" isLoading={isSubmitting}>Submit Inquiry</Button>
            </form>
          </div>

          {/* Right: FAQ */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', margin: '0 0 1rem' }}>Frequently Asked</h2>
            <p className="t-body" style={{ color: 'var(--color-grey)', marginBottom: '3rem' }}>
              Common questions regarding our bespoke process, shipping, and aftercare.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '1.5rem 0', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: activeFaq === i ? 'var(--color-gold)' : 'var(--color-black)', transition: 'color 0.3s' }}>{faq.q}</span>
                    <span style={{ fontSize: '1.5rem', color: 'var(--color-grey)', transition: 'transform 0.3s', transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="t-body" style={{ paddingBottom: '1.5rem', color: 'var(--color-grey)', margin: 0 }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div style={{ marginTop: '4rem', width: '100%', height: '250px', background: 'var(--soft-ivory)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
               <Image src="/images/pattern.png" alt="Map" fill style={{ objectFit: 'cover', opacity: 0.2 }} />
               <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                 <p className="t-label" style={{ color: 'var(--color-black)' }}>View on Google Maps</p>
               </div>
            </div>

          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </main>
  );
}
