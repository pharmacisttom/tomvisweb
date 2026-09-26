'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  Settings, 
  Layers, 
  PlayCircle, 
  Check, 
  Copy, 
  Plus, 
  Save, 
  RefreshCw, 
  Database, 
  ExternalLink,
  ShieldCheck,
  Activity,
  Download,
  Upload,
  AlertCircle
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/projects';
import { Project, DemoStatus } from '@/types/project';

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS_DATA);
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0].id);
  const [copiedJson, setCopiedJson] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const handleStatusChange = (projectId: string, newStatus: DemoStatus) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, status: newStatus } : p))
    );
    showSaveFeedback();
  };

  const handleVersionChange = (projectId: string, newVersion: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, version: newVersion } : p))
    );
  };

  const handleDemoUrlChange = (projectId: string, newUrl: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, demoUrl: newUrl } : p))
    );
  };

  const showSaveFeedback = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  const exportConfigJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(projects, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `tomvis-projects-config-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const copyConfigJson = () => {
    navigator.clipboard.writeText(JSON.stringify(projects, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* Admin Header Banner */}
      <section
        style={{
          paddingTop: '3.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.08) 0%, transparent 100%)',
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-tag" style={{ borderColor: 'rgba(139, 92, 246, 0.3)', color: 'var(--accent-purple)', background: 'rgba(139, 92, 246, 0.1)' }}>
                <Terminal size={14} />
                <span>Admin Architecture Sandbox</span>
              </span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginTop: '0.4rem' }}>
                System Management Console
              </h1>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Future-proof configuration controller to manage projects, toggle live demo statuses, update versions, and export configuration files.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button onClick={copyConfigJson} className="btn btn-secondary btn-sm">
                {copiedJson ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copiedJson ? 'Copied JSON!' : 'Copy Config JSON'}</span>
              </button>
              <button onClick={exportConfigJson} className="btn btn-primary btn-sm">
                <Download size={14} />
                <span>Export projects.ts Config</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Body */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          {savedNotice && (
            <div
              style={{
                marginBottom: '1.5rem',
                padding: '0.85rem 1.25rem',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius-md)',
                color: '#10b981',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Check size={16} />
              <span>Project configuration state updated in browser sandbox!</span>
            </div>
          )}

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Configured Systems</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>{projects.length} Modules</div>
            </div>
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Available Demos</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#10b981' }}>
                {projects.filter((p) => p.status === 'Available').length} Online
              </div>
            </div>
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Maintenance / Staging</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f59e0b' }}>
                {projects.filter((p) => p.status !== 'Available').length} Flagged
              </div>
            </div>
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Architecture Schema</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)' }}>Config-Driven</div>
            </div>
          </div>

          {/* 2-Column Management Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'start',
            }}
          >
            {/* Left: Projects List & Status Selector */}
            <div className="glass-card" style={{ padding: '1.75rem', borderRadius: 'var(--radius-xl)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Manage Project Registry
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Select to edit
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {projects.map((p) => {
                  const isSelected = p.id === selectedProjectId;
                  return (
                    <div
                      key={p.id}
                      onClick={() => setSelectedProjectId(p.id)}
                      style={{
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        background: isSelected ? 'rgba(14, 165, 233, 0.12)' : 'var(--bg-secondary)',
                        border: isSelected ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                          {p.name}
                        </span>
                        <select
                          value={p.status}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => handleStatusChange(p.id, e.target.value as DemoStatus)}
                          style={{
                            fontSize: '0.72rem',
                            padding: '0.2rem 0.5rem',
                            borderRadius: 'var(--radius-sm)',
                            background: 'var(--bg-primary)',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border-medium)',
                            cursor: 'pointer',
                          }}
                        >
                          <option value="Available">Available</option>
                          <option value="Maintenance">Maintenance</option>
                          <option value="Coming Soon">Coming Soon</option>
                          <option value="Private Demo">Private Demo</option>
                        </select>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        <span>{p.category}</span>
                        <span style={{ fontFamily: 'monospace' }}>{p.version}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Project Metadata Editor */}
            <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    Editing: {selectedProject.name}
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Slug: /solutions/{selectedProject.slug}
                  </span>
                </div>

                <Link
                  href={`/solutions/${selectedProject.slug}`}
                  className="btn btn-outline btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>Preview Page</span>
                  <ExternalLink size={13} />
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Version & Demo URL */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Version Tag
                    </label>
                    <input
                      type="text"
                      value={selectedProject.version}
                      onChange={(e) => handleVersionChange(selectedProject.id, e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-medium)',
                        color: 'var(--text-primary)',
                        fontFamily: 'monospace',
                        fontSize: '0.85rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Demo Launch URL
                    </label>
                    <input
                      type="text"
                      value={selectedProject.demoUrl}
                      onChange={(e) => handleDemoUrlChange(selectedProject.id, e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-medium)',
                        color: 'var(--text-primary)',
                        fontFamily: 'monospace',
                        fontSize: '0.85rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Features List View */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.45rem' }}>
                    Configured Features ({selectedProject.features.length})
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {selectedProject.features.map((f) => (
                      <span
                        key={f}
                        style={{
                          fontSize: '0.75rem',
                          background: 'var(--bg-secondary)',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: 'var(--radius-sm)',
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technology List View */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.45rem' }}>
                    Technology Stack Tags
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.75rem',
                          background: 'rgba(14, 165, 233, 0.1)',
                          color: 'var(--primary)',
                          border: '1px solid rgba(14, 165, 233, 0.25)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: 'var(--radius-sm)',
                          fontFamily: 'monospace',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Screenshots Count & Devices */}
                <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Configured Screenshot Mockups: {selectedProject.screenshots.length}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    Desktop: {selectedProject.screenshots.filter((s) => s.device === 'desktop').length} • 
                    Tablet: {selectedProject.screenshots.filter((s) => s.device === 'tablet').length} • 
                    Mobile: {selectedProject.screenshots.filter((s) => s.device === 'mobile').length}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
                  <button onClick={showSaveFeedback} className="btn btn-primary btn-sm">
                    <Save size={15} />
                    <span>Apply Changes to Session</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
