'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

const VALUES = [
  { icon: '◈', title: 'Craft First', body: 'We never compromise on technique. Every artisan at RAZEVÉL has trained for at minimum seven years before touching a commission piece.' },
  { icon: '◈', title: 'Made to Order', body: 'We do not hold inventory. Every garment is begun when you commission it, and completed when it is exactly right — not before.' },
  { icon: '◈', title: 'One of One', body: 'When your piece is complete, the pattern is archived — but the piece will never be replicated. You own something truly singular.' },
  { icon: '◈', title: 'Timeless, Not Trendy', body: 'We design for decades, not seasons. A RAZEVÉL piece should be as beautiful in twenty years as it is on the day it arrives.' },
  { icon: '◈', title: 'Complete Transparency', body: 'You know exactly what goes into your garment — the fabric, the artisan, the hours. We are proud of our process and hide nothing.' },
  { icon: '◈', title: 'Legacy Thinking', body: 'We measure success not in sales, but in pieces that are handed down. When a daughter asks to wear her mother\'s lehenga — that is RAZEVÉL.' },
];

export default function AboutClient() {
  return (
    <main>
      {/* Hero — Magazine style */}
        <section style={{
          background: '#FFFFFF',
          paddingTop: 'calc(72px + clamp(5rem, 9vw, 9rem))',
          paddingBottom: 'clamp(5rem, 9vw, 9rem)',
          paddingInline: 'var(--gutter)',
        }}>
          <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>
                <span className="t-label-gold">Our Story</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3rem, 7vw, 7.5rem)',
                fontWeight: 400, color: 'var(--black)',
                lineHeight: 1.0, letterSpacing: '-0.02em', margin: 0,
                maxWidth: '20ch',
              }}>
                Built on a<br />Father's<br /><em style={{ color: 'var(--gold)' }}>Hands.</em>
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Opener — Pull quote */}
        <section style={{
          background: 'var(--ivory)',
          padding: 'clamp(4rem, 8vw, 8rem) var(--gutter)',
        }}>
          <div style={{ maxWidth: 'var(--max-w-narrow)', margin: '0 auto', textAlign: 'center' }}>
            <Reveal>
              <blockquote style={{
                fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
                fontWeight: 400, color: 'var(--black)',
                lineHeight: 1.35, margin: 0,
              }}>
                "I watched my father shape a woman's wedding lehenga for sixty hours.
                Not because it took that long — because it had to be perfect."
              </blockquote>
              <p className="t-label" style={{ marginTop: '2rem', color: 'var(--taupe)' }}>
                — Founder, RAZEVÉL
              </p>
            </Reveal>
          </div>
        </section>

        {/* Story body — editorial columns */}
        <section style={{
          background: '#FFFFFF',
          padding: 'clamp(5rem, 9vw, 9rem) var(--gutter)',
        }}>
          <div style={{
            maxWidth: 'var(--max-w)', margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(4rem, 7vw, 8rem)', alignItems: 'start',
          }} className="story-grid">

            {/* Left: Image + pullout */}
            <Reveal delay={0.05}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  aspectRatio: '3/4', overflow: 'hidden',
                  background: 'var(--cream)', position: 'relative',
                }}>
                  <Image src="/images/craftsmanship.png" alt="RAZEVÉL artisan at work"
                    fill style={{ objectFit: 'cover' }} />
                  {/* Gold inset */}
                  <div style={{ position: 'absolute', inset: 16, border: '1px solid rgba(201,168,76,0.2)', pointerEvents: 'none' }} />
                </div>
                <div style={{
                  position: 'absolute', bottom: -24, right: -24,
                  background: 'var(--black)', padding: '1.5rem',
                  boxShadow: '0 8px 32px rgba(15,15,15,0.12)',
                  minWidth: 200,
                }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--gold)', margin: '0 0 4px', lineHeight: 1 }}>23+</p>
                  <p className="t-label" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.55rem' }}>Years of Master Craft</p>
                </div>
              </div>
            </Reveal>

            {/* Right: Story text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingTop: '1rem' }}>
              <Reveal delay={0.1}>
                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 400, color: 'var(--black)',
                  lineHeight: 1.2, margin: 0,
                }}>Where RAZEVÉL Began.</h2>
              </Reveal>

              {[
                'RAZEVÉL began in a single workshop in Patna, where my father sat for decades creating garments for some of the city\'s most important families. He was not well-known. He did not advertise. He did not need to. His work spoke for itself, and his clients brought him others.',
                'I grew up watching those hands. I watched him take 22 measurements for a single kurta. I watched him unpick a seam at 11 PM because the drape was "almost right, but not yet." I watched him turn away orders when he was too busy — because overextending meant compromising, and compromising was not an option.',
                'When I chose to build RAZEVÉL, I chose to take everything he taught me and build around it — a brand worthy of the craft. Not just a business, but an institution. One that could carry his philosophy forward for generations.',
                'We are still small. We choose to be. We accept a limited number of commissions each season so that every piece receives the devotion it deserves. We will not grow faster than our craft can sustain.',
              ].map((para, i) => (
                <Reveal key={i} delay={0.15 + i * 0.08}>
                  <p className="t-body-lg" style={{ margin: 0 }}>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .story-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Values */}
        <section style={{ background: 'var(--ivory)', padding: 'clamp(5rem, 9vw, 9rem) var(--gutter)' }}>
          <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
            <Reveal style={{ marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '42rem' }}>
                <div className="eyebrow"><span className="t-label-gold">What We Believe</span></div>
                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 400, color: 'var(--black)',
                  lineHeight: 1.1, margin: 0,
                }}>Six Principles That<br /><em>Never Change.</em></h2>
              </div>
            </Reveal>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(1.5rem, 3vw, 3rem)',
            }} className="values-grid">
              {VALUES.map((val, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div style={{
                    background: '#FFFFFF',
                    padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                    height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem',
                    borderTop: '2px solid var(--gold-border)',
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)', fontSize: '1.2rem',
                      fontWeight: 400, color: 'var(--black)', margin: 0,
                    }}>{val.title}</h3>
                    <p className="t-body" style={{ margin: 0, fontSize: '0.875rem' }}>{val.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .values-grid { grid-template-columns: 1fr !important; } }
            @media (max-width: 960px) and (min-width: 769px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          `}</style>
        </section>

        {/* Illustration + manifesto */}
        <section style={{ background: '#FFFFFF', padding: 'clamp(5rem, 9vw, 9rem) var(--gutter)' }}>
          <div style={{
            maxWidth: 'var(--max-w)', margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(4rem, 7vw, 8rem)', alignItems: 'center',
          }} className="manifesto-grid">
            <Reveal delay={0.1}>
              <div style={{ position: 'relative', aspectRatio: '1/1.1', background: 'var(--ivory)', overflow: 'hidden' }}>
                <Image src="/illustrations/consultation.png" alt="RAZEVÉL atelier consultation"
                  fill style={{ objectFit: 'contain', padding: '2rem' }} />
              </div>
            </Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <Reveal>
                <h2 style={{
                  fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 400, color: 'var(--black)', lineHeight: 1.1, margin: 0,
                }}>Our Promise<br /><em style={{ color: 'var(--gold)' }}>to You.</em></h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="t-body-lg">
                  We promise that every garment we create is made with the same
                  intention as the first one my father ever made — to be perfect.
                  Not commercially perfect. Not efficiently perfect. Truly, humanly,
                  artistically perfect.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="t-body-lg">
                  We promise to tell you the truth about timelines, about fabrics,
                  about what is possible and what requires patience. We will never
                  overpromise to win your commission.
                </p>
              </Reveal>
              <Reveal delay={0.3} style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href="/bespoke" className="btn btn-primary">Begin Your Journey</Link>
                <Link href="/#collections" className="btn btn-ghost"
                  style={{ color: 'var(--black)', borderColor: 'rgba(15,15,15,0.2)' }}>
                  View Collections →
                </Link>
              </Reveal>
            </div>
          </div>
          <style>{`@media (max-width: 768px) { .manifesto-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>
      </main>
  );
}
