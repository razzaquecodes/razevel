'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, MapPin, Sparkles, ChevronDown, Check } from 'lucide-react';
import { useAuth } from '@/src/context/AuthContext';
import { useMeasurements } from '@/src/hooks/useSupabase';
import { useToast } from '@/src/components/ui/Toast';
import { revealUp, splitTextReveal, drawLine } from '@/src/animations';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Data Definitions ────────────────────────────────────────────────────────

const JOURNEY_STEPS = [
  { num: '01', title: 'Private Consultation', body: 'An unhurried conversation over Darjeeling tea. We explore your personal style legacy, heritage references, and design dreams.', detail: '1.5 Hours · Atelier or Virtual' },
  { num: '02', title: 'Design Direction', body: 'Our designers draft custom sketches exclusively for you. Your posture, silhouette, and movement shape the artistic blueprint.', detail: '3–5 Days · Design House' },
  { num: '03', title: 'Fabric Selection', body: 'Discover raw mulberry silks, fine Kanjeevarams, and pure Italian wools sourced from historical weaving clusters.', detail: 'Atelier Archive' },
  { num: '04', title: 'Measurements', body: '22 precise anatomical coordinates are taken. We record not just dimensions, but how you breathe, sit, and move.', detail: 'Tailor Vault' },
  { num: '05', title: 'Hand Embroidery', body: 'Artisans apply fine zardozi, micro-aari, and dabka stitching. A single garment can take up to 800 hours of pure devotion.', detail: 'Handcrafted' },
  { num: '06', title: 'Tailoring & Fitting', body: 'The canvas is cut on the bias to preserve textile drape. Two fitting sessions shape the garment into a second skin.', detail: 'Savile Row Grade' },
  { num: '07', title: 'Luxury Quality Inspection', body: 'Our chief master tailor checks every micron of stitching under natural north-facing light.', detail: 'Zero Compromise' },
  { num: '08', title: 'Luxury Packaging', body: 'Wrapped in acid-free tissue and placed inside a velvet-lined wooden chest sealed with warm wax.', detail: 'Signature Monogram' },
  { num: '09', title: 'Atelier Delivery', body: 'Our white-glove concierge delivers the masterpiece directly to your door, accompanied by a handwritten note.', detail: 'Worldwide Shipping' },
];

const ARTISANS = [
  { role: 'Master Tailor', quote: 'A perfect fit is not about numbers. It is about how the fabric flows when the wearer walks with pride.', name: 'Pranab Acharya', experience: '42 Years of Custom Tailoring' },
  { role: 'Embroidery Artist', quote: 'Every stitch of zardozi is a letter in a poem written in pure gold thread.', name: 'Zubair Khan', experience: 'Inherited Craft Heritage' },
  { role: 'Pattern Maker', quote: 'The paper pattern is the soul of the garment. It must capture the exact curves of life.', name: 'Meera Deshmukh', experience: 'London College of Fashion Alum' },
  { role: 'Fabric Specialist', quote: 'We do not source textiles. We curate heritage. We know the weaver of every thread.', name: 'Rohan Sethi', experience: 'Textile Archivist' },
];

const FABRICS = [
  { name: 'Italian Wool', desc: 'Super 150s merino wool offering exceptional drape, thermal breathability, and luxurious crease-recovery.', origin: 'Biella, Italy' },
  { name: 'Raw Mulberry Silk', desc: 'Hand-loomed wild silk with a textured slub, natural organic sheen, and structure ideal for royal sherwanis.', origin: 'Bhagalpur, India' },
  { name: 'Banarasi Brocade Silk', desc: 'Intricately woven with real zari (gold and silver threads), depicting historic Mughal patterns.', origin: 'Varanasi, India' },
  { name: 'Silk Velvet', desc: 'Ultra-fluid drape with a deep, light-absorbing pile that shifts in tone under warm chandelier lighting.', origin: 'Atelier Exclusive' },
  { name: 'Jamawar', desc: 'Fabled jacquard weave with paisley motifs, originally made for Kashmiri royalty.', origin: 'Kashmir, India' },
  { name: 'Organza Silk', desc: 'Sheer, lightweight, and structured to hold sculptural silhouettes and architectural ruffles.', origin: 'Chanderi, India' },
];

const EMBROIDERIES = [
  { name: 'Zardozi', desc: 'Historic metal embroidery using gold wires, copper coils, and semiprecious stones.', img: '/images/craftsmanship.png' },
  { name: 'Aari Stitching', desc: 'Concentric loop embroidery executed with a fine hook needle, creating rich fluid shading.', img: '/images/atelier.png' },
  { name: 'Dabka Work', desc: 'Coiled spring-like metallic wires sewn in relief to form multidimensional floral patterns.', img: '/images/fabric.png' },
  { name: 'Resham Silk', desc: 'Satin-stitch embroidery using untwisted silk threads for a paint-like smooth finish.', img: '/images/journal.png' },
  { name: 'Pearl & Cut Dana', desc: 'Hand-sewn freshwater seed pearls paired with faceted glass beads that shimmer subtly.', img: '/images/bespoke.png' },
];

const FAQS = [
  { q: 'How long does a bespoke garment take?', a: 'Typically, a bespoke commission requires 6 to 12 weeks depending on the complexity of hand embroidery. Simple blazers or sherwanis without heavy embroidery can be completed in 4 to 6 weeks.' },
  { q: 'Can I customize the embroidery and colors?', a: 'Absolutely. Every motif, thread type, colorway, and pattern can be customized. Our designers will draw new sketches based on your inputs.' },
  { q: 'Do you ship internationally?', a: 'Yes. We offer white-glove international shipping to over 80 countries, with custom duties and taxes handled directly by our logistics team.' },
  { q: 'How many fittings will I need?', a: 'We require a minimum of two fittings: a toile fitting (canvas mockup) and a final fitting. Fittings can be conducted in our Patna atelier, at one of our trunk shows, or via virtual concierge.' },
];

export default function BespokeClient() {
  const { user } = useAuth();
  const { measurements } = useMeasurements();
  const { showToast } = useToast();

  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    type: 'Boutique Visit',
    date: '',
    time: '',
    occasion: 'Wedding Commission',
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);

  // Measurement State
  const [measurementMode, setMeasurementMode] = useState<'saved' | 'new' | 'someone_else' | 'ai'>('new');
  const [selectedProfileId, setSelectedProfileId] = useState('');

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial GSAP animations
      if (headlineRef.current) {
        splitTextReveal(headlineRef.current, { duration: 1, stagger: 0.05 });
      }

      // Scroll reveals
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        revealUp(el, { trigger: el, y: 30, duration: 1.2 });
      });

      // Animate timeline connector line
      const pathLine = document.querySelector('.timeline-path');
      if (pathLine) {
        drawLine(pathLine, { trigger: '.timeline-container', start: 'top 60%', duration: 2 });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate luxury API booking
    await new Promise((resolve) => setTimeout(resolve, 1500));
    showToast('Your Atelier consultation request has been received. Our concierge will call you within 24 hours.', 'success');
    setFormData({
      type: 'Boutique Visit',
      date: '',
      time: '',
      occasion: 'Wedding Commission',
      notes: '',
    });
    setSubmitting(false);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main style={{ background: 'var(--color-black)', color: 'var(--color-white)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* ── SECTION 1: LUXURY HERO ── */}
      <section 
        ref={heroRef}
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Image 
          src="/images/hero.png" 
          alt="Couture craftsmanship background" 
          fill 
          priority 
          style={{ objectFit: 'cover', opacity: 0.25 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 20%, rgba(8,8,8,0.9) 100%)' }} />
        
        <div className="container-max" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem', letterSpacing: '0.4em' }}>RAZEVÉL ATELIER</span>
          <h1 
            ref={headlineRef}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 6.5rem)',
              lineHeight: 1.1,
              fontWeight: 400,
              maxWidth: '65rem',
              margin: '0 auto 2rem',
              color: 'var(--color-white)',
            }}
          >
            Every Masterpiece Begins With A Conversation.
          </h1>
          <p 
            className="reveal-up t-body-lg" 
            style={{ color: 'rgba(250,250,250,0.6)', maxWidth: '36rem', margin: '0 auto 3.5rem' }}
          >
            Every RAZEVÉL commission is handcrafted exclusively for one individual. No shortcuts. No blocks. Just pure, uncompromised sartorial devotion.
          </p>
          <div className="reveal-up">
            <button 
              onClick={scrollToForm}
              className="btn btn-gold" 
              style={{ padding: '1.25rem 2.5rem', fontSize: '0.8rem' }}
            >
              Begin Your Bespoke Journey
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.5 }}>
          <span className="t-label" style={{ fontSize: '0.5rem', color: 'rgba(250,250,250,0.5)' }}>Scroll to Discover</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* ── SECTION 2: WHAT BESPOKE MEANS ── */}
      <section 
        ref={storyRef}
        style={{
          paddingBlock: 'var(--section-y)',
          background: '#0c0c0c',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 8vw, 8rem)', alignItems: 'center' }}>
          <div className="reveal-up">
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>THE COUTURE MANIFESTO</span>
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: '2rem',
                color: 'var(--color-white)',
              }}
            >
              The Antidote to the Ordinary.
            </h2>
            <p className="t-body-lg" style={{ color: 'rgba(250,250,250,0.7)', marginBottom: '1.5rem', fontWeight: 300 }}>
              To commission a RAZEVÉL garment is to experience clothing as a fine art. We do not make in anticipation of a sale. We do not mass manufacture. 
            </p>
            <p className="t-body" style={{ color: 'rgba(250,250,250,0.5)', lineHeight: 1.8 }}>
              Each design is conceived from a blank canvas. Our master tailors map your body, your posture, and your style aspirations. Hand-embellished by craftsmen whose families have sewn for emperors, the resulting creation is singular — a heritage piece crafted to survive generations.
            </p>
          </div>
          <div className="reveal-up" style={{ position: 'relative', aspectRatio: '4/5', background: '#111', overflow: 'hidden' }}>
            <Image 
              src="/images/craftsmanship.png" 
              alt="Tailor cutting fabric with heavy scissors" 
              fill 
              style={{ objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 100px rgba(0,0,0,0.8)' }} />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE BESPOKE JOURNEY ── */}
      <section 
        className="timeline-container"
        style={{ paddingBlock: 'var(--section-y)', background: 'var(--color-black)' }}
      >
        <div className="container-content">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>FROM THREAD TO MASTERPIECE</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 400 }}>The Atelier Journey</h2>
          </div>

          <div style={{ position: 'relative', maxWidth: '52rem', margin: '0 auto' }}>
            {/* GSAP Drawn line */}
            <div 
              className="timeline-path"
              style={{
                position: 'absolute',
                left: '2.5rem',
                top: '2rem',
                bottom: '2rem',
                width: '1px',
                background: 'linear-gradient(180deg, var(--color-gold) 0%, rgba(201,168,76,0.1) 100%)',
                transformOrigin: 'top',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {JOURNEY_STEPS.map((step, idx) => (
                <div 
                  key={step.num} 
                  className="reveal-up" 
                  style={{ display: 'grid', gridTemplateColumns: '5rem 1fr', gap: '2rem', alignItems: 'start' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
                    <div 
                      style={{
                        width: '4rem',
                        height: '4rem',
                        borderRadius: '50%',
                        background: '#111',
                        border: '1px solid var(--color-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-serif)',
                        color: 'var(--color-gold)',
                        fontSize: '1.1rem',
                        fontWeight: 400,
                      }}
                    >
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p style={{ color: 'rgba(250,250,250,0.6)', lineHeight: 1.7, marginBottom: '0.75rem', maxWidth: '38rem' }}>{step.body}</p>
                    <span className="t-caption" style={{ color: 'var(--color-gold)', fontSize: '0.65rem' }}>{step.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CRAFT ARTISANS ── */}
      <section style={{ paddingBlock: 'var(--section-y)', background: '#090909', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-content">
          <div style={{ textAlign: 'center', marginBottom: '6rem', maxWidth: '42rem', marginInline: 'auto' }}>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>THE HANDS OF RAZEVÉL</span>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                lineHeight: 1.3,
                color: 'var(--color-white)',
                marginBottom: '1rem',
              }}
            >
              "Luxury is not made by machines. It is created by hands that have spent decades mastering their craft."
            </p>
            <span className="t-label" style={{ color: 'rgba(250,250,250,0.4)' }}>— Core Artisan Manifesto</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {ARTISANS.map((a) => (
              <div 
                key={a.role} 
                className="reveal-up" 
                style={{
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.05)',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                }}
              >
                <div>
                  <span className="t-label-gold" style={{ fontSize: '0.6rem', display: 'block', marginBottom: '1.5rem' }}>{a.role}</span>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.6, color: 'rgba(250,250,250,0.8)', marginBottom: '2rem' }}>
                    "{a.quote}"
                  </p>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 500, margin: 0 }}>{a.name}</h4>
                  <span className="t-small" style={{ fontSize: '0.75rem', color: 'rgba(250,250,250,0.4)' }}>{a.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FABRIC LIBRARY ── */}
      <section style={{ paddingBlock: 'var(--section-y)', background: 'var(--color-black)' }}>
        <div className="container-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem' }}>
            <div>
              <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>CURATED TEXTILE ARCHIVE</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, margin: 0 }}>The Fabric Library</h2>
            </div>
            <span className="t-caption" style={{ color: 'rgba(250,250,250,0.4)', paddingBottom: '0.5rem' }}>8 Hand-Curated Weaves</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {FABRICS.map((f) => (
              <div 
                key={f.name} 
                className="reveal-up" 
                style={{
                  background: '#090909',
                  border: '1px solid rgba(255,255,255,0.05)',
                  padding: '3rem 2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '280px',
                  transition: 'border-color 0.4s var(--ease)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 400, margin: 0 }}>{f.name}</h3>
                    <span className="t-caption" style={{ fontSize: '0.55rem', color: 'var(--color-gold)' }}>{f.origin}</span>
                  </div>
                  <p className="t-body" style={{ fontSize: '0.9rem', color: 'rgba(250,250,250,0.5)', lineHeight: 1.7, margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <button 
                    onClick={scrollToForm}
                    style={{ background: 'none', border: 'none', borderBottom: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', paddingBottom: '0.25rem', cursor: 'pointer' }}
                  >
                    Select Fabric
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: EMBROIDERY GALLERY ── */}
      <section style={{ paddingBlock: 'var(--section-y)', background: '#090909', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-content">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>METICULOUS NEEDLEWORK</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400 }}>Embroidery Gallery</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
            {EMBROIDERIES.map((emb) => (
              <div 
                key={emb.name}
                className="reveal-up"
                style={{
                  position: 'relative',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'pointer',
                }}
              >
                <Image 
                  src={emb.img} 
                  alt={emb.name} 
                  fill 
                  style={{ objectFit: 'cover', opacity: 0.4, transition: 'transform 1.2s var(--ease)', willChange: 'transform' }}
                  className="gallery-image"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--color-white)', marginBottom: '0.5rem' }}>{emb.name}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 300, color: 'rgba(250,250,250,0.6)', margin: 0, lineHeight: 1.5 }}>{emb.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .reveal-up:hover .gallery-image {
            transform: scale(1.08);
          }
        `}</style>
      </section>

      {/* ── SECTION 7: BESPOKE MEASUREMENT VAULT ── */}
      <section style={{ paddingBlock: 'var(--section-y)', background: 'var(--color-black)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>SARTORIAL COORDINATES</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400 }}>Measurement Vault</h2>
            <p className="t-body" style={{ color: 'rgba(250,250,250,0.5)', maxWidth: '32rem', margin: '1rem auto 0' }}>
              Select how we should capture your anatomical measurements for this commission.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Option 1: Saved Profile */}
            <div 
              onClick={() => {
                if (user && measurements && measurements.length > 0) {
                  setMeasurementMode('saved');
                  setSelectedProfileId(measurements[0].id);
                } else {
                  showToast('No saved profiles found. Please create a new profile.', 'info');
                }
              }}
              style={{
                border: measurementMode === 'saved' ? '1px solid var(--color-gold)' : '1px solid rgba(255,255,255,0.05)',
                background: '#090909',
                padding: '2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.25rem' }}>Use Saved Body Profile</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(250,250,250,0.4)', margin: 0 }}>
                  {user ? `Retrieve saved dimensions from your account (${measurements?.length || 0} active profiles)` : 'Sign in to use your saved custom profiles'}
                </p>
              </div>
              <div style={{ width: 24, height: 24, borderRadius: '50%', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {measurementMode === 'saved' && <Check size={12} color="var(--color-gold)" />}
              </div>
            </div>

            {/* Option 2: Create New */}
            <div 
              onClick={() => setMeasurementMode('new')}
              style={{
                border: measurementMode === 'new' ? '1px solid var(--color-gold)' : '1px solid rgba(255,255,255,0.05)',
                background: '#090909',
                padding: '2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.25rem' }}>Create New Measurements</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(250,250,250,0.4)', margin: 0 }}>
                  We will guide you through our 11-step visual measurement tool during consultation.
                </p>
              </div>
              <div style={{ width: 24, height: 24, borderRadius: '50%', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {measurementMode === 'new' && <Check size={12} color="var(--color-gold)" />}
              </div>
            </div>

            {/* Option 3: Someone Else */}
            <div 
              onClick={() => setMeasurementMode('someone_else')}
              style={{
                border: measurementMode === 'someone_else' ? '1px solid var(--color-gold)' : '1px solid rgba(255,255,255,0.05)',
                background: '#090909',
                padding: '2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.25rem' }}>For Someone Else</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(250,250,250,0.4)', margin: 0 }}>
                  Commissioning a custom gift. Sizing details will be requested post-booking.
                </p>
              </div>
              <div style={{ width: 24, height: 24, borderRadius: '50%', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {measurementMode === 'someone_else' && <Check size={12} color="var(--color-gold)" />}
              </div>
            </div>

            {/* Option 4: Future AI Camera */}
            <div 
              style={{
                border: '1px solid rgba(255,255,255,0.02)',
                background: '#060606',
                padding: '2rem',
                opacity: 0.6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, margin: 0 }}>AI Camera Measurement</h3>
                  <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', background: 'var(--color-gold-muted)', color: 'var(--color-gold)', padding: '0.1rem 0.4rem', textTransform: 'uppercase' }}>Coming Soon</span>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(250,250,250,0.4)', margin: 0 }}>
                  3D body scanning using mobile camera array, providing 99.4% tailor accuracy.
                </p>
              </div>
              <Sparkles size={16} color="var(--color-gold)" />
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 8: BOOK CONSULTATION ── */}
      <section 
        ref={formRef}
        style={{
          paddingBlock: 'var(--section-y)',
          background: '#090909',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>COMMISSION ENQUIRY</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400 }}>Book Atelier Consultation</h2>
            <p className="t-body" style={{ color: 'rgba(250,250,250,0.5)', maxWidth: '30rem', margin: '1rem auto 0' }}>
              Arrange a private styling session at one of our locations or via video concierge.
            </p>
          </div>

          <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
              <div>
                <label className="t-caption" style={{ fontSize: '0.65rem', display: 'block', marginBottom: '0.75rem' }}>Consultation Type</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                    paddingBottom: '0.85rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--color-white)',
                    outline: 'none',
                  }}
                >
                  <option style={{ background: '#111' }}>Boutique Visit (Patna Atelier)</option>
                  <option style={{ background: '#111' }}>Video Call Consultation</option>
                  <option style={{ background: '#111' }}>Wedding Wardrobe Planning</option>
                  <option style={{ background: '#111' }}>Festival Collection Preview</option>
                  <option style={{ background: '#111' }}>Private In-Home Viewing</option>
                </select>
              </div>

              <div>
                <label className="t-caption" style={{ fontSize: '0.65rem', display: 'block', marginBottom: '0.75rem' }}>Occasion</label>
                <select 
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                    paddingBottom: '0.85rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--color-white)',
                    outline: 'none',
                  }}
                >
                  <option style={{ background: '#111' }}>Wedding Ceremony</option>
                  <option style={{ background: '#111' }}>Gala / Black Tie Event</option>
                  <option style={{ background: '#111' }}>Festival / Family Occasion</option>
                  <option style={{ background: '#111' }}>Corporate Couture</option>
                  <option style={{ background: '#111' }}>Casual Bespoke Wardrobe</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
              <div>
                <label className="t-caption" style={{ fontSize: '0.65rem', display: 'block', marginBottom: '0.75rem' }}>Preferred Date</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.15)',
                      paddingBottom: '0.85rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      color: 'var(--color-white)',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="t-caption" style={{ fontSize: '0.65rem', display: 'block', marginBottom: '0.75rem' }}>Preferred Time</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.15)',
                      paddingBottom: '0.85rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      color: 'var(--color-white)',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="t-caption" style={{ fontSize: '0.65rem', display: 'block', marginBottom: '0.75rem' }}>Special Requirements / Design Notes</label>
              <textarea 
                placeholder="E.g., I require custom zardozi patterns representing my family crest..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--color-white)',
                  outline: 'none',
                  resize: 'none',
                }}
              />
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <button 
                type="submit"
                disabled={submitting}
                className="btn btn-gold"
                style={{ width: '100%', maxWidth: '28rem', padding: '1.25rem', justifyContent: 'center' }}
              >
                {submitting ? 'Requesting Appointment...' : 'Submit Commission Request'}
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* ── SECTION 9: LUXURY FAQ ── */}
      <section style={{ paddingBlock: 'var(--section-y)', background: 'var(--color-black)' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>ATELIER INQUIRIES</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400 }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem' }}
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      padding: '1rem 0',
                      cursor: 'pointer',
                      color: 'var(--color-white)',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 400 }}>{faq.q}</span>
                    <span style={{ fontSize: '1.5rem', color: 'var(--color-gold)', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease' }}>+</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(250,250,250,0.5)', lineHeight: 1.7, margin: 0, paddingTop: '0.5rem' }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CTA ── */}
      <section 
        style={{
          paddingBlock: 'calc(var(--section-y) * 1.5)',
          background: '#060606',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <Image 
          src="/images/atelier.png" 
          alt="Master tailor workbench" 
          fill 
          style={{ objectFit: 'cover', opacity: 0.15 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.6) 100%)' }} />
        
        <div className="container-max" style={{ position: 'relative', zIndex: 10 }}>
          <span className="t-label-gold" style={{ display: 'block', marginBottom: '2rem', letterSpacing: '0.4em' }}>COMMISSION AN ARTWORK</span>
          <h2 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              lineHeight: 1.15,
              fontWeight: 400,
              color: 'var(--color-white)',
              marginBottom: '3.5rem',
            }}
          >
            Crafted Only Once.<br />
            <em style={{ color: 'var(--color-gold)' }}>Crafted Only For You.</em>
          </h2>
          <button 
            onClick={scrollToForm}
            className="btn btn-gold" 
            style={{ padding: '1.25rem 3rem', fontSize: '0.8rem' }}
          >
            Commission Your Masterpiece
          </button>
        </div>
      </section>

    </main>
  );
}
