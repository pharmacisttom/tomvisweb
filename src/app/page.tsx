'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  PlayCircle, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  Lock, 
  ChevronRight,
  Server,
  Zap,
  Boxes,
  Database,
  Terminal,
  ExternalLink,
  Sprout,
  Heart
} from 'lucide-react';
import { PROJECTS_DATA, USE_CASES_DATA, SECURITY_STANDARDS } from '@/data/projects';
import { NetworkAnimation } from '@/components/NetworkAnimation';
import { SolutionCard } from '@/components/SolutionCard';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { DemoSandboxModal } from '@/components/DemoSandboxModal';
import { TomvisLogo } from '@/components/TomvisLogo';
import { FoundationPillars } from '@/components/FoundationPillars';
import { BioDigitalEcosystem } from '@/components/BioDigitalEcosystem';
import { PanoramicBannerCard } from '@/components/PanoramicBannerCard';
import { Project } from '@/types/project';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeDemoProject, setActiveDemoProject] = useState<Project | null>(null);

  const categories = ['All', 'Operations', 'Healthcare', 'Finance & Cooperative', 'Commerce & Retail', 'Analytics & Intelligence'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* =========================================================================
          HERO SECTION (Bio-Digital Synergy & Brand Identity)
          ========================================================================= */}
      <section
        style={{
          position: 'relative',
          paddingTop: '3.5rem',
          paddingBottom: '5rem',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        {/* Ambient Radial Gradient Glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '1200px',
            height: '650px',
            background: 'var(--grad-brand-glow)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 2.5rem auto' }}>
            
            {/* Official Circular Emblem Showcase with Glow */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
              <div
                style={{
                  position: 'relative',
                  width: 'clamp(140px, 22vw, 200px)',
                  height: 'clamp(140px, 22vw, 200px)',
                  borderRadius: '50%',
                  padding: '5px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #10b981 50%, #22c55e 100%)',
                  boxShadow: '0 0 35px rgba(16, 185, 129, 0.4), 0 0 60px rgba(2, 132, 199, 0.25)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
                className="pulse-glow"
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: '#ffffff',
                  }}
                >
                  <Image
                    src="/images/tomvis-emblem.png"
                    alt="TOMVIS Framework Official Emblem - Connected People, Connected Care"
                    width={200}
                    height={200}
                    priority
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Twin Slogans from Emblem */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <span className="section-tag" style={{ margin: 0, fontSize: '0.82rem', padding: '0.35rem 0.95rem' }}>
                <Sprout size={15} />
                <span>“เชื่อมโยงทุกงาน เพื่อสุขภาพที่ดียิ่งขึ้น”</span>
              </span>
              <span className="section-tag" style={{ margin: 0, fontSize: '0.82rem', padding: '0.35rem 0.95rem', borderColor: 'rgba(2, 132, 199, 0.3)', color: '#0284c7', background: 'rgba(2, 132, 199, 0.1)' }}>
                <Heart size={15} />
                <span>Connected People • Connected Care</span>
              </span>
            </div>

            {/* Main Tomvis Logo Presentation */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <TomvisLogo size="hero" showFramework={true} showMotto={true} />
            </div>

            {/* Slogan & English Concept */}
            <div style={{ margin: '1.5rem 0 1rem 0' }}>
              <div
                style={{
                  fontSize: 'clamp(1.4rem, 2.8vw, 2.1rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: '0.65rem',
                }}
              >
                “One Framework. Multiple Solutions.”
              </div>
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  maxWidth: '740px',
                  margin: '0 auto',
                }}
              >
                Tomvis is a modular application platform designed for building modern, secure and scalable digital solutions.
              </p>
            </div>

            {/* Small Yet Connected Quote Badge */}
            <div style={{ margin: '1.25rem 0 2rem 0' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--earth-gold)',
                  background: 'rgba(217, 119, 6, 0.12)',
                  border: '1px solid rgba(217, 119, 6, 0.3)',
                  padding: '0.35rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                <Sparkles size={14} />
                <span>“เล็กแต่เชื่อมโยง ยิ่งใหญ่กว่าเดิม” • From Ideas to Better Solutions</span>
              </span>
            </div>

            {/* Hero CTA Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <a href="#solutions" className="btn btn-primary btn-lg">
                <span>Explore Solutions</span>
                <ArrowRight size={18} />
              </a>

              <Link href="/demo" className="btn btn-secondary btn-lg">
                <PlayCircle size={18} color="var(--vis-green)" />
                <span>Live Demo</span>
              </Link>

              <a href="#ecosystem" className="btn btn-outline btn-lg">
                <Sprout size={18} />
                <span>About Ecosystem</span>
              </a>
            </div>
          </div>

          {/* 5 Foundation Pillars & 4 Impact Dimensions */}
          <FoundationPillars />

          {/* Interactive Network Animation Canvas */}
          <div style={{ marginTop: '3.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                Live Connected Topology
              </span>
            </div>
            <NetworkAnimation />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PANORAMIC ARCHITECTURE CARD ("Card ยาวหน้า Page")
          ========================================================================= */}
      <section className="section" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-tag">
              <Sparkles size={14} />
              <span>Official Architecture Panorama</span>
            </span>
            <h2 className="section-title">
              ระบบนิเวศแห่งความเชื่อมโยงระดับองค์กร
            </h2>
            <p className="section-description">
              ภาพจำลองสถาปัตยกรรมจอมปลวกดิจิทัล (Connected Anthill Ecosystem) ถ่ายทอดความร่วมมือ พลังแห่งข้อมูล และการขับเคลื่อนสังคม
            </p>
          </div>

          <PanoramicBannerCard />
        </div>
      </section>

      {/* =========================================================================
          BIO-DIGITAL ECOSYSTEM SECTION (The Anthill Architecture)
          ========================================================================= */}
      <section id="ecosystem" className="section" style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Sprout size={14} />
              <span>Bio-Digital Synergy</span>
            </span>
            <h2 className="section-title">
              ระบบนิเวศแห่งการเชื่อมโยง (Anthill Architecture)
            </h2>
            <p className="section-description">
              โครงสร้างที่ได้รับแรงบันดาลใจจากความร่วมมือในธรรมชาติ: เปรียบเหมือนมดตัวเล็กที่สร้างรังอันมั่นคงและยิ่งใหญ่ โมดูลขนาดกะทัดรัดของ Tomvis สามารถต่อเชื่อมและสื่อสารเป็นหนึ่งเดียว
            </p>
          </div>

          <BioDigitalEcosystem />
        </div>
      </section>

      {/* =========================================================================
          STATISTICS & VALUE PILLARS
          ========================================================================= */}
      <section
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--bg-secondary)',
          padding: '2.5rem 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(2, 132, 199, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', flexShrink: 0 }}>
                <Boxes size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>8 Modular</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Enterprise Solutions</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', flexShrink: 0 }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>100% Synthetic</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Safe Mock Sandbox</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(34, 197, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e', flexShrink: 0 }}>
                <Zap size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>Sub-second</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Real-time Telemetry</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(217, 119, 6, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', flexShrink: 0 }}>
                <Server size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>Config-Driven</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Extensible Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SOLUTION SHOWCASE SECTION (All 8 Solutions)
          ========================================================================= */}
      <section id="solutions" className="section" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Layers size={14} />
              <span>Modular Solution Showcase</span>
            </span>
            <h2 className="section-title">
              Engineered for Mission-Critical Domains
            </h2>
            <p className="section-description">
              สำรวจ 8 โซลูชันดิจิทัลที่พัฒนาบน Tomvis Framework แต่ละระบบพร้อมใช้งานด้วยฟังก์ชันเฉพาะทาง การรักษาความปลอดภัยระดับสูง และการเชื่อมต่อข้ามสายงาน
            </p>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '3rem',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {cat}
                {cat === 'All' ? ` (${PROJECTS_DATA.length})` : ''}
              </button>
            ))}
          </div>

          {/* Solutions Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredProjects.map((project) => (
              <SolutionCard
                key={project.id}
                project={project}
                onOpenDemo={(p) => setActiveDemoProject(p)}
              />
            ))}
          </div>

          {/* Showcase Bottom Banner */}
          <div
            className="glass-card"
            style={{
              marginTop: '4rem',
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap',
              background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.1) 0%, rgba(16, 185, 129, 0.08) 100%)',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Need to test with synthetic test accounts?
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Access the consolidated Live Demo Portal to view credentials and launch simulated sandboxes.
              </p>
            </div>
            <Link href="/demo" className="btn btn-primary">
              <PlayCircle size={18} />
              <span>Go to Live Demo Portal</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          USE CASES: BUILT FOR REAL-WORLD SOLUTIONS
          ========================================================================= */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <CheckCircle2 size={14} />
              <span>Industry Adaptability</span>
            </span>
            <h2 className="section-title">
              Built for Real-World Solutions
            </h2>
            <p className="section-description">
              สถาปัตยกรรม Tomvis ปรับใช้ได้อย่างทรงพลังทั้งในระบบสุขภาพฉุกเฉิน กองทุนสหกรณ์ เครือข่ายค้าปลีก และการบริหารราชการส่วนท้องถิ่น
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {USE_CASES_DATA.map((uc) => (
              <div
                key={uc.title}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--vis-green)',
                      background: 'rgba(16, 185, 129, 0.1)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {uc.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {uc.title}
                </h3>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.75rem' }}>
                  {uc.subtitle}
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {uc.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                  {uc.solutionSlugs.map((slug) => (
                    <Link
                      key={slug}
                      href={`/solutions/${slug}`}
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-primary)',
                        background: 'var(--bg-tertiary)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                      className="nav-link"
                    >
                      <span>Explore</span>
                      <ChevronRight size={12} color="var(--vis-green)" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ARCHITECTURE SECTION
          ========================================================================= */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <ArchitectureDiagram />

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link
              href="/technology"
              className="btn btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Cpu size={16} />
              <span>Deep Dive into Framework Technology & Stack</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECURITY TEASER SECTION
          ========================================================================= */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Lock size={14} />
              <span>Zero-Trust Foundations</span>
            </span>
            <h2 className="section-title">
              Enterprise Security by Default
            </h2>
            <p className="section-description">
              Tomvis embeds cryptographic security, fine-grained access control, and complete audit trail integrity directly into every layer.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            {SECURITY_STANDARDS.slice(0, 4).map((sec) => (
              <div
                key={sec.id}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                    }}
                  >
                    <ShieldCheck size={20} />
                  </div>
                  <span className="badge badge-available">{sec.badge}</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  {sec.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {sec.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/security" className="btn btn-outline">
              <ShieldCheck size={16} />
              <span>View Full Security & Compliance Specifications</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CALL TO ACTION
          ========================================================================= */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2.5rem, 5vw, 4.5rem)',
              textAlign: 'center',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, rgba(16, 185, 129, 0.08) 50%, rgba(217, 119, 6, 0.05) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ maxWidth: '750px', margin: '0 auto' }}>
              <span className="section-tag" style={{ marginBottom: '1.25rem' }}>
                Pitch & Demonstration Ready
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                “เล็กแต่เชื่อมโยง ยิ่งใหญ่กว่าเดิม”
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                ร่วมขับเคลื่อนองค์กรของคุณด้วย Tomvis Framework — แพลตฟอร์มที่ผสมผสานพลังความร่วมมือตามธรรมชาติ เข้ากับเทคโนโลยีคลาวด์และสถาปัตยกรรมระดับองค์กร
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <Link href="/demo" className="btn btn-primary btn-lg">
                  <PlayCircle size={20} />
                  <span>Launch Interactive Demos</span>
                </Link>

                <Link href="/contact" className="btn btn-secondary btn-lg">
                  <span>Schedule Private Walkthrough</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Sandbox Modal */}
      <DemoSandboxModal
        project={activeDemoProject}
        onClose={() => setActiveDemoProject(null)}
      />
    </>
  );
}
