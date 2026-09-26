'use client';

import React from 'react';
import { 
  Code2, 
  Database, 
  Users, 
  ShieldCheck, 
  Leaf, 
  Lightbulb, 
  Cog, 
  BarChart3, 
  Heart,
  Sparkles
} from 'lucide-react';

export function FoundationPillars() {
  const pillars = [
    {
      id: 'develop',
      en: 'DEVELOP',
      th: 'พัฒนา',
      icon: Code2,
      color: '#0284c7',
      desc: 'Rapid modular development & clean code standards',
    },
    {
      id: 'integrate',
      en: 'INTEGRATE',
      th: 'เชื่อมโยง',
      icon: Database,
      color: '#0ea5e9',
      desc: 'Seamless data integration across disparate HIS/ERP',
    },
    {
      id: 'collaborate',
      en: 'COLLABORATE',
      th: 'ทำงานร่วมกัน',
      icon: Users,
      color: '#10b981',
      desc: 'Empowering teams, co-ops, field staff and citizens',
    },
    {
      id: 'secure',
      en: 'SECURE',
      th: 'ปลอดภัย',
      icon: ShieldCheck,
      color: '#059669',
      desc: 'Enterprise RBAC, encryption and tamper-evident audit',
    },
    {
      id: 'sustain',
      en: 'SUSTAIN',
      th: 'ยั่งยืน',
      icon: Leaf,
      color: '#22c55e',
      desc: 'Long-term digital sustainability and societal impact',
    },
  ];

  const dimensions = [
    { label: 'PEOPLE', th: 'คน / ผู้รับบริการ', icon: Lightbulb, color: '#f59e0b' },
    { label: 'PROCESS', th: 'กระบวนการมาตรฐาน', icon: Cog, color: '#0ea5e9' },
    { label: 'TECHNOLOGY', th: 'เทคโนโลยีรากฐาน', icon: BarChart3, color: '#10b981' },
    { label: 'SOCIETY', th: 'สังคมและคุณภาพชีวิต', icon: Heart, color: '#ec4899' },
  ];

  return (
    <div style={{ width: '100%', marginTop: '2.5rem' }}>
      {/* 5 Pillars Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className="glass-card"
              style={{
                padding: '1.25rem 1rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 'var(--radius-lg)',
                borderColor: `${p.color}33`,
                background: 'var(--bg-card)',
                transition: 'all 0.25s ease',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: `${p.color}18`,
                  border: `1.5px solid ${p.color}55`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: p.color,
                  marginBottom: '0.75rem',
                  boxShadow: `0 0 16px ${p.color}25`,
                }}
              >
                <Icon size={22} strokeWidth={2.2} />
              </div>

              <div style={{ fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.06em', color: 'var(--text-primary)' }}>
                {p.en}
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: p.color, marginBottom: '0.4rem' }}>
                {p.th}
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                {p.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* 4 Impact Dimensions Strip */}
      <div
        className="glass-card"
        style={{
          padding: '1.25rem 1.75rem',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--grad-banner)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <Sparkles size={20} color="var(--vis-green)" />
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--vis-green)' }}>
              From Ideas to Better Solutions
            </span>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              4 มิติแห่งการขับเคลื่อนคุณค่า
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
          {dimensions.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `${d.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: d.color }}>
                  <Icon size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.04em' }}>
                    {d.label}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                    {d.th}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
