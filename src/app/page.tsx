"use client";

import { useEffect, useState, useCallback } from "react";
import QRCode from "qrcode";
import {
  Sparkles,
  User,
  MapPin,
  Briefcase,
  Workflow,
  Building2,
  Rocket,
  Globe,
  Infinity,
  Target,
  Handshake,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Utensils,
  ShoppingBag,
  Dumbbell,
  GraduationCap,
  Monitor,
  Phone,
  ExternalLink,
  Code2,
  Camera,
  Zap,
  Star,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react";

type Accent = "purple" | "blue" | "green" | "orange" | "red" | "pink";

type NavItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: Accent;
};

const navItems: NavItem[] = [
  { id: "portada", label: "Portada", icon: Sparkles, accent: "purple" },
  { id: "quien-soy", label: "Yo", icon: User, accent: "blue" },
  { id: "de-donde", label: "Origen", icon: MapPin, accent: "green" },
  { id: "experiencia", label: "Exp.", icon: Briefcase, accent: "orange" },
  { id: "a-que-dedico", label: "GLA", icon: Workflow, accent: "purple" },
  { id: "clientes", label: "Clientes", icon: Building2, accent: "blue" },
  { id: "prospectos", label: "Futuro", icon: Rocket, accent: "green" },
  { id: "proyectos", label: "Proyectos", icon: Globe, accent: "pink" },
  { id: "limites", label: "Limites", icon: Infinity, accent: "red" },
  { id: "metas", label: "Metas", icon: Target, accent: "purple" },
  { id: "cierre", label: "Cierre", icon: Handshake, accent: "blue" },
];

const accentStyles: Record<Accent, { bg: string; text: string; border: string; light: string; dot: string; glow: string; hoverBg: string; hoverBorder: string }> = {
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", light: "bg-purple-400/10", dot: "bg-purple-500", glow: "bg-glow-purple", hoverBg: "hover:bg-purple-500/20", hoverBorder: "hover:border-purple-500/40" },
  blue:   { bg: "bg-blue-500/10",   text: "text-blue-400",   border: "border-blue-500/20",   light: "bg-blue-400/10",   dot: "bg-blue-500",   glow: "bg-glow-blue",   hoverBg: "hover:bg-blue-500/20",   hoverBorder: "hover:border-blue-500/40" },
  green:  { bg: "bg-emerald-500/10",text: "text-emerald-400",border: "border-emerald-500/20",light: "bg-emerald-400/10",dot: "bg-emerald-500",glow: "bg-glow-green",  hoverBg: "hover:bg-emerald-500/20",hoverBorder: "hover:border-emerald-500/40" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20",light: "bg-orange-400/10", dot: "bg-orange-500", glow: "bg-glow-orange", hoverBg: "hover:bg-orange-500/20",hoverBorder: "hover:border-orange-500/40" },
  red:    { bg: "bg-red-500/10",    text: "text-red-400",    border: "border-red-500/20",    light: "bg-red-400/10",    dot: "bg-red-500",    glow: "bg-glow-red",    hoverBg: "hover:bg-red-500/20",   hoverBorder: "hover:border-red-500/40" },
  pink:   { bg: "bg-pink-500/10",   text: "text-pink-400",   border: "border-pink-500/20",   light: "bg-pink-400/10",   dot: "bg-pink-500",   glow: "bg-glow-pink",   hoverBg: "hover:bg-pink-500/20",  hoverBorder: "hover:border-pink-500/40" },
};

export default function Page() {
  const [activeSection, setActiveSection] = useState("portada");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 76;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    QRCode.toDataURL("https://wa.me/524111158128", {
      width: 200,
      margin: 2,
      color: { dark: "#e4e4e7", light: "#06060800" },
    }).then(setQrDataUrl);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.scrollY + window.innerHeight / 3;
      const ids = navItems.map((n) => n.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= threshold) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const idx = navItems.findIndex((n) => n.id === activeSection);
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        if (idx < navItems.length - 1) scrollTo(navItems[idx + 1].id);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        if (idx > 0) scrollTo(navItems[idx - 1].id);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeSection, scrollTo]);

  const currentIdx = navItems.findIndex((n) => n.id === activeSection);
  const prevId = currentIdx > 0 ? navItems[currentIdx - 1].id : null;
  const nextId = currentIdx < navItems.length - 1 ? navItems[currentIdx + 1].id : null;

  return (
    <>
      {/* ======== SLIDE 1: PORTADA ======== */}
      <section id="portada" className="relative min-h-dvh flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-20 bg-glow-purple">
        <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
          <div className="animate-fade-in-up">
            <span className="section-badge bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
              <Sparkles size={14} />
              Presentacion de integracion
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-text-primary mb-3 animate-fade-in-up stagger-1 text-balance">
            Rodo Ramirez
          </h1>
          <div className="text-2xl sm:text-4xl font-light text-text-muted mb-3 animate-fade-in-up stagger-2">&times;</div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none gradient-text-purple mb-8 animate-fade-in-up stagger-3 text-balance">
            Neo Was
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto font-light animate-fade-in-up stagger-4 text-pretty">
            GLA &mdash; GrowLink Agency como brazo tecnologico de Neo Was.
            Desarrollo de aplicaciones web, sistemas interactivos e inteligencia artificial para PyMEs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 animate-fade-in-up stagger-5">
            <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-dot-pulse" />
              Scroll para continuar
            </div>
          </div>
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 h-px bg-purple-500/20" />
      </section>

      {/* ======== SLIDE 2: QUIEN SOY ======== */}
      <section id="quien-soy" className="relative min-h-dvh py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 pb-20 bg-glow-blue overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.04),transparent_60%)]" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-5">
              <User size={14} />
              Seccion 01
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-text-primary mb-3 text-balance">
              Quien soy
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto font-light">
              Ingeniero en Gestion Empresarial y fundador de GLA
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 max-w-3xl mx-auto">
            <div className="glass-card p-5 sm:p-6 animate-fade-in-up stagger-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <User size={18} className="text-blue-400" />
                </div>
                <span className="font-display font-semibold text-xs tracking-wider uppercase text-text-muted">Nombre</span>
              </div>
              <p className="text-text-primary text-lg sm:text-xl font-semibold">Rodolfo Primitivo Ramirez Lopez</p>
              <p className="text-text-muted text-sm mt-1">&ldquo;Rodo&rdquo;</p>
            </div>

            <div className="glass-card p-5 sm:p-6 animate-fade-in-up stagger-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <GraduationCap size={18} className="text-blue-400" />
                </div>
                <span className="font-display font-semibold text-xs tracking-wider uppercase text-text-muted">Formacion</span>
              </div>
              <p className="text-text-primary text-lg sm:text-xl font-semibold">Ingenieria en Gestion Empresarial</p>
              <p className="text-text-muted text-sm mt-1">UNICEBA</p>
            </div>

            <div className="glass-card p-5 sm:p-6 animate-fade-in-up stagger-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Briefcase size={18} className="text-blue-400" />
                </div>
                <span className="font-display font-semibold text-xs tracking-wider uppercase text-text-muted">Empresa</span>
              </div>
              <p className="text-text-primary text-lg sm:text-xl font-semibold">GLA &mdash; GrowLink Agency</p>
              <p className="text-text-muted text-sm mt-1">Fundador</p>
            </div>

            <div className="glass-card p-5 sm:p-6 animate-fade-in-up stagger-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <span className="font-display font-semibold text-xs tracking-wider uppercase text-text-muted">Contacto</span>
              </div>
              <p className="text-text-primary text-lg sm:text-xl font-semibold font-mono">+52 411 115 8128</p>
              <p className="text-text-muted text-sm mt-1">WhatsApp</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 h-px bg-blue-500/20" />
      </section>

      {/* ======== SLIDE 3: DE DONDE VENGO ======== */}
      <section id="de-donde" className="relative min-h-dvh py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 pb-20 bg-glow-green overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.04),transparent_60%)]" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-badge bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
              <MapPin size={14} />
              Seccion 02
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-text-primary mb-3 text-balance">
              De donde vengo
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto font-light">
              De la gestion empresarial a la tecnologia aplicada con IA
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-0">
            {[
              { year: "2020 - 2024", title: "Formacion IGE", desc: "Ingenieria en Gestion Empresarial en UNICEBA. Bases solidas en procesos administrativos, planeacion estrategica y gestion organizacional." },
              { year: "2024", title: "Primeros proyectos", desc: "Landings, sistemas de agendamiento y dashboards administrativos para negocios locales. De la teoria a la practica real." },
              { year: "2024 - 2025", title: "16 sistemas entregados", desc: "Proyectos en 6 sectores: salud, alimentos, retail, deportes, educacion y SaaS. Cada uno con soluciones a la medida." },
              { year: "2025 - Hoy", title: "GLA: IA + Automatizacion", desc: "Sistemas web con inteligencia artificial integrada. Chatbots WhatsApp, dashboards inteligentes, agentes autonomos y ERPs para PyMEs." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 animate-fade-in-up" style={{ animationDelay: `${0.12 * (i + 1)}s`, opacity: 0 }}>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                  {i < 3 && <div className="w-px h-full bg-emerald-500/20 mt-1" />}
                </div>
                <div className="pb-8">
                  <span className="font-mono text-xs text-emerald-400 tracking-wider">{item.year}</span>
                  <h3 className="font-display font-semibold text-base sm:text-lg text-text-primary mt-0.5">{item.title}</h3>
                  <p className="text-text-secondary text-sm mt-1 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 h-px bg-emerald-500/20" />
      </section>

      {/* ======== SLIDE 4: EXPERIENCIA ======== */}
      <section id="experiencia" className="relative min-h-dvh py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 pb-20 bg-glow-orange overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.04),transparent_60%)]" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-badge bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-5">
              <Briefcase size={14} />
              Seccion 03
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-text-primary mb-3 text-balance">
              Experiencia en negocios
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="font-mono text-3xl sm:text-4xl font-bold gradient-text-orange">16</span>
              <span className="text-text-secondary text-sm sm:text-base font-light">proyectos entregados en 6 sectores</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              { icon: Stethoscope, label: "Salud", count: "5", desc: "Odontologia, medicina, psicologia, veterinaria", color: "blue" },
              { icon: Utensils, label: "Alimentos", count: "3", desc: "Cafeteria, taqueria, menu digital", color: "orange" },
              { icon: ShoppingBag, label: "Retail", count: "1", desc: "Bisuteria artesanal, inventario BOM", color: "pink" },
              { icon: Dumbbell, label: "Deportes", count: "1", desc: "Ligas de basquetbol, stats", color: "green" },
              { icon: GraduationCap, label: "Educacion", count: "3", desc: "Cursos, examenes IA, plataformas", color: "purple" },
              { icon: Monitor, label: "SaaS", count: "3", desc: "Encuestas, asistentes IA, ERPs", color: "blue" },
            ].map((item, i) => (
              <div key={i} className={`glass-card p-4 sm:p-5 text-center animate-fade-in-up hover:scale-[1.02] hover:shadow-xl hover:border-${item.color}-500/40`} style={{ animationDelay: `${0.1 * (i + 1)}s`, opacity: 0 }}>
                <item.icon size={28} className="text-orange-400 mx-auto mb-3" />
                <p className="font-mono text-2xl sm:text-3xl font-bold text-text-primary">{item.count}</p>
                <p className="font-display font-semibold text-sm mt-1 text-text-primary">{item.label}</p>
                <p className="text-text-muted text-xs mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 h-px bg-orange-500/20" />
      </section>

      {/* ======== SLIDE 5: A QUE ME DEDICO ======== */}
      <section id="a-que-dedico" className="relative min-h-dvh py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 pb-20 bg-glow-purple overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.04),transparent_60%)]" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-badge bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-5">
              <Workflow size={14} />
              Seccion 04
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-text-primary mb-3 text-balance">
              Actualmente a que me dedico
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto font-light">
              GLA construye sistemas web con IA integrada para PyMEs que quieren operar con tecnologia de nivel empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 max-w-4xl mx-auto mb-8">
            {[
              { icon: Zap, title: "Chatbots WhatsApp IA", desc: "Agentes conversacionales autonomicos que atienden, venden y gestionan pedidos 24/7 via WhatsApp." },
              { icon: Monitor, title: "Dashboards administrativos", desc: "Paneles de control con KPIs, graficos en tiempo real, gestion de productos, clientes y pedidos." },
              { icon: ShoppingBag, title: "Menus digitales + Ecommerce", desc: "Catalogos interactivos con carrito, checkout y pago integrado via MercadoPago." },
              { icon: Workflow, title: "ERPs a la medida", desc: "Sistemas de gestion con inventario, BOM, control de stock, caducidad y reportes exportables." },
              { icon: Globe, title: "Landings interactivas", desc: "Sitios web modernos con agendamiento, formularios, mapas, testimonios y boton de WhatsApp." },
              { icon: GraduationCap, title: "Plataformas educativas", desc: "Cursos interactivos con generacion de contenido por IA, quizzes, rankings y gamificacion." },
            ].map((item, i) => (
              <div key={i} className="glass-card p-4 sm:p-5 animate-fade-in-up hover:scale-[1.02] hover:border-purple-500/40" style={{ animationDelay: `${0.1 * (i + 1)}s`, opacity: 0 }}>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-text-primary">{item.title}</h3>
                    <p className="text-text-muted text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-5 sm:p-6 max-w-3xl mx-auto animate-fade-in-up stagger-7">
            <p className="font-display font-semibold text-xs tracking-wider uppercase text-text-muted mb-3">Stack tecnologico</p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "SQLite", "OpenAI", "Baileys", "MercadoPago", "EasyPanel", "Netlify"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-full bg-obsidian-800 border border-obsidian-600/50 text-text-secondary text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 h-px bg-purple-500/20" />
      </section>

      {/* ======== SLIDE 6: CLIENTES ACTUALES ======== */}
      <section id="clientes" className="relative min-h-dvh py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 pb-20 bg-glow-blue overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.04),transparent_60%)]" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-5">
              <Building2 size={14} />
              Seccion 05
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-text-primary mb-3 text-balance">
              Clientes actuales
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto font-light">
              Negocios reales operando con sistemas GLA
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              { name: "Dra. Brenda", giro: "Odontologia", loc: "Celaya, Gto.", icon: Stethoscope },
              { name: "Dra. Carmelita", giro: "Medicina General", loc: "Apan, Hgo.", icon: Stethoscope },
              { name: "Central Vet", giro: "Veterinaria", loc: "Cortazar, Gto.", icon: Stethoscope },
              { name: "Bisuteria Luna", giro: "Retail artesanal", loc: "Salvatierra", icon: ShoppingBag },
              { name: "Cafeteria Luna", giro: "Cafeteria", loc: "--", icon: Utensils },
              { name: "Psic. Ana Maria", giro: "Psicologia", loc: "J. Rosas, Gto.", icon: Stethoscope },
              { name: "UNICEBA / Memo", giro: "Educacion", loc: "--", icon: GraduationCap },
              { name: "Tacos El Compa", giro: "Taqueria", loc: "Huichapan, Hgo.", icon: Utensils },
            ].map((client, i) => (
              <div key={i} className="glass-card p-4 sm:p-5 animate-fade-in-up hover:scale-[1.02] hover:border-blue-500/40" style={{ animationDelay: `${0.08 * (i + 1)}s`, opacity: 0 }}>
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
                  <client.icon size={14} className="text-blue-400" />
                </div>
                <p className="font-display font-semibold text-sm text-text-primary">{client.name}</p>
                <p className="text-text-muted text-xs mt-0.5">{client.giro}</p>
                <p className="text-text-muted text-xs mt-0.5 font-mono">{client.loc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 h-px bg-blue-500/20" />
      </section>

      {/* ======== SLIDE 7: PROSPECTOS ======== */}
      <section id="prospectos" className="relative min-h-dvh py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 pb-20 bg-glow-green overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.04),transparent_60%)]" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-badge bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
              <Rocket size={14} />
              Seccion 06
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-text-primary mb-3 text-balance">
              Prospectos y proyectos nuevos
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto font-light">
              Oportunidades en puerta para los proximos meses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            <div className="animate-fade-in-up stagger-1">
              <div className="flex items-center gap-2 mb-4">
                <User size={16} className="text-emerald-400" />
                <h3 className="font-display font-semibold text-sm tracking-wider uppercase text-text-secondary">Prospectos Personales</h3>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Abogado", loc: "Celaya, Gto.", desc: "Web interactiva + sistema de administracion" },
                  { name: "Psicologa", loc: "Juventino Rosas, Gto.", desc: "Web interactiva + sistema de administracion" },
                  { name: "Dentista", loc: "Cortazar, Gto.", desc: "Web interactiva + sistema de administracion" },
                  { name: "Clinica Dental", loc: "Cortazar, Gto.", desc: "Landing page" },
                  { name: "Veterinario (x2)", loc: "--", desc: "Web interactiva + sistema de administracion" },
                ].map((p, i) => (
                  <div key={i} className="glass-card p-3 sm:p-4 flex items-center gap-3 hover:scale-[1.01] hover:border-emerald-500/40 transition-all duration-300">
                    <Check size={14} className="text-emerald-400 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-sm text-text-primary truncate">{p.name}</p>
                      <p className="text-text-muted text-xs truncate">{p.loc} &middot; {p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up stagger-2">
              <div className="flex items-center gap-2 mb-4">
                <Building2 size={16} className="text-emerald-400" />
                <h3 className="font-display font-semibold text-sm tracking-wider uppercase text-text-secondary">En conjunto con Neo Was</h3>
              </div>
              <div className="glass-card p-5 sm:p-6 border-emerald-500/30 animate-glow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Star size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-lg text-text-primary">Lark Seeds</p>
                    <p className="text-text-muted text-xs">Empresa de Semillas</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Proyecto insignia conjunto entre GLA y Neo Was. Desarrollo de sistemas web y automatizacion para una empresa del sector agricola.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 h-px bg-emerald-500/20" />
      </section>

      {/* ======== SLIDE 8: PROYECTOS EN VIVO ======== */}
      <section id="proyectos" className="relative min-h-dvh py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 pb-20 bg-glow-pink overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.04),transparent_60%)]" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-badge bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-5">
              <Globe size={14} />
              Seccion 07
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-text-primary mb-3 text-balance">
              Ejemplos de mis proyectos
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto font-light">
              Sistemas en vivo &mdash; da clic en cualquiera para explorarlo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              { label: "Be-Dental", desc: "Clinica dental", url: "https://onda-be-dental.laeji7.easypanel.host/portal", accent: "blue" },
              { label: "Bisuteria Luna", desc: "ERP inventario", url: "https://onda-luna-bis.laeji7.easypanel.host/admin", accent: "pink" },
              { label: "Central Vet", desc: "Veterinaria", url: "https://gowlink-agency-test-gla-vet.laeji7.easypanel.host/portal", accent: "green" },
              { label: "Dra. Carmelita", desc: "Medico general", url: "https://dra-carmelita.netlify.app/", accent: "blue" },
              { label: "Encuestas Luna", desc: "Satisfaccion IA", url: "https://gowlink-agency-test-gla-encuestas.laeji7.easypanel.host/dashboard", accent: "orange" },
              { label: "Cafeteria Luna", desc: "Menu + WhatsApp IA", url: "https://gowlink-agency-test-luna.laeji7.easypanel.host/menu", accent: "orange" },
              { label: "Huitzie Psicologia", desc: "Agendamiento", url: "https://gla-psic.netlify.app/portal", accent: "green" },
              { label: "PA Trivia Game", desc: "Juego educativo", url: "https://pa-trivia-game-s4.netlify.app/", accent: "purple" },
              { label: "Tacos El Compa", desc: "Menu digital", url: "https://tacos-el-compa-oficial.netlify.app/", accent: "orange" },
            ].map((proj, i) => (
              <a
                key={i}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 sm:p-5 block animate-fade-in-up hover:scale-[1.03] hover:border-pink-500/40 group cursor-pointer no-underline"
                style={{ animationDelay: `${0.07 * (i + 1)}s`, opacity: 0 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-display font-semibold text-sm text-text-primary group-hover:text-pink-400 transition-colors">{proj.label}</p>
                  <ExternalLink size={14} className="text-text-muted group-hover:text-pink-400 transition-colors" />
                </div>
                <p className="text-text-muted text-xs">{proj.desc}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 h-px bg-pink-500/20" />
      </section>

      {/* ======== SLIDE 9: MIS LIMITES ======== */}
      <section id="limites" className="relative min-h-dvh py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 pb-20 bg-glow-red overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.04),transparent_60%)]" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-badge bg-red-500/10 text-red-400 border border-red-500/20 mb-5">
              <Infinity size={14} />
              Seccion 08
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-text-primary mb-3 text-balance">
              Mis limites
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto font-light">
              Spoiler: casi no hay
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <div className="glass-card p-6 sm:p-8 text-center border-red-500/30 animate-fade-in-up stagger-1">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5">
                <Infinity size={32} className="text-red-400" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-3">
                Sin limites tecnicos
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                Gracias a la inteligencia artificial, practicamente cualquier sistema es desarrollable.
                Si se puede imaginar, se puede construir.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="glass-card p-5 sm:p-6 animate-fade-in-up stagger-2 hover:border-red-500/40">
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-sm text-text-primary">Tiempo</h4>
                    <p className="text-text-muted text-xs mt-1 leading-relaxed">
                      El unico recurso finito. La planificacion de sprints y entregas define el ritmo de desarrollo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass-card p-5 sm:p-6 animate-fade-in-up stagger-3 hover:border-red-500/40">
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-sm text-text-primary">Disponibilidad</h4>
                    <p className="text-text-muted text-xs mt-1 leading-relaxed">
                      Capacidad maxima recomendada: multiples proyectos simultaneos con entregas escalonadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-text-muted text-sm font-light animate-fade-in-up stagger-4">
              Mas alla de eso, no hay limites. La tecnologia actual permite materializar cualquier idea de negocio en un sistema funcional.
            </p>
          </div>
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 h-px bg-red-500/20" />
      </section>

      {/* ======== SLIDE 10: METAS EN NEO WAS ======== */}
      <section id="metas" className="relative min-h-dvh py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 pb-20 bg-glow-purple overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.04),transparent_60%)]" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-badge bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-5">
              <Target size={14} />
              Seccion 09
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-text-primary mb-3 text-balance">
              Metas y objetivos en Neo Was
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto font-light">
              Lo que quiero lograr mes a mes en esta nueva etapa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
            {[
              { count: "2", label: "Proyectos con Neo Was", desc: "Desarrollo de sistemas web, apps y automatizaciones para clientes de la agencia.", icon: Building2, accent: "purple" },
              { count: "1", label: "Curso presencial empresa", desc: "Capacitacion en gestion empresarial e IA para equipos de trabajo en formato presencial.", icon: Briefcase, accent: "blue" },
              { count: "1", label: "Curso virtual", desc: "Formacion online sobre IA aplicada a negocios, alcanzando audiencia sin limite geografico.", icon: Monitor, accent: "green" },
              { count: "2", label: "Proyectos MKT Digital", desc: "A traves de GLA en conjunto con Neo Was. Sinerxia entre Marketing Digital y tecnologia.", icon: Rocket, accent: "orange" },
            ].map((meta, i) => (
              <div key={i} className="glass-card p-5 sm:p-6 animate-fade-in-up hover:scale-[1.02] hover:border-purple-500/40" style={{ animationDelay: `${0.12 * (i + 1)}s`, opacity: 0 }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-${meta.accent}-500/10 border border-${meta.accent}-500/20 flex items-center justify-center`}>
                    <meta.icon size={20} className={`text-${meta.accent}-400`} />
                  </div>
                  <span className={`font-mono text-3xl font-bold gradient-text-${meta.accent}`}>{meta.count}</span>
                </div>
                <h3 className="font-display font-semibold text-sm text-text-primary mb-1">{meta.label}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{meta.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center animate-fade-in-up stagger-5">
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3">
              <span className="font-mono text-2xl font-bold gradient-text-purple">6</span>
              <span className="text-text-secondary text-sm font-light">proyectos totales al mes</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 h-px bg-purple-500/20" />
      </section>

      {/* ======== SLIDE 11: CIERRE ======== */}
      <section id="cierre" className="relative min-h-dvh py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 pb-20 bg-glow-blue overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.04),transparent_60%)]" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-5">
              <Handshake size={14} />
              Seccion 10
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-text-primary mb-3 text-balance">
              Hablemos
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto font-light">
              Estoy listo para construir el futuro tecnologico de Neo Was
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 max-w-3xl mx-auto">
            <div className="animate-fade-in-up stagger-1">
              {qrDataUrl ? (
                <div className="glass-card p-3 sm:p-4 inline-block">
                  <img src={qrDataUrl} alt="QR WhatsApp" className="w-36 h-36 sm:w-44 sm:h-44" />
                </div>
              ) : (
                <div className="w-36 h-36 sm:w-44 sm:h-44 glass-card animate-pulse" />
              )}
              <p className="text-text-muted text-xs text-center mt-3 font-mono">Escanea para contactarme</p>
            </div>

            <div className="space-y-4 animate-fade-in-up stagger-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Phone size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-text-muted text-xs">WhatsApp</p>
                  <p className="font-mono text-sm text-text-primary">+52 411 115 8128</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Code2 size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-text-muted text-xs">GitHub</p>
                  <p className="font-mono text-sm text-text-primary">rodorl3gh</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Camera size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-text-muted text-xs">Instagram</p>
                  <p className="font-mono text-sm text-text-primary">@growlinkagency</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 text-center animate-fade-in-up stagger-3">
            <div className="glass-card inline-block px-8 py-4 border-blue-500/20">
              <p className="font-display font-semibold text-base sm:text-lg text-text-primary italic">
                &ldquo;Consistencia sobre intensidad. Un paso decidido a la vez.&rdquo;
              </p>
              <p className="text-text-muted text-xs mt-2 font-mono">&mdash; GLA</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 h-px bg-blue-500/20" />
      </section>

      {/* ======== BOTTOM NAVIGATION ======== */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-obsidian-950/95 backdrop-blur-xl border-t border-obsidian-600/50 px-1 sm:px-2 py-2">
        <div className="max-w-6xl mx-auto flex items-center gap-0.5 sm:gap-1 overflow-x-auto scrollbar-none">
          <button
            onClick={() => prevId && scrollTo(prevId)}
            disabled={!prevId}
            className="shrink-0 p-1.5 rounded-xl text-obsidian-400 hover:text-text-secondary hover:bg-obsidian-800/50 transition-all duration-300 disabled:opacity-30 disabled:cursor-default"
            aria-label="Anterior"
          >
            <ChevronLeft size={16} />
          </button>

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const styles = accentStyles[item.accent];
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`shrink-0 flex flex-col items-center gap-0.5 px-2 sm:px-3 py-1.5 rounded-xl transition-all duration-300 min-w-[48px] ${
                  isActive
                    ? `${styles.bg} ${styles.text}`
                    : "text-obsidian-400 hover:text-text-secondary hover:bg-obsidian-800/50"
                }`}
              >
                <item.icon size={14} />
                <span className="text-[10px] font-medium leading-none hidden sm:block">{item.label}</span>
                {isActive && (
                  <div className={`w-1 h-1 rounded-full ${styles.dot} animate-dot-pulse sm:hidden`} />
                )}
              </button>
            );
          })}

          <button
            onClick={() => nextId && scrollTo(nextId)}
            disabled={!nextId}
            className="shrink-0 p-1.5 rounded-xl text-obsidian-400 hover:text-text-secondary hover:bg-obsidian-800/50 transition-all duration-300 disabled:opacity-30 disabled:cursor-default"
            aria-label="Siguiente"
          >
            <ChevronRight size={16} />
          </button>

          <span className="ml-auto font-mono text-xs text-text-muted shrink-0">
            {currentIdx + 1}/{navItems.length}
          </span>
        </div>
      </nav>
    </>
  );
}
