'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/src/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input } from '@/src/components/ui/Input';
import { Button } from '@/src/components/ui/Button';
import TrustSection from '@/src/components/sections/TrustSection';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const DELIVERY_OPTIONS = [
  { id: 'standard', name: 'Standard Delivery', days: '25–30 Days', price: 0, desc: 'Complimentary shipping via DHL Express.' },
  { id: 'express', name: 'Express Production', days: '15–18 Days', price: 15000, desc: 'Expedited pattern making and stitching.' },
  { id: 'wedding', name: 'Wedding Priority', days: 'Custom Timeline', price: 25000, desc: 'Dedicated master tailor assigned to your commission.' },
];

const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit / Debit Card', desc: 'Visa, Mastercard, Amex' },
  { id: 'upi', name: 'UPI', desc: 'Google Pay, PhonePe, Paytm' },
  { id: 'netbanking', name: 'Net Banking', desc: 'All major Indian banks' },
  { id: 'cod', name: 'Cash on Delivery', desc: 'Pay when garment arrives' }
];

export default function CheckoutClient() {
  const router = useRouter();
  const { state: { items: cart }, totalPrice, dispatch: cartDispatch } = useCart();
  
  const [step, setStep] = useState<number>(1);
  const [delivery, setDelivery] = useState(DELIVERY_OPTIONS[0]);
  const [payment, setPayment] = useState(PAYMENT_METHODS[0].id);
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    setOrderId(`RZV-${Math.floor(Math.random() * 90000) + 10000}`);
  }, []);

  const tax = totalPrice * 0.12; 
  const finalTotal = totalPrice + delivery.price + tax;

  const nextStep = () => setStep(s => Math.min(s + 1, 7));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  // Step 7: Confirmation Experience
  if (step === 7) {
    return (
      <main style={{ background: 'var(--deep-black)', color: 'var(--luxury-white)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(184, 134, 11, 0.1) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', padding: '0 var(--gutter)', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: E }}>
            <Image src="/images/pattern.png" alt="Craftsmanship" width={120} height={120} style={{ objectFit: 'contain', margin: '0 auto 2rem', opacity: 0.5 }} />
          </motion.div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.2, ease: E }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--warm-gold)', margin: '0 0 1rem' }}>
            The Journey Begins.
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: E }} className="t-body-lg" style={{ marginBottom: '2.5rem', color: 'rgba(250,250,250,0.8)' }}>
            Thank you. Your garment has officially entered the RAZEVÉL Atelier. Our artisans will now begin crafting order <strong style={{ color: 'var(--luxury-white)' }}>#{orderId}</strong>.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.6, ease: E }}>
            <p className="t-label" style={{ color: 'var(--warm-gold)', marginBottom: '2rem' }}>Estimated Completion: {delivery.days}</p>
            <Button variant="outline" style={{ color: 'var(--luxury-white)', borderColor: 'var(--warm-gold)' }} onClick={() => {
              cartDispatch({ type: 'CLEAR_CART' });
              router.push('/profile');
            }}>
              Track Craft Journey
            </Button>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background: 'var(--luxury-white)', minHeight: '100vh', paddingTop: 'calc(80px + 4rem)', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', paddingInline: 'var(--gutter)' }}>
        
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--deep-black)', marginBottom: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
          Secure Checkout
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)' }} className="checkout-grid">
          
          {/* Main Wizard Form */}
          <div style={{ position: 'relative' }}>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: E }}
              >
                {/* Step 1: Review Cart */}
                {step === 1 && (
                  <section>
                    <h2 className="t-label" style={{ fontSize: '0.85rem', color: 'var(--deep-black)', marginBottom: '2rem' }}>1. Review Cart</h2>
                    {cart.length === 0 ? (
                      <p>Your cart is empty.</p>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                        {cart.map(item => (
                          <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
                            <div style={{ aspectRatio: '3/4', position: 'relative', background: 'var(--soft-ivory)' }}>
                              <Image src={item.image || '/images/hero.png'} alt={item.name} fill sizes="100px" style={{ objectFit: 'cover' }} />
                            </div>
                            <div>
                              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: '0 0 0.5rem' }}>{item.name}</h3>
                              <p className="t-body" style={{ margin: '0 0 0.5rem', fontSize: '0.85rem', color: 'var(--color-grey)' }}>Size: Bespoke</p>
                              <p className="t-body" style={{ margin: 0, fontSize: '0.85rem' }}>Qty: {item.quantity}</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: 0 }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <Button fullWidth onClick={nextStep} disabled={cart.length === 0}>Proceed to Measurements</Button>
                  </section>
                )}

                {/* Step 2: Measurements */}
                {step === 2 && (
                  <section>
                    <h2 className="t-label" style={{ fontSize: '0.85rem', color: 'var(--deep-black)', marginBottom: '2rem' }}>2. Measurements</h2>
                    <div style={{ border: '1px solid var(--color-black)', padding: '2rem', marginBottom: '2rem' }}>
                      <span style={{ background: 'var(--color-black)', color: 'var(--color-gold)', padding: '4px 8px', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', display: 'inline-block' }}>Saved Profile</span>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: '0 0 1rem' }}>Wedding Fit (Razzaque)</h3>
                      <p className="t-body" style={{ fontSize: '0.85rem', color: 'var(--color-grey)', margin: 0 }}>Last updated: October 2025. This profile will be used to craft your garments.</p>
                    </div>
                    <Button variant="outline" fullWidth style={{ marginBottom: '3rem' }}>Create New Profile</Button>
                    
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <Button variant="ghost" onClick={prevStep}>Back</Button>
                      <Button fullWidth onClick={nextStep}>Continue to Address</Button>
                    </div>
                  </section>
                )}

                {/* Step 3: Address */}
                {step === 3 && (
                  <section>
                    <h2 className="t-label" style={{ fontSize: '0.85rem', color: 'var(--deep-black)', marginBottom: '2rem' }}>3. Delivery Address</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                      <Input label="First Name" defaultValue="Razzaque" />
                      <Input label="Last Name" defaultValue="A." />
                      <Input label="Street Address" defaultValue="123 Palm Jumeirah Villas" />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <Input label="City" defaultValue="Dubai" />
                        <Input label="Postal Code" defaultValue="00000" />
                      </div>
                      <Input label="Country" defaultValue="United Arab Emirates" />
                      <Input label="Phone" defaultValue="+971 50 123 4567" />
                    </div>
                    
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <Button variant="ghost" onClick={prevStep}>Back</Button>
                      <Button fullWidth onClick={nextStep}>Continue to Shipping</Button>
                    </div>
                  </section>
                )}

                {/* Step 4: Shipping Method */}
                {step === 4 && (
                  <section>
                    <h2 className="t-label" style={{ fontSize: '0.85rem', color: 'var(--deep-black)', marginBottom: '2rem' }}>4. Shipping Method</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                      {DELIVERY_OPTIONS.map(opt => (
                        <button key={opt.id} onClick={() => setDelivery(opt)} style={{
                          display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '1.5rem', alignItems: 'center', textAlign: 'left',
                          padding: '1.5rem', border: delivery.id === opt.id ? '1px solid var(--deep-black)' : '1px solid var(--color-border)',
                          background: delivery.id === opt.id ? 'var(--soft-ivory)' : 'transparent',
                          cursor: 'pointer', transition: 'all 0.3s'
                        }}>
                          <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1px solid var(--deep-black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {delivery.id === opt.id && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--deep-black)' }} />}
                          </div>
                          <div>
                            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--deep-black)', display: 'block', marginBottom: 4 }}>{opt.name}</span>
                            <span className="t-label" style={{ fontSize: '0.65rem', color: 'var(--color-grey)' }}>{opt.desc}</span>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--deep-black)', display: 'block' }}>
                              {opt.price === 0 ? 'Complimentary' : `+₹${opt.price.toLocaleString('en-IN')}`}
                            </span>
                            <span className="t-label" style={{ fontSize: '0.65rem', color: 'var(--color-grey)' }}>{opt.days}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <Button variant="ghost" onClick={prevStep}>Back</Button>
                      <Button fullWidth onClick={nextStep}>Continue to Payment</Button>
                    </div>
                  </section>
                )}

                {/* Step 5: Payment */}
                {step === 5 && (
                  <section>
                    <h2 className="t-label" style={{ fontSize: '0.85rem', color: 'var(--deep-black)', marginBottom: '2rem' }}>5. Payment Method</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                      {PAYMENT_METHODS.map(opt => (
                        <button key={opt.id} onClick={() => setPayment(opt.id)} style={{
                          display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.5rem', alignItems: 'center', textAlign: 'left',
                          padding: '1.5rem', border: payment === opt.id ? '1px solid var(--deep-black)' : '1px solid var(--color-border)',
                          background: payment === opt.id ? 'var(--soft-ivory)' : 'transparent',
                          cursor: 'pointer', transition: 'all 0.3s'
                        }}>
                          <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1px solid var(--deep-black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {payment === opt.id && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--deep-black)' }} />}
                          </div>
                          <div>
                            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--deep-black)', display: 'block', marginBottom: 4 }}>{opt.name}</span>
                            <span className="t-label" style={{ fontSize: '0.65rem', color: 'var(--color-grey)' }}>{opt.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {payment === 'card' && (
                      <div style={{ padding: '2rem', background: 'var(--soft-ivory)', marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <Input label="Card Number" placeholder="0000 0000 0000 0000" />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                          <Input label="Expiry (MM/YY)" placeholder="MM/YY" />
                          <Input label="CVC" type="password" placeholder="***" />
                        </div>
                      </div>
                    )}
                    
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <Button variant="ghost" onClick={prevStep}>Back</Button>
                      <Button fullWidth onClick={nextStep}>Review Order</Button>
                    </div>
                  </section>
                )}

                {/* Step 6: Review Order */}
                {step === 6 && (
                  <section>
                    <h2 className="t-label" style={{ fontSize: '0.85rem', color: 'var(--deep-black)', marginBottom: '2rem' }}>6. Review Order</h2>
                    
                    <div style={{ border: '1px solid var(--color-border)', padding: '2rem', marginBottom: '2rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: '0 0 1rem' }}>Shipping Details</h3>
                      <p className="t-body" style={{ margin: 0 }}>Razzaque A.<br/>123 Palm Jumeirah Villas<br/>Dubai, UAE</p>
                      <p className="t-body" style={{ marginTop: '1rem', color: 'var(--color-grey)' }}>Method: {delivery.name}</p>
                    </div>

                    <div style={{ border: '1px solid var(--color-border)', padding: '2rem', marginBottom: '3rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: '0 0 1rem' }}>Payment</h3>
                      <p className="t-body" style={{ margin: 0 }}>{PAYMENT_METHODS.find(p => p.id === payment)?.name}</p>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <Button variant="ghost" onClick={prevStep}>Back</Button>
                      <Button fullWidth onClick={nextStep}>Confirm Commission — ₹{finalTotal.toLocaleString('en-IN')}</Button>
                    </div>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar Order Summary (Sticky) */}
          <div style={{ display: step === 7 ? 'none' : 'block' }}>
            <div style={{ background: 'var(--soft-ivory)', padding: '2.5rem', position: 'sticky', top: '120px' }}>
              <h2 className="t-label" style={{ fontSize: '0.8rem', color: 'var(--deep-black)', marginBottom: '2rem' }}>Commission Summary</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem' }}>
                {cart.length === 0 ? (
                  <p className="t-body">Your cart is empty.</p>
                ) : (
                  cart.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ width: '60px', aspectRatio: '3/4', position: 'relative', background: 'var(--luxury-white)' }}>
                        <Image src={item.image || '/images/hero.png'} alt={item.name} fill sizes="60px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', color: 'var(--deep-black)', margin: '0 0 0.25rem' }}>{item.name}</p>
                        <p className="t-label" style={{ fontSize: '0.55rem', color: 'var(--color-grey)' }}>Qty: {item.quantity}</p>
                      </div>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-black)' }}>
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  ))
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="t-body" style={{ fontSize: '0.85rem' }}>Subtotal</span>
                <span className="t-body" style={{ fontSize: '0.85rem' }}>₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="t-body" style={{ fontSize: '0.85rem' }}>Delivery ({delivery.name})</span>
                <span className="t-body" style={{ fontSize: '0.85rem', color: delivery.price === 0 ? 'var(--color-gold)' : 'var(--color-black)' }}>
                  {delivery.price === 0 ? 'Complimentary' : `₹${delivery.price.toLocaleString('en-IN')}`}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
                <span className="t-body" style={{ fontSize: '0.85rem' }}>Estimated Tax (12%)</span>
                <span className="t-body" style={{ fontSize: '0.85rem' }}>₹{tax.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--deep-black)' }}>Total</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--deep-black)' }}>₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
      {step !== 7 && (
        <div style={{ marginTop: '4rem' }}>
          <TrustSection />
        </div>
      )}
      <style>{`
        @media (max-width: 900px) {
          .checkout-grid { grid-template-columns: 1fr !important; }
          .checkout-grid > div:last-child { order: -1; margin-bottom: 2rem; }
        }
      `}</style>
    </main>
  );
}
