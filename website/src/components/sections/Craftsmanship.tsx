import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const STAGES = [
  { id: 'fabric', title: 'Fabric Selection', body: 'Selected by hand from India\'s finest weaving communities.', img: '/images/fabric.png' },
  { id: 'measure', title: 'Measurement', body: '22 precise measurements taken to ensure a flawless drape.', img: '/illustrations/consultation.png' },
  { id: 'pattern', title: 'Pattern Drafting', body: 'Hand-drafted exclusively for your body. Every seam calculated.', img: '/illustrations/pattern.png' },
  { id: 'cut', title: 'Cutting', body: 'Master cutters work the fabric on the bias to preserve integrity.', img: '/illustrations/fitting.png' },
  { id: 'stitch', title: 'Hand Stitching', body: 'Constructed by artisans who have spent decades perfecting the needle.', img: '/illustrations/sewing.png' },
  { id: 'embroidery', title: 'Embroidery', intricate: true, body: 'Zardozi and Aari work applied meticulously by master embroiderers.', img: '/images/craftsmanship.png' },
  { id: 'inspect', title: 'Final Inspection', body: 'Every loose thread found and corrected before the garment meets you.', img: '/images/atelier.png' },
  { id: 'pack', title: 'Packaging', body: 'Placed within our signature obsidian box, sealed with wax.', img: '/images/bespoke.png' },
];

export default function Craftsmanship() {
  const [activeStage, setActiveStage] = useState(0);

  const handleStageInView = useCallback((index: number) => {
    setActiveStage(index);
  }, []);

  return (
    <section id="craft" style={{ background: 'var(--luxury-white)', position: 'relative' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', paddingInline: 'var(--gutter)' }}>
        
        {/* Header */}
        <div style={{ paddingBlock: 'var(--section-y-sm)' }}>
          <CraftHeader />
        </div>

        {/* Sticky Scroll Area */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 6vw, 8rem)', alignItems: 'start',
          paddingBottom: 'var(--section-y)',
        }} className="craft-grid">
          
          {/* Left: Text blocks that trigger state */}
          <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50vh' }}>
            {STAGES.map((stage, i) => (
              <StageBlock key={stage.id} stage={stage} index={i} onInView={handleStageInView} />
            ))}
          </div>

          {/* Right: Sticky Image Viewer */}
          <div style={{ position: 'sticky', top: 'calc(80px + 2rem)', height: 'calc(100vh - 80px - 4rem)', display: 'flex', alignItems: 'center' }} className="hide-mobile">
            <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', background: 'var(--soft-ivory)', overflow: 'hidden' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: E }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <Image src={STAGES[activeStage].img} alt={STAGES[activeStage].title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.4) 0%, transparent 40%)' }} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .craft-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
        }
      `}</style>
    </section>
  );
}

function CraftHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '44rem' }}>
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1 }}>
        <span className="t-label-gold">Our Craft</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.1, ease: E }}
        style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 400, color: 'var(--deep-black)', lineHeight: 1.05, margin: 0,
        }}>
        Made by Hand.<br /><em style={{ color: 'var(--warm-gold)' }}>Finished by Heart.</em>
      </motion.h2>
    </div>
  );
}

const StageBlock = React.memo(function StageBlock({ stage, index, onInView }: { stage: typeof STAGES[0]; index: number; onInView: (index: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-40% 0px -40% 0px' });

  useEffect(() => {
    if (inView) {
      onInView(index);
    }
  }, [inView, onInView, index]);

  return (
    <div ref={ref} style={{
      minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      opacity: inView ? 1 : 0.3, transition: 'opacity 0.6s var(--ease)',
    }}>
      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--warm-gold)', marginBottom: '1rem' }}>
        0{index + 1}
      </span>
      <h3 style={{
        fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
        fontWeight: 400, color: 'var(--deep-black)', margin: '0 0 1rem', lineHeight: 1.1,
      }}>{stage.title}</h3>
      <p className="t-body-lg" style={{ margin: 0 }}>{stage.body}</p>
      
      {/* Mobile inline image fallback */}
      <div className="hide-desktop" style={{ marginTop: '2rem', position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
        <Image src={stage.img} alt={stage.title} fill style={{ objectFit: 'cover' }} />
      </div>
    </div>
  );
});
