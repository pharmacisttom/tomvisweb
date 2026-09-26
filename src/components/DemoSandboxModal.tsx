'use client';

import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Copy, 
  Check, 
  Play, 
  ExternalLink, 
  RefreshCw, 
  Key, 
  User, 
  Database,
  Terminal,
  Activity,
  Layers
} from 'lucide-react';
import { Project } from '@/types/project';

interface DemoSandboxModalProps {
  project: Project | null;
  onClose: () => void;
}

export function DemoSandboxModal({ project, onClose }: DemoSandboxModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [simulatedActionStatus, setSimulatedActionStatus] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'console' | 'credentials' | 'audit'>('console');

  if (!project) return null;

  const copyToClipboard = (text: string, keyName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(keyName);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSimulateAction = (actionName: string) => {
    setSimulatedActionStatus(`Executing synthetic: ${actionName}...`);
    setTimeout(() => {
      setSimulatedActionStatus(`✓ Success: ${actionName} verified in sandbox (Lat: 22ms)`);
    }, 600);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(5, 8, 16, 0.88)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-medium)',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--bg-primary)',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            padding: '1.2rem 1.5rem',
            background: 'var(--bg-elevated)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 900,
              }}
            >
              {project.shortName.charAt(0)}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {project.name} Demo Sandbox
                </h3>
                <span className="badge badge-available">{project.status}</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {project.tagline} • {project.version}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn-outline btn-sm"
            style={{ width: '32px', height: '32px', padding: 0, borderRadius: '50%' }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Safety Warning Strip */}
        <div
          style={{
            background: 'rgba(16, 185, 129, 0.1)',
            borderBottom: '1px solid rgba(16, 185, 129, 0.25)',
            padding: '0.65rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.78rem',
            color: '#10b981',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={16} />
            <span>
              <strong>Safe Demo Sandbox:</strong> All records are synthetic / mock data. No real hospital, banking, or employee databases are connected.
            </span>
          </div>
          <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.2)' }}>
            ISOLATED
          </span>
        </div>

        {/* Modal Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--bg-secondary)',
            padding: '0 1.5rem',
          }}
        >
          <button
            onClick={() => setActiveTab('console')}
            style={{
              padding: '0.75rem 1rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: activeTab === 'console' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'console' ? '2px solid var(--primary)' : '2px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Activity size={15} />
            <span>Interactive Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('credentials')}
            style={{
              padding: '0.75rem 1rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: activeTab === 'credentials' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'credentials' ? '2px solid var(--primary)' : '2px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Key size={15} />
            <span>Synthetic Demo Accounts ({project.demoCredentials?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('audit')}
            style={{
              padding: '0.75rem 1rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: activeTab === 'audit' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'audit' ? '2px solid var(--primary)' : '2px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Terminal size={15} />
            <span>Audit & Verification</span>
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flexGrow: 1 }}>
          {activeTab === 'console' && (
            <div>
              <div
                style={{
                  background: '#090e17',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                    <span style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                      cluster://tomvis-sandbox/{project.slug}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#38bdf8', fontFamily: 'monospace' }}>
                    PING: 14ms • OK
                  </span>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {project.overview}
                </p>

                {/* Simulated Quick Action Triggers */}
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                    Trigger Simulated Sandbox Flow
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.features.slice(0, 4).map((feat) => (
                      <button
                        key={feat}
                        onClick={() => handleSimulateAction(feat)}
                        className="btn btn-secondary btn-sm"
                        style={{ fontSize: '0.78rem' }}
                      >
                        <Play size={12} color="var(--primary)" />
                        <span>Simulate {feat}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {simulatedActionStatus && (
                  <div
                    style={{
                      marginTop: '1rem',
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(14, 165, 233, 0.12)',
                      border: '1px solid rgba(14, 165, 233, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      color: 'var(--primary)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {simulatedActionStatus}
                  </div>
                )}
              </div>

              {/* Highlight Stats */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                {project.highlightStats?.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: 'var(--bg-secondary)',
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'center',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'credentials' && (
            <div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Use these pre-configured synthetic credentials to log in to the simulated {project.name} environment. Each account is pre-loaded with fictitious demonstration records.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.demoCredentials?.map((cred, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.25rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                        {cred.role}
                      </span>
                      <span className="badge badge-available">Synthetic Access</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      {/* Username */}
                      <div
                        style={{
                          background: 'var(--bg-primary)',
                          padding: '0.6rem 0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Username / Email</div>
                          <div style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: 'var(--text-primary)' }}>
                            {cred.username}
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard(cred.username, `user-${i}`)}
                          className="btn-outline btn-sm"
                          style={{ padding: '0.3rem', width: '28px', height: '28px' }}
                          title="Copy Username"
                        >
                          {copiedKey === `user-${i}` ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                        </button>
                      </div>

                      {/* Password */}
                      <div
                        style={{
                          background: 'var(--bg-primary)',
                          padding: '0.6rem 0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Demo Password</div>
                          <div style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: 'var(--text-primary)' }}>
                            {cred.password}
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard(cred.password, `pass-${i}`)}
                          className="btn-outline btn-sm"
                          style={{ padding: '0.3rem', width: '28px', height: '28px' }}
                          title="Copy Password"
                        >
                          {copiedKey === `pass-${i}` ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>

                    {cred.notes && (
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        <strong>Permissions:</strong> {cred.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'audit' && (
            <div>
              <div
                style={{
                  background: '#090e17',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  fontFamily: 'monospace',
                  fontSize: '0.78rem',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '0.65rem' }}>
                  [TOMVIS-AUDIT-STREAM] Protocol: TLS 1.3 / Isolated Tenant Key
                </div>
                <div style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  2026-09-26 10:45:01 UTC | AUTH_CHALLENGE: Session token minted for synthetic agent
                </div>
                <div style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  2026-09-26 10:45:02 UTC | PERMISSION_RESOLVER: Scoped RBAC tree applied: [{project.features.join(', ')}]
                </div>
                <div style={{ color: '#10b981', marginBottom: '0.4rem' }}>
                  2026-09-26 10:45:02 UTC | DATA_SEGREGATION_GUARD: Verified 0 external DB binds. Mock fixtures active.
                </div>
                <div style={{ color: 'var(--text-muted)' }}>
                  2026-09-26 10:45:03 UTC | HEALTH_MONITOR: Latency 16ms, Memory 42MB, Status OK.
                </div>
              </div>

              <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <strong>Security Guarantee:</strong> {project.security.complianceNotes}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Bar */}
        <div
          style={{
            padding: '1rem 1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-elevated)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Need an on-premise or guided evaluation?
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={onClose} className="btn btn-secondary btn-sm">
              Close Preview
            </button>
            <a
              href={`/solutions/${project.slug}`}
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <span>View Full Specs</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
