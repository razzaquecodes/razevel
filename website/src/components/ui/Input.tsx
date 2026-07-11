import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, type = 'text', className = '', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const hasValue = Boolean(props.value) || Boolean(props.defaultValue);
    const isPassword = type === 'password';
    
    const inputType = isPassword ? (isPasswordVisible ? 'text' : 'password') : type;

    return (
      <div className={`input-wrapper ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
        <div 
          style={{ 
            position: 'relative', 
            borderBottom: `1px solid ${error ? 'var(--color-red, #E63946)' : (isFocused ? 'var(--color-black)' : 'var(--color-border)')}`, 
            transition: 'border-color 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '0.75rem'
          }}
        >
          {icon && (
            <span style={{ marginRight: '0.75rem', color: 'var(--color-grey-light)' }}>
              {icon}
            </span>
          )}
          
          <div style={{ position: 'relative', flex: 1 }}>
            <label 
              style={{
                position: 'absolute',
                left: 0,
                top: (isFocused || hasValue) ? '-1.2rem' : '0',
                fontSize: (isFocused || hasValue) ? '0.65rem' : '0.85rem',
                fontFamily: 'var(--font-sans)',
                color: (isFocused || hasValue) ? 'var(--color-grey)' : 'var(--color-stone)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease',
                pointerEvents: 'none',
              }}
            >
              {label}
            </label>
            <input
              ref={ref}
              type={inputType}
              onFocus={(e) => {
                setIsFocused(true);
                props.onFocus?.(e);
              }}
              onBlur={(e) => {
                setIsFocused(false);
                props.onBlur?.(e);
              }}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: 'var(--color-black)',
                padding: '0.25rem 0 0 0',
                marginTop: (isFocused || hasValue) ? '0.75rem' : '0',
                transition: 'all 0.3s ease',
              }}
              {...props}
            />
          </div>

          {isPassword && (
            <button 
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              style={{ background: 'none', border: 'none', color: 'var(--color-grey-light)', cursor: 'pointer', padding: '0 0.5rem' }}
              aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
            >
              {isPasswordVisible ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              )}
            </button>
          )}
        </div>
        
        {error && (
          <span style={{ color: 'var(--color-red, #E63946)', fontSize: '0.75rem', fontFamily: 'var(--font-sans)' }}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
