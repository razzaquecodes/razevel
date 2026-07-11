'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/src/components/ui/Button';
import { MOCK_ACTIVE_ORDER } from '@/src/lib/mockOrders';
import { CraftStage } from '@/src/types/order';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function TrackingClient({ id }: { id: string }) {
  const order = MOCK_ACTIVE_ORDER; // In a real app, fetch based on `id`

  return (
    <main style={{ background: 'var(--luxury-white)', minHeight: '100vh', paddingTop: 'calc(80px + 4rem)', paddingBottom: '8rem' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', paddingInline: 'var(--gutter)' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
          <span className="t-label-gold">Commission Tracker</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--deep-black)', margin: '1rem 0', lineHeight: 1.1 }}>
            The Craft <em style={{ color: 'var(--warm-gold)' }}>Journey.</em>
          </h1>
          <p className="t-body-lg" style={{ color: 'var(--taupe)' }}>Tracking Commission #{id}</p>
        </div>

        {/* Split Screen Dashboard */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(4rem, 8vw, 6rem)' }} className="tracking-grid">
          
          {/* LEFT: Order Details */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              <div>
                <h2 className="t-label" style={{ fontSize: '0.8rem', color: 'var(--deep-black)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>Order Details</h2>
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ width: '80px', aspectRatio: '3/4', position: 'relative', background: 'var(--soft-ivory)' }}>
                    <Image src={order.items[0].image} alt={order.items[0].name} fill sizes="80px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: '0 0 0.5rem' }}>{order.items[0].name}</h3>
                    <p className="t-body" style={{ margin: 0, fontSize: '0.85rem' }}>Qty: {order.items[0].quantity}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', marginTop: '0.5rem' }}>₹{order.totalAmount.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="t-label" style={{ fontSize: '0.8rem', color: 'var(--deep-black)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>Specifications</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <p className="t-label" style={{ color: 'var(--color-grey)', marginBottom: '0.5rem' }}>Profile Used</p>
                    <p className="t-body">{order.measurementsUsed}</p>
                  </div>
                  <div>
                    <p className="t-label" style={{ color: 'var(--color-grey)', marginBottom: '0.5rem' }}>Est. Delivery</p>
                    <p className="t-body">{order.deliveryDate}</p>
                  </div>
                  <div>
                    <p className="t-label" style={{ color: 'var(--color-grey)', marginBottom: '0.5rem' }}>Payment</p>
                    <p className="t-body">{order.paymentStatus}</p>
                  </div>
                  <div>
                    <p className="t-label" style={{ color: 'var(--color-grey)', marginBottom: '0.5rem' }}>Shipping</p>
                    <p className="t-body">{order.shippingMethod}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="t-label" style={{ fontSize: '0.8rem', color: 'var(--deep-black)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>Delivery Address</h2>
                <p className="t-body" style={{ margin: 0 }}>
                  {order.shippingAddress.name}<br/>
                  {order.shippingAddress.street}<br/>
                  {order.shippingAddress.city}, {order.shippingAddress.country}
                </p>
              </div>

              <Button variant="outline" fullWidth>Download Invoice</Button>

            </div>
          </div>

          {/* RIGHT: Craft Journey Timeline */}
          <div>
            
            {/* Tailor Profile */}
            {order.artisan && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: E }} style={{ background: 'var(--deep-black)', color: 'var(--luxury-white)', padding: '3rem', marginBottom: '4rem', display: 'grid', gridTemplateColumns: '100px 1fr', gap: '2rem', alignItems: 'center' }}>
                <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--color-grey)', position: 'relative', overflow: 'hidden', border: '2px solid var(--warm-gold)' }}>
                  <Image src="/images/atelier.png" alt="Master Tailor" fill sizes="100px" style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <span className="t-label-gold" style={{ color: 'var(--warm-gold)', marginBottom: '0.5rem', display: 'block' }}>Assigned Master Artisan</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', margin: '0 0 1rem' }}>{order.artisan.name}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '2rem', alignItems: 'start' }}>
                    <div>
                      <p className="t-label" style={{ color: 'var(--color-grey)', marginBottom: '0.25rem', fontSize: '0.65rem' }}>Experience</p>
                      <p className="t-body" style={{ margin: 0 }}>{order.artisan.experience}</p>
                    </div>
                    <div>
                      <p className="t-label" style={{ color: 'var(--color-grey)', marginBottom: '0.25rem', fontSize: '0.65rem' }}>Specialization</p>
                      <p className="t-body" style={{ margin: 0 }}>{order.artisan.specialization}</p>
                    </div>
                    <div>
                      <p className="t-label" style={{ color: 'var(--color-grey)', marginBottom: '0.25rem', fontSize: '0.65rem' }}>Status</p>
                      <p className="t-body" style={{ margin: 0, color: 'var(--warm-gold)' }}>{order.artisan.status}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Timeline */}
            <div style={{ position: 'relative', paddingLeft: '3rem' }}>
              {/* Vertical Progress Line */}
              <div style={{
                position: 'absolute', top: 0, bottom: 0, left: 15,
                width: 2, background: 'var(--color-border)'
              }}>
                <motion.div 
                  initial={{ height: 0 }} animate={{ height: '35%' }} transition={{ duration: 2, delay: 0.5, ease: E }}
                  style={{ width: '100%', background: 'var(--warm-gold)' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {order.journey.map((stage, i) => (
                  <JourneyStep key={stage.id} stage={stage} index={i} />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
      <style>{`
        @keyframes pulse-gold {
          0% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(201, 168, 76, 0); }
          100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0); }
        }
        .active-node {
          animation: pulse-gold 2s infinite;
        }
        @media (max-width: 900px) {
          .tracking-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

function JourneyStep({ stage, index }: { stage: CraftStage; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: E }}
      style={{ position: 'relative' }}
    >
      {/* Node */}
      <div className={stage.status === 'active' ? 'active-node' : ''} style={{
        position: 'absolute', left: '-3rem', top: 6,
        width: 16, height: 16, borderRadius: '50%',
        background: stage.status === 'completed' ? 'var(--warm-gold)' : stage.status === 'active' ? 'var(--luxury-white)' : 'var(--soft-ivory)',
        border: stage.status === 'active' ? '3px solid var(--warm-gold)' : '2px solid transparent',
        transform: 'translateX(-50%)', zIndex: 10,
      }} />

      {/* Content */}
      <div style={{ opacity: stage.status === 'pending' ? 0.4 : 1, transition: 'opacity 0.3s' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: stage.status === 'active' ? 'var(--warm-gold)' : 'var(--deep-black)', margin: '0 0 0.5rem' }}>
          {stage.title}
        </h3>
        <p className="t-body-lg" style={{ color: 'var(--deep-black)', margin: '0 0 1rem' }}>{stage.subtitle}</p>
        
        <span className="t-label" style={{ display: 'inline-block', padding: '4px 8px', background: stage.status === 'pending' ? 'transparent' : 'var(--soft-ivory)', border: stage.status === 'pending' ? '1px solid var(--color-border)' : 'none', color: 'var(--color-grey)', marginBottom: '1.5rem' }}>
          {stage.date}
        </span>

        {/* Narrative / Story */}
        {stage.story && (
          <p className="t-body" style={{ fontStyle: 'italic', color: 'var(--color-grey)', marginBottom: '1.5rem', borderLeft: '2px solid var(--warm-gold)', paddingLeft: '1rem' }}>
            "{stage.story}"
          </p>
        )}

        {/* Artisan Notes */}
        {stage.artisanNotes && (
          <div style={{ background: 'var(--soft-ivory)', padding: '1.5rem', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
            <p className="t-label" style={{ color: 'var(--warm-gold)', marginBottom: '0.5rem' }}>Artisan Log</p>
            <p className="t-body" style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{stage.artisanNotes}</p>
          </div>
        )}

        {/* Optional Illustration / Image */}
        {stage.img && (
          <div style={{
            position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: stage.img.includes('illustrations') ? '4/3' : '16/9',
            background: 'var(--soft-ivory)', overflow: 'hidden', border: '1px solid var(--color-border)'
          }}>
            <Image src={stage.img} alt={stage.title} fill sizes="(max-width: 900px) 100vw, 400px" style={{ objectFit: stage.img.includes('illustrations') ? 'contain' : 'cover', padding: stage.img.includes('illustrations') ? '1.5rem' : 0 }} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
