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

export default function LoginClient() {
  const router = useRouter();
  const { login, loginWithGoogle } = useAuth();
  const { showToast } = useToast();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please enter both email and password', 'error');
      return;
    }
    
    setIsSubmitting(true);
    try {
      await login(email, password);
      showToast('Welcome back to RAZEVÉL', 'success');
      router.push('/profile');
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Failed to login', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    try {
      await loginWithGoogle();
      showToast('Successfully authenticated via Google', 'success');
      router.push('/profile');
    } catch (err) {
      showToast('Google authentication failed', 'error');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', background: 'var(--luxury-white)' }}>
      
      {/* Left: Form */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 'var(--gutter)', paddingTop: '100px' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: E }}
          style={{ maxWidth: 440, width: '100%', margin: 'auto' }}
        >
          <div style={{ marginBottom: '3rem' }}>
            <span className="t-label-gold">RAZEVÉL Privé</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', margin: '1rem 0' }}>Welcome Back.</h1>
            <p className="t-body" style={{ color: 'var(--color-grey)' }}>Access your bespoke commissions, curated wishlist, and atelier appointments.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Input 
              label="Email Address" 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required
            />
            
            <div>
              <Input 
                label="Password" 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ accentColor: 'var(--color-black)' }} />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-grey)' }}>Remember me</span>
                </label>
                <Link href="/forgot-password" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-grey)', textDecoration: 'underline' }}>
                  Recover Account
                </Link>
              </div>
            </div>

            <Button type="submit" isLoading={isSubmitting} fullWidth>
              Sign In
            </Button>
          </form>

          <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--color-grey-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Or</span>
            <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
          </div>

          <Button type="button" variant="google" fullWidth isLoading={isGoogleLoading} onClick={handleGoogleLogin}>
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)"><path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/><path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/><path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/><path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/></g></svg>
            Continue with Google
          </Button>

          <p style={{ marginTop: '3rem', textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-grey)' }}>
            New to RAZEVÉL?{' '}
            <Link href="/register" style={{ color: 'var(--color-black)', textDecoration: 'underline' }}>Begin Your Journey</Link>
          </p>

        </motion.div>
      </div>

      {/* Right: Editorial Image */}
      <div className="auth-editorial" style={{ flex: 1, position: 'relative', display: 'none', background: 'var(--soft-ivory)' }}>
        <Image src="/images/journal.png" alt="Editorial" fill style={{ objectFit: 'cover' }} priority />
      </div>

      <style>{`
        @media (min-width: 900px) {
          .auth-editorial { display: block !important; }
        }
      `}</style>
    </main>
  );
}
