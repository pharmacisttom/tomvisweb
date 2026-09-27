'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Home,
  Layers, 
  PlayCircle, 
  Cpu, 
  ShieldCheck, 
  Mail, 
  Menu, 
  X, 
  ChevronDown,
  ChevronRight,
  Terminal,
  Activity,
  HeartPulse,
  Ambulance,
  Users,
  ShoppingBag,
  CircleDollarSign,
  ClipboardCheck,
  BarChart3
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { TomvisLogo } from '@/components/TomvisLogo';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const solutionsList = [
    { name: 'SmartOP', href: '/solutions/smartop', desc: 'Workforce & Operations Management', icon: Activity, color: '#0ea5e9' },
    { name: 'Smart EMS', href: '/solutions/smart-ems', desc: 'Emergency Medical & 1669 Dispatch', icon: Ambulance, color: '#ef4444' },
    { name: 'Smart Cooperative', href: '/solutions/cooperative', desc: 'Credit Union & Share Distribution', icon: Users, color: '#10b981' },
    { name: 'Smart POS', href: '/solutions/smart-pos', desc: 'Retail POS & Welfare Store System', icon: ShoppingBag, color: '#f59e0b' },
    { name: 'Smart Finance', href: '/solutions/smart-finance', desc: 'Treasury & AR Aging Accounting', icon: CircleDollarSign, color: '#3b82f6' },
    { name: 'Smart Healthcare', href: '/solutions/smart-healthcare', desc: 'Clinical Intelligence & ADR Shield', icon: HeartPulse, color: '#06b6d4' },
    { name: 'Smart Inspection', href: '/solutions/smart-inspection', desc: 'Audit Routes & Risk Scoring', icon: ClipboardCheck, color: '#8b5cf6' },
    { name: 'Smart Dashboard', href: '/solutions/smart-dashboard', desc: 'Executive Analytics & KPI Cubes', icon: BarChart3, color: '#ec4899' },
  ];

  const isSolutionsActive = pathname.startsWith('/solutions');

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        backgroundColor: 'var(--bg-glass)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'background-color 0.25s ease',
      }}
    >
      <div className="container nav-container">
        {/* Brand Logo with Official Emblem Badge */}
        <Link href="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
          <div
            style={{
              position: 'relative',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 0 12px rgba(16, 185, 129, 0.4)',
              border: '2px solid rgba(16, 185, 129, 0.5)',
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/tomvis-emblem.png"
              alt="TOMVIS Framework Official Emblem"
              width={42}
              height={42}
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <TomvisLogo size="sm" showFramework={true} />
            <span className="brand-badge" style={{ marginLeft: '0.2rem' }}>
              ENTERPRISE
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="nav-links">
          {/* Home */}
          <Link
            href="/"
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>

          {/* Solutions Dropdown */}
          <div 
            ref={dropdownRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setSolutionsDropdownOpen(true)}
            onMouseLeave={() => setSolutionsDropdownOpen(false)}
          >
            <button
              onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
              className={`nav-link ${isSolutionsActive ? 'active' : ''}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
              aria-expanded={solutionsDropdownOpen}
              aria-haspopup="true"
            >
              <span>Solutions</span>
              <ChevronDown 
                size={15} 
                style={{ 
                  transform: solutionsDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', 
                  transition: 'transform 0.2s ease' 
                }} 
              />
            </button>

            {/* Dropdown Menu Panel */}
            {solutionsDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-140px',
                  width: '560px',
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: '1rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                  zIndex: 100,
                  marginTop: '0.5rem',
                  backdropFilter: 'blur(20px)',
                  animation: 'fadeIn 0.15s ease-out',
                }}
              >
                {solutionsList.map((sol) => {
                  const Icon = sol.icon;
                  const isActiveSol = pathname === sol.href;
                  return (
                    <Link
                      key={sol.name}
                      href={sol.href}
                      onClick={() => setSolutionsDropdownOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.65rem 0.75rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: isActiveSol ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
                        border: isActiveSol ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
                        transition: 'all var(--transition-fast)',
                        textDecoration: 'none',
                      }}
                      className="dropdown-item"
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          backgroundColor: `${sol.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: sol.color,
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <Icon size={17} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          {sol.name}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>
                          {sol.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Demo */}
          <Link
            href="/demo"
            className={`nav-link ${pathname === '/demo' ? 'active' : ''}`}
          >
            Demo
          </Link>

          {/* Technology */}
          <Link
            href="/technology"
            className={`nav-link ${pathname === '/technology' ? 'active' : ''}`}
          >
            Technology
          </Link>

          {/* Security */}
          <Link
            href="/security"
            className={`nav-link ${pathname === '/security' ? 'active' : ''}`}
          >
            Security
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <ThemeToggle />

          <Link
            href="/admin"
            className="btn-outline btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.45rem 0.75rem' }}
            title="System Admin & Config Sandbox"
          >
            <Terminal size={14} />
            <span style={{ fontSize: '0.8rem' }}>Admin</span>
          </Link>

          <Link
            href="/demo"
            className="btn btn-primary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
          >
            <PlayCircle size={16} />
            <span>Launch Demo</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-drawer-link ${pathname === '/' ? 'active-mobile' : ''}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Home size={18} color="var(--vis-green)" />
                <span>Home</span>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" />
            </Link>

            {/* Solutions Accordion */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className={`mobile-drawer-link ${isSolutionsActive ? 'active-mobile' : ''}`}
                style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Layers size={18} color="var(--primary)" />
                  <span>Solutions</span>
                </div>
                <ChevronDown
                  size={18}
                  color="var(--text-muted)"
                  style={{
                    transform: mobileSolutionsOpen ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>

              {mobileSolutionsOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingLeft: '1.5rem', marginTop: '0.4rem', marginBottom: '0.5rem' }}>
                  {solutionsList.map((sol) => {
                    const Icon = sol.icon;
                    const isActive = pathname === sol.href;
                    return (
                      <Link
                        key={sol.name}
                        href={sol.href}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem',
                          padding: '0.45rem 0.5rem',
                          fontSize: '0.92rem',
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? 'var(--vis-green)' : 'var(--text-secondary)',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: isActive ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                        }}
                      >
                        <Icon size={16} color={sol.color} />
                        <span>{sol.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Demo */}
            <Link
              href="/demo"
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-drawer-link ${pathname === '/demo' ? 'active-mobile' : ''}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <PlayCircle size={18} color="var(--sprout-green)" />
                <span>Demo Projects</span>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" />
            </Link>

            {/* Technology */}
            <Link
              href="/technology"
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-drawer-link ${pathname === '/technology' ? 'active-mobile' : ''}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Cpu size={18} color="#818cf8" />
                <span>Technology</span>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" />
            </Link>

            {/* Security */}
            <Link
              href="/security"
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-drawer-link ${pathname === '/security' ? 'active-mobile' : ''}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShieldCheck size={18} color="var(--accent-amber)" />
                <span>Security</span>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" />
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-drawer-link ${pathname === '/contact' ? 'active-mobile' : ''}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} color="var(--primary)" />
                <span>Contact</span>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" />
            </Link>

            {/* Admin */}
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-drawer-link"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Terminal size={18} color="var(--accent-purple)" />
                <span>Admin Sandbox</span>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" />
            </Link>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link
              href="/demo"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <PlayCircle size={18} />
              <span>Explore All Live Demos</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Mail size={18} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
