'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  Building2, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Info
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/projects';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    projectType: 'SmartOP - Workforce Management',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validationPassed, setValidationPassed] = useState(false);

  const projectTypeOptions = [
    'SmartOP - Workforce & Operations Management',
    'Smart EMS - Emergency Dispatch & Refer System',
    'Smart Cooperative - Credit Union & Share Management',
    'Smart POS - Cloud Retail & Welfare Store',
    'Smart Finance - Corporate Treasury & AR Aging',
    'Smart Healthcare - Clinical Intelligence & ADR',
    'Smart Inspection - GIS Route & Risk Audit',
    'Smart Dashboard - Enterprise Analytics & KPI Cubes',
    'General Inquiry & Architecture Consulting'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (minimum 2 characters).';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Please provide your organization or company name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const phoneRegex = /^[0-9+\s\-()]{8,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please provide a valid contact phone number (at least 8 digits).';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide details about your project or inquiry (minimum 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setValidationPassed(true);
    } else {
      setValidationPassed(false);
    }
  };

  // Generate mailto link with prefilled subject & body for seamless immediate fallback
  const mailtoSubject = encodeURIComponent(`[TOMVIS Inquiry] ${formData.projectType} - ${formData.organization}`);
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.name}\nOrganization: ${formData.organization}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
  );
  const mailtoUrl = `mailto:info@tomvisolution.tech?subject=${mailtoSubject}&body=${mailtoBody}`;

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
            <Mail size={14} />
            <span>Connect & Inquire</span>
          </span>
          <h1 className="section-title">
            Contact TOMVIS Architecture Team
          </h1>
          <p className="section-description">
            Evaluating the TOMVIS Framework for public sector, healthcare, or enterprise corporate deployment? Reach out to our solution architects for technical consultations and customized solution walkthroughs.
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
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Project Consultation Inquiry
                </h2>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  All inquiries receive direct architectural evaluation. Strict confidentiality and zero marketing spam guaranteed.
                </p>
              </div>

              {validationPassed ? (
                <div
                  style={{
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(14, 165, 233, 0.08)',
                    border: '1px solid rgba(14, 165, 233, 0.3)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--vis-green)' }}>
                    <CheckCircle2 size={24} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      Form Validation Passed
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    Your consultation request data has been validated against all schema rules. Since our backend transactional email dispatch service (SMTP Relay) is in staged sandbox configuration, we do not issue a mock delivery claim.
                  </p>

                  <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Inquiry Summary
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <div><strong>Sender:</strong> {formData.name} ({formData.organization})</div>
                      <div><strong>Contact:</strong> {formData.email} | {formData.phone}</div>
                      <div><strong>Solution:</strong> {formData.projectType}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a
                      href={mailtoUrl}
                      className="btn btn-primary"
                      style={{ justifyContent: 'center', textDecoration: 'none' }}
                    >
                      <Send size={16} />
                      <span>Transmit Directly via Email Client</span>
                      <ExternalLink size={14} />
                    </a>

                    <button
                      onClick={() => setValidationPassed(false)}
                      className="btn btn-secondary btn-sm"
                      style={{ justifyContent: 'center' }}
                    >
                      Edit Inquiry Fields
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Somchai Prasert"
                        className="input"
                        style={{ width: '100%', borderColor: errors.name ? 'var(--accent-rose)' : undefined }}
                      />
                      {errors.name && (
                        <div style={{ color: '#f43f5e', fontSize: '0.75rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <AlertCircle size={12} />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Organization */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                        Organization / Agency *
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Provincial Health Office / Regional Hospital"
                        className="input"
                        style={{ width: '100%', borderColor: errors.organization ? 'var(--accent-rose)' : undefined }}
                      />
                      {errors.organization && (
                        <div style={{ color: '#f43f5e', fontSize: '0.75rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <AlertCircle size={12} />
                          <span>{errors.organization}</span>
                        </div>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@organization.or.th"
                          className="input"
                          style={{ width: '100%', borderColor: errors.email ? 'var(--accent-rose)' : undefined }}
                        />
                        {errors.email && (
                          <div style={{ color: '#f43f5e', fontSize: '0.75rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <AlertCircle size={12} />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 081-234-5678"
                          className="input"
                          style={{ width: '100%', borderColor: errors.phone ? 'var(--accent-rose)' : undefined }}
                        />
                        {errors.phone && (
                          <div style={{ color: '#f43f5e', fontSize: '0.75rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <AlertCircle size={12} />
                            <span>{errors.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                        Project Type / Solution of Interest *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="input"
                        style={{ width: '100%', cursor: 'pointer' }}
                      >
                        {projectTypeOptions.map((opt) => (
                          <option key={opt} value={opt} style={{ background: '#0f172a', color: '#fff' }}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <div style={{ color: '#f43f5e', fontSize: '0.75rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <AlertCircle size={12} />
                          <span>{errors.projectType}</span>
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                        Inquiry Details / Deployment Context *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your current operational challenge, expected user scale, or desired pilot timeline..."
                        className="input"
                        style={{ width: '100%', resize: 'vertical', borderColor: errors.message ? 'var(--accent-rose)' : undefined }}
                      />
                      {errors.message && (
                        <div style={{ color: '#f43f5e', fontSize: '0.75rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <AlertCircle size={12} />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                    >
                      <Send size={16} />
                      <span>Validate & Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Direct Information & Security Policy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Architecture Team Contacts */}
              <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                  Direct Architecture Contacts
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(14, 165, 233, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        General & Solution Inquiries
                      </div>
                      <a href="mailto:info@tomvisolution.tech" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }} className="hover-primary">
                        info@tomvisolution.tech
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--vis-green)', flexShrink: 0 }}>
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        Production Domain
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        https://tomvisolution.tech
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-amber)', flexShrink: 0 }}>
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        Security Team
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        Responsible disclosure & security audit queries
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Safety Note */}
              <div className="glass-card" style={{ padding: '1.75rem', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem', color: 'var(--vis-green)' }}>
                  <ShieldCheck size={20} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 800 }}>Privacy by Design</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  In accordance with our zero-retention policy for unsolicited contact information, inquiry data is never written to public analytical logs or sold to third-party ad brokers. Sensitive credentials or passwords should never be submitted via contact forms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
