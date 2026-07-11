'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/src/context/AuthContext';
import { useToast } from '@/src/components/ui/Toast';
import { Input } from '@/src/components/ui/Input';
import { Button } from '@/src/components/ui/Button';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ForgotPasswordClient() {
  const { resetPassword } = useAuth();
  const { showToast } = useToast();
  
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      await resetPassword(email);
      setIsSuccess(true);
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Failed to send recovery email', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', background: 'var(--luxury-white)' }}>
      
      {/* Left: Form */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 'var(--gutter)', paddingTop: '100px' }}>
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.8, ease: E }}
              style={{ maxWidth: 440, width: '100%', margin: 'auto' }}
            >
              <div style={{ marginBottom: '3rem' }}>
                <span className="t-label-gold">Security</span>
                <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', margin: '1rem 0' }}>Recover Account.</h1>
                <p className="t-body" style={{ color: 'var(--color-grey)' }}>Enter the email address associated with your account, and we will send you a link to reset your password.</p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <Input 
                  label="Email Address" 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  required
                />
                
                <Button type="submit" isLoading={isSubmitting} fullWidth>
                  Send Recovery Link
                </Button>
              </form>

              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link href="/login" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-grey)', textDecoration: 'underline' }}>
                  Return to Sign In
                </Link>
              </div>

            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: E }}
              style={{ maxWidth: 440, width: '100%', margin: 'auto', textAlign: 'center' }}
            >
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-black)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', margin: '0 0 1rem' }}>Check Your Email.</h1>
              <p className="t-body" style={{ color: 'var(--color-grey)', marginBottom: '3rem' }}>
                We have sent recovery instructions to <strong style={{ color: 'var(--color-black)' }}>{email}</strong>. Please check your inbox and spam folder.
              </p>
              
              <Link href="/login" style={{ textDecoration: 'none' }}>
                <Button fullWidth>Return to Sign In</Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right: Editorial Image */}
      <div className="auth-editorial" style={{ flex: 1, position: 'relative', display: 'none', background: 'var(--soft-ivory)' }}>
        <Image src="/images/fabric.png" alt="Editorial" fill style={{ objectFit: 'cover' }} priority />
      </div>

      <style>{`
        @media (min-width: 900px) {
          .auth-editorial { display: block !important; }
        }
      `}</style>
    </main>
  );
}
