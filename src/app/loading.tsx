import React from 'react';
import { TomvisLogo } from '@/components/TomvisLogo';

export default function Loading() {
  return (
    <div
      style={{
        minHeight: '65vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        gap: '1.5rem',
      }}
    >
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            border: '3px solid rgba(16, 185, 129, 0.15)',
            borderTopColor: 'var(--vis-green)',
            borderRightColor: 'var(--primary)',
            animation: 'spin 0.85s linear infinite',
          }}
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `
        }} />
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.04em' }}>
          Loading TOMVIS Framework...
        </div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
          Initializing system modules and telemetry
        </div>
      </div>
    </div>
  );
}
