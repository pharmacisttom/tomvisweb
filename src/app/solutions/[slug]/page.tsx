import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ArrowLeft, 
  ArrowRight, 
  PlayCircle, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Smartphone, 
  Monitor, 
  Tablet, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  ExternalLink,
  Lock,
  Sparkles,
  Server,
  Terminal,
  Activity,
  Calendar,
  Check
} from 'lucide-react';
import { PROJECTS_DATA, getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { ScreenshotGallery } from '@/components/ScreenshotGallery';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | TOMVIS',
    };
  }

  return {
    title: `${project.name} - ${project.tagline}`,
    description: project.description,
    openGraph: {
      title: `${project.name} | TOMVIS Solution Showcase`,
      description: project.description,
    },
    robots: {
      index: !project.noIndex,
      follow: !project.noIndex,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next and previous project for seamless tour
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : PROJECTS_DATA[PROJECTS_DATA.length - 1];
  const nextProject = currentIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[currentIndex + 1] : PROJECTS_DATA[0];

  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* =========================================================================
          HERO & BREADCRUMB
          ========================================================================= */}
      <section
        style={{
          paddingTop: '3.5rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'linear-gradient(180deg, rgba(14, 165, 233, 0.08) 0%, transparent 100%)',
          position: 'relative',
        }}
      >
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              marginBottom: '1.75rem',
            }}
          >
            <Link href="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <ArrowLeft size={14} />
              <span>Showcase Home</span>
            </Link>
            <span>/</span>
            <Link href="/#solutions" className="nav-link">
              Solutions
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{project.name}</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span className="section-tag" style={{ margin: 0 }}>
                  {project.category}
                </span>
                <span className="badge badge-available">
                  {project.status}
                </span>
                <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>
                  {project.version}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Calendar size={13} />
                  <span>Updated {project.lastUpdated}</span>
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                {project.name}
              </h1>

              <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 600, color: 'var(--primary)', marginBottom: '1.25rem' }}>
                {project.tagline}
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link href={`/demo#${project.slug}`} className="btn btn-primary">
                  <PlayCircle size={18} />
                  <span>Launch Live Demo</span>
                </Link>

                <a href="#demo-info" className="btn btn-secondary">
                  <Terminal size={16} />
                  <span>Demo Credentials</span>
                </a>

                <Link href="/contact" className="btn btn-outline">
                  <span>Inquire for Deployment</span>
                </Link>
              </div>
            </div>

            {/* Quick Metrics Pillar */}
            {project.highlightStats && (
              <div
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  minWidth: '220px',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                  Performance Benchmark
                </div>
                {project.highlightStats.map((stat) => (
                  <div key={stat.label} style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREENSHOTS GALLERY
          ========================================================================= */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">Visual Verification</span>
            <h2 className="section-title">Interface & User Experience</h2>
            <p className="section-description">
              Realistic captures across Desktop command views, field tablets, and mobile smartphones.
            </p>
          </div>

          <ScreenshotGallery screenshots={project.screenshots} projectName={project.name} />
        </div>
      </section>

      {/* =========================================================================
          PROJECT OVERVIEW, PROBLEM & SOLUTION
          ========================================================================= */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
        <div className="container">
          {/* Detailed Overview */}
          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3.5rem', borderRadius: 'var(--radius-xl)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              System Overview & Mission
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {project.overview}
            </p>
          </div>

          {/* 2-Column: Problem vs Solution */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* The Problem */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                borderColor: 'rgba(239, 68, 68, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}>
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    The Problem
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600 }}>Operational Vulnerabilities</span>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {project.problem.summary}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {project.problem.points.map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#ef4444', fontWeight: 800, marginTop: '2px' }}>✕</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                borderColor: 'rgba(16, 185, 129, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    The Tomvis Solution
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>Architecture Resolution</span>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {project.solution.summary}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {project.solution.points.map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#10b981', fontWeight: 800, marginTop: '2px' }}>✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY FEATURES
          ========================================================================= */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Functional Specifications</span>
            <h2 className="section-title">Key Features & Modules</h2>
            <p className="section-description">
              Engineered out-of-the-box with complete business logic, audit safety, and responsive user interfaces.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {project.detailedFeatures.map((feat) => (
              <div
                key={feat.title}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                {feat.badge && (
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        background: 'rgba(14, 165, 233, 0.1)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(14, 165, 233, 0.25)',
                      }}
                    >
                      {feat.badge}
                    </span>
                  </div>
                )}
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1 }}>
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TECHNOLOGY & ARCHITECTURE
          ========================================================================= */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Engineering Foundation</span>
            <h2 className="section-title">Technology & Topology</h2>
            <p className="section-description">
              How {project.name} is wired to deliver speed, reliability, and enterprise-grade data isolation.
            </p>
          </div>

          {/* Technology Badges */}
          <div
            className="glass-card"
            style={{
              padding: '1.5rem 2rem',
              marginBottom: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem',
            }}
          >
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Active Tech Stack
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Integrated components running this solution
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    fontFamily: 'monospace',
                    color: 'var(--primary)',
                    background: 'rgba(14, 165, 233, 0.1)',
                    border: '1px solid rgba(14, 165, 233, 0.25)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Layers */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            {project.architecture.layers.map((layer, idx) => (
              <div
                key={layer.name}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                    }}
                  >
                    {idx + 1}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {layer.name}
                  </h4>
                </div>

                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {layer.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {layer.components.map((c) => (
                    <span
                      key={c}
                      style={{
                        fontSize: '0.72rem',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-primary)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: 'var(--radius-xs)',
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Data Flow Pipeline */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={18} color="var(--primary)" />
              <span>Real-Time Transaction Data Flow</span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {project.architecture.dataFlow.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--primary)', fontFamily: 'monospace', fontWeight: 700 }}>
                    Step {idx + 1}:
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECURITY & DEVICE SUPPORT
          ========================================================================= */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Security Profile */}
            <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} color="#10b981" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Security & Access Control
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Data Segregation
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {project.security.dataSegregation}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Access Control (RBAC)
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {project.security.accessControl}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Encryption Standards
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {project.security.encryption}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Compliance Alignment
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {project.security.complianceNotes}
                  </div>
                </div>
              </div>
            </div>

            {/* Device Compatibility */}
            <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Smartphone size={24} color="var(--primary)" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Hardware & Device Support
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                  <Monitor size={22} color={project.deviceSupport.desktop ? 'var(--primary)' : 'var(--text-muted)'} style={{ margin: '0 auto 0.4rem auto' }} />
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>Desktop</div>
                  <div style={{ fontSize: '0.7rem', color: project.deviceSupport.desktop ? '#10b981' : 'var(--text-muted)' }}>
                    {project.deviceSupport.desktop ? 'Full Support' : 'N/A'}
                  </div>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                  <Tablet size={22} color={project.deviceSupport.tablet ? 'var(--primary)' : 'var(--text-muted)'} style={{ margin: '0 auto 0.4rem auto' }} />
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>Tablet</div>
                  <div style={{ fontSize: '0.7rem', color: project.deviceSupport.tablet ? '#10b981' : 'var(--text-muted)' }}>
                    {project.deviceSupport.tablet ? 'Full Support' : 'N/A'}
                  </div>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                  <Smartphone size={22} color={project.deviceSupport.mobile ? 'var(--primary)' : 'var(--text-muted)'} style={{ margin: '0 auto 0.4rem auto' }} />
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>Mobile</div>
                  <div style={{ fontSize: '0.7rem', color: project.deviceSupport.mobile ? '#10b981' : 'var(--text-muted)' }}>
                    {project.deviceSupport.mobile ? 'Full Support' : 'Limited'}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {project.deviceSupport.details}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DEMO INFORMATION & SYNTHETIC CREDENTIALS
          ========================================================================= */}
      <section id="demo-info" className="section" style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Interactive Sandbox</span>
            <h2 className="section-title">Demo Access Information</h2>
            <p className="section-description">
              Access credentials generated specifically for this demonstration environment.
            </p>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '880px',
              margin: '0 auto',
            }}
          >
            {/* Safety Alert */}
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
                fontSize: '0.84rem',
                color: '#10b981',
              }}
            >
              <ShieldCheck size={20} flex-shrink="0" />
              <div>
                <strong>Sandbox Guarantee:</strong> {project.demoSafetyNotes}
              </div>
            </div>

            {/* Credentials List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {project.demoCredentials?.map((cred, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>
                      {cred.role}
                    </span>
                    <span className="badge badge-available">Synthetic Access</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '0.75rem' }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Demo Username</div>
                      <div style={{ fontSize: '0.9rem', fontFamily: 'monospace', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                        {cred.username}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Demo Password</div>
                      <div style={{ fontSize: '0.9rem', fontFamily: 'monospace', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                        {cred.password}
                      </div>
                    </div>
                  </div>

                  {cred.notes && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <strong>Role Scope:</strong> {cred.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href={`/demo#${project.slug}`} className="btn btn-primary btn-lg">
                <PlayCircle size={20} />
                <span>Launch {project.name} in Live Portal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NEXT / PREV NAVIGATION & CTA
          ========================================================================= */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <Link
              href={`/solutions/${prevProject.slug}`}
              className="btn btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <ArrowLeft size={16} />
              <span>Previous: {prevProject.name}</span>
            </Link>

            <Link href="/demo" className="btn btn-outline">
              <span>All 8 Solutions</span>
            </Link>

            <Link
              href={`/solutions/${nextProject.slug}`}
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>Next: {nextProject.name}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
