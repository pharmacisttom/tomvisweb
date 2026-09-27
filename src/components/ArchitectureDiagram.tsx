'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Database, 
  Network,
  Globe,
  ArrowDown,
  Sparkles,
  Lock,
  Key,
  Server,
  FileText,
  Boxes,
  Zap
} from 'lucide-react';

export function ArchitectureDiagram() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const architectureLayers = [
    {
      id: 'applications',
      title: '1. Applications',
      subtitle: 'Multi-Tenant Frontend & Client Surfaces',
      icon: Globe,
      color: '#0ea5e9',
      bgColor: 'rgba(14, 165, 233, 0.1)',
      borderColor: 'rgba(14, 165, 233, 0.3)',
      components: [
        'Web Applications (Next.js 16 / React 19)',
        'Mobile PWA & Field Apps',
        'Hospital & ER Consoles',
        'Executive Analytics Dashboards',
        'POS Hardware & Barcode Terminals'
      ],
      description: 'Responsive, accessible user interfaces engineered for speed, touch responsiveness, and zero horizontal overflow across any screen size.'
    },
    {
      id: 'core',
      title: '2. TOMVIS Core',
      subtitle: 'Central Orchestration & Domain Engine',
      icon: Cpu,
      color: '#10b981',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      components: [
        'Modular Domain Handlers',
        'Workflow & State Engine',
        'Real-time Event Bus (WebSockets)',
        'Business Rule Validation Matrix',
        'Configuration Registry'
      ],
      description: 'Decoupled domain modules (Healthcare, EMS, Workforce, Finance, POS, Inspection) plug seamlessly into the core framework.'
    },
    {
      id: 'gateway',
      title: '3. API Gateway',
      subtitle: 'High-Concurrency Request Router & Rate Limiting',
      icon: Network,
      color: '#8b5cf6',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      components: [
        'RESTful & GraphQL Endpoints',
        'Sliding Window Rate Limiter',
        'Strict JSON Schema Validator',
        'CORS & Header Inspection Guard',
        'Reverse Proxy SSL Termination'
      ],
      description: 'API First design principle. Every system capability is exposed via standardized, documented, and contract-tested endpoints.'
    },
    {
      id: 'security',
      title: '4. Security Layer',
      subtitle: 'Zero Trust Guard & Tamper-Evident Auditing',
      icon: ShieldCheck,
      color: '#f59e0b',
      bgColor: 'rgba(245, 158, 11, 0.1)',
      borderColor: 'rgba(245, 158, 11, 0.3)',
      components: [
        'Role-Based Access Control (RBAC)',
        'Stateless JWT & Session Rotation',
        'Append-Only Immutable Audit Log',
        'AES-256 Column-level Encryption',
        'CSRF / XSS / SQLi Threat Mitigations'
      ],
      description: 'Security by Design. Enforces strict tenant isolation, immutable transaction logs, and cryptographic verification on every request.'
    },
    {
      id: 'database',
      title: '5. Database Layer',
      subtitle: 'ACID Relational Storage & Fast Memory Cache',
      icon: Database,
      color: '#3b82f6',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      components: [
        'MySQL 8.0+ Enterprise Relational',
        'Strict Foreign Key Integrity & Indexes',
        'Redis State & Telemetry Caching',
        'Encrypted Automated Daily Backups',
        'Disaster Recovery Replication'
      ],
      description: 'Solid transactional consistency for financial ledgers, clinical records, and real-time stock balances with fast indexed queries.'
    },
    {
      id: 'external',
      title: '6. External Systems',
      subtitle: 'Standardized Interoperability & Integration Gateways',
      icon: Boxes,
      color: '#ec4899',
      bgColor: 'rgba(236, 72, 153, 0.1)',
      borderColor: 'rgba(236, 72, 153, 0.3)',
      components: [
        'EMS 1669 Regional Dispatch Networks',
        'Hospital HIS / FHIR / HL7 Services',
        'Banking & PromptPay QR Gateways',
        'Government Open Data APIs',
        'SMS & Secure Push Notification Gateways'
      ],
      description: 'Multi-system integration capabilities bridging legacy on-premise databases with modern cloud and mobile endpoints.'
    }
  ];

  return (
    <div
      className="glass-card"
      style={{
        padding: '2.5rem 1.5rem',
        borderRadius: 'var(--radius-xl)',
        maxWidth: '1040px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="section-tag">
          <Sparkles size={14} />
          <span>System Architecture Flow</span>
        </span>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
          TOMVIS Enterprise Architecture
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
          Visualizing the vertical pipeline from end-user applications through Core orchestration, API Gateway, Security shield, Data persistence, down to External integrations.
        </p>
      </div>

      {/* Vertical Flow Diagram */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        {architectureLayers.map((layer, index) => {
          const Icon = layer.icon;
          const isSelected = activeLayer === layer.id;

          return (
            <React.Fragment key={layer.id}>
              {/* Layer Card */}
              <div
                onMouseEnter={() => setActiveLayer(layer.id)}
                onMouseLeave={() => setActiveLayer(null)}
                style={{
                  width: '100%',
                  maxWidth: '820px',
                  backgroundColor: isSelected ? layer.bgColor : 'var(--bg-card)',
                  border: `1px solid ${isSelected ? layer.color : layer.borderColor}`,
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1.5rem',
                  boxShadow: isSelected ? `0 0 25px ${layer.color}30` : 'var(--shadow-sm)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        backgroundColor: `${layer.color}20`,
                        border: `1px solid ${layer.color}50`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: layer.color,
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={19} />
                    </div>
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {layer.title}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: layer.color, fontWeight: 600 }}>
                        {layer.subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: '0.5rem 0 0.85rem 0' }}>
                  {layer.description}
                </p>

                {/* Sub components chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {layer.components.map((comp) => (
                    <span
                      key={comp}
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        backgroundColor: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connecting Down Arrow (unless last) */}
              {index < architectureLayers.length - 1 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    margin: '0.1rem 0',
                  }}
                >
                  <ArrowDown size={18} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
