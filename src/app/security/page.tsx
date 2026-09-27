import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  FileText, 
  Terminal, 
  Database, 
  CheckCircle2, 
  Server, 
  ArrowRight,
  Shield,
  Layers,
  RefreshCw,
  Globe,
  Sliders,
  AlertOctagon,
  HardDrive
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security Architecture & Standards | TOMVIS Framework',
  description: 'Enterprise security by design: RBAC, authentication, audit logging, threat mitigation, encryption, and disaster recovery principles.',
};

export default function SecurityPage() {
  const securityPractices = [
    {
      id: 'rbac',
      title: 'Role-Based Access Control (RBAC)',
      category: 'Access Governance',
      icon: Lock,
      color: '#0ea5e9',
      details: [
        'Hierarchical permission model: System Administrator, Regional Director, Site Supervisor, and Field Operator.',
        'Attribute-Based Access Control (ABAC) restricts data visibility strictly to authorized organizational units or facilities.',
        'Zero default privilege: every API route and UI component requires explicit authorization checks.',
        'Dynamic middleware token inspection prevents horizontal and vertical privilege escalation across tenants.'
      ]
    },
    {
      id: 'authentication',
      title: 'Authentication & Session Integrity',
      category: 'Identity Layer',
      icon: Key,
      color: '#10b981',
      details: [
        'Cryptographically signed stateless JWT access tokens paired with secure server-side refresh rotation.',
        'Argon2id password hashing algorithm with unique cryptographic salts, resistant to GPU-accelerated brute force attacks.',
        'Anti-credential stuffing protection with automated progressive delays and account lockout on failed attempts.',
        'Strict cookie flags: HttpOnly, Secure, and SameSite=Strict prevent client-side JavaScript interception.'
      ]
    },
    {
      id: 'authorization',
      title: 'Authorization & Policy Enforcement',
      category: 'Access Governance',
      icon: ShieldCheck,
      color: '#8b5cf6',
      details: [
        'Decoupled policy enforcement point (PEP) validating user claims before executing backend business logic.',
        'Resource ownership verification ensures operators cannot modify or view unauthorized sister branch records.',
        'Contextual session validation rejecting tokens upon detected IP address or user-agent divergence anomalies.',
        'Immediate centralized session revocation blacklist for fast offboarding and credential compromises.'
      ]
    },
    {
      id: 'audit-log',
      title: 'Tamper-Evident Audit Logging',
      category: 'Accountability',
      icon: FileText,
      color: '#f59e0b',
      details: [
        'Immutable append-only event stream recording all Create, Read, Update, and Delete (CRUD) actions on sensitive entities.',
        'Every entry records actor user ID, client IP address, timestamp to millisecond precision, and full state diffs.',
        'Medical chart lookups, financial transactions, and user permission changes permanently retained for forensic review.',
        'Log streams protected by write-once constraints preventing modification even by administrative users.'
      ]
    },
    {
      id: 'https',
      title: 'HTTPS & Transport Layer Security',
      category: 'Network Security',
      icon: Globe,
      color: '#06b6d4',
      details: [
        'Enforced modern TLS 1.3 encryption across all public and internal reverse proxy communication.',
        'Automatic HTTP to HTTPS 301 redirection at the Nginx edge layer with Let’s Encrypt automated certificate lifecycle.',
        'HTTP Strict Transport Security (HSTS) headers pre-configured to prevent man-in-the-middle protocol downgrade attacks.',
        'Perfect Forward Secrecy (PFS) cipher suites preventing historical decryption if server keys are compromised.'
      ]
    },
    {
      id: 'env-vars',
      title: 'Environment Variables & Secrets Segregation',
      category: 'Configuration Guard',
      icon: Sliders,
      color: '#3b82f6',
      details: [
        'Strict zero-secret git policy: all API keys, database credentials, and signing secrets isolated in server-side .env files.',
        'Git repository validated with comprehensive .gitignore exclusions preventing accidental secret leakages.',
        'Template .env.example maintained without live credentials for safe, reproducible deployment scaffolding.',
        'Runtime environment variable injection ensuring development, staging, and production environments remain isolated.'
      ]
    },
    {
      id: 'api-security',
      title: 'API Security & Header Hardening',
      category: 'Gateway Shield',
      icon: Terminal,
      color: '#ec4899',
      details: [
        'Strict Cross-Origin Resource Sharing (CORS) whitelists locking API access to verified client domains only.',
        'Standard security headers injected globally: X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy.',
        'Content Security Policy (CSP) constraining script, font, and style injection sources.',
        'Strict internal port segregation: application runtime bound to localhost (127.0.0.1:3000), not exposed directly to WAN.'
      ]
    },
    {
      id: 'rate-limiting',
      title: 'Sliding-Window Rate Limiting',
      category: 'Threat Mitigation',
      icon: AlertOctagon,
      color: '#ef4444',
      details: [
        'Per-IP and per-account sliding-window rate limiters at both Nginx edge and API middleware layers.',
        'High-risk endpoints (authentication, password reset, demo submission) throttled to prevent automated credential testing.',
        'Automated temporary IP blacklisting when abusive traffic spikes exceed normal volumetric thresholds.',
        'Protects server compute resources from distributed denial-of-service (DDoS) and scraping bursts.'
      ]
    },
    {
      id: 'input-validation',
      title: 'Input Validation & Schema Sanitization',
      category: 'Defensive Coding',
      icon: CheckCircle2,
      color: '#10b981',
      details: [
        'Strict schema validation rejecting unexpected properties, invalid datatypes, or malformed JSON payloads.',
        'Max payload size thresholds enforced at the HTTP gateway to eliminate memory exhaustion attacks.',
        'Type-safe data transfer contracts enforced throughout TypeScript compile-time and runtime validation.',
        'UTF-8 character normalization and boundary checks on all incoming user parameters.'
      ]
    },
    {
      id: 'csrf-protection',
      title: 'CSRF (Cross-Site Request Forgery) Protection',
      category: 'Defensive Coding',
      icon: Shield,
      color: '#8b5cf6',
      details: [
        'SameSite cookie attribute defaults (Strict / Lax) preventing ambient cookie transmission on cross-origin requests.',
        'Cryptographic Anti-CSRF challenge tokens verified on all state-mutating requests (POST, PUT, PATCH, DELETE).',
        'Custom header requirements (e.g. X-Requested-With) validating legitimate first-party application origin.',
        'Zero reliance on HTTP GET verbs for state-altering actions.'
      ]
    },
    {
      id: 'xss-protection',
      title: 'XSS (Cross-Site Scripting) Defense',
      category: 'Defensive Coding',
      icon: ShieldCheck,
      color: '#f59e0b',
      details: [
        'React 19 automatic JSX string escaping preventing injection of malicious inline script payloads.',
        'Server-side HTML sanitization for rich-text inputs using strict allow-list HTML parsers.',
        'Zero usage of dangerouslySetInnerHTML without cryptographically isolated sandbox sanitization.',
        'Browser-level script execution restrictions enforced via Content Security Policy (CSP).'
      ]
    },
    {
      id: 'sql-injection',
      title: 'SQL Injection Defense',
      category: 'Defensive Coding',
      icon: Database,
      color: '#0ea5e9',
      details: [
        '100% Parameterized prepared statements across all database query execution routines.',
        'Modern ORM / query builder abstraction eliminating manual raw string SQL concatenation.',
        'Database user granted strictly necessary privileges (least privilege) without administrative schema drops.',
        'Static analysis linters scanning codebase during CI/CD to detect non-parameterized query constructs.'
      ]
    },
    {
      id: 'backup-strategy',
      title: 'Automated Backup Strategy',
      category: 'Resilience & Continuity',
      icon: HardDrive,
      color: '#3b82f6',
      details: [
        'Automated daily relational database snapshots executed during off-peak operational maintenance windows.',
        'Gzip-compressed and AES-256 encrypted archive storage for offline persistence.',
        'Automated 30-day rolling retention lifecycle with periodic integrity test restorations.',
        'Application configuration and environment templates version-controlled for rapid environment reproduction.'
      ]
    },
    {
      id: 'disaster-recovery',
      title: 'Disaster Recovery (DR) & Failover Plan',
      category: 'Resilience & Continuity',
      icon: RefreshCw,
      color: '#10b981',
      details: [
        'Defined Recovery Time Objective (RTO < 1 Hour) for restoring production services following a catastrophic node failure.',
        'Defined Recovery Point Objective (RPO < 24 Hours) limiting maximum data variance in extreme failover events.',
        'Automated bash deployment and rollback scripts for zero-confusion operational restoration.',
        'Documented step-by-step VPS provisioning playbook from clean OS install to live HTTPS service.'
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
          background: 'linear-gradient(180deg, rgba(14, 165, 233, 0.08) 0%, transparent 100%)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
          <span className="section-tag">
            <ShieldCheck size={14} />
            <span>Security Architecture</span>
          </span>
          <h1 className="section-title">
            Security by Design
          </h1>
          <p className="section-description">
            Security in the TOMVIS Framework is not an afterthought or an add-on layer. Every architectural component is engineered from first principles with zero-trust isolation, cryptographic validation, and tamper-evident auditability.
          </p>
        </div>
      </section>

      {/* Main 14 Security Foundations Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Engineering Standards</span>
            <h2 className="section-title">Comprehensive Threat & Defense Matrix</h2>
            <p className="section-description">
              Our implementation standards address modern web application attack vectors and operational continuity requirements.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {securityPractices.map((sec) => {
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
                    border: '1px solid var(--border-card)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Subtle top indicator bar */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, ${sec.color}, transparent)`,
                    }}
                  />

                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: `${sec.color}20`,
                        border: `1px solid ${sec.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: sec.color,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {sec.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '1rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {sec.title}
                  </h3>

                  {/* Details Bullet List */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      marginTop: 'auto',
                    }}
                  >
                    {sec.details.map((detail, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <CheckCircle2 size={15} color={sec.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production Hardening Summary Card */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              background: 'linear-gradient(145deg, rgba(16, 185, 129, 0.05) 0%, rgba(10, 15, 29, 0.9) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--vis-green)',
                }}
              >
                <Server size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Production Architecture Isolation
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  Strict defense-in-depth layout for cloud and dedicated VPS hosting.
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem',
                margin: '1.5rem 0',
              }}
            >
              <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Reverse Proxy Layer
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Nginx handles SSL termination (:443), rate limits, and gzip compression, passing requests only to 127.0.0.1:3000.
                </div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Port 3000 Binding
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Next.js is bound strictly to the local loopback interface. Public internet cannot reach port 3000 directly.
                </div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Process Resilience
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  PM2 process manager monitors the tomvisweb process with automatic zero-downtime respawn on uncaught exceptions.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Need security documentation for institutional audit review?
              </div>
              <Link href="/contact" className="btn btn-primary btn-sm">
                <span>Contact Security Team</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
