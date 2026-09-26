'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  Building2, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Info,
  Calendar,
  Layers,
  HelpCircle
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/projects';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    interestedProjects: [] as string[],
    deploymentModel: 'Cloud / Hosted Sandbox',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleProject = (projectName: string) => {
    setFormData((prev) => {
      const exists = prev.interestedProjects.includes(projectName);
      return {
        ...prev,
        interestedProjects: exists
          ? prev.interestedProjects.filter((p) => p !== projectName)
          : [...prev.interestedProjects, projectName],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate client-side processing since SMTP is not configured yet
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
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
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="section-tag">
            <Mail size={14} />
            <span>Connect & Pitch</span>
          </span>
          <h1 className="section-title">
            Request a Tailored Demo
          </h1>
          <p className="section-description">
            Presenting to executive leadership or evaluating Tomvis for public sector or corporate deployment? Connect with our solution architects for a live customized walkthrough.
          </p>
        </div>
      </section>

      {/* Main Content Form & Contact Info */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Left: Contact Form */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                      margin: '0 auto 1.5rem auto',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    Demo Request Received!
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.name}</strong>. Your request for <strong>{formData.organization}</strong> has been logged in our demo queue.
                  </p>

                  <div
                    style={{
                      background: 'var(--bg-secondary)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-subtle)',
                      marginBottom: '2rem',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.35rem' }}>
                      <Info size={14} />
                      <span>Notice (Demo Environment)</span>
                    </div>
                    SMTP transport is currently in simulation mode. In production, this trigger will instantly dispatch an automated calendar invite with custom credentials to <strong>{formData.email}</strong>.
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        organization: '',
                        phone: '',
                        email: '',
                        interestedProjects: [],
                        deploymentModel: 'Cloud / Hosted Sandbox',
                        message: '',
                      });
                    }}
                    className="btn btn-outline"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Request a Presentation & Walkthrough
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                      Fill in your agency details to configure a tailored demonstration sandbox.
                    </p>
                  </div>

                  {/* Name & Organization */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. / Director / Khun..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--bg-primary)',
                          border: '1px solid var(--border-medium)',
                          color: 'var(--text-primary)',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                        Organization / Agency *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Hospital, Cooperative, Enterprise..."
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--bg-primary)',
                          border: '1px solid var(--border-medium)',
                          color: 'var(--text-primary)',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="08x-xxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--bg-primary)',
                          border: '1px solid var(--border-medium)',
                          color: 'var(--text-primary)',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@organization.or.th"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--bg-primary)',
                          border: '1px solid var(--border-medium)',
                          color: 'var(--text-primary)',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Interested Projects Selection */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                      Interested Solution Modules (Select all that apply)
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {PROJECTS_DATA.map((p) => {
                        const isSelected = formData.interestedProjects.includes(p.name);
                        return (
                          <button
                            type="button"
                            key={p.id}
                            onClick={() => toggleProject(p.name)}
                            className={isSelected ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
                            style={{ fontSize: '0.78rem' }}
                          >
                            <span>{isSelected ? '✓ ' : '+ '}</span>
                            <span>{p.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Deployment Model Preference */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                      Preferred Deployment Model
                    </label>
                    <select
                      value={formData.deploymentModel}
                      onChange={(e) => setFormData({ ...formData, deploymentModel: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-medium)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    >
                      <option value="Cloud / Hosted Sandbox">Cloud / Hosted Sandbox (Fastest)</option>
                      <option value="On-Premise Private Server (Docker/Bare-metal)">On-Premise Private Server (Docker / Bare-metal)</option>
                      <option value="Hybrid Hospital / Agency DMZ">Hybrid Hospital / Agency DMZ</option>
                      <option value="Custom Architecture Consultation">Custom Architecture Consultation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                      Project Scope & Specific Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please describe your organization's goals, existing HIS/ERP systems to integrate, or presentation schedule..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-medium)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    {submitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Submit Demo Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Technical Consultation & FAQ */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  Solution Architecture Consultation
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Our technical leads provide specialized guidance on data integration, HIS interoperability, network topologies, and hardware selection.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(14, 165, 233, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)' }}>Response Time</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Within 24 business hours</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                      <Calendar size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)' }}>Demonstration Format</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Virtual Conference or In-Person Executive Briefing</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)' }}>Data Confidentiality</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Non-Disclosure Agreements (NDA) supported</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast FAQ */}
              <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <HelpCircle size={20} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    Quick Demonstration FAQ
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      Is the demo connected to live hospital databases?
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      No. The demo portal is 100% isolated and utilizes synthetic mock records to guarantee zero real patient, staff, or member data exposure.
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      Can we test with our own mock data files?
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Yes! During a private evaluation sandbox setup, we can pre-load your sanitized mock catalog or test hospital departments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
