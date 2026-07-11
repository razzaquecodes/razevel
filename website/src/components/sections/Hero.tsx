'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  
  // Ambient overlays
  const lampGlowRef = useRef<HTMLDivElement>(null);
  const dustRef = useRef<SVGGElement>(null);

  useEffect(() => {
    // 1. Continuous ambient animations
    const ctx = gsap.context(() => {
      // Glow pulse
      gsap.to(lampGlowRef.current, {
        opacity: 0.85,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Dust float
      if (dustRef.current) {
        const particles = dustRef.current.children;
        Array.from(particles).forEach((particle) => {
          gsap.to(particle, {
            x: 'random(-20, 20)',
            y: 'random(-25, 25)',
            opacity: 'random(0.1, 0.65)',
            duration: 'random(4.5, 8)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        });
      }
    }, containerRef);

    // 2. Scroll-driven parallax & fade
    const scrollCtx = gsap.context(() => {
      // Subtle parallax on full screen background
      gsap.to(bgImageRef.current, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Smooth fade of left side content
      gsap.to(textColRef.current, {
        opacity: 0,
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      scrollCtx.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        background: 'var(--soft-ivory)',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* 1. Full Screen Background Image */}
      <div 
        ref={bgImageRef}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          width: '100%', 
          height: '108%', // slightly taller to support parallax translation down
          top: '-4%', 
          zIndex: 1 
        }}
      >
        <Image
          src="/images/hero-tailor.png"
          alt="Maison Razevél Atelier Master Tailor sketch background"
          fill
          priority
          style={{ 
            objectFit: 'cover',
            objectPosition: 'right center' // keeps character visible on mobile/tablets
          }}
        />
      </div>

      {/* Paper texture grain overlay */}
      <div className="grain" style={{ opacity: 0.04, pointerEvents: 'none', zIndex: 5 }} />

      {/* Ambient lamp glow overlay (light wash over the tailor canvas) */}
      <div
        ref={lampGlowRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 75% 35%, rgba(233, 206, 124, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          opacity: 0.75,
          zIndex: 3,
        }}
      />

      {/* Floating dust particles overlay */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 4 }}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <g ref={dustRef} fill="var(--color-gold)" opacity="0.35">
          <circle cx="340" cy="110" r="1.5" />
          <circle cx="280" cy="480" r="1" />
          <circle cx="620" cy="160" r="2" />
          <circle cx="790" cy="290" r="1.2" />
          <circle cx="550" cy="320" r="1.8" />
          <circle cx="310" cy="250" r="1.4" />
          <circle cx="680" cy="80" r="1.5" />
          <circle cx="850" cy="450" r="2" />
        </g>
      </svg>

      {/* 2. Editorial Typography Content Overlay */}
      <div
        className="container-max"
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 10,
          paddingInline: 'var(--gutter)',
        }}
      >
        <div
          ref={textColRef}
          style={{
            maxWidth: '36rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          className="hero-content-wrapper"
        >
          <span
            className="t-label"
            style={{
              letterSpacing: '0.35em',
              color: 'var(--color-grey-light)',
              marginBottom: '1.5rem',
              display: 'block',
              fontWeight: 500,
            }}
          >
            OFFICIAL DIGITAL FLAGSHIP
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 5.5vw, 6.2rem)',
              lineHeight: 1.06,
              fontWeight: 400,
              color: 'var(--color-black)',
              letterSpacing: '-0.02em',
              margin: '0 0 2rem',
            }}
          >
            Crafted for<br />
            <em style={{ color: 'var(--color-gold)' }}>Forever.</em>
          </h1>

          <p
            className="t-body-lg"
            style={{
              color: 'var(--color-grey)',
              lineHeight: 1.75,
              marginBottom: '3rem',
              fontWeight: 300,
            }}
          >
            India's premier handcrafted luxury ethnic wear house. Every garment begins not with fabric, but with a conversation.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '2.5rem',
              alignItems: 'center',
              marginBottom: 'clamp(4rem, 8vw, 7rem)',
            }}
          >
            <Link
              href="/collections/men"
              className="btn btn-primary"
              style={{
                padding: '1.15rem 2.25rem',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                background: 'var(--color-black)',
                color: 'var(--color-white)',
              }}
            >
              EXPLORE COLLECTIONS →
            </Link>

            <Link
              href="/bespoke"
              className="btn btn-ghost"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-black)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--color-black)',
                paddingBottom: '4px',
              }}
            >
              BOOK APPOINTMENT
            </Link>
          </div>

          {/* Luxury Craftsmanship Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span className="t-label" style={{ fontSize: '0.55rem', letterSpacing: '0.2em' }}>
              PURE CRAFTSMANSHIP
            </span>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1rem',
                  color: 'var(--color-gold)',
                  fontWeight: 500,
                  transform: 'translateY(-1px)',
                }}
              >
                R
              </span>
            </div>
            <span className="t-label" style={{ fontSize: '0.55rem', letterSpacing: '0.2em' }}>
              TIMELESS HERITAGE
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-content-wrapper {
            margin: 0 auto;
            text-align: center;
            align-items: center;
          }
          .hero-content-wrapper div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
