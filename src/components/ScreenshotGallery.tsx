'use client';

import React, { useState } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Maximize2, 
  X, 
  Info, 
  ChevronLeft, 
  ChevronRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { ProjectScreenshot } from '@/types/project';

interface ScreenshotGalleryProps {
  screenshots: ProjectScreenshot[];
  projectName: string;
}

export function ScreenshotGallery({ screenshots, projectName }: ScreenshotGalleryProps) {
  const [selectedDevice, setSelectedDevice] = useState<'all' | 'desktop' | 'tablet' | 'mobile'>('all');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const filtered = selectedDevice === 'all' 
    ? screenshots 
    : screenshots.filter((s) => s.device === selectedDevice);

  const activeScreenshot = activeModalIndex !== null ? screenshots[activeModalIndex] : null;

  const nextScreenshot = () => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((activeModalIndex + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((activeModalIndex - 1 + screenshots.length) % screenshots.length);
  };

  const getDeviceIcon = (device: ProjectScreenshot['device']) => {
    switch (device) {
      case 'desktop':
        return <Monitor size={14} />;
      case 'tablet':
        return <Tablet size={14} />;
      case 'mobile':
        return <Smartphone size={14} />;
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Device Filter Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {(['all', 'desktop', 'tablet', 'mobile'] as const).map((dev) => (
            <button
              key={dev}
              onClick={() => setSelectedDevice(dev)}
              className={selectedDevice === dev ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
              style={{
                textTransform: 'capitalize',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}
            >
              {dev === 'all' && <span>All Views ({screenshots.length})</span>}
              {dev === 'desktop' && (
                <>
                  <Monitor size={15} />
                  <span>Desktop ({screenshots.filter((s) => s.device === 'desktop').length})</span>
                </>
              )}
              {dev === 'tablet' && (
                <>
                  <Tablet size={15} />
                  <span>Tablet ({screenshots.filter((s) => s.device === 'tablet').length})</span>
                </>
              )}
              {dev === 'mobile' && (
                <>
                  <Smartphone size={15} />
                  <span>Mobile ({screenshots.filter((s) => s.device === 'mobile').length})</span>
                </>
              )}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <Sparkles size={14} color="var(--primary)" />
          <span>Click any screenshot for Fullscreen Interactive Lightbox</span>
        </div>
      </div>

      {/* Gallery Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
        }}
      >
        {filtered.map((item) => {
          const originalIndex = screenshots.findIndex((s) => s.id === item.id);
          return (
            <div
              key={item.id}
              onClick={() => setActiveModalIndex(originalIndex)}
              className="glass-card"
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                transition: 'all 0.25s ease',
              }}
            >
              {/* Mockup Frame Header */}
              <div
                style={{
                  background: 'var(--bg-elevated)',
                  padding: '0.65rem 1rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                    tomvis://{projectName.toLowerCase().replace(/\s+/g, '-')}/{item.device}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  {getDeviceIcon(item.device)}
                  <span>{item.device}</span>
                </div>
              </div>

              {/* Realistic Visual Mockup Preview */}
              <div
                style={{
                  position: 'relative',
                  background: 'linear-gradient(145deg, #090e17 0%, #111a2e 100%)',
                  padding: '1.5rem',
                  minHeight: '210px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {/* Visual UI Elements Simulation */}
                <div
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    padding: '1rem',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: item.previewColor || 'var(--primary)' }} />
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff' }}>{item.title}</span>
                    </div>
                    <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(14, 165, 233, 0.15)', color: 'var(--primary)' }}>
                      LIVE MOCK
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '0.8rem' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.45rem', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>Status</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981' }}>Active Sync</div>
                    </div>
                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.45rem', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>Security</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>RBAC Tier 1</div>
                    </div>
                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.45rem', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>Telemetry</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b' }}>Sub-second</div>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '4px' }}>
                    {item.mockDataSummary}
                  </div>
                </div>

                {/* Hover overlay hint */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0, 0, 0, 0.65)',
                    padding: '0.4rem',
                    borderRadius: 'var(--radius-sm)',
                    color: '#ffffff',
                  }}
                  title="Expand to Fullscreen"
                >
                  <Maximize2 size={16} />
                </div>
              </div>

              {/* Caption & Metadata */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '0.9rem', flexGrow: 1 }}>
                  {item.caption}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {item.featuresShown.map((f) => (
                    <span
                      key={f}
                      style={{
                        fontSize: '0.68rem',
                        color: 'var(--text-secondary)',
                        backgroundColor: 'var(--bg-tertiary)',
                        padding: '0.15rem 0.45rem',
                        borderRadius: 'var(--radius-xs)',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeScreenshot && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(5, 8, 16, 0.92)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setActiveModalIndex(null)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '1020px',
              maxHeight: '92vh',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '1rem 1.5rem',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'var(--bg-elevated)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="badge badge-available">
                  {getDeviceIcon(activeScreenshot.device)}
                  <span style={{ textTransform: 'capitalize' }}>{activeScreenshot.device} View</span>
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {activeScreenshot.title}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {(activeModalIndex || 0) + 1} / {screenshots.length}
                </span>
                <button
                  onClick={() => setActiveModalIndex(null)}
                  className="btn-outline btn-sm"
                  style={{ width: '32px', height: '32px', padding: 0, borderRadius: '50%' }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body: Large Mockup Presentation */}
            <div
              style={{
                padding: '2rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                background: 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.08) 0%, transparent 80%)',
              }}
            >
              {/* Big High-Res Simulated Interface Canvas */}
              <div
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 'var(--radius-lg)',
                  background: '#090e17',
                  padding: '1.5rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                }}
              >
                {/* Browser/Device Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '0.85rem',
                    marginBottom: '1.25rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  </div>
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      padding: '0.25rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      fontFamily: 'monospace',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span>https://demo.tomvis.local/{projectName.toLowerCase()}/{activeScreenshot.id}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>SSL SECURE</span>
                </div>

                {/* Simulated Screen Interface Elements */}
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.95)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                        {projectName} • {activeScreenshot.title}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {activeScreenshot.caption}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span className="badge badge-available">Simulated Live Engine</span>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        Latency: 18ms
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      borderRadius: '8px',
                      padding: '1.25rem',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      marginBottom: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Info size={16} color="var(--primary)" />
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>
                        Synthetic Mock Data Payload
                      </span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {activeScreenshot.mockDataSummary}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                      Visible Module Features
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {activeScreenshot.featuresShown.map((f) => (
                        <span
                          key={f}
                          style={{
                            fontSize: '0.78rem',
                            color: '#ffffff',
                            backgroundColor: 'rgba(14, 165, 233, 0.15)',
                            border: '1px solid rgba(14, 165, 233, 0.3)',
                            padding: '0.35rem 0.75rem',
                            borderRadius: 'var(--radius-sm)',
                          }}
                        >
                          ✓ {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div
              style={{
                padding: '1rem 1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'var(--bg-elevated)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button onClick={prevScreenshot} className="btn btn-secondary btn-sm">
                  <ChevronLeft size={16} />
                  <span>Previous</span>
                </button>
                <button onClick={nextScreenshot} className="btn btn-secondary btn-sm">
                  <span>Next</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                <ShieldAlert size={14} color="#10b981" />
                <span>Synthetic Mock Data • Zero Real PII / PHI</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
