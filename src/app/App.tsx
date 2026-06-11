import { useState } from "react";
import {
  Search,
  BookOpen,
  Users,
  TrendingUp,
  Home,
  Award,
  MessageSquare,
  ChevronRight,
  Star,
  Instagram,
  Facebook,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Download,
  Calendar,
  CheckCircle,
  Target,
  Handshake,
  BarChart2,
  Megaphone,
  Briefcase,
} from "lucide-react";

/* MARKER-MAKE-KIT-INVOKED */

const HERO_IMG =
  "https://images.unsplash.com/photo-1758518729685-f88df7890776?w=1400&h=900&fit=crop&auto=format";
const FOUNDER_IMG =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&auto=format";
const BUILDING_IMG =
  "https://images.unsplash.com/photo-1682371788488-5eb951ade7db?w=800&h=600&fit=crop&auto=format";

const GOLD = "#C9A227";
const GOLD_LIGHT = "#f5e9b8";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // Coloca o teu PDF na pasta public/ do projeto com o nome "ebook.pdf"
  // e este link funcionará automaticamente para todos os visitantes.
  const EBOOK_URL = "https://drive.google.com/uc?export=download&id=1zEtRQRmX5_D0oN56_Ku5pQfWpqifMIAJ";

  // Formspree: cria conta gratuita em formspree.io e substitui "YOUR_FORM_ID"
  // pelo ID do teu formulário (ex: "xpwzabcd") para receberes os leads por email.
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqkrakv";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          _subject: "Novo lead — eBook Portugal Real Estate School",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        window.open(EBOOK_URL, "_blank");
      } else {
        setFormError("Ocorreu um erro. Tenta novamente ou contacta-nos diretamente.");
      }
    } catch {
      // Formspree não configurado ainda — mostra sucesso na demo
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToEbook = () => {
    document.getElementById("ebook-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm"
        style={{ borderBottom: `1px solid rgba(201,162,39,0.2)` }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-sm flex items-center justify-center"
              style={{ background: GOLD }}
            >
              <Home size={16} color="#fff" />
            </div>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                letterSpacing: "-0.01em",
                color: "#0a0a0a",
              }}
            >
              Portugal Real Estate School
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Sobre", href: "#sobre" },
              { label: "Formações", href: "#formacoes" },
              { label: "Blog", href: "#blog" },
              { label: "Contacto", href: "#contacto" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontWeight: 500 }}
              >
                {label}
              </a>
            ))}
            <a
              href="https://calendly.com/paulovgs3/nova-reuniao"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm rounded-sm text-white transition-all hover:opacity-90"
              style={{ background: GOLD, fontWeight: 600 }}
            >
              Agendar Conversa
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Sobre", href: "#sobre" },
              { label: "Formações", href: "#formacoes" },
              { label: "Blog", href: "#blog" },
              { label: "Contacto", href: "#contacto" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="https://calendly.com/paulovgs3/nova-reuniao"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm rounded-sm text-white w-full text-center block"
              style={{ background: GOLD, fontWeight: 600 }}
            >
              Agendar Conversa
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="inicio" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.72)" }} />
        {/* Gold accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: GOLD }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs mb-6"
              style={{
                background: "rgba(201,162,39,0.15)",
                border: `1px solid rgba(201,162,39,0.4)`,
                color: GOLD,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <Award size={12} />
              Formação Imobiliária Premium
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                lineHeight: 1.1,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Forma Consultores de{" "}
              <span style={{ color: GOLD }}>Alta Performance</span>
            </h1>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.75)", maxWidth: 480 }}
            >
              Aprende com profissionais do mercado imobiliário português e
              desenvolve as competências necessárias para gerar mais negócios,
              captar mais clientes e aumentar os teus resultados.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToEbook}
                className="flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                style={{ background: GOLD, color: "#fff" }}
              >
                <Download size={16} />
                Descarregar eBook Gratuito
              </button>
              <a
                href="https://calendly.com/paulovgs3/nova-reuniao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold border transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#fff" }}
              >
                <Calendar size={16} />
                Agendar Conversa Gratuita
              </a>
            </div>
          </div>

          {/* Hero stat card */}
          <div className="hidden md:flex justify-end">
            <div
              className="rounded-sm p-8 max-w-xs w-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(201,162,39,0.3)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-6"
                style={{ color: GOLD, fontWeight: 600 }}
              >
                Resultados Comprovados
              </p>
              {[
                { n: "+300", label: "Leads Geradas" },
                { n: "100%", label: "Formação Online" },
                { n: "1:1", label: "Acompanhamento" },
              ].map((s) => (
                <div key={s.n} className="mb-5 last:mb-0">
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "2rem",
                      color: GOLD,
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {s.label}
                  </div>
                  <div
                    className="mt-2 h-px"
                    style={{ background: "rgba(201,162,39,0.2)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10" style={{ background: "rgba(201,162,39,0.5)" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        className="py-12"
        style={{ background: "#0a0a0a" }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "+300", label: "Leads Geradas" },
            { value: "100%", label: "Formação Online" },
            { value: "1:1", label: "Acompanhamento Especializado" },
            { value: "PT", label: "Conteúdo Adaptado ao Mercado Português" },
          ].map((s) => (
            <div key={s.value} className="text-center">
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "2.25rem",
                  color: GOLD,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div className="text-xs mt-2 leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOBRE NÓS ── */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-sm"
              style={{ border: `2px solid ${GOLD}`, zIndex: 0 }}
            />
            <img
              src={FOUNDER_IMG}
              alt="Fundador e Formador da Portugal Real Estate School"
              className="relative z-10 w-full rounded-sm object-cover"
              style={{ maxHeight: 520 }}
            />
            <div
              className="absolute -bottom-5 -right-5 z-20 px-5 py-4 rounded-sm"
              style={{ background: GOLD }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                10+
              </div>
              <div className="text-xs text-white/80 mt-0.5">Anos de experiência</div>
            </div>
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3 font-semibold"
              style={{ color: GOLD }}
            >
              Sobre Nós
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.15,
                color: "#0a0a0a",
                marginBottom: "1.5rem",
              }}
            >
              O que é a Portugal Real Estate School?
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4a4a4a" }}>
              A Portugal Real Estate School é uma plataforma de formação
              imobiliária criada para desenvolver profissionais através de
              conhecimento prático, estratégias de prospeção, qualificação,
              negociação e crescimento profissional sustentável.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#4a4a4a" }}>
              Acreditamos que o sucesso no imobiliário não depende apenas de
              trabalhar mais, mas de trabalhar melhor — com método, estratégia
              e orientação especializada adaptada ao mercado português.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Formação 100% prática e aplicada",
                "Conteúdo exclusivo para o mercado português",
                "Acompanhamento personalizado",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: GOLD, flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "#0a0a0a", fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── O QUE VAS APRENDER ── */}
      <section className="py-24" style={{ background: "#f7f4ef" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-3"
              style={{ color: GOLD }}
            >
              Currículo
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#0a0a0a",
                lineHeight: 1.15,
              }}
            >
              O Que Vais Aprender
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: Search,
                title: "Prospeção",
                desc: "Aprende a gerar oportunidades de negócio de forma consistente.",
              },
              {
                Icon: Target,
                title: "Qualificação",
                desc: "Descobre como identificar clientes com verdadeiro potencial.",
              },
              {
                Icon: Home,
                title: "Angariação",
                desc: "Métodos para conquistar mais imóveis e ampliar o teu portefólio.",
              },
              {
                Icon: Handshake,
                title: "Negociação",
                desc: "Técnicas para aumentar a taxa de fecho e maximizar resultados.",
              },
              {
                Icon: Megaphone,
                title: "Marketing Imobiliário",
                desc: "Como atrair clientes e criar autoridade no mercado.",
              },
              {
                Icon: BarChart2,
                title: "Gestão de Carreira",
                desc: "Estratégias para crescer de forma sustentável no setor.",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group p-7 rounded-sm bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-5 transition-colors"
                  style={{ background: GOLD_LIGHT }}
                >
                  <Icon size={20} style={{ color: GOLD }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    color: "#0a0a0a",
                    marginBottom: "0.5rem",
                  }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b6b6b" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EBOOK ── */}
      <section id="ebook-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* eBook mock */}
          <div className="flex justify-center">
            <div
              className="relative w-64 h-80 rounded-sm flex flex-col items-center justify-center text-white shadow-2xl"
              style={{
                background: `linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)`,
                border: `3px solid ${GOLD}`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: GOLD }}
              />
              <BookOpen size={48} style={{ color: GOLD, marginBottom: "1rem" }} />
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  textAlign: "center",
                  lineHeight: 1.3,
                  color: "#fff",
                  padding: "0 1.5rem",
                }}
              >
                Guia Gratuito para Começar no Imobiliário
              </p>
              <div
                className="mt-4 px-4 py-1 rounded-sm text-xs font-semibold"
                style={{ background: GOLD, color: "#fff" }}
              >
                GRÁTIS
              </div>
              <p
                className="absolute bottom-4 text-xs"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Portugal Real Estate School
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-3"
              style={{ color: GOLD }}
            >
              Oferta Gratuita
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#0a0a0a",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Guia Gratuito para Começar no Imobiliário
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#6b6b6b" }}>
              Descarrega gratuitamente o guia que já ajudou centenas de pessoas
              a compreender melhor a profissão imobiliária e a dar os primeiros
              passos com confiança.
            </p>

            {submitted ? (
              <div
                className="flex flex-col gap-4 px-6 py-5 rounded-sm"
                style={{ background: GOLD_LIGHT, border: `1px solid ${GOLD}` }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle size={22} style={{ color: GOLD }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0a0a0a" }}>
                      Obrigado! O teu eBook está a abrir.
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#6b6b6b" }}>
                      Se não abriu automaticamente, clica no botão abaixo.
                    </p>
                  </div>
                </div>
                <a
                  href={EBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-5 rounded-sm text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: GOLD }}
                >
                  <Download size={15} />
                  Descarregar eBook
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { id: "nome", label: "Nome", type: "text", placeholder: "O teu nome completo" },
                  { id: "email", label: "Email", type: "email", placeholder: "o.teu@email.com" },
                  { id: "telefone", label: "Telefone", type: "tel", placeholder: "+351 9XX XXX XXX" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: "#0a0a0a" }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      required
                      value={(formData as Record<string, string>)[id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [id]: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all"
                      style={{
                        background: "#f7f4ef",
                        border: "1px solid rgba(0,0,0,0.1)",
                        color: "#0a0a0a",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = GOLD)
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")
                      }
                    />
                  </div>
                ))}
                {formError && (
                  <p className="text-xs text-red-600 -mt-1">{formError}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-sm text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: GOLD }}
                >
                  <Download size={16} />
                  {submitting ? "A enviar..." : "Quero Receber o eBook"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── CURSOS ── */}
      <section id="formacoes" className="py-24" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-3"
              style={{ color: GOLD }}
            >
              Formações
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#ffffff",
                lineHeight: 1.15,
              }}
            >
              Cursos e Formações
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "Iniciante",
                title: "Iniciação ao Imobiliário",
                desc: "Para quem está a começar. Aprende os fundamentos da profissão e como dar os primeiros passos.",
                features: ["Fundamentos legais", "Prospeção inicial", "Perfil do cliente"],
                price: "Consultar",
                highlight: false,
              },
              {
                tag: "Popular",
                title: "Consultor de Alta Performance",
                desc: "Para quem quer aumentar resultados. Estratégias avançadas de angariação, negociação e fecho.",
                features: ["Negociação avançada", "Marketing digital", "Gestão de pipeline"],
                price: "Consultar",
                highlight: true,
              },
              {
                tag: "Premium",
                title: "Programa de Acompanhamento",
                desc: "Mentoria personalizada com sessões 1:1 para acelerar o teu crescimento profissional.",
                features: ["Sessões 1:1 mensais", "Plano personalizado", "Suporte contínuo"],
                price: "Consultar",
                highlight: false,
              },
            ].map((course) => (
              <div
                key={course.title}
                className="p-8 rounded-sm flex flex-col relative overflow-hidden"
                style={{
                  background: course.highlight ? GOLD : "rgba(255,255,255,0.04)",
                  border: course.highlight ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {course.highlight && (
                  <div
                    className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-sm"
                    style={{ background: "#0a0a0a", color: GOLD }}
                  >
                    MAIS POPULAR
                  </div>
                )}
                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: course.highlight ? "rgba(255,255,255,0.7)" : GOLD }}
                >
                  {course.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: course.highlight ? "#0a0a0a" : "#ffffff",
                    marginBottom: "0.75rem",
                  }}
                >
                  {course.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: course.highlight ? "rgba(10,10,10,0.7)" : "rgba(255,255,255,0.55)" }}
                >
                  {course.desc}
                </p>
                <ul className="flex flex-col gap-2 mb-8 flex-1">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle
                        size={15}
                        style={{ color: course.highlight ? "#0a0a0a" : GOLD, flexShrink: 0 }}
                      />
                      <span style={{ color: course.highlight ? "#0a0a0a" : "rgba(255,255,255,0.7)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className="flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-sm transition-all hover:opacity-90"
                  style={{
                    background: course.highlight ? "#0a0a0a" : "rgba(201,162,39,0.15)",
                    color: course.highlight ? GOLD : GOLD,
                    border: course.highlight ? "none" : `1px solid rgba(201,162,39,0.3)`,
                  }}
                >
                  Saber Mais <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTEMUNHOS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-3"
              style={{ color: GOLD }}
            >
              Testemunhos
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#0a0a0a",
                lineHeight: 1.15,
              }}
            >
              O Que Dizem os Nossos Alunos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ana Ferreira",
                role: "Consultora Imobiliária, Lisboa",
                text: "Passei de não saber como captar clientes para fechar os meus primeiros negócios. A formação mudou completamente a minha abordagem.",
                stars: 5,
              },
              {
                name: "Ricardo Mendes",
                role: "Agente Imobiliário, Porto",
                text: "O programa de acompanhamento foi transformador. Aprendi estratégias concretas que aplico todos os dias com resultados reais.",
                stars: 5,
              },
              {
                name: "Mariana Costa",
                role: "Iniciante no Imobiliário",
                text: "Entrei sem qualquer experiência e saí preparada para enfrentar o mercado. O conteúdo é prático e adaptado à realidade portuguesa.",
                stars: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-sm"
                style={{ background: "#f7f4ef", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} fill={GOLD} color={GOLD} />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "#3a3a3a", fontStyle: "italic" }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: GOLD }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0a0a0a" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "#6b6b6b" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="py-24" style={{ background: "#f7f4ef" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-3"
                style={{ color: GOLD }}
              >
                Blog
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#0a0a0a",
                  lineHeight: 1.15,
                }}
              >
                Últimos Artigos
              </h2>
            </div>
            <button
              className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70"
              style={{ color: GOLD }}
            >
              Ver Todos <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                cat: "Carreira",
                title: "Como Começar no Imobiliário em Portugal",
                date: "5 Jun 2026",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=220&fit=crop&auto=format",
              },
              {
                cat: "Erros",
                title: "Os 5 Erros Mais Comuns dos Consultores Iniciantes",
                date: "28 Mai 2026",
                img: "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=400&h=220&fit=crop&auto=format",
              },
              {
                cat: "Prospeção",
                title: "Como Conseguir Clientes Qualificados no Imobiliário",
                date: "20 Mai 2026",
                img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=220&fit=crop&auto=format",
              },
              {
                cat: "Negociação",
                title: "Técnicas de Negociação para Fechar Mais Negócios",
                date: "12 Mai 2026",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=220&fit=crop&auto=format",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-sm overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                <div className="overflow-hidden h-36 bg-muted">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: GOLD }}
                  >
                    {post.cat}
                  </span>
                  <h4
                    className="mt-2 text-sm leading-snug"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                      color: "#0a0a0a",
                    }}
                  >
                    {post.title}
                  </h4>
                  <p className="text-xs mt-3" style={{ color: "#9b9b9b" }}>
                    {post.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "#0a0a0a" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${BUILDING_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-4"
            style={{ color: GOLD }}
          >
            Próximo Passo
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            O Próximo Passo na Tua Carreira{" "}
            <span style={{ color: GOLD }}>Começa Hoje</span>
          </h2>
          <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto 2.5rem" }}>
            O sucesso no imobiliário não depende apenas de trabalhar mais, mas de
            trabalhar melhor — com métodos e estratégias comprovadas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={scrollToEbook}
              className="flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: GOLD, color: "#fff" }}
            >
              <Download size={16} />
              Descarregar eBook
            </button>
            <a
              href="https://calendly.com/paulovgs3/nova-reuniao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold border transition-all hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}
            >
              <Calendar size={16} />
              Agendar Conversa
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contacto" className="py-14 bg-white" style={{ borderTop: `1px solid rgba(0,0,0,0.06)` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-7 h-7 rounded-sm flex items-center justify-center"
                  style={{ background: GOLD }}
                >
                  <Home size={14} color="#fff" />
                </div>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#0a0a0a",
                  }}
                >
                  Portugal Real Estate School
                </span>
              </div>
              <p className="text-xs leading-relaxed mb-5" style={{ color: "#6b6b6b" }}>
                Formação imobiliária premium adaptada ao mercado português.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/portugalrealstateschool.pt/" },
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576499287467&locale=pt_PT" },
                ].map(({ Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-sm flex items-center justify-center transition-colors hover:opacity-70"
                    style={{ background: "#f7f4ef" }}
                  >
                    <Icon size={15} color={GOLD} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#0a0a0a" }}>
                Empresa
              </p>
              {["Sobre Nós", "Formações", "Blog", "Contactos"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block text-sm mb-2 transition-colors hover:opacity-70"
                  style={{ color: "#6b6b6b" }}
                >
                  {l}
                </a>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#0a0a0a" }}>
                Formações
              </p>
              {[
                "Iniciação ao Imobiliário",
                "Consultor de Alta Performance",
                "Programa de Acompanhamento",
              ].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block text-sm mb-2 transition-colors hover:opacity-70"
                  style={{ color: "#6b6b6b" }}
                >
                  {l}
                </a>
              ))}
            </div>

            {/* Contacto */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#0a0a0a" }}>
                Contacto
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:info@portugalrealestateschool.com"
                  className="flex items-start gap-2 text-sm transition-colors hover:opacity-70"
                  style={{ color: "#6b6b6b" }}
                >
                  <Mail size={14} style={{ color: GOLD, marginTop: 2, flexShrink: 0 }} />
                  info@portugalrealestateschool.com
                </a>
                <a
                  href="tel:+351925617809"
                  className="flex items-center gap-2 text-sm transition-colors hover:opacity-70"
                  style={{ color: "#6b6b6b" }}
                >
                  <Phone size={14} style={{ color: GOLD, flexShrink: 0 }} />
                  +351 925 617 809
                </a>
              </div>
            </div>
          </div>

          <div
            className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
            style={{ borderTop: "1px solid rgba(0,0,0,0.06)", color: "#9b9b9b" }}
          >
            <span>© 2026 Portugal Real Estate School. Todos os direitos reservados.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:opacity-70 transition-opacity">Política de Privacidade</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Termos e Condições</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
