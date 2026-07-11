import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/src/context/CartContext';
import { Product } from '@/src/lib/mockData';
import { HeartIcon } from '@/src/icons';

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ProductCard = React.memo(function ProductCard({ product, index }: { product: Product; index: number }) {
  const { isWishlisted, dispatch } = useCart();
  const wishlisted = isWishlisted(product.id);
  const href = `/product/${product.id}`;

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'TOGGLE_WISHLIST', id: product.id });
  };

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'ADD_ITEM',
      item: {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        fabric: product.fabric,
        quantity: 1,
        image: product.image,
        isBespoke: product.isBespoke,
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: (index % 10) * 0.1, ease: E }}
      className="product-card group"
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', position: 'relative' }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden', background: 'var(--soft-ivory)' }}>
        <Link href={href} style={{ display: 'block', width: '100%', height: '100%' }}>
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            style={{ objectFit: 'cover' }} 
            className="product-img"
          />
        </Link>
        
        {/* Top Badges */}
        <div style={{ position: 'absolute', top: 'var(--space-2)', left: 'var(--space-2)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', zIndex: 10 }}>
          {product.badge && (
            <span style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: 'var(--color-black)', fontSize: '0.55rem', fontFamily: 'var(--font-sans)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', padding: '0.4rem 0.8rem', border: '1px solid rgba(0,0,0,0.05)' }}>
              {product.badge}
            </span>
          )}
          {product.isBespoke && (
            <span style={{ background: 'var(--color-black)', color: 'var(--color-gold)', fontSize: '0.55rem', fontFamily: 'var(--font-sans)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', padding: '0.4rem 0.8rem', boxShadow: 'var(--shadow-md)' }}>
              Bespoke
            </span>
          )}
        </div>

        {/* Wishlist Heart */}
        <button 
          onClick={toggleWishlist}
          aria-label={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          style={{ position: 'absolute', top: 'var(--space-2)', right: 'var(--space-2)', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 10, color: wishlisted ? 'var(--color-gold)' : 'rgba(255,255,255,0.8)', transition: 'transform var(--transition-fast)', transform: wishlisted ? 'scale(1.1)' : 'scale(1)' }}
          className="wishlist-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        {/* Hover Actions */}
        <div className="product-actions" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--space-2)', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-1)' }}>
          <button className="btn btn-outline" style={{ background: 'rgba(255,255,255,0.9)', color: 'var(--color-black)', fontSize: '0.65rem' }}>
            Quick View
          </button>
          <button className="btn btn-primary" style={{ fontSize: '0.65rem' }} onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', marginTop: 'var(--space-1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span className="t-label" style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}>{product.category}</span>
          <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
            {product.colors.map((c, i) => (
              <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c, border: '1px solid var(--color-border)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }} />
            ))}
          </div>
        </div>
        
        <Link href={href} style={{ textDecoration: 'none' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-black)', margin: '0.2rem 0', lineHeight: 1.4, fontWeight: 400 }}>
            {product.name}
          </h3>
        </Link>
        
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--color-grey-light)', display: 'block', marginBottom: 2 }}>
          {product.fabric}
        </span>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--color-grey)', margin: 0, fontWeight: 300 }}>
            ₹{product.price.toLocaleString('en-IN')}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ color: 'var(--color-gold)', fontSize: '0.7rem' }}>★</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--color-grey-light)' }}>{product.rating} ({product.reviewsCount})</span>
          </div>
        </div>
        
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'var(--color-grey-light)', display: 'flex', alignItems: 'center', gap: 4, marginTop: '0.25rem' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          Est. Delivery: {product.deliveryTimeline}
        </div>
      </div>

      <style>{`
        .product-img { transition: transform 1.2s var(--ease-slow); }
        .product-actions { opacity: 0; transform: translateY(10px); transition: all 0.5s var(--ease); pointer-events: none; }
        .product-card:hover .product-img { transform: scale(1.05); }
        .product-card:hover .product-actions { opacity: 1; transform: translateY(0); pointer-events: auto; }
        .wishlist-btn:hover { transform: scale(1.1) !important; color: var(--color-gold) !important; }
        
        @media (max-width: 1024px) {
          .product-actions { display: none; } /* Focus on simpler UX on mobile/tablet */
        }
      `}</style>
    </motion.div>
  );
});

export default ProductCard;
