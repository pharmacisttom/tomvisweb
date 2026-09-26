import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Cpu, 
  Layers, 
  Server, 
  Database, 
  ShieldCheck, 
  Zap, 
  Boxes, 
  GitBranch, 
  ArrowRight,
  Terminal,
  Activity,
  CheckCircle2,
  Lock,
  Container,
  Globe
} from 'lucide-react';
import { TECH_STACK_DATA } from '@/data/projects';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';

export const metadata: Metadata = {
  title: 'Technology & Architecture | TOMVIS Framework',
  description: 'Explore the modular architecture, technology stack, and engineering standards behind the Tomvis Framework.',
};

export default function TechnologyPage() {
  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* Header Banner */}
      <section
        style={{
          paddingTop: '4rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'linear-gradient(180deg, rgba(14, 165, 233, 0.08) 0%, transparent 100%)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
          <span className="section-tag">
            <Cpu size={14} />
            <span>Architecture & Engineering</span>
          </span>
          <h1 className="section-title">
            The Tomvis Framework Stack
          </h1>
          <p className="section-description">
            A battle-tested, modular platform built with modern TypeScript, Next.js, high-concurrency Node.js and PHP backend services, MySQL relational ACID storage, and containerized Docker infrastructure.
          </p>
        </div>
      </section>

      {/* Visual Architecture Topology */}
      <section id="architecture" className="section" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <ArchitectureDiagram />
        </div>
      </section>

      {/* Core Principles */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Design Foundations</span>
            <h2 className="section-title">Architectural Principles</h2>
            <p className="section-description">
              Engineered from the ground up for modularity, zero vendor lock-in, and uncompromising tenant isolation.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(14, 165, 233, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1rem' }}>
                <Boxes size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Modular Domain Plugins
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Each business vertical (Healthcare, EMS, Workforce, Finance, POS, Inspection) operates as an encapsulated module with its own models, validation rules, and API endpoints without coupling to other modules.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8', marginBottom: '1rem' }}>
                <Activity size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Event Bus & Real-time Sockets
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Sub-second event bus handling high-frequency ambulance telemetry, geofence violations, vital signs changes, and stock depletion across distributed client instances.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', marginBottom: '1rem' }}>
                <Database size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                ACID Persistence & Isolation
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Strict relational data integrity powered by enterprise MySQL clusters with partitioned schemas, row-level tenant keying, and encrypted immutable audit logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Tech Stack Matrix */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Technology Matrix</span>
            <h2 className="section-title">Complete Technology Ecosystem</h2>
            <p className="section-description">
              Standardized libraries and infrastructure components utilized across Tomvis systems.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {TECH_STACK_DATA.categories.map((category) => (
              <div
                key={category.name}
                className="glass-card"
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {category.name}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    {category.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1.25rem',
                  }}
                >
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        background: 'var(--bg-secondary)',
                        padding: '1.25rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>
                          {item.name}
                        </span>
                        <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--primary)', background: 'rgba(14, 165, 233, 0.1)', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                          {item.version}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: 'auto' }}>
                        {item.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment & DevOps Pipeline */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-tag" style={{ marginBottom: '1rem' }}>
                Infrastructure & Operations
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Zero-Downtime Deployment Architecture
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                Tomvis applications are packaged as immutable Docker containers, load-balanced through Nginx with SSL termination, and managed by PM2 cluster mode for automatic recovery and zero-downtime rolling upgrades.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.25rem',
                  textAlign: 'left',
                  marginBottom: '2.5rem',
                }}
              >
                <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    <Container size={18} />
                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Docker Containers</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Self-contained environments ensuring parity between staging demo and on-premise deployments.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#10b981' }}>
                    <Globe size={18} />
                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Nginx Reverse Proxy</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Sub-millisecond SSL handshake, Brotli/gzip compression, and resilient DDoS buffering.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#f59e0b' }}>
                    <Server size={18} />
                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>PM2 Cluster Manager</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Multi-core CPU clustering, automated process watchdog, and instant memory leak recycling.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/security" className="btn btn-secondary">
                  <ShieldCheck size={16} />
                  <span>Inspect Security Standards</span>
                </Link>
                <Link href="/demo" className="btn btn-primary">
                  <span>Launch Live Solutions</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
