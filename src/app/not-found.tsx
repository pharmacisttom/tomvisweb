import React from 'react';
import Link from 'next/link';
import { Home, Layers, PlayCircle, ArrowLeft, Search } from 'lucide-react';
import { TomvisLogo } from '@/components/TomvisLogo';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
      }}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '560px',
          width: '100%',
          textAlign: 'center',
          padding: '3.5rem 2rem',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-card)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow backdrop */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '260px',
            height: '260px',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <TomvisLogo size="md" showFramework={true} />
        </div>

        <div
          style={{
            fontSize: 'clamp(4rem, 8vw, 6rem)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.75rem',
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: '1.45rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '0.75rem',
          }}
        >
          Page or Solution Not Found
        </h1>

        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '2rem',
            maxWidth: '420px',
            margin: '0 auto 2rem auto',
          }}
        >
          The requested system route does not exist or may have been relocated in the latest TOMVIS Framework modular topology.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.85rem',
          }}
        >
          <Link href="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return to Home</span>
          </Link>

          <Link href="/demo" className="btn btn-secondary">
            <PlayCircle size={16} />
            <span>Browse Demos</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
