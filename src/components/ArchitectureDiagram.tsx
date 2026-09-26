'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Database, 
  Terminal, 
  Boxes, 
  HeartPulse, 
  Ambulance, 
  Briefcase, 
  Landmark, 
  Users, 
  ShoppingBag, 
  ClipboardCheck, 
  BarChart3,
  Sparkles
} from 'lucide-react';

export function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const modules = [
    { name: 'Healthcare', icon: HeartPulse, color: '#06b6d4', desc: 'Clinical charts, ADR, MedRec, FHIR/HL7' },
    { name: 'EMS', icon: Ambulance, color: '#ef4444', desc: 'Ambulance telemetry, 1669 dispatch, ER Refer' },
    { name: 'Workforce', icon: Briefcase, color: '#0ea5e9', desc: 'GPS Geofencing, photo attendance, roster' },
    { name: 'Finance', icon: Landmark, color: '#3b82f6', desc: 'AR Aging, 3-way matching PO, budget control' },
    { name: 'Cooperative', icon: Users, color: '#10b981', desc: 'Member shares, dividend math, emergency loan' },
    { name: 'POS', icon: ShoppingBag, color: '#f59e0b', desc: 'Fast barcode checkout, inventory, e-receipt' },
    { name: 'Inspection', icon: ClipboardCheck, color: '#8b5cf6', desc: 'GIS route optimization, risk assessment' },
    { name: 'Dashboard', icon: BarChart3, color: '#ec4899', desc: 'Enterprise KPI cubes, executive summaries' },
  ];

  return (
    <div
      className="glass-card"
      style={{
        padding: '2.5rem 1.5rem',
        borderRadius: 'var(--radius-xl)',
        maxWidth: '1080px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="section-tag">Modular System Architecture</span>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
          Tomvis High-Level Topology
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Interactive visual map showing how the central Tomvis Core unifies API, Security, and Storage to drive pluggable domain modules.
        </p>
      </div>

      {/* Visual Hierarchy Tree */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', position: 'relative' }}>
        
        {/* Level 0: TOMVIS Master Brand */}
        <div
          onMouseEnter={() => setActiveNode('tomvis')}
          onMouseLeave={() => setActiveNode(null)}
          style={{
            background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
            color: '#ffffff',
            padding: '1rem 2.5rem',
            borderRadius: 'var(--radius-full)',
            fontWeight: 900,
            fontSize: '1.25rem',
            letterSpacing: '0.08em',
            boxShadow: '0 0 25px rgba(14, 165, 233, 0.45)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            transform: activeNode === 'tomvis' ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <Sparkles size={20} />
          <span>TOMVIS</span>
        </div>

        {/* Stem 1 */}
        <div style={{ width: '2px', height: '24px', background: 'linear-gradient(to bottom, #0ea5e9, #6366f1)' }} />

        {/* Level 1: Application Core */}
        <div
          onMouseEnter={() => setActiveNode('core')}
          onMouseLeave={() => setActiveNode(null)}
          className="glass-card"
          style={{
            padding: '0.9rem 2rem',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            background: 'rgba(30, 41, 59, 0.85)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            cursor: 'pointer',
            transform: activeNode === 'core' ? 'translateY(-2px)' : 'none',
            boxShadow: activeNode === 'core' ? '0 8px 25px rgba(99, 102, 241, 0.25)' : 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', justifyContent: 'center' }}>
            <Cpu size={18} color="#818cf8" />
            <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>
              Application Core
            </span>
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            Plugin Registry • Event Bus • Shared Domain Kernel
          </span>
        </div>

        {/* Stem 2 */}
        <div style={{ width: '2px', height: '24px', background: '#6366f1' }} />

        {/* Level 2: Triad Subsystems (API, Security, Database) */}
        <div
          style={{
            width: '100%',
            maxWidth: '680px',
            position: 'relative',
          }}
        >
          {/* Top Cross Connector Bar */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '16.66%',
              right: '16.66%',
              height: '2px',
              backgroundColor: 'rgba(14, 165, 233, 0.3)',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              paddingTop: '16px',
            }}
          >
            {/* API */}
            <div
              onMouseEnter={() => setActiveNode('api')}
              onMouseLeave={() => setActiveNode(null)}
              className="glass-card"
              style={{
                padding: '1rem',
                textAlign: 'center',
                borderColor: activeNode === 'api' ? 'var(--primary)' : 'var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                <Terminal size={16} color="var(--primary)" />
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>API Gateway</span>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                REST & WebSockets • Rate Limiting
              </p>
            </div>

            {/* Security */}
            <div
              onMouseEnter={() => setActiveNode('security')}
              onMouseLeave={() => setActiveNode(null)}
              className="glass-card"
              style={{
                padding: '1rem',
                textAlign: 'center',
                borderColor: activeNode === 'security' ? '#10b981' : 'var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                <ShieldCheck size={16} color="#10b981" />
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Security</span>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                RBAC • AES-256 • Audit Logs
              </p>
            </div>

            {/* Database */}
            <div
              onMouseEnter={() => setActiveNode('database')}
              onMouseLeave={() => setActiveNode(null)}
              className="glass-card"
              style={{
                padding: '1rem',
                textAlign: 'center',
                borderColor: activeNode === 'database' ? '#f59e0b' : 'var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                <Database size={16} color="#f59e0b" />
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Database</span>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                MySQL ACID • Tenant Segregation
              </p>
            </div>
          </div>

          {/* Bottom Cross Connector Bar */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '16.66%',
              right: '16.66%',
              height: '2px',
              backgroundColor: 'rgba(14, 165, 233, 0.3)',
            }}
          />
        </div>

        {/* Stem 3 */}
        <div style={{ width: '2px', height: '20px', background: 'var(--primary)' }} />

        {/* Level 3: Modules Connector */}
        <div
          onMouseEnter={() => setActiveNode('modules')}
          onMouseLeave={() => setActiveNode(null)}
          style={{
            background: 'rgba(14, 165, 233, 0.15)',
            border: '1px solid rgba(14, 165, 233, 0.4)',
            padding: '0.45rem 1.4rem',
            borderRadius: 'var(--radius-full)',
            color: 'var(--primary)',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
          }}
        >
          <Boxes size={15} />
          <span>Modules Ecosystem</span>
        </div>

        {/* Stem 4 */}
        <div style={{ width: '2px', height: '24px', background: 'var(--primary)' }} />

        {/* Level 4: Connected Domain Modules Grid */}
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {modules.map((m) => {
            const Icon = m.icon;
            const isHovered = activeNode === m.name;
            return (
              <div
                key={m.name}
                onMouseEnter={() => setActiveNode(m.name)}
                onMouseLeave={() => setActiveNode(null)}
                className="glass-card"
                style={{
                  padding: '0.85rem 0.6rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  borderColor: isHovered ? m.color : 'var(--border-subtle)',
                  background: isHovered ? `${m.color}15` : 'var(--bg-card)',
                  transform: isHovered ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: `${m.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.5rem auto',
                    color: m.color,
                  }}
                >
                  <Icon size={16} />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {m.name}
                </div>
                <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                  {m.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
