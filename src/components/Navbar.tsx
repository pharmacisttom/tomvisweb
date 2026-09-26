'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Layers, 
  PlayCircle, 
  Cpu, 
  ShieldCheck, 
  Mail, 
  Menu, 
  X, 
  ChevronRight,
  Terminal,
  Sprout
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { TomvisLogo } from '@/components/TomvisLogo';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Ecosystem', href: '/#ecosystem', icon: Sprout },
    { label: 'Solutions', href: '/#solutions', icon: Layers },
    { label: 'Live Demo', href: '/demo', icon: PlayCircle },
    { label: 'Technology', href: '/technology', icon: Cpu },
    { label: 'Security', href: '/security', icon: ShieldCheck },
    { label: 'Contact', href: '/contact', icon: Mail },
  ];

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
              PORTAL
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="nav-links">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-drawer-link"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Icon size={18} color="var(--vis-green)" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight size={18} color="var(--text-muted)" />
                </Link>
              );
            })}
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

          <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link
              href="/demo"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <PlayCircle size={18} />
              <span>Explore All Live Demos</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              <Mail size={18} />
              <span>Request Custom Demo</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
