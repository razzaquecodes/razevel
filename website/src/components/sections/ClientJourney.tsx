'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function FadeUp({ children, delay = 0, style = {} }: {
  children: React.ReactNode; delay?: number; style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

const steps = [
  {
    num: '01',
    title: 'Enquire',
    detail: 'Begin with a private consultation request. Share your occasion, vision, and timeline.',
    icon: '◈',
  },
  {
    num: '02',
    title: 'Consultation',
    detail: 'A personal session in our atelier or virtually. We discuss fabric, silhouette, embroidery, and your story.',
    icon: '◈',
  },
  {
    num: '03',
    title: 'Creation',
    detail: 'Your piece is handcrafted by our master artisans. You receive progress updates throughout.',
    icon: '◈',
  },
  {
    num: '04',
    title: 'Fitting & Delivery',
    detail: 'Two fittings ensure perfection. Your garment arrives in our signature RAZEVÉL packaging.',
    icon: '◈',
  },
];

export default function ClientJourney() {
  return (
    <section
      id="journey"
      style={{
        background: '#F5F2EB',
        padding: 'clamp(6rem, 12vw, 12rem) clamp(1.5rem, 4vw, 4rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative bg number */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(3rem, 6vw, 6rem)',
          right: 'clamp(1.5rem, 4vw, 4rem)',
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(6rem, 15vw, 14rem)',
          fontWeight: 300,
          color: 'rgba(140,133,122,0.1)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        05
      </div>

      <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ maxWidth: '52rem', marginBottom: 'clamp(4rem, 8vw, 8rem)' }}>
          <FadeUp>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ display: 'block', width: 24, height: 1, background: '#8C857A' }} />
              <span
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 400,
                  letterSpacing: '0.25em',
                  color: '#8C857A',
                  textTransform: 'uppercase',
                }}
              >
                Your Journey
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 300,
                color: '#0B0B0B',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                margin: 0,
              }}
            >
              From First Vision
              <br />
              <em>to Forever.</em>
            </h2>
          </FadeUp>
        </div>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            position: 'relative',
          }}
          className="journey-grid"
        >
          {/* Connecting line */}
          <div
            style={{
              position: 'absolute',
              top: 24,
              left: '12.5%',
              right: '12.5%',
              height: 1,
              background: 'linear-gradient(90deg, #8C857A, #D4AF37, #8C857A)',
              zIndex: 0,
              opacity: 0.3,
            }}
            className="journey-line"
          />

          {steps.map((step, i) => (
            <JourneyStep key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* Quote */}
        <FadeUp delay={0.5} style={{ marginTop: 'clamp(4rem, 8vw, 8rem)', textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                width: 1,
                height: 48,
                background: 'linear-gradient(to bottom, transparent, rgba(140,133,122,0.5))',
              }}
            />
            <blockquote
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#0B0B0B',
                maxWidth: '48rem',
                textAlign: 'center',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              "We do not make garments. We make memories that endure."
            </blockquote>
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: '#8C857A',
                textTransform: 'uppercase',
              }}
            >
              — Founder, RAZEVÉL
            </span>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .journey-grid { grid-template-columns: 1fr 1fr !important; }
          .journey-line { display: none !important; }
        }
        @media (max-width: 480px) {
          .journey-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function JourneyStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      style={{
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        position: 'relative',
        zIndex: 1,
        borderLeft: index > 0 ? '1px solid rgba(140,133,122,0.15)' : 'none',
      }}
    >
      {/* Step dot */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          border: '1px solid rgba(212,175,55,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F5F2EB',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '0.75rem',
            fontWeight: 300,
            color: '#D4AF37',
          }}
        >
          {step.num}
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          fontWeight: 400,
          color: '#0B0B0B',
          margin: 0,
        }}
      >
        {step.title}
      </h3>

      <p
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
          fontWeight: 300,
          color: '#6B6359',
          lineHeight: 1.8,
          margin: 0,
        }}
      >
        {step.detail}
      </p>
    </motion.div>
  );
}
