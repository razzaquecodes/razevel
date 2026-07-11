'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * LoadingScreen — Production-grade overlay preloader.
 *
 * Implements the tailor's scissors fabric-cut animation as a fixed overlay.
 * The application is mounted immediately underneath and remains fully interactive
 * after the animation completes and the overlay is unmounted.
 */
export default function LoadingScreen() {
  const [isComplete, setIsComplete] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const chalkLineRef = useRef<HTMLDivElement>(null);
  const frayTrackRef = useRef<HTMLDivElement>(null);
  const fabricTopRef = useRef<HTMLDivElement>(null);
  const fabricBottomRef = useRef<HTMLDivElement>(null);
  const scissorsRef = useRef<HTMLDivElement>(null);
  const bladeTopRef = useRef<SVGGElement>(null);
  const bladeBottomRef = useRef<SVGGElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  // Reveal elements
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 1. Session check to prevent double loading in the same session
    const hasPlayed = sessionStorage.getItem('razevel_loaded');
    if (hasPlayed) {
      setIsComplete(true);
      return;
    }

    // 2. Add scroll lock style on body
    document.body.classList.add('is-loading');

    // 3. Initialize GSAP timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('razevel_loaded', 'true');
          // Remove body scroll lock
          document.body.classList.remove('is-loading');
          // Unmount the loader completely from React tree
          setIsComplete(true);
        },
      });

      // Initial States
      gsap.set(chalkLineRef.current, { scaleX: 0 });
      gsap.set(frayTrackRef.current, { width: '0%' });
      gsap.set(scissorsRef.current, { left: -70, opacity: 0 });
      gsap.set([bladeTopRef.current, bladeBottomRef.current], { rotate: 0 });
      gsap.set([fabricTopRef.current, fabricBottomRef.current], { x: 0, y: 0, rotate: 0, opacity: 1 });
      gsap.set([eyebrowRef.current, titleRef.current, tagRef.current], { opacity: 0, y: 16 });

      // 1. Draw Tailor's chalk guide line (fast, elegant chalk)
      tl.to(chalkLineRef.current, { scaleX: 1, duration: 0.3, ease: 'power2.inOut' });

      // 2. Shears enter the seam edge
      tl.to(scissorsRef.current, { opacity: 1, left: -20, duration: 0.15 }, '-=0.05');

      // 3. Cut: Scissors snip rhythmically across the width
      tl.to(scissorsRef.current, { left: 'calc(100% - 10px)', duration: 0.8, ease: 'power1.inOut' }, 'cut');
      tl.to(frayTrackRef.current, { width: '100%', duration: 0.8, ease: 'power1.inOut' }, 'cut');

      // Snip blades up and down
      tl.to(bladeTopRef.current, {
        rotate: 16,
        duration: 0.12,
        repeat: 5,
        yoyo: true,
        ease: 'power1.inOut',
      }, 'cut');
      tl.to(bladeBottomRef.current, {
        rotate: -16,
        duration: 0.12,
        repeat: 5,
        yoyo: true,
        ease: 'power1.inOut',
      }, 'cut');

      // Flashes during cuts
      tl.to(flashRef.current, {
        opacity: 1,
        duration: 0.06,
        repeat: 5,
        yoyo: true,
        ease: 'none',
      }, 'cut');

      // 4. Shears lift and guidelines vanish
      tl.to(scissorsRef.current, { opacity: 0, duration: 0.15 }, '-=0.05');
      tl.to(chalkLineRef.current, { opacity: 0, duration: 0.1 }, '<');
      tl.to(frayTrackRef.current, { opacity: 0, duration: 0.1 }, '<');

      // 5. Fabric panels pull apart vertically with rotation
      tl.to(fabricTopRef.current, { y: '-115%', rotate: -4, opacity: 0, duration: 0.45, ease: 'power2.inInOut' }, '+=0.02');
      tl.to(fabricBottomRef.current, { y: '115%', rotate: 4, opacity: 0, duration: 0.45, ease: 'power2.inInOut' }, '<');

      // 6. Brand name details reveal
      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.35 }, '-=0.25');
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.2');
      tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.35 }, '-=0.15');

      // 7. Fade out the entire overlay container to reveal mounted app smoothly
      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.out',
      }, '+=0.15');
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.classList.remove('is-loading');
    };
  }, []);

  // Unmount completely when animation finishes or session storage says it has loaded
  if (isComplete) {
    return null;
  }

  return (
    <div 
      ref={containerRef} 
      className="preloader-stage"
      style={{
        opacity: 1,
        transition: 'opacity 0.5s ease',
      }}
    >
      {/* Brand Reveal Details */}
      <div className="preloader-reveal">
        <p ref={eyebrowRef} style={{ fontSize: '11px', letterSpacing: '.45em', textTransform: 'uppercase', color: 'var(--color-grey-light)', marginBottom: '22px' }}>
          Maison Razevél · Est. 2026
        </p>
        <h1 ref={titleRef} style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-gold-light)', fontSize: 'clamp(2.6rem, 9vw, 6.5rem)', letterSpacing: '.03em', margin: 0 }}>
          RAZEVÉL
        </h1>
        <p ref={tagRef} style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-gold)', fontSize: '1.1rem', marginTop: '20px' }}>
          Crafted for Forever.
        </p>
      </div>

      {/* Seam vectors */}
      <div ref={chalkLineRef} id="chalkLine" />
      <div ref={frayTrackRef} id="frayTrack" />

      {/* Fabric Panels */}
      <div ref={fabricTopRef} id="fabricTop" className="fabric" />
      <div ref={fabricBottomRef} id="fabricBottom" className="fabric" />

      {/* Scissors Group */}
      <div ref={scissorsRef} id="scissorsWrap">
        <svg viewBox="0 0 60 60">
          <g ref={bladeTopRef} className="blade" id="bladeTop">
            <path d="M30,30 L56,22 L52,30 L56,38 Z" />
          </g>
          <g ref={bladeBottomRef} className="blade" id="bladeBottom">
            <path d="M30,30 L56,22 L52,30 L56,38 Z" />
          </g>
          <circle className="loop" cx="12" cy="20" r="7" />
          <circle className="loop" cx="12" cy="40" r="7" />
          <path className="loop" d="M18,23 L30,30" strokeLinecap="round" />
          <path className="loop" d="M18,37 L30,30" strokeLinecap="round" />
          <circle className="pivot" cx="30" cy="30" r="2.4" />
        </svg>
        <div ref={flashRef} id="snipFlash" />
      </div>
    </div>
  );
}
