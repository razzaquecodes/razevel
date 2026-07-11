'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function BookAppointment() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{
      background: 'var(--deep-black)',
      paddingBlock: 'clamp(6rem, 12vw, 12rem)',
      paddingInline: 'var(--gutter)',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: 'var(--max-w-narrow)', margin: '0 auto' }}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: E }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
        >
          <span className="t-label-gold">Private Consultation</span>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 400, color: 'var(--luxury-white)', margin: 0, lineHeight: 1.1
          }}>
            Begin Your <br /><em style={{ color: 'var(--warm-gold)' }}>Commission.</em>
          </h2>
          <p className="t-body-lg" style={{ color: 'rgba(250,250,250,0.6)', maxWidth: '36rem' }}>
            Request a private appointment at our Patna atelier or schedule a 
            virtual consultation with our master tailor.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
            <a href="/bespoke" className="btn btn-gold">Book Appointment</a>
            <a href="mailto:atelier@razevel.com" className="btn btn-outline" style={{ color: 'var(--luxury-white)', borderColor: 'var(--luxury-white)' }}>
              Email Atelier
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
