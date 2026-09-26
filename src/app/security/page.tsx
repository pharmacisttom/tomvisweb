import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  FileText, 
  Terminal, 
  EyeOff, 
  Database, 
  Smartphone, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  Server,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { SECURITY_STANDARDS } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Security Architecture & Standards | TOMVIS Framework',
  description: 'Enterprise security, RBAC access control, tamper-evident audit logging, and encryption principles of the Tomvis Platform.',
};

export default function SecurityPage() {
  const securitySections = [
    {
      id: 'auth',
      title: 'Authentication & Identity Verification',
      badge: 'Identity Layer',
      icon: ShieldCheck,
      details: [
        'Stateless JWT tokens paired with cryptographically secure session rotation.',
        'Argon2id password hashing with randomized salting resistant to GPU brute-force attacks.',
        'Anti-credential stuffing protection and automated IP account lockouts after consecutive failed attempts.',
        'Support for enterprise single sign-on (SSO) and LDAP/Active Directory integration.'
      ]
    },
    {
      id: 'rbac',
      title: 'Role-Based Access Control (RBAC)',
      badge: 'Authorization Guard',
      icon: Lock,
      details: [
        'Hierarchical permission inheritance (System Admin > Regional Director > Site Supervisor > Operator).',
        'Fine-grained attribute-based access control (ABAC) scoping records strictly to assigned facilities.',
        'Zero default privileges: explicit allow-lists enforced at both the API gateway and ORM layers.',
        'Dynamic permission checks on every incoming request prevents horizontal and vertical privilege escalation.'
      ]
    },
    {
      id: 'audit',
      title: 'Tamper-Evident Audit Logging',
      badge: 'Audit Trail',
      icon: FileText,
      details: [
        'Immutable logging of all Create, Read, Update, Delete (CRUD) actions on sensitive entity records.',
        'Captures exact actor user ID, client IP address, timestamp down to milliseconds, and pre/post change diffs.',
        'Clinical chart and financial ledger views logged to meet strict electronic record accountability.',
        'Audit logs stored in partitioned append-only write streams to prevent supervisor alteration.'
      ]
    },
    {
      id: 'encryption',
      title: 'End-to-End & At-Rest Encryption',
      badge: 'Cryptography',
      icon: Key,
      details: [
        'All client-server communications strictly enforced via modern TLS 1.3 with forward secrecy.',
        'Sensitive database columns (passwords, bank accounts, patient identifiers) encrypted using AES-256-GCM.',
        'High-security file storage for photo attendance and contract documents with encrypted blob buckets.',
        'Internal service-to-service communication protected by private network tunneling.'
      ]
    },
    {
      id: 'api-security',
      title: 'API Security & Threat Mitigation',
      badge: 'Gateway Armor',
      icon: Terminal,
      details: [
        'Strict Cross-Origin Resource Sharing (CORS) enforcement locking endpoints to authorized domains.',
        'JSON Schema validation rejecting malformed, unexpected, or excessively large payloads.',
        'Sliding-window rate limiting on public and authentication endpoints to block denial-of-service attempts.',
        'Automated XSS sanitization and Content Security Policy (CSP) headers applied globally.'
      ]
    },
    {
      id: 'session',
      title: 'Session Security & Token Lifecycle',
      badge: 'Session Guard',
      icon: Key,
      details: [
        'Cookies flagged with HTTPOnly, Secure, and SameSite=Strict to completely prevent JavaScript interception.',
        'Inactivity session timeouts with graceful background token refresh before expiry.',
        'Instant server-side token revocation and blacklist broadcasting upon user logout or password reset.',
        'Concurrent session detection and restriction to prevent shared credential abuse.'
      ]
    },
    {
      id: 'secrets',
      title: 'Environment Secret Management',
      badge: 'Zero Secret Leaks',
      icon: EyeOff,
      details: [
        'Zero secrets stored in code repositories or client-accessible bundles.',
        'Database credentials, encryption keys, and external service tokens injected via isolated environment variables.',
        'Continuous automated repository scanning preventing accidental credential commits.',
        'Separate key vaults between Staging, Demo Sandbox, and Enterprise on-premise environments.'
      ]
    },
    {
      id: 'database',
      title: 'Database Security & Connection Isolation',
      badge: 'Data Integrity',
      icon: Database,
      details: [
        '100% prepared statements with parameterized queries preventing SQL injection vulnerability by design.',
        'Database user accounts provisioned with strict principle of least privilege (no root execution).',
        'Database listening interfaces locked to private VPC loops with zero public IP exposure.',
        'Automated encrypted daily snapshots with tested point-in-time recovery capabilities.'
      ]
    },
    {
      id: 'two-factor',
      title: '2FA / MFA Ready Architecture',
      badge: 'Multi-Factor Ready',
      icon: Smartphone,
      details: [
        'Pre-built TOTP (Time-Based One-Time Password) engine compatible with Google Authenticator and Microsoft Authenticator.',
        'Emergency one-time recovery backup codes generated and hashed upon 2FA enrollment.',
        'Enforceable MFA policies requiring mandatory two-factor on administrative and clinical supervisor roles.',
        'FIDO2 / WebAuthn architectural readiness for hardware biometric keys.'
      ]
    }
  ];

  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* Header Banner */}
      <section
        style={{
          paddingTop: '4rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, transparent 100%)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
          <span className="section-tag" style={{ borderColor: 'rgba(16, 185, 129, 0.3)', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)' }}>
            <ShieldCheck size={14} />
            <span>Zero-Trust Infrastructure</span>
          </span>
          <h1 className="section-title">
            Security & Compliance Architecture
          </h1>
          <p className="section-description">
            A comprehensive overview of how Tomvis safeguards enterprise workflows, protects patient and financial records, and enforces rigorous access controls.
          </p>
        </div>
      </section>

      {/* Mandatory Certification Disclaimer & Demo Safety Banner */}
      <section style={{ paddingTop: '2.5rem', paddingBottom: '1.5rem' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '1.75rem 2rem',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(14, 165, 233, 0.05) 100%)',
              borderColor: 'rgba(245, 158, 11, 0.3)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-amber)',
                  flexShrink: 0,
                  marginTop: '0.2rem',
                }}
              >
                <ShieldAlert size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Transparent Compliance Statement & Demo Data Safety
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                  Tomvis Framework is engineered according to established industry security standards and good practices (such as OWASP Top 10, PDPA health data privacy guidelines, and double-entry accounting controls).
                </p>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  <strong>Important Notice:</strong> We strictly refrain from claiming formal third-party regulatory certifications that have not yet been officially audited. Furthermore, this demonstration portal operates in complete isolation using 100% synthetic mock fixtures. No live hospital HIS, bank accounts, or employee databases are ever linked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Architecture Pillars Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Defense in Depth</span>
            <h2 className="section-title">9 Core Security Pillars</h2>
            <p className="section-description">
              Every layer of the Tomvis Framework is guarded against unauthorized access, data leaks, and tampering.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {securitySections.map((sec) => {
              const Icon = sec.icon;
              return (
                <div
                  key={sec.id}
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(14, 165, 233, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)',
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="badge badge-available">{sec.badge}</span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    {sec.title}
                  </h3>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                    {sec.details.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        <CheckCircle2 size={15} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security CTA */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Conduct an On-Premise Security Review
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
            We welcome technical audits from enterprise cybersecurity teams, provincial health inspectors, and cooperative auditing committees.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              <span>Request Technical Architecture Briefing</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/demo" className="btn btn-secondary">
              <span>Explore Live Sandbox Demos</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
