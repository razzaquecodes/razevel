'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useMeasurements } from '@/src/hooks/useSupabase';
import { useRouter } from 'next/navigation';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const STEPS = [
  { id: 'profile', title: 'Profile Name', subtitle: 'e.g., Wedding, Office, Father', tip: 'You can save multiple measurement profiles to your account for future commissions.', img: '/illustrations/consultation.png' },
  { id: 'height', title: 'Height', subtitle: 'Your overall stature.', tip: 'Stand straight without shoes against a flat wall.', img: '/illustrations/fitting.png' },
  { id: 'weight', title: 'Weight', subtitle: 'Approximate current weight.', tip: 'This helps our pattern makers understand your overall build and drape requirements.', img: '/illustrations/pattern.png' },
  { id: 'shoulders', title: 'Shoulders', subtitle: 'Point to point.', tip: 'Measure across the top of the back from the edge of one shoulder to the other.', img: '/illustrations/sewing.png' },
  { id: 'chest', title: 'Chest', subtitle: 'The fullest part.', tip: 'Keep the tape measure level under your arms and across your shoulder blades.', img: '/illustrations/fitting.png' },
  { id: 'waist', title: 'Waist', subtitle: 'Your natural waistline.', tip: 'Measure around the level where you normally wear your trousers, keeping one finger between the tape and your body.', img: '/illustrations/pattern.png' },
  { id: 'hip', title: 'Hip', subtitle: 'The widest point.', tip: 'Stand with your heels together and measure around the fullest part of your hips.', img: '/illustrations/sewing.png' },
  { id: 'sleeves', title: 'Sleeve Length', subtitle: 'Shoulder to wrist.', tip: 'Measure from the edge of the shoulder down to the wrist bone, with your arm slightly bent.', img: '/illustrations/fitting.png' },
  { id: 'inseam', title: 'Inseam', subtitle: 'Crotch to hem.', tip: 'Measure from the lowest part of the crotch down to the desired trouser hem length.', img: '/illustrations/pattern.png' },
  { id: 'neck', title: 'Neck', subtitle: 'Base of the neck.', tip: 'Measure around the base of your neck where a shirt collar would naturally sit.', img: '/illustrations/consultation.png' },
  { id: 'notes', title: 'Special Notes', subtitle: 'Posture, fit preference, etc.', tip: 'Tell us if you prefer a slim Italian cut, a classic British drape, or have one shoulder lower than the other.', img: '/illustrations/consultation.png' },
];

export default function MeasurementsClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const step = STEPS[currentStep];
  const progress = ((currentStep + 1) / STEPS.length) * 100;

  const { addMeasurement } = useMeasurements();
  const [isSaving, setIsSaving] = useState(false);

  const handleNext = async () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsSaving(true);
      const parsedData: Record<string, any> = {
        profile_name: formData.profile || 'My Measurements',
        for_self: true,
      };
      
      const numFields = ['height', 'weight', 'neck', 'shoulder', 'chest', 'waist', 'hip', 'arm_length', 'sleeve_length', 'wrist', 'bicep', 'inseam', 'outseam', 'thigh', 'calf', 'ankle'];
      
      numFields.forEach(field => {
         const val = parseFloat(formData[field] || formData[field + 's'] || '0');
         if (!isNaN(val) && val > 0) parsedData[field] = val;
      });

      await addMeasurement(parsedData as any);
      setIsSaving(false);
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  if (isComplete) {
    return (
      <main style={{ background: 'var(--deep-black)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: E }} style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid var(--warm-gold)', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--warm-gold)', fontSize: '2rem' }}>✓</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--luxury-white)', marginBottom: '1rem' }}>Profile Saved.</h1>
          <p className="t-body-lg" style={{ color: 'rgba(250,250,250,0.6)', maxWidth: '32rem', margin: '0 auto 3rem' }}>
            Your bespoke measurements have been securely vaulted in your profile. Our master tailor will review these before drafting your unique pattern.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link href="/profile" className="btn btn-gold">View Profile</Link>
            <Link href="/collections/men" className="btn btn-outline" style={{ color: 'var(--luxury-white)', borderColor: 'var(--luxury-white)' }}>Continue Shopping</Link>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main style={{ background: 'var(--luxury-white)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Progress Header */}
      <header style={{ padding: '2rem var(--gutter)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border)' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--deep-black)', textDecoration: 'none', letterSpacing: '0.2em' }}>RAZEVÉL</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <span className="t-label" style={{ fontSize: '0.65rem' }}>Step {currentStep + 1} of {STEPS.length}</span>
          <div style={{ width: '120px', height: '2px', background: 'var(--border-mid)' }}>
            <motion.div 
              initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5, ease: E }}
              style={{ height: '100%', background: 'var(--warm-gold)' }}
            />
          </div>
          <Link href="/profile" className="t-label" style={{ fontSize: '0.65rem', color: 'var(--taupe)', textDecoration: 'none' }}>Exit</Link>
        </div>
      </header>

      {/* Main Wizard Area */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="wizard-grid">
        
        {/* Left: Interactive Form */}
        <div style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 6vw, 6rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.5, ease: E }}
            >
              <span className="t-label-gold" style={{ marginBottom: '1rem' }}>Measure Guide</span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', color: 'var(--deep-black)', margin: '0 0 0.5rem', lineHeight: 1.1 }}>
                {step.title}
              </h1>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--taupe)', margin: '0 0 3rem' }}>
                {step.subtitle}
              </p>

              {currentStep === 10 ? (
                <textarea 
                  className="input-luxury"
                  placeholder="E.g., I prefer a slim fit, wear my watch on the left wrist..."
                  style={{ minHeight: '150px', marginBottom: '2rem', resize: 'vertical' }}
                  value={formData[step.id] || ''}
                  onChange={(e) => setFormData({ ...formData, [step.id]: e.target.value })}
                />
              ) : (
                <input 
                  type="text" 
                  className="input-luxury"
                  placeholder={currentStep === 0 ? "e.g., Wedding Profile" : "Enter measurement (e.g., 40 inches)"}
                  style={{ marginBottom: '2rem', fontSize: '1.25rem' }}
                  value={formData[step.id] || ''}
                  onChange={(e) => setFormData({ ...formData, [step.id]: e.target.value })}
                  autoFocus
                />
              )}

              <div style={{ background: 'var(--soft-ivory)', padding: '1.5rem', borderLeft: '2px solid var(--warm-gold)', marginBottom: '4rem' }}>
                <span className="t-label" style={{ fontSize: '0.6rem', color: 'var(--warm-gold)', display: 'block', marginBottom: '0.5rem' }}>Master Tailor&apos;s Tip</span>
                <p className="t-body" style={{ margin: 0, fontSize: '0.9rem' }}>{step.tip}</p>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={handlePrev} disabled={currentStep === 0} className="btn btn-outline" style={{ opacity: currentStep === 0 ? 0.3 : 1 }}>
                  Back
                </button>
                <button onClick={handleNext} disabled={isSaving} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  {isSaving ? 'Saving...' : (currentStep === STEPS.length - 1 ? 'Save Profile' : 'Next Step')}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Illustration Panel */}
        <div style={{ background: 'var(--soft-ivory)', position: 'relative', overflow: 'hidden' }} className="hide-mobile">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: E }}
              style={{ position: 'absolute', inset: 0, padding: '4rem' }}
            >
              <Image src={step.img} alt={step.title} fill style={{ objectFit: 'contain', padding: '4rem' }} priority />
            </motion.div>
          </AnimatePresence>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(253,251,247,1) 0%, transparent 20%)', pointerEvents: 'none' }} />
        </div>

      </div>
      <style>{`
        @media (max-width: 900px) {
          .wizard-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
