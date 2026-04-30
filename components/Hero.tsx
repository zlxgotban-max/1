"use client";
import { useMemo, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import FloatingOrbs from "./FloatingOrbs";

export default function Hero() {
  const [active, setActive] = useState(false);
  const stats = useMemo(() => ([{ label: "FPS estável", value: "60" }, { label: "Jank", value: "0" }, { label: "Bundle", value: "leve" }]), []);
  return (
    <section className={`hero ${active ? "hero-active" : ""}`}>
      <FloatingOrbs />
      <div className="hero-copy">
        <p className="eyebrow"><Sparkles size={16} /> Interface de alta performance</p>
        <h1>Experiência web fluida, responsiva e animada.</h1>
        <p className="lead">Construída para React/Next.js com animações compostas por transform e opacity, eventos otimizados e componentes pensados para performance.</p>
        <div className="hero-actions">
          <button className="primary-btn" onPointerDown={() => setActive(v => !v)}>Alternar estado <ArrowRight size={18} /></button>
          <a className="secondary-btn" href="#features">Ver secções</a>
        </div>
        <div className="stats">{stats.map(item => <div key={item.label} className="stat-card"><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
      </div>
      <div className="hero-visual"><div className="glass-panel"><div className="mini-topbar"><span /><span /><span /></div><div className="panel-grid"><div className="tile tile-large">Motion</div><div className="tile">React</div><div className="tile">Next.js</div><div className="tile tile-accent">60fps</div></div></div></div>
    </section>
  );
}
