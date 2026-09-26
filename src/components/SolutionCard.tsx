'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  PlayCircle, 
  Cpu, 
  ShieldCheck, 
  Smartphone, 
  Layers,
  Sparkles,
  CheckCircle2
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

  return (
    <div
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '1.75rem',
        borderRadius: 'var(--radius-xl)',
      }}
    >
      {/* Top Header: Category & Status */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          marginBottom: '1.25rem',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--primary)',
            background: 'rgba(14, 165, 233, 0.1)',
            padding: '0.25rem 0.65rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
          }}
        >
          {project.category}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
          <span
            style={{
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              fontFamily: 'monospace',
            }}
          >
            {project.version}
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
            style={{ color: 'inherit', transition: 'color 0.2s ease' }}
            className="hover-primary"
          >
            {project.name}
          </Link>
        </h3>
        <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          {project.tagline}
        </p>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: '0.86rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          marginBottom: '1.4rem',
          flexGrow: 1,
        }}
      >
        {project.description}
      </p>

      {/* Features List Highlights */}
      <div style={{ marginBottom: '1.4rem' }}>
        <div
          style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--text-secondary)',
            marginBottom: '0.65rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <Sparkles size={13} color="var(--primary)" />
          <span>Core Capabilities ({project.features.length})</span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.features.slice(0, 5).map((feature) => (
            <span
              key={feature}
              style={{
                fontSize: '0.74rem',
                color: 'var(--text-secondary)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                padding: '0.2rem 0.55rem',
                borderRadius: 'var(--radius-sm)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <CheckCircle2 size={11} color="var(--primary)" />
              {feature}
            </span>
          ))}
          {project.features.length > 5 && (
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                padding: '0.2rem 0.45rem',
              }}
            >
              +{project.features.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Tech Stack Chips */}
      <div
        style={{
          paddingTop: '0.85rem',
          borderTop: '1px solid var(--border-subtle)',
          marginBottom: '1.4rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.35rem',
        }}
      >
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              fontFamily: 'monospace',
              background: 'var(--bg-tertiary)',
              padding: '0.15rem 0.45rem',
              borderRadius: 'var(--radius-xs)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Card Action Footers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: 'auto' }}>
        <Link
          href={`/solutions/${project.slug}`}
          className="btn btn-secondary btn-sm"
          style={{ width: '100%' }}
        >
          <span>View Details</span>
          <ArrowUpRight size={14} />
        </Link>

        {onOpenDemo ? (
          <button
            onClick={() => onOpenDemo(project)}
            className="btn btn-primary btn-sm"
            style={{ width: '100%' }}
          >
            <PlayCircle size={14} />
            <span>Live Demo</span>
          </button>
        ) : (
          <Link
            href={`/demo#${project.slug}`}
            className="btn btn-primary btn-sm"
            style={{ width: '100%' }}
          >
            <PlayCircle size={14} />
            <span>Live Demo</span>
          </Link>
        )}
      </div>
    </div>
  );
}
