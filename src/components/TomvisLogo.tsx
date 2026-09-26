import React from 'react';
import { Sprout } from 'lucide-react';

interface TomvisLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showFramework?: boolean;
  showMotto?: boolean;
}

export function TomvisLogo({ size = 'md', showFramework = true, showMotto = false }: TomvisLogoProps) {
  const getScale = () => {
    switch (size) {
      case 'sm':
        return { fontSize: '1.25rem', sproutSize: 12, fwSize: '0.55rem', mottoSize: '0.55rem' };
      case 'md':
        return { fontSize: '1.65rem', sproutSize: 15, fwSize: '0.65rem', mottoSize: '0.65rem' };
      case 'lg':
        return { fontSize: '2.4rem', sproutSize: 20, fwSize: '0.8rem', mottoSize: '0.75rem' };
      case 'hero':
        return { fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', sproutSize: 32, fwSize: 'clamp(0.85rem, 1.6vw, 1.15rem)', mottoSize: '0.85rem' };
    }
  };

  const scale = getScale();

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', userSelect: 'none' }}>
      {/* Tomvis wordmark */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          fontSize: scale.fontSize,
        }}
      >
        {/* Tom (Tech Blue) */}
        <span
          style={{
            color: '#0284c7',
            background: 'linear-gradient(180deg, #38bdf8 0%, #0284c7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Tom
        </span>

        {/* v (Green) */}
        <span
          style={{
            color: '#10b981',
            background: 'linear-gradient(180deg, #34d399 0%, #059669 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          v
        </span>

        {/* i with Leaf/Sprout Dot (Green) */}
        <span
          style={{
            position: 'relative',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#10b981',
            background: 'linear-gradient(180deg, #34d399 0%, #059669 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {/* Sprout Leaf Floating over i */}
          <span
            style={{
              position: 'absolute',
              top: size === 'hero' ? '-18px' : size === 'lg' ? '-12px' : '-8px',
              left: '50%',
              transform: 'translateX(-50%) rotate(15deg)',
              color: '#22c55e',
              filter: 'drop-shadow(0 0 6px rgba(34, 197, 94, 0.6))',
              display: 'inline-block',
            }}
          >
            <Sprout size={scale.sproutSize} strokeWidth={2.8} />
          </span>
          <span style={{ marginTop: '0.15em' }}>ı</span>
        </span>

        {/* s (Green) */}
        <span
          style={{
            color: '#10b981',
            background: 'linear-gradient(180deg, #34d399 0%, #059669 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          s
        </span>
      </div>

      {/* FRAMEWORK Subtitle with horizontal lines */}
      {showFramework && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            marginTop: '0.2rem',
          }}
        >
          <div style={{ flex: 1, height: '1.5px', background: 'linear-gradient(to right, transparent, #0284c7)' }} />
          <span
            style={{
              fontSize: scale.fwSize,
              fontWeight: 800,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
            }}
          >
            FRAMEWORK
          </span>
          <div style={{ flex: 1, height: '1.5px', background: 'linear-gradient(to left, transparent, #10b981)' }} />
        </div>
      )}

      {/* Motto: SIMPLE • CONNECTED • SUSTAINABLE */}
      {showMotto && (
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: scale.mottoSize,
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginTop: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: '#0284c7' }}>SIMPLE</span>
          <span style={{ color: '#10b981' }}>•</span>
          <span style={{ color: '#10b981' }}>CONNECTED</span>
          <span style={{ color: '#10b981' }}>•</span>
          <span style={{ color: '#22c55e' }}>SUSTAINABLE</span>
        </div>
      )}
    </div>
  );
}
