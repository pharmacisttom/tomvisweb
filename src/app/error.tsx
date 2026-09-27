'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { TomvisLogo } from '@/components/TomvisLogo';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to client console or monitoring service safely
    console.error('TOMVIS Application Runtime Error:', error);
  }, [error]);

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
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid rgba(244, 63, 94, 0.3)',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(244, 63, 94, 0.15)',
              border: '2px solid rgba(244, 63, 94, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f43f5e',
            }}
          >
            <AlertTriangle size={28} />
          </div>
        </div>

        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '0.65rem',
          }}
        >
          System Runtime Interruption
        </h1>

        <p
          style={{
            fontSize: '0.88rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '1.75rem',
          }}
        >
          An unexpected exception occurred while rendering this interface. Our system state has caught the exception to maintain session integrity.
        </p>

        {error.digest && (
          <div
            style={{
              background: 'var(--bg-tertiary)',
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              marginBottom: '1.75rem',
              display: 'inline-block',
            }}
          >
            Digest: {error.digest}
          </div>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.85rem',
          }}
        >
          <button onClick={() => reset()} className="btn btn-primary">
            <RefreshCw size={16} />
            <span>Reload Component</span>
          </button>

          <Link href="/" className="btn btn-secondary">
            <Home size={16} />
            <span>Return to Home</span>
          </Link>

          <Link href="/contact" className="btn btn-outline">
            <Mail size={16} />
            <span>Report Issue</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
