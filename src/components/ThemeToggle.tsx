'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn-outline btn-sm"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '38px',
        height: '38px',
        padding: 0,
        borderRadius: 'var(--radius-md)',
        color: theme === 'dark' ? '#f59e0b' : '#3b82f6',
        transition: 'all 0.2s ease',
      }}
      aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun size={18} strokeWidth={2.2} />
      ) : (
        <Moon size={18} strokeWidth={2.2} />
      )}
    </button>
  );
}
