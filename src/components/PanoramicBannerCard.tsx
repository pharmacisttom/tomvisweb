'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, Sparkles, Sprout, ArrowRight, ShieldCheck } from 'lucide-react';

export function PanoramicBannerCard() {
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  return (
    <>
      <div style={{ width: '100%', margin: '0 auto' }}>
        {/* Long Horizontal Card Container */}
        <div
          className="glass-card"
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '2px solid rgba(16, 185, 129, 0.35)',
            boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.2)',
            background: '#0a0f1d',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {/* Top Decorative Header Strip */}
          <div
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--bg-elevated)',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                  display: 'inline-block',
                }}
              />
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.04em' }}>
                TOMVIS FRAMEWORK ARCHITECTURE & ECOSYSTEM
              </span>
              <span className="badge badge-available" style={{ fontSize: '0.7rem' }}>
                OFFICIAL ECOSYSTEM
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                “เชื่อมโยงทุกงาน เพื่อสังคมที่ดีขึ้น”
              </span>
              <button
                onClick={() => setFullscreenOpen(true)}
                className="btn-outline btn-sm"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.3rem 0.65rem',
                  fontSize: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                }}
                title="ขยายดูภาพขนาดเต็ม"
              >
                <Maximize2 size={13} />
                <span>ขยายภาพเต็มจอ</span>
              </button>
            </div>
          </div>

          {/* Panoramic Image Container */}
          <div
            onClick={() => setFullscreenOpen(true)}
            style={{
              position: 'relative',
              width: '100%',
              cursor: 'zoom-in',
              overflow: 'hidden',
              background: '#070b14',
            }}
          >
            <Image
              src="/images/tomvis-landscape-card.png"
              alt="TOMVIS Framework - เชื่อมโยงทุกงาน เพื่อสังคมที่ดีขึ้น - เล็กแต่เชื่อมโยง ยิ่งใหญ่กว่าเดิม"
              width={1920}
              height={720}
              priority
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              className="panoramic-img"
            />

            {/* Hover overlay hint */}
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                background: 'rgba(5, 8, 16, 0.75)',
                backdropFilter: 'blur(8px)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <Maximize2 size={13} color="var(--vis-green)" />
              <span>คลิกเพื่อดูภาพความละเอียดสูง</span>
            </div>
          </div>

          {/* Bottom Card Summary Bar */}
          <div
            style={{
              padding: '1.25rem 1.75rem',
              background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--vis-green)',
                  flexShrink: 0,
                }}
              >
                <Sprout size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  “เล็กแต่เชื่อมโยง ยิ่งใหญ่กว่าเดิม” • From Ideas to Better Solutions
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  TOMVIS FRAMEWORK — Building a Connected Tomorrow (SIMPLE • CONNECTED • SUSTAINABLE)
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--tom-blue)',
                  background: 'rgba(2, 132, 199, 0.1)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(2, 132, 199, 0.25)',
                }}
              >
                5 FOUNDATION PILLARS
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--vis-green)',
                  background: 'rgba(16, 185, 129, 0.1)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                }}
              >
                4 IMPACT DIMENSIONS
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--earth-gold)',
                  background: 'rgba(217, 119, 6, 0.1)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(217, 119, 6, 0.25)',
                }}
              >
                6 CONNECTED CHAMBERS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {fullscreenOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(3, 6, 12, 0.94)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={() => setFullscreenOpen(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1360px',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              background: '#070b14',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Bar */}
            <div
              style={{
                padding: '0.85rem 1.5rem',
                background: 'var(--bg-elevated)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Sprout size={18} color="var(--vis-green)" />
                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ffffff' }}>
                  TOMVIS FRAMEWORK — ภาพสถาปัตยกรรมและระบบนิเวศขนาดเต็ม
                </span>
              </div>

              <button
                onClick={() => setFullscreenOpen(false)}
                className="btn-outline btn-sm"
                style={{ width: '32px', height: '32px', padding: 0, borderRadius: '50%', color: '#ffffff' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Image Area */}
            <div
              style={{
                overflow: 'auto',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#070b14',
              }}
            >
              <Image
                src="/images/tomvis-landscape-card.png"
                alt="TOMVIS Framework Full Panorama"
                width={2400}
                height={900}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-md)',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
