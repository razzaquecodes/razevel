'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

function Reveal({ children, delay = 0, style = {} }: {
  children: React.ReactNode; delay?: number; style?: React.CSSProperties;
}) {
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

export default function Atelier() {
  return (
    <section id="atelier"
      style={{ background: '#FFFFFF', paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <Reveal style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="eyebrow"><span className="t-label-gold">Our Atelier</span></div>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                fontWeight: 400, color: 'var(--black)',
                lineHeight: 1.05, letterSpacing: '-0.015em', margin: 0,
              }}>Four Divisions.<br /><em>One Standard.</em></h2>
            </div>
            <p className="t-body-lg" style={{ maxWidth: '34rem' }}>
              RAZEVÉL operates across four dedicated divisions, each with its own
              creative director and artisan team — united by a single uncompromising
              standard of excellence.
            </p>
          </div>
        </Reveal>

        {/* Divisions grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
          background: 'var(--border)',
        }} className="atelier-grid">
          {[
            { name: 'Atelier', desc: 'Ready-to-commission ethnic couture for every occasion.', img: '/images/atelier.png' },
            { name: 'Bridal', desc: 'Bridal lehengas, sarees, and complete trousseau services.', img: '/images/hero.png' },
            { name: 'Homme', desc: 'Sherwanis, bandhgalas, and men\'s bespoke tailoring.', img: '/images/bespoke.png' },
            { name: 'Bespoke', desc: 'Fully custom, one-of-one garments. Your vision, our craft.', img: '/images/craftsmanship.png' },
          ].map((div, i) => (
            <DivisionCard key={div.name} div={div} index={i} />
          ))}
        </div>

        {/* Bottom illustration + copy */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(4rem, 7vw, 7rem)',
          alignItems: 'center',
          marginTop: 'clamp(5rem, 8vw, 8rem)',
        }} className="atelier-bottom-grid">
          <Reveal delay={0.05}>
            <div style={{ position: 'relative', aspectRatio: '4/5', background: 'var(--ivory)', overflow: 'hidden' }}>
              <Image src="/illustrations/fitting.png" alt="RAZEVÉL final fitting"
                fill style={{ objectFit: 'contain', padding: '2rem' }} />
            </div>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Reveal>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 400, color: 'var(--black)',
                lineHeight: 1.15, margin: 0,
              }}>The Atelier<br /><em style={{ color: 'var(--gold)' }}>Experience.</em></h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="t-body-lg">
                When you step into RAZEVÉL — physically or virtually — you are not
                entering a showroom. You are entering a studio where the work of
                master craftspeople surrounds you, where your garment has not yet
                been imagined, and where everything that follows will be built
                entirely for you.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a href="/bespoke" className="btn btn-primary">Experience the Atelier</a>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .atelier-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .atelier-bottom-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .atelier-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function DivisionCard({ div, index }: { div: { name: string; desc: string; img: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: E }}
      style={{
        background: '#FFFFFF', position: 'relative',
        overflow: 'hidden', aspectRatio: '3/4',
      }}
      className="division-card">
      <Image src={div.img} alt={`RAZEVÉL ${div.name}`} fill
        style={{ objectFit: 'cover', transition: 'transform 0.8s var(--ease-out)' }}
        className="div-img" />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(15,15,15,0.85) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      }}>
        <p className="t-label-gold" style={{ fontSize: '0.55rem', marginBottom: 6 }}>RAZEVÉL</p>
        <h3 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          fontWeight: 400, color: '#FFFFFF', margin: '0 0 0.5rem',
        }}>{div.name}</h3>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.75rem',
          fontWeight: 300, color: 'rgba(255,255,255,0.55)',
          margin: 0, lineHeight: 1.65,
        }}>{div.desc}</p>
      </div>
      <style>{`.division-card:hover .div-img { transform: scale(1.06) !important; }`}</style>
    </motion.div>
  );
}
