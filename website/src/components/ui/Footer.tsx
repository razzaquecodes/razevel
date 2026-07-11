'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--deep-black)', color: 'var(--luxury-white)', padding: 'clamp(4rem, 8vw, 8rem) var(--gutter) 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        
        {/* Newsletter & Brand */}
        <div style={{ gridColumn: '1 / -1', maxWidth: '600px', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--warm-gold)', margin: '0 0 1rem' }}>
            RAZEVÉL
          </h2>
          <p className="t-body" style={{ color: 'rgba(255,255,255,0.7)', margin: '0 0 2rem' }}>
            Subscribe to receive exclusive access to new collections, private bespoke events, and stories from our atelier.
          </p>
          <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-mid)', paddingBottom: '0.5rem' }}>
            <input 
              type="email" 
              placeholder="Your Email Address" 
              style={{ background: 'transparent', border: 'none', color: 'var(--luxury-white)', flex: 1, fontFamily: 'var(--font-sans)', fontSize: '0.85rem', outline: 'none' }}
            />
            <button aria-label="Subscribe to newsletter" style={{ background: 'none', border: 'none', color: 'var(--warm-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Columns */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--luxury-white)', margin: 0 }}>The House</h4>
          <Link href="/collections/men" className="footer-link">Men's Collection</Link>
          <Link href="/collections/women" className="footer-link">Women's Collection</Link>
          <Link href="/bespoke" className="footer-link">Bespoke Appointments</Link>
          <Link href="/about" className="footer-link">Our Craftsmanship</Link>
          <Link href="/company" className="footer-link">Company Heritage</Link>
          <Link href="/journal" className="footer-link">The Journal</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--luxury-white)', margin: 0 }}>Client Services</h4>
          <Link href="/support" className="footer-link">Support &amp; FAQ</Link>
          <Link href="/returns" className="footer-link">Returns &amp; Exchanges</Link>
          <Link href="/shipping" className="footer-link">Worldwide Shipping</Link>
          <Link href="/privacy" className="footer-link">Privacy Policy</Link>
          <Link href="/terms" className="footer-link">Terms of Service</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--luxury-white)', margin: 0 }}>Contact Us</h4>
          <a href="mailto:atelier@razevel.com" className="footer-link">Email: atelier@razevel.com</a>
          <a href="tel:+916207506369" className="footer-link">Phone: +91 62075 06369</a>
          <a href="https://wa.me/916207506369" className="footer-link">WhatsApp Concierge</a>
          <a href="https://instagram.com/razevel" className="footer-link">Instagram: @razevel</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--luxury-white)', margin: 0 }}>Flagship Atelier</h4>
          <p className="footer-text">
            Rajendra Nagar, Road No. 11,<br/>
            Patna, Bihar – 800016, India
          </p>
          <p className="footer-text" style={{ marginTop: '0.5rem' }}>
            Monday — Saturday<br/>
            11:00 AM — 7:00 PM<br/>
            By Appointment Only
          </p>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
          © 2026 RAZEVÉL. Crafted for Forever. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Authenticity Guarantee.</span>
        </div>
      </div>

      <style>{`
        .footer-link {
          font-family: var(--font-sans); font-size: 0.8rem;
          color: rgba(255,255,255,0.6); text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover { color: var(--warm-gold); }
        .footer-text {
          font-family: var(--font-sans); font-size: 0.8rem;
          color: rgba(255,255,255,0.6); margin: 0; line-height: 1.6;
        }
      `}</style>
    </footer>
  );
}
