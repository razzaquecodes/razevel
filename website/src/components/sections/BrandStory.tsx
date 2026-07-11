import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
      transition={{ duration: 1.2, delay, ease: E }}>
      {children}
    </motion.div>
  );
}

const VALUES = [
  { num: '01', title: 'Heritage', body: 'Born from a master tailor\'s hands. Every technique passed down, refined, and elevated across generations.' },
  { num: '02', title: 'Precision', body: 'Three measurements. Two fittings. One perfect garment. We will not release a piece until it is exactly right.' },
  { num: '03', title: 'Materials', body: 'Banarasi silks, Kanjeevaram brocades, Mukaish georgettes — sourced directly from India\'s finest weavers.' },
  { num: '04', title: 'Exclusivity', body: 'Nothing is made in advance. Every garment begins the moment you say yes. There is no other piece like yours.' },
];

export default function BrandStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="heritage" ref={sectionRef}
      style={{ background: 'var(--soft-ivory)', paddingBlock: 'var(--section-y)', paddingInline: 'var(--gutter)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* Top: heading + intro */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 6vw, 7rem)',
          marginBottom: 'clamp(4rem, 7vw, 7rem)',
          alignItems: 'end',
        }} className="heritage-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Reveal>
              <div className="eyebrow">
                <span className="t-label-gold">Our Heritage</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                fontWeight: 400, color: 'var(--deep-black)',
                lineHeight: 1.05, letterSpacing: '-0.015em', margin: 0,
              }}>
                A Legacy Born<br />
                <em>in Every Stitch.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="t-body-lg">
              RAZEVÉL began in a single workshop in Patna, where my father's hands
              shaped the most important garments of hundreds of families. We carry
              that same devotion into every commission we accept today — the difference
              is that we now combine generations of craft with a modern luxury sensibility
              that India has never seen before.
            </p>
          </Reveal>
        </div>

        {/* Main: illustration + copy + values */}
        <div style={{
          display: 'grid', gridTemplateColumns: '5fr 7fr',
          gap: 'clamp(3rem, 5vw, 6rem)',
          alignItems: 'start',
        }} className="heritage-main-grid">

          {/* Illustration panel */}
          <Reveal delay={0.05}>
            <div style={{ position: 'relative' }}>
              <div style={{
                background: 'var(--luxury-white)',
                aspectRatio: '3/4',
                position: 'relative', overflow: 'hidden',
              }}>
                <motion.div style={{ y: imgY, position: 'absolute', inset: '-10% 0', height: '120%' }}>
                  <Image
                    src="/images/craftsmanship.png"
                    alt="RAZEVÉL master tailor at work"
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </motion.div>
                {/* Subtle overlay to fit aesthetic */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.03)', pointerEvents: 'none' }} />
              </div>

              {/* Floating label */}
              <div style={{
                position: 'absolute', bottom: -24, right: -24,
                background: 'var(--deep-black)',
                padding: '1.5rem 2rem',
                boxShadow: '0 24px 40px rgba(8,8,8,0.1)',
                minWidth: 200,
              }}>
                <p style={{
                  fontFamily: 'var(--font-serif)', fontSize: '2.5rem',
                  fontWeight: 400, color: 'var(--warm-gold)', margin: '0 0 4px', lineHeight: 1,
                }}>800+</p>
                <p className="t-label" style={{ fontSize: '0.55rem', color: 'rgba(250,250,250,0.6)' }}>Hours per Bespoke Piece</p>
              </div>
            </div>
          </Reveal>

          {/* Values grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {VALUES.map((v, i) => (
              <ValueRow key={v.num} item={v} index={i} />
            ))}

            <Reveal delay={0.4} style={{ marginTop: '3.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="/about" className="btn btn-outline">Our Full Story</a>
              <a href="/bespoke" className="btn btn-ghost" style={{ alignSelf: 'center' }}>
                Start Bespoke Journey →
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .heritage-grid, .heritage-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const ValueRow = React.memo(function ValueRow({ item, index }: { item: typeof VALUES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: E }}
      style={{
        padding: '2rem 0',
        borderBottom: '1px solid var(--border)',
        display: 'grid', gridTemplateColumns: '4rem 1fr',
        gap: '1.5rem', alignItems: 'start',
      }}>
      <span style={{
        fontFamily: 'var(--font-serif)', fontSize: '1rem',
        color: 'var(--warm-gold)', fontWeight: 400, paddingTop: 4,
      }}>{item.num}</span>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
          fontWeight: 400, color: 'var(--deep-black)', margin: '0 0 0.8rem',
        }}>{item.title}</h3>
        <p className="t-body" style={{ margin: 0 }}>{item.body}</p>
      </div>
    </motion.div>
  );
});
