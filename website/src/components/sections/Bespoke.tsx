'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const STEPS = [
  {
    num: '01',
    title: 'Consultation',
    subtitle: 'Your story begins here.',
    body: 'A private, unhurried conversation in our atelier or via video call. We discuss your occasion, vision, silhouette preferences, and fabric aspirations.',
    detail: '1–2 hours · Complimentary',
    illustration: '/illustrations/consultation.png',
    alt: 'RAZEVÉL tailor in private consultation with client',
  },
  {
    num: '02',
    title: 'Measurements',
    subtitle: 'Precision is the foundation of fit.',
    body: 'Our master tailor takes 22 precise measurements. For women\'s bespoke, our specialist ensures every drape falls exactly as intended.',
    detail: '45 minutes · In-Atelier',
    illustration: '/illustrations/fitting.png',
    alt: 'RAZEVÉL tailor measuring a gentleman',
  },
  {
    num: '03',
    title: 'Pattern Making',
    subtitle: 'Your blueprint, drawn by hand.',
    body: 'Every pattern is drafted from scratch for your measurements. No blocks, no shortcuts. This paper blueprint is the soul of your garment.',
    detail: '3–5 days · Master Pattern Cutter',
    illustration: '/illustrations/pattern.png',
    alt: 'Pattern making at RAZEVÉL atelier',
  },
  {
    num: '04',
    title: 'Production',
    subtitle: '200 to 800 hours of devotion.',
    body: 'Zardozi, chikankari, aari work — each stitch placed with intention. Our artisans work under natural light, never rushing, never compromising.',
    detail: '3–12 weeks · Master Artisans',
    illustration: '/illustrations/sewing.png',
    alt: 'Hand embroidery at RAZEVÉL',
  },
  {
    num: '05',
    title: 'Trial & Fitting',
    subtitle: 'The moment of truth.',
    body: 'You wear your garment for the first time. Any adjustment — no matter how small — is made until the fit is exactly right. We will not proceed until you are moved.',
    detail: '2 sessions · In-Atelier',
    illustration: '/illustrations/fitting.png',
    alt: 'Final fitting at RAZEVÉL atelier',
  },
  {
    num: '06',
    title: 'Delivery',
    subtitle: 'Crafted for forever.',
    body: 'Your garment arrives in our signature packaging, sealed with our wax monogram. Inside: your garment, a certificate of authenticity, and a handwritten note.',
    detail: 'White-glove delivery · Patna & Pan-India',
    illustration: '/images/bespoke.png',
    alt: 'RAZEVÉL luxury delivery experience',
  },
];

export default function BespokeJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="bespoke-journey"
      style={{ background: 'var(--luxury-white)', paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 5vw, 5rem)',
          marginBottom: 'clamp(4rem, 7vw, 7rem)',
          alignItems: 'end',
        }} className="journey-header-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div ref={ref}>
              <motion.div className="eyebrow"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, ease: E }}>
                <span className="t-label-gold">The Bespoke Experience</span>
              </motion.div>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.1, ease: E }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: 400, color: 'var(--deep-black)',
                lineHeight: 1.05, letterSpacing: '-0.015em', margin: 0,
              }}>
              From First Vision<br /><em>to <span style={{ color: 'var(--warm-gold)' }}>Forever.</span></em>
            </motion.h2>
          </div>
          <motion.p className="t-body-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: E }}>
            The bespoke process at RAZEVÉL is deliberately unhurried. Every step
            exists to serve a single purpose — creating a garment that fits not just
            your body, but your life.
          </motion.p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical connector line */}
          <div style={{
            position: 'absolute',
            left: 'clamp(1.4rem, 3vw, 2.5rem)',
            top: 0, bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, transparent, var(--border-mid) 8%, var(--border-mid) 92%, transparent)',
          }} className="timeline-line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STEPS.map((step, i) => (
              <JourneyStep key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: 'clamp(5rem, 8vw, 8rem)',
          paddingTop: 'clamp(4rem, 6vw, 6rem)',
          borderTop: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', textAlign: 'center', gap: '2rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            color: 'var(--deep-black)', fontWeight: 400, maxWidth: '42rem',
            lineHeight: 1.3
          }}>
            "We do not make garments. We make memories that endure across generations."
          </p>
          <p className="t-label" style={{ color: 'var(--taupe)' }}>— Founder, RAZEVÉL</p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
            <a href="/bespoke" className="btn btn-primary">Begin Your Bespoke Journey</a>
            <a href="tel:+916207506369" className="btn btn-ghost">
              Call Our Atelier
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .journey-header-grid { grid-template-columns: 1fr !important; }
          .timeline-line { left: 1rem !important; }
        }
      `}</style>
    </section>
  );
}

function JourneyStep({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.1, ease: E }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'clamp(3rem, 6vw, 5rem) 1fr',
        gap: 'clamp(1.5rem, 3vw, 3.5rem)',
        paddingBlock: 'clamp(3rem, 5vw, 5rem)',
        borderBottom: index < STEPS.length - 1 ? '1px solid var(--border)' : 'none',
      }}>

      {/* Step number + dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 8, gap: 12 }}>
        <div style={{
          width: 50, height: 50, borderRadius: '50%',
          border: '1px solid var(--gold-border)',
          background: 'var(--luxury-white)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, position: 'relative', zIndex: 1,
        }}>
          <span style={{
            fontFamily: 'var(--font-serif)', fontSize: '1rem',
            color: 'var(--warm-gold)', fontWeight: 400,
          }}>{step.num}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isEven ? '1fr auto' : 'auto 1fr',
        gap: 'clamp(3rem, 6vw, 6rem)',
        alignItems: 'center',
      }} className="step-inner-grid">

        {/* Text (always first on mobile) */}
        <div style={{
          order: isEven ? 1 : 2,
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }} className="step-text">
          <div>
            <p className="t-label" style={{ color: 'var(--warm-gold)', marginBottom: 12 }}>
              Step {step.num}
            </p>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 400, color: 'var(--deep-black)',
              margin: '0 0 0.5rem', lineHeight: 1.15,
            }}>{step.title}</h3>
            <p style={{
              fontFamily: 'var(--font-serif)', fontStyle: 'italic',
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              color: 'var(--taupe)', margin: 0,
            }}>{step.subtitle}</p>
          </div>
          <p className="t-body" style={{ maxWidth: '34rem' }}>{step.body}</p>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: 'var(--soft-ivory)', padding: '0.6rem 1.25rem',
            alignSelf: 'flex-start', border: '1px solid var(--border)'
          }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--warm-gold)' }} />
            <span className="t-label" style={{ fontSize: '0.6rem', color: 'var(--stone)' }}>
              {step.detail}
            </span>
          </div>
        </div>

        {/* Illustration */}
        <div style={{
          order: isEven ? 2 : 1,
          width: 'clamp(200px, 25vw, 320px)',
          aspectRatio: '3/4',
          background: 'var(--soft-ivory)',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }} className="step-illus">
          <Image
            src={step.illustration}
            alt={step.alt}
            fill
            style={{ objectFit: 'cover', padding: step.illustration.includes('illustrations') ? '2rem' : '0' }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .step-inner-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .step-illus { width: 100% !important; max-width: 320px !important; }
          .step-text, .step-illus { order: unset !important; }
        }
      `}</style>
    </motion.div>
  );
}
