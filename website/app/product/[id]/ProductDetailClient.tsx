'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useCart } from '@/src/context/CartContext';
import ProductCard from '@/src/components/ui/ProductCard';
import { MOCK_PRODUCTS } from '@/src/lib/mockData';
import { notFound } from 'next/navigation';

export default function ProductDetailClient({ id }: { id: string }) {
  const { dispatch, isWishlisted } = useCart();
  const [activeTab, setActiveTab] = useState<'fabric'|'delivery'|'care'|'customization'>('fabric');
  const [selectedSize, setSelectedSize] = useState<string>('');
  
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  if (!product) return notFound();

  const wishlisted = isWishlisted(product.id);
  const completeTheLook = MOCK_PRODUCTS.filter(p => product.completeTheLookIds.includes(p.id));

  const handleAddToCart = () => {
    dispatch({ 
      type: 'ADD_ITEM', 
      item: { id: product.id, name: product.name, category: product.category, price: product.price, quantity: 1, image: product.image, fabric: product.fabric, isBespoke: product.isBespoke } 
    });
  };

  const toggleWishlist = () => {
    dispatch({ type: 'TOGGLE_WISHLIST', id: product.id });
  };

  return (
    <main style={{ background: 'var(--luxury-white)', minHeight: '100vh', paddingTop: '100px' }}>
      
      <section style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--gutter) 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(4rem, 8vw, 8rem)', alignItems: 'flex-start' }} className="pdp-grid">
          
          {/* Left: Images Gallery */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={{ position: 'relative', width: '100%', aspectRatio: '3/4', background: 'var(--soft-ivory)', overflow: 'hidden' }} className="zoom-container">
              <Image src={product.gallery[0]} alt={product.name} fill style={{ objectFit: 'cover' }} priority sizes="(max-width: 1024px) 100vw, 50vw" className="zoom-img" />
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {product.gallery.slice(1).map((img, i) => (
                <div key={i} style={{ position: 'relative', width: '100%', aspectRatio: '3/4', background: 'var(--soft-ivory)', overflow: 'hidden' }} className="zoom-container">
                  <Image src={img} alt="" fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 50vw, 25vw" className="zoom-img" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div style={{ position: 'sticky', top: '120px' }}>
            
            <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {product.badge && (
                <span style={{ background: 'rgba(0,0,0,0.05)', color: 'var(--color-black)', padding: '0.3rem 0.6rem', fontSize: '0.55rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {product.badge}
                </span>
              )}
              {product.isBespoke && (
                <span style={{ background: 'var(--color-black)', color: 'var(--color-gold)', padding: '0.3rem 0.6rem', fontSize: '0.55rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.1em', boxShadow: 'var(--shadow-md)' }}>
                  Bespoke Commission
                </span>
              )}
              <span style={{ border: '1px solid var(--color-border)', color: 'var(--color-grey)', padding: '0.3rem 0.6rem', fontSize: '0.55rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {product.category}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-black)', lineHeight: 1.1, margin: '0 0 1rem', fontWeight: 400 }}>
              {product.name}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '2rem' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '0.8rem' }}>★★★★★</div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-grey-light)' }}>{product.rating} ({product.reviewsCount} Verified Reviews)</span>
            </div>

            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-black)', margin: '0 0 2rem' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </p>

            <p className="t-body-lg" style={{ marginBottom: '3rem', color: 'var(--color-grey)' }}>
              {product.desc}
            </p>

            {/* Options */}
            <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div>
                <span className="t-label" style={{ marginBottom: '1rem', display: 'block' }}>Select Color</span>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {product.colors.map(c => (
                    <button key={c} style={{ width: 32, height: 32, borderRadius: '50%', background: c, border: '2px solid var(--color-border)', cursor: 'pointer', transition: 'border 0.3s' }} className="color-btn" />
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span className="t-label">Select Size</span>
                  <button style={{ background: 'none', border: 'none', textDecoration: 'underline', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--color-grey)', cursor: 'pointer' }}>Size Guide</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))', gap: '0.5rem' }}>
                  {product.sizes.map(s => (
                    <button 
                      key={s} 
                      onClick={() => setSelectedSize(s)}
                      style={{ 
                        padding: '0.75rem', 
                        border: selectedSize === s ? '1px solid var(--color-black)' : '1px solid var(--color-border)', 
                        background: selectedSize === s ? 'var(--color-black)' : 'transparent',
                        color: selectedSize === s ? 'var(--color-white)' : 'var(--color-grey)',
                        fontFamily: 'var(--font-sans)', fontSize: '0.85rem', cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleAddToCart}>
                {product.isBespoke ? 'Commission Bespoke Order' : 'Add To Cart'}
              </button>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', borderColor: wishlisted ? 'var(--color-gold)' : 'var(--color-border)', color: wishlisted ? 'var(--color-gold)' : 'var(--color-black)' }} onClick={toggleWishlist}>
                  {wishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}
                </button>
                <button className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                  Book Consultation
                </button>
              </div>
            </div>

            {/* Accordion Info */}
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', flexWrap: 'wrap' }}>
                {(['fabric', 'delivery', 'care', 'customization'] as const).map(tab => (
                  <button 
                    key={tab} 
                    onClick={() => setActiveTab(tab)}
                    style={{ background: 'none', border: 'none', padding: '0 0 0.5rem', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: activeTab === tab ? 'var(--color-black)' : 'var(--color-grey-light)', borderBottom: activeTab === tab ? '2px solid var(--color-gold)' : '2px solid transparent', transition: 'all 0.3s ease' }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div style={{ minHeight: '100px' }}>
                <AnimatePresence mode="wait">
                  <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                    {activeTab === 'fabric' && <p className="t-body">Crafted from {product.fabric.toLowerCase()}, sourced directly from master weavers. The embroidery features {product.embroidery} techniques utilizing authentic vintage looms.</p>}
                    {activeTab === 'delivery' && <p className="t-body">Estimated delivery timeline: {product.deliveryTimeline}. {product.isBespoke && 'Expedited bridal priority is available at checkout for urgent commissions.'}</p>}
                    {activeTab === 'care' && <p className="t-body">Strictly professional dry clean only. Store in the provided climate-controlled RAZEVÉL garment bag. Do not iron directly on embroidery.</p>}
                    {activeTab === 'customization' && <p className="t-body">Our master tailors offer complete customization. From altering necklines to bespoke sizing and color matching, every detail can be tailored to your preference.</p>}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Complete The Look */}
      {completeTheLook.length > 0 && (
        <section style={{ background: 'var(--soft-ivory)', padding: 'clamp(4rem, 8vw, 6rem) var(--gutter)' }}>
          <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="t-label-gold">Curated Styling</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-black)', margin: '1rem 0 0' }}>Complete The Look.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1rem, 2vw, 2rem)' }}>
              {completeTheLook.map((prod, i) => (
                <ProductCard key={prod.id} product={prod} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Proof / Reviews */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) var(--gutter)', maxWidth: 'var(--max-w-narrow)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-black)', margin: '0' }}>Atelier Testimonials</h2>
          <p className="t-body" style={{ marginTop: '1rem' }}>Reviews from verified bespoke commissions.</p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {[
            { name: 'Arjun M.', text: 'The attention to detail was staggering. The fit was perfect on the first try, and the packaging made me feel like royalty.', date: 'October 12, 2025' },
            { name: 'Priya S.', text: 'I commissioned my wedding piece here. It is an heirloom piece. The weight, the movement, the craftsmanship—worth every penny.', date: 'September 28, 2025' },
          ].map((review, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.9rem' }}>{review.name}</span>
                  <span style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--color-gold)', padding: '0.2rem 0.5rem', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: 4 }}>
                    ✓ Verified Purchase
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-grey-light)' }}>{review.date}</span>
              </div>
              <div style={{ color: 'var(--color-gold)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>★★★★★</div>
              <p className="t-body-lg" style={{ color: 'var(--color-black)' }}>&quot;{review.text}&quot;</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .zoom-container:hover .zoom-img { transform: scale(1.08); }
        .zoom-img { transition: transform 0.6s var(--ease-out); }
        .color-btn:hover { transform: scale(1.1); border-color: var(--color-black) !important; }
        @media (max-width: 900px) {
          .pdp-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </main>
  );
}
