'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  PlayCircle, 
  Sparkles,
  CheckCircle2,
  Activity,
  HeartPulse,
  Ambulance,
  Users,
  ShoppingBag,
  CircleDollarSign,
  ClipboardCheck,
  BarChart3,
  Layers
} from 'lucide-react';
import { Project } from '@/types/project';

interface SolutionCardProps {
  project: Project;
  onOpenDemo?: (project: Project) => void;
}

export function SolutionCard({ project, onOpenDemo }: SolutionCardProps) {
  const getBadgeClass = (status: Project['status']) => {
    switch (status) {
      case 'Available':
        return 'badge-available';
      case 'Maintenance':
        return 'badge-maintenance';
      case 'Coming Soon':
        return 'badge-coming-soon';
      case 'Private Demo':
        return 'badge-private';
      default:
        return 'badge-available';
    }
  };

  // Get distinct icon and theme color for each solution
  const getSolutionMeta = (slug: string) => {
    switch (slug) {
      case 'smartop':
        return { icon: Activity, color: '#0ea5e9', bg: 'rgba(14, 165, 233, 0.12)' };
      case 'smart-ems':
        return { icon: Ambulance, color: '#ef4444', bg: 'rgba(239, 68, 68, 0.12)' };
      case 'cooperative':
        return { icon: Users, color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)' };
      case 'smart-pos':
      case 'pos':
        return { icon: ShoppingBag, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)' };
      case 'smart-finance':
      case 'finance':
        return { icon: CircleDollarSign, color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.12)' };
      case 'smart-healthcare':
      case 'healthcare':
        return { icon: HeartPulse, color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.12)' };
      case 'smart-inspection':
      case 'inspection':
        return { icon: ClipboardCheck, color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.12)' };
      case 'smart-dashboard':
      case 'dashboard':
        return { icon: BarChart3, color: '#ec4899', bg: 'rgba(236, 72, 153, 0.12)' };
      default:
        return { icon: Layers, color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)' };
    }
  };

  const meta = getSolutionMeta(project.slug);
  const Icon = meta.icon;

  return (
    <div
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '1.75rem',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-card)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
          background: `linear-gradient(90deg, ${meta.color}, transparent)` 
        }} 
      />

      {/* Top Header: Icon + Category & Status */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          marginBottom: '1.25rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: meta.bg,
              border: `1px solid ${meta.color}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: meta.color,
              flexShrink: 0,
            }}
          >
            <Icon size={22} />
          </div>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--text-secondary)',
              background: 'var(--bg-tertiary)',
              padding: '0.25rem 0.6rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {project.category}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span className={`badge ${getBadgeClass(project.status)}`}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'currentColor',
                display: 'inline-block',
              }}
            />
            {project.status}
          </span>
        </div>
      </div>

      {/* Title & Tagline */}
      <div style={{ marginBottom: '1rem' }}>
        <h3
          style={{
            fontSize: '1.45rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: '0.35rem',
          }}
        >
          <Link
            href={`/solutions/${project.slug}`}
            style={{ color: 'inherit', transition: 'color 0.2s ease', textDecoration: 'none' }}
            className="hover-primary"
          >
            {project.name}
          </Link>
        </h3>
        <p style={{ fontSize: '0.88rem', fontWeight: 600, color: meta.color }}>
          {project.tagline}
        </p>
      </div>

      {/* Short Description */}
      <p
        style={{
          fontSize: '0.86rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: '1.25rem',
          flexGrow: 1,
        }}
      >
        {project.description}
      </p>

      {/* Features List Highlights */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div
          style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--text-muted)',
            marginBottom: '0.65rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <Sparkles size={13} color="var(--primary)" />
          <span>Key Features</span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.features.slice(0, 4).map((feature) => (
            <span
              key={feature}
              style={{
                fontSize: '0.74rem',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                padding: '0.25rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <CheckCircle2 size={12} color="var(--vis-green)" />
              <span>{feature}</span>
            </span>
          ))}
          {project.features.length > 4 && (
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                padding: '0.2rem 0.45rem',
                alignSelf: 'center',
              }}
            >
              +{project.features.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
        <Link
          href={`/solutions/${project.slug}`}
          className="btn btn-primary btn-sm"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          <span>View Solution</span>
          <ArrowRight size={14} />
        </Link>

        {onOpenDemo ? (
          <button
            onClick={() => onOpenDemo(project)}
            className="btn btn-secondary btn-sm"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <PlayCircle size={14} />
            <span>Live Demo</span>
          </button>
        ) : (
          <Link
            href={`/demo#${project.slug}`}
            className="btn btn-secondary btn-sm"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <PlayCircle size={14} />
            <span>Live Demo</span>
          </Link>
        )}
      </div>
    </div>
  );
}
