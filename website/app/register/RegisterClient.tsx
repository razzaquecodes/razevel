'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/context/AuthContext';
import { useToast } from '@/src/components/ui/Toast';
import { Input } from '@/src/components/ui/Input';
import { Button } from '@/src/components/ui/Button';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function RegisterClient() {
  const router = useRouter();
  const { register } = useAuth();
  const { showToast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      showToast('Passwords do not match', 'error');
      return;
    }
    
    setIsSubmitting(true);
    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      }, formData.password);
      
      showToast('Your journey begins now.', 'success');
      router.push('/profile');
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Registration failed', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', background: 'var(--luxury-white)' }}>
      
      {/* Left: Editorial Image */}
      <div className="auth-editorial" style={{ flex: 1, position: 'relative', display: 'none', background: 'var(--soft-ivory)' }}>
        <Image src="/images/hero.png" alt="Editorial" fill style={{ objectFit: 'cover' }} priority />
      </div>

      {/* Right: Form */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 'var(--gutter)', paddingTop: '100px' }}>
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: E }}
          style={{ maxWidth: 440, width: '100%', margin: 'auto' }}
        >
          <div style={{ marginBottom: '3rem' }}>
            <span className="t-label-gold">Membership</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', margin: '1rem 0' }}>Begin Your Journey.</h1>
            <p className="t-body" style={{ color: 'var(--color-grey)' }}>Create an account to gain access to exclusive collections and bespoke commissions.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
              <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            
            <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required />
            <Input label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
              <Input label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: 'var(--color-black)', marginTop: '4px' }} required />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-grey)', lineHeight: 1.5 }}>
                  I accept the <Link href="/terms" style={{ color: 'var(--color-black)', textDecoration: 'underline' }}>Terms of Service</Link> and <Link href="/privacy" style={{ color: 'var(--color-black)', textDecoration: 'underline' }}>Privacy Policy</Link>.
                </span>
              </label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: 'var(--color-black)', marginTop: '4px' }} />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-grey)', lineHeight: 1.5 }}>
                  Subscribe to the RAZEVÉL newsletter for exclusive access to new collections and invitations to private trunk shows.
                </span>
              </label>
            </div>

            <Button type="submit" isLoading={isSubmitting} fullWidth style={{ marginTop: '1rem' }}>
              Create Account
            </Button>
          </form>

          <p style={{ marginTop: '3rem', textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-grey)' }}>
            Already have an account?{' '}
            <Link href="/login" style={{ color: 'var(--color-black)', textDecoration: 'underline' }}>Sign In</Link>
          </p>

        </motion.div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .auth-editorial { display: block !important; }
        }
      `}</style>
    </main>
  );
}
