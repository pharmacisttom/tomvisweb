import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Info, Sparkles, Layers, Cpu, Mail, Lock, Sprout, Heart } from 'lucide-react';
import { PROJECTS_DATA } from '@/data/projects';
import { TomvisLogo } from '@/components/TomvisLogo';

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        marginTop: 'auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* Safety & Demo Environment Banner */}
        <div
          className="glass-card"
          style={{
            padding: '1.25rem 1.75rem',
            marginBottom: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            flexWrap: 'wrap',
            background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(16, 185, 129, 0.06) 100%)',
            borderColor: 'rgba(16, 185, 129, 0.25)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--vis-green)',
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                Synthetic Data Sandbox & Zero-Production Isolation
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                “เชื่อมโยงทุกงาน เพื่อสังคมที่ดีขึ้น” — ระบบจำลองเพื่อการสาธิต ทุกข้อมูลเป็น Mock Data ปลอดภัย 100%
              </div>
            </div>
          </div>
          <Link
            href="/security"
            className="btn btn-outline btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <Lock size={14} />
            <span>Read Security Architecture</span>
          </Link>
        </div>

        {/* 4-Column Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Col 1: Brand & Overview */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  position: 'relative',
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid rgba(16, 185, 129, 0.4)',
                  boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/tomvis-emblem.png"
                  alt="TOMVIS Official Emblem"
                  width={54}
                  height={54}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <TomvisLogo size="sm" showFramework={true} showMotto={true} />
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              “เล็กแต่เชื่อมโยง ยิ่งใหญ่กว่าเดิม” — สถาปัตยกรรมแอปพลิเคชันแบบแยกส่วน เชื่อมต่อทุกสายงานเพื่อสร้างสังคมและบริการที่ดียิ่งขึ้น
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--vis-green)', fontWeight: 600 }}>
              <Sparkles size={14} />
              <span>Bio-Digital Connected Ecosystem</span>
            </div>
          </div>

          {/* Col 2: Solutions Quick Links */}
          <div>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)', marginBottom: '1.1rem' }}>
              Solutions
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {PROJECTS_DATA.slice(0, 5).map((project) => (
                <li key={project.id}>
                  <Link
                    href={`/solutions/${project.slug}`}
                    style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
                    className="nav-link"
                  >
                    {project.name} <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>– {project.tagline.split('&')[0]}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/demo" style={{ fontSize: '0.86rem', color: 'var(--vis-green)', fontWeight: 600 }}>
                  View All 8 Solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Architecture & Security */}
          <div>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)', marginBottom: '1.1rem' }}>
              Architecture
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link href="/#ecosystem" style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }} className="nav-link">
                  Anthill Bio-Digital Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/technology" style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }} className="nav-link">
                  Framework Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/technology#architecture" style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }} className="nav-link">
                  Core & Module Flow
                </Link>
              </li>
              <li>
                <Link href="/security" style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }} className="nav-link">
                  Security Overview & RBAC
                </Link>
              </li>
              <li>
                <Link href="/admin" style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }} className="nav-link">
                  Admin Config Sandbox
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Presentation & Pitch */}
          <div>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)', marginBottom: '1.1rem' }}>
              Engage & Demo
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
              Presenting to government committees, hospital directors, or enterprise leadership? Schedule a specialized live walk-through.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary btn-sm"
              style={{ width: '100%', marginBottom: '0.6rem' }}
            >
              <Mail size={15} />
              <span>Request Solution Demo</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.8rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} TOMVIS FRAMEWORK — Building a Connected Tomorrow. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Synthetic / Mock Data Only</span>
            <span>•</span>
            <Link href="/security" style={{ textDecoration: 'underline' }}>
              Security Policy
            </Link>
            <span>•</span>
            <Link href="/demo" style={{ textDecoration: 'underline' }}>
              Live Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
