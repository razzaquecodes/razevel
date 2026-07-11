import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "style" | "children"> {
  variant?: 'primary' | 'outline' | 'ghost' | 'google';
  isLoading?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', isLoading = false, fullWidth = false, className = '', disabled, style, ...props }, ref) => {
    
    // Base styles
    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.75rem',
      fontWeight: 500,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      cursor: (disabled || isLoading) ? 'not-allowed' : 'pointer',
      opacity: (disabled || isLoading) ? 0.7 : 1,
      transition: 'all 0.3s ease',
      height: '48px',
      padding: '0 2rem',
      position: 'relative',
      overflow: 'hidden',
      width: fullWidth ? '100%' : 'auto',
      border: 'none',
      ...style,
    };

    // Variant styles
    const variants: Record<string, React.CSSProperties> = {
      primary: {
        background: 'var(--color-black)',
        color: 'var(--color-white)',
      },
      outline: {
        background: 'transparent',
        border: '1px solid var(--color-border)',
        color: 'var(--color-black)',
      },
      ghost: {
        background: 'transparent',
        color: 'var(--color-grey)',
      },
      google: {
        background: 'var(--color-white)',
        border: '1px solid var(--color-border)',
        color: 'var(--color-black)',
        textTransform: 'none',
        letterSpacing: 'normal',
        fontSize: '0.9rem',
        fontWeight: 400,
      }
    };

    const variantStyle = variants[variant] || variants.primary;

    return (
      <motion.button
        ref={ref}
        whileTap={(!disabled && !isLoading) ? { scale: 0.98 } : undefined}
        style={{ ...baseStyle, ...variantStyle }}
        disabled={disabled || isLoading}
        className={`custom-btn ${variant} ${className}`}
        {...props}
      >
        <span style={{ opacity: isLoading ? 0 : 1, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {children}
        </span>
        
        {isLoading && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              style={{ width: 20, height: 20, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: variant === 'primary' ? 'var(--color-white)' : 'var(--color-black)', borderRadius: '50%' }}
            />
          </div>
        )}

        <style>{`
          .custom-btn.primary:hover:not(:disabled) { background: var(--color-gold); color: var(--color-black); }
          .custom-btn.outline:hover:not(:disabled) { border-color: var(--color-black); }
          .custom-btn.ghost:hover:not(:disabled) { color: var(--color-black); }
          .custom-btn.google:hover:not(:disabled) { background: var(--soft-ivory); }
        `}</style>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
