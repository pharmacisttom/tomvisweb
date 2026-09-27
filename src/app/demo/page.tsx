'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  PlayCircle, 
  ArrowUpRight, 
  Search, 
  ShieldCheck, 
  Copy, 
  Check, 
  Lock, 
  Terminal, 
  Sparkles, 
  Filter, 
  Server, 
  AlertTriangle,
  ExternalLink,
  Layers
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/projects';
import { Project, DemoStatus } from '@/types/project';
import { DemoSandboxModal } from '@/components/DemoSandboxModal';

export default function LiveDemoPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeSandboxProject, setActiveSandboxProject] = useState<Project | null>(null);

  // Listen for URL hash changes to open demo sandbox modal
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash) {
        const slug = window.location.hash.replace('#', '');
        const match = PROJECTS_DATA.find((p) => p.slug === slug);
        if (match) {
          setActiveSandboxProject(match);
        }
      }
    };

    const timer = setTimeout(handleHash, 10);
    window.addEventListener('hashchange', handleHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const statuses = ['All', 'Available', 'Maintenance', 'Coming Soon', 'Private Demo'];
  const categories = ['All', 'Operations', 'Healthcare', 'Finance & Cooperative', 'Commerce & Retail', 'Analytics & Intelligence'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesSearch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const copyCredential = (text: string, keyName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(keyName);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const getStatusBadge = (status: DemoStatus) => {
    switch (status) {
      case 'Available':
        return <span className="badge badge-available">● {status}</span>;
      case 'Maintenance':
        return <span className="badge badge-maintenance">▲ {status}</span>;
      case 'Coming Soon':
        return <span className="badge badge-coming-soon">◆ {status}</span>;
      case 'Private Demo':
        return <span className="badge badge-private">★ {status}</span>;
    }
  };

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
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          <span className="section-tag">
            <PlayCircle size={14} />
            <span>Consolidated Live Portal</span>
          </span>
          <h1 className="section-title">
            Tomvis Live Demo & Sandboxes
          </h1>
          <p className="section-description">
            Experience our 8 specialized domain systems in an isolated, secure simulation environment. Test supervisor portals, mobile PWA check-ins, clinical dashboards, and executive analytics.
          </p>

          {/* Strict Safety Isolation Guarantee */}
          <div
            className="glass-card"
            style={{
              marginTop: '2rem',
              padding: '1.25rem 1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.85rem',
              background: 'rgba(16, 185, 129, 0.08)',
              borderColor: 'rgba(16, 185, 129, 0.25)',
              textAlign: 'left',
            }}
          >
            <ShieldCheck size={26} color="#10b981" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              <strong style={{ color: '#10b981' }}>Strict Demo Safety Protocol:</strong> All accounts, passwords, patient vitals, member savings, and transaction ledgers are 100% synthetic mock fixtures. Zero production database connections.
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section style={{ paddingTop: '2.5rem', paddingBottom: '1.5rem' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Search
                size={18}
                color="var(--text-muted)"
                style={{ position: 'absolute', left: '1rem', pointerEvents: 'none' }}
              />
              <input
                type="text"
                placeholder="Search solutions by keyword, feature (e.g. GPS, ADR, Dividend, POS, Ambulance)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.85rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--text-primary)',
                  fontSize: '0.92rem',
                  outline: 'none',
                }}
              />
            </div>

            {/* Filter Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              {/* Status Filters */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginRight: '0.25rem' }}>
                  Status:
                </span>
                {statuses.map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStatus(st)}
                    className={selectedStatus === st ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
                    style={{ fontSize: '0.78rem' }}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Category Dropdown/Pills */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginRight: '0.25rem' }}>
                  Category:
                </span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '0.82rem',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {categories.map((c) => (
                    <option key={c} value={c} style={{ background: '#0f172a', color: '#fff' }}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Cards Grid */}
      <section style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              Showing <strong>{filteredProjects.length}</strong> of {PROJECTS_DATA.length} systems
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={project.slug}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.75rem',
                  border: '1px solid var(--border-card)',
                  overflow: 'hidden',
                }}
              >
                {/* Screenshot / Interface Preview Box */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div
                    style={{
                      height: '140px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)',
                      marginBottom: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '1rem',
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.12) 0%, rgba(16, 185, 129, 0.08) 100%)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 1 }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--primary)' }}>
                        Interactive Sandbox
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', background: 'var(--bg-primary)', padding: '0.15rem 0.5rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                        {project.screenshots[0].device} preview
                      </span>
                    </div>

                    <div style={{ zIndex: 1 }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                        {project.screenshots[0].title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {project.screenshots[0].caption}
                      </div>
                    </div>
                  </div>
                )}

                {/* Header: Status & Version */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  {getStatusBadge(project.status)}
                  <span style={{ fontSize: '0.74rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>
                    {project.version}
                  </span>
                </div>

                {/* Project Title & Category */}
                <div style={{ marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', fontWeight: 700 }}>
                    {project.category}
                  </span>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.15rem' }}>
                    {project.name}
                  </h3>
                  <p style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {project.description}
                </p>

                {/* Technologies List */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Technology Stack
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'monospace',
                          color: 'var(--text-secondary)',
                          background: 'var(--bg-tertiary)',
                          padding: '0.2rem 0.5rem',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', alignSelf: 'center', padding: '0 0.2rem' }}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Demo Accounts Credentials Box */}
                {project.demoCredentials && project.demoCredentials.length > 0 && (
                  <div
                    style={{
                      background: 'var(--bg-secondary)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem',
                      border: '1px solid var(--border-subtle)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                        Synthetic Demo Account
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--vis-green)', fontWeight: 600 }}>
                        {project.demoCredentials[0].role}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem' }}>
                      {/* Copy Username */}
                      <div
                        onClick={() => copyCredential(project.demoCredentials![0].username, `${project.id}-user`)}
                        style={{
                          background: 'var(--bg-primary)',
                          padding: '0.4rem 0.6rem',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-subtle)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '0.35rem',
                        }}
                        title="Click to copy Username"
                      >
                        <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {project.demoCredentials[0].username}
                        </span>
                        {copiedKey === `${project.id}-user` ? <Check size={12} color="var(--vis-green)" /> : <Copy size={12} color="var(--text-muted)" />}
                      </div>

                      {/* Copy Password */}
                      <div
                        onClick={() => copyCredential(project.demoCredentials![0].password, `${project.id}-pass`)}
                        style={{
                          background: 'var(--bg-primary)',
                          padding: '0.4rem 0.6rem',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-subtle)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '0.35rem',
                        }}
                        title="Click to copy Password"
                      >
                        <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {project.demoCredentials[0].password}
                        </span>
                        {copiedKey === `${project.id}-pass` ? <Check size={12} color="var(--vis-green)" /> : <Copy size={12} color="var(--text-muted)" />}
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons: View Demo & View Details */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.75rem', marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => setActiveSandboxProject(project)}
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <PlayCircle size={15} />
                    <span>View Demo</span>
                  </button>

                  <Link
                    href={`/solutions/${project.slug}`}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div
              className="glass-card"
              style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <AlertTriangle size={36} color="var(--accent-amber)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                No solutions matched your filter
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Try adjusting your search query or reset status filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedStatus('All');
                  setSelectedCategory('All');
                }}
                className="btn btn-primary btn-sm"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Demo Sandbox Modal */}
      <DemoSandboxModal
        project={activeSandboxProject}
        onClose={() => setActiveSandboxProject(null)}
      />
    </div>
  );
}
