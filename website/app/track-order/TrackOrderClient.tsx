'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/src/components/ui/Button';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

function Reveal({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
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

export default function TrackOrderClient() {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId || !email) return;
    setLoading(true);
    // In a real implementation, we would verify the email matches the order ID via API first.
    // For this UI, we just redirect to the bespoke tracking view if an order ID is provided.
    setTimeout(() => {
      router.push(`/track/${orderId.replace('#', '')}`);
    }, 800);
  };

  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 'clamp(4rem, 8vw, 8rem)', paddingInline: 'var(--gutter)', borderBottom: '1px solid rgba(8,8,8,0.06)', background: 'var(--soft-ivory)' }}>
        <div style={{ maxWidth: '42rem', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <span className="t-label-gold" style={{ display: 'block', marginBottom: '1.5rem' }}>Client Services</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 2rem', color: 'var(--color-black)' }}>
              Track Your<br /><em style={{ color: 'var(--color-gold)' }}>Commission.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="t-body" style={{ margin: '0 auto 3rem', maxWidth: '32rem' }}>
              Enter your Order Number and Email Address to track the physical creation of your bespoke garment, from fabric cutting to final dispatch.
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <form onSubmit={handleTrack} style={{ background: '#FFFFFF', padding: 'clamp(2rem, 4vw, 3.5rem)', border: '1px solid rgba(8,8,8,0.08)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', color: 'var(--color-black)' }}>Order Number</label>
                <input 
                  type="text" 
                  value={orderId}
                  onChange={e => setOrderId(e.target.value)}
                  placeholder="e.g. RZV-12345"
                  required
                  style={{ width: '100%', padding: '1rem', border: '1px solid rgba(8,8,8,0.15)', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', color: 'var(--color-black)' }}>Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email used for the commission"
                  required
                  style={{ width: '100%', padding: '1rem', border: '1px solid rgba(8,8,8,0.15)', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>
              <Button type="submit" disabled={loading} style={{ marginTop: '1rem' }} fullWidth>
                {loading ? 'Locating Commission...' : 'Track Journey'}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Alternative */}
      <section style={{ paddingBlock: 'clamp(4rem, 8vw, 8rem)', paddingInline: 'var(--gutter)', textAlign: 'center' }}>
        <Reveal>
          <p className="t-body" style={{ margin: '0 auto 1.5rem' }}>Have an account with us?</p>
          <Link href="/profile" className="btn btn-outline">Log In to View All Orders</Link>
        </Reveal>
      </section>

    </main>
  );
}
