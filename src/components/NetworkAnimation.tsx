'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface NodeItem {
  id: string;
  name: string;
  category: string;
  slug: string;
  color: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAngle: number;
  distance: number;
}

const NODES_CONFIG = [
  { name: 'Healthcare', slug: 'healthcare', category: 'Clinical', color: '#06b6d4' },
  { name: 'EMS', slug: 'smart-ems', category: 'Emergency', color: '#ef4444' },
  { name: 'Workforce', slug: 'smartop', category: 'Operations', color: '#0ea5e9' },
  { name: 'Finance', slug: 'finance', category: 'Fiscal', color: '#3b82f6' },
  { name: 'Cooperative', slug: 'cooperative', category: 'Member', color: '#10b981' },
  { name: 'POS', slug: 'pos', category: 'Retail', color: '#f59e0b' },
  { name: 'Inspection', slug: 'inspection', category: 'Field GIS', color: '#8b5cf6' },
  { name: 'Dashboard', slug: 'dashboard', category: 'Analytics', color: '#ec4899' },
];

export function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = Math.min(width * 0.65, 540));

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.min(Math.max(width * 0.62, 380), 540);
    };

    window.addEventListener('resize', handleResize);

    // Initial node positioning in an ellipse around the center
    const totalNodes = NODES_CONFIG.length;
    const nodes: NodeItem[] = NODES_CONFIG.map((cfg, idx) => {
      const baseAngle = (idx / totalNodes) * Math.PI * 2 - Math.PI / 2;
      return {
        id: cfg.name,
        name: cfg.name,
        category: cfg.category,
        slug: cfg.slug,
        color: cfg.color,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        radius: 26,
        baseAngle,
        distance: 1, // Normalized
      };
    });

    // Energy packet particles traveling on lines
    interface Packet {
      nodeIndex: number;
      progress: number;
      speed: number;
      forward: boolean;
      color: string;
    }

    const packets: Packet[] = [];
    for (let i = 0; i < totalNodes * 2; i++) {
      packets.push({
        nodeIndex: i % totalNodes,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.007,
        forward: Math.random() > 0.3,
        color: NODES_CONFIG[i % totalNodes].color,
      });
    }

    let time = 0;
    let mouseX = -9999;
    let mouseY = -9999;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
      setHoveredNode(null);
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const rx = Math.min(width * 0.40, 320);
      const ry = Math.min(height * 0.38, 200);

      // Check hover
      let currentHover: string | null = null;

      // Update and compute satellite node positions with subtle organic breathing
      nodes.forEach((node, i) => {
        const angle = node.baseAngle + Math.sin(time * 0.4 + i * 0.8) * 0.06;
        const distScale = 1 + Math.sin(time * 0.8 + i) * 0.03;
        const targetX = centerX + Math.cos(angle) * rx * distScale;
        const targetY = centerY + Math.sin(angle) * ry * distScale;

        // Mouse avoidance/attraction
        const dx = mouseX - targetX;
        const dy = mouseY - targetY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < node.radius + 15) {
          currentHover = node.name;
        }

        node.x = targetX;
        node.y = targetY;
      });

      setHoveredNode(currentHover);

      // 1. Draw glowing background grid / orbital rings
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(centerX, centerY, rx * 0.55, ry * 0.55, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.06)';
      ctx.stroke();
      ctx.restore();

      // 2. Draw Connection Lines between TOMVIS Core and all Nodes
      nodes.forEach((node) => {
        const isHovered = currentHover === node.name;
        
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(node.x, node.y);

        if (isHovered) {
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 2.5;
          ctx.shadowColor = node.color;
          ctx.shadowBlur = 15;
        } else {
          const grad = ctx.createLinearGradient(centerX, centerY, node.x, node.y);
          grad.addColorStop(0, 'rgba(14, 165, 233, 0.35)');
          grad.addColorStop(1, `${node.color}55`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.2;
        }
        ctx.stroke();
        ctx.restore();
      });

      // 3. Draw Traveling Data Packets
      packets.forEach((p) => {
        const targetNode = nodes[p.nodeIndex];
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.forward = !p.forward;
        }

        const t = p.forward ? p.progress : 1 - p.progress;
        const px = centerX + (targetNode.x - centerX) * t;
        const py = centerY + (targetNode.y - centerY) * t;

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      // 4. Draw TOMVIS Central Core Node (Bio-Digital Synergy)
      ctx.save();
      const corePulse = Math.sin(time * 2) * 4;
      const coreRadius = 46 + corePulse;

      // Outer glow aura (Tech Blue & Nature Green)
      const coreAura = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, coreRadius * 1.8);
      coreAura.addColorStop(0, 'rgba(14, 165, 233, 0.35)');
      coreAura.addColorStop(0.5, 'rgba(16, 185, 129, 0.25)');
      coreAura.addColorStop(1, 'rgba(14, 165, 233, 0)');
      ctx.fillStyle = coreAura;
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Core Outer Ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius + 6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Core Solid Center
      const coreBody = ctx.createRadialGradient(centerX - 10, centerY - 10, 5, centerX, centerY, coreRadius);
      coreBody.addColorStop(0, '#0f172a');
      coreBody.addColorStop(1, '#060911');
      ctx.fillStyle = coreBody;
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 18;
      ctx.stroke();

      // Text inside core
      ctx.shadowBlur = 0;
      ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('TOMVIS', centerX, centerY - 5);

      ctx.font = 'bold 8.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillStyle = '#22c55e';
      ctx.fillText('ECOSYSTEM CORE', centerX, centerY + 12);
      ctx.restore();

      // 5. Draw Satellite Nodes
      nodes.forEach((node) => {
        const isHovered = currentHover === node.name;
        const nodeRadius = isHovered ? node.radius + 4 : node.radius;

        ctx.save();
        // Node halo
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius + 4, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}22`;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? node.color : '#0f172a';
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = isHovered ? 2.5 : 1.8;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isHovered ? 18 : 8;
        ctx.stroke();

        // Inner initial or indicator
        ctx.shadowBlur = 0;
        ctx.font = 'bold 10px sans-serif';
        ctx.fillStyle = isHovered ? '#ffffff' : node.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.name.slice(0, 3).toUpperCase(), node.x, node.y);

        // Label below node
        const labelY = node.y + nodeRadius + 14;
        ctx.font = isHovered ? 'bold 12px sans-serif' : '500 11px sans-serif';
        ctx.fillStyle = isHovered ? '#ffffff' : '#94a3b8';
        ctx.fillText(node.name, node.x, labelY);

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '920px', margin: '0 auto' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          display: 'block',
          cursor: 'pointer',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '0.5rem',
          padding: '0 1rem',
        }}
      >
        {NODES_CONFIG.map((item) => (
          <Link
            key={item.name}
            href={`/solutions/${item.slug}`}
            className="badge"
            style={{
              background: hoveredNode === item.name ? `${item.color}33` : 'var(--bg-card)',
              color: 'var(--text-primary)',
              border: `1px solid ${hoveredNode === item.name ? item.color : 'var(--border-subtle)'}`,
              padding: '0.35rem 0.75rem',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: item.color,
                display: 'inline-block',
                boxShadow: `0 0 8px ${item.color}`,
              }}
            />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
