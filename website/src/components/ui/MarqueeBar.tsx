'use client';

export default function MarqueeBar() {
  const ITEMS = [
    'Handcrafted',
    '✦',
    'Made to Order',
    '✦',
    'Timeless Heritage',
    '✦',
    'Bespoke Couture',
    '✦',
    'Zero Compromise',
    '✦',
    'Crafted for Forever',
    '✦',
  ];

  const content = [...ITEMS, ...ITEMS];

  return (
    <div style={{
      background: 'var(--black)',
      paddingBlock: '1rem',
      overflow: 'hidden',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      borderBottom: '1px solid rgba(201,168,76,0.15)',
    }}>
      <div style={{
        display: 'flex',
        animation: 'marquee 36s linear infinite',
        whiteSpace: 'nowrap',
        width: 'max-content',
      }}>
        {content.map((item, i) => (
          <span key={i} style={{
            fontFamily: item === '✦' ? 'inherit' : 'var(--font-sans)',
            fontSize: item === '✦' ? '0.5rem' : '0.6rem',
            fontWeight: 400,
            letterSpacing: item === '✦' ? '0' : '0.22em',
            textTransform: 'uppercase',
            color: item === '✦' ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
            paddingInline: item === '✦' ? '1.5rem' : '0',
            flexShrink: 0,
          }}>{item}</span>
        ))}
      </div>
    </div>
  );
}
