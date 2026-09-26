'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Cloud, 
  Database, 
  Users, 
  Cog, 
  BarChart3, 
  FileText, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/projects';

export function BioDigitalEcosystem() {
  const [selectedChamber, setSelectedChamber] = useState<string>('cloud');

  const chambers = [
    {
      id: 'cloud',
      name: 'Cloud Infrastructure',
      th: 'คลาวด์ศูนย์กลาง',
      icon: Cloud,
      color: '#0ea5e9',
      desc: 'High-availability microservices, WebSocket telemetry, and containerized zero-downtime clusters.',
      relatedProjects: ['smart-ems', 'dashboard'],
    },
    {
      id: 'database',
      name: 'Secure Data Repository',
      th: 'ฐานข้อมูลและคลังความปลอดภัย',
      icon: Database,
      color: '#0284c7',
      desc: 'ACID relational schemas, tenant-keyed segregation, and encrypted storage with tamper-evident journals.',
      relatedProjects: ['finance', 'healthcare', 'cooperative'],
    },
    {
      id: 'people',
      name: 'People & Community',
      th: 'บุคลากร ชุมชน และสมาชิก',
      icon: Users,
      color: '#10b981',
      desc: 'Human-centric portal design empowering cooperative members, hospital patients, paramedics, and field crews.',
      relatedProjects: ['cooperative', 'smartop', 'healthcare'],
    },
    {
      id: 'process',
      name: 'Process & Automation',
      th: 'กระบวนการและระบบอัตโนมัติ',
      icon: Cog,
      color: '#d97706',
      desc: 'Algorithmic 3-way matching, automated dividend math, geofence validation, and emergency triage dispatching.',
      relatedProjects: ['smartop', 'smart-ems', 'pos', 'inspection'],
    },
    {
      id: 'analytics',
      name: 'Analytics & Insight',
      th: 'สถิติและปัญญาธุรกิจ',
      icon: BarChart3,
      color: '#8b5cf6',
      desc: 'Multi-dimensional executive KPI scorecards, automated narrative digests, and AR aging debt forecasting.',
      relatedProjects: ['dashboard', 'finance', 'inspection'],
    },
    {
      id: 'tasks',
      name: 'Operations & Evidence',
      th: 'ภารกิจและหลักฐานหน้างาน',
      icon: FileText,
      color: '#059669',
      desc: 'Digital receipts, photo-stamped attendance proof, on-site hazard audit checklists, and e-prescriptions.',
      relatedProjects: ['smartop', 'pos', 'inspection', 'healthcare'],
    },
  ];

  const active = chambers.find((c) => c.id === selectedChamber) || chambers[0];

  return (
    <div style={{ width: '100%' }}>
      {/* Visual Banner Container */}
      <div
        className="glass-card"
        style={{
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          marginBottom: '3rem',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
        }}
      >
        {/* Banner Image */}
        <div style={{ position: 'relative', width: '100%', background: '#0a0f1d' }}>
          <Image
            src="/images/tomvis-concept-banner.png"
            alt="Tomvis Framework - เชื่อมโยงทุกงาน เพื่อสังคมที่ดีขึ้น - เล็กแต่เชื่อมโยง ยิ่งใหญ่กว่าเดิม"
            width={1200}
            height={480}
            priority
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>

        {/* Banner Floating Metadata Overlay */}
        <div
          style={{
            padding: '1.5rem 2rem',
            background: 'var(--bg-elevated)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 900, color: 'var(--vis-green)' }}>
                “เชื่อมโยงทุกงาน เพื่อสังคมที่ดีขึ้น”
              </span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                “เล็กแต่เชื่อมโยง ยิ่งใหญ่กว่าเดิม”
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              สถาปัตยกรรมชีวภาพ-ดิจิทัล (Bio-Digital Synergy) ที่ได้รับแรงบันดาลใจจากพลังแห่งความร่วมมือแบบรวงรังธรรมชาติ สู่แพลตฟอร์มซอฟต์แวร์ระดับองค์กรที่มั่นคง
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--tom-blue)',
                background: 'rgba(2, 132, 199, 0.1)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(2, 132, 199, 0.25)',
              }}
            >
              SIMPLE
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--vis-green)',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
              }}
            >
              CONNECTED
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--sprout-green)',
                background: 'rgba(34, 197, 94, 0.1)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(34, 197, 94, 0.25)',
              }}
            >
              SUSTAINABLE
            </span>
          </div>
        </div>
      </div>

      {/* Interactive 6 Bio-Chambers Explorer */}
      <div className="section-header" style={{ marginBottom: '2rem' }}>
        <span className="section-tag">
          <Sparkles size={14} />
          <span>Anthill Connected Chambers</span>
        </span>
        <h3 className="section-title" style={{ fontSize: '2rem' }}>
          สำรวจ 6 ห้องรากฐานแห่งการเชื่อมโยง
        </h3>
        <p className="section-description">
          คลิกเลือกห้องสถาปัตยกรรม เพื่อดูว่าโมดูลทั้ง 8 ของ Tomvis ถูกประกอบและส่งต่อข้อมูลผ่านศูนย์กลางอย่างไร
        </p>
      </div>

      {/* Chamber Selector Pills */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0.75rem',
          marginBottom: '2rem',
        }}
      >
        {chambers.map((c) => {
          const Icon = c.icon;
          const isSelected = selectedChamber === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedChamber(c.id)}
              className="glass-card"
              style={{
                padding: '1rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.45rem',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                border: isSelected ? `2px solid ${c.color}` : '1px solid var(--border-subtle)',
                background: isSelected ? `${c.color}15` : 'var(--bg-card)',
                transform: isSelected ? 'translateY(-3px)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: `${c.color}22`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: c.color,
                }}
              >
                <Icon size={18} />
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {c.name}
              </div>
              <div style={{ fontSize: '0.7rem', color: c.color, fontWeight: 600 }}>
                {c.th}
              </div>
            </button>
          );
        })}
      </div>

      {/* Chamber Detail Card */}
      <div
        className="glass-card"
        style={{
          padding: '2rem',
          borderRadius: 'var(--radius-xl)',
          borderLeft: `5px solid ${active.color}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${active.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: active.color }}>
              {React.createElement(active.icon, { size: 22 })}
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {active.name} ({active.th})
              </h4>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Chamber Node in Tomvis Anthill Ecosystem
              </span>
            </div>
          </div>

          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              background: `${active.color}15`,
              color: active.color,
              border: `1px solid ${active.color}44`,
            }}
          >
            ACTIVE CORE
          </span>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          {active.desc}
        </p>

        <div>
          <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.6rem' }}>
            Connected Tomvis Solution Modules
          </span>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {active.relatedProjects.map((slug) => {
              const proj = PROJECTS_DATA.find((p) => p.slug === slug);
              if (!proj) return null;
              return (
                <Link
                  key={slug}
                  href={`/solutions/${slug}`}
                  style={{
                    background: 'var(--bg-secondary)',
                    padding: '0.65rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    transition: 'all 0.2s ease',
                  }}
                  className="nav-link"
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: active.color }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {proj.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {proj.tagline}
                    </div>
                  </div>
                  <ArrowRight size={14} color="var(--primary)" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
