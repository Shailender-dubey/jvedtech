import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = ["WATCH DEMO", "EXPLORE COURSES", "MY DASHBOARD"];

const COURSES = [
  { title: "AI & Machine Learning", level: "Intermediate", duration: "8 weeks", color: "#4ecdc4" },
  { title: "Data Science Fundamentals", level: "Beginner", duration: "6 weeks", color: "#88d8b0" },
  { title: "Deep Learning Specialization", level: "Advanced", duration: "12 weeks", color: "#45b7d1" },
  { title: "Python for AI", level: "Beginner", duration: "4 weeks", color: "#96c93d" },
  { title: "Natural Language Processing", level: "Advanced", duration: "10 weeks", color: "#6bcfb8" },
  { title: "Computer Vision", level: "Intermediate", duration: "8 weeks", color: "#a8e6cf" },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function VideoModal({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Demo video"
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.25s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "rgba(20,40,30,0.95)", borderRadius: "20px",
          padding: "32px", maxWidth: "520px", width: "100%",
          border: "1px solid rgba(255,255,255,0.15)",
          animation: "slideUp 0.3s ease",
          textAlign: "center",
        }}
      >
        <div style={{
          width: "72px", height: "72px", borderRadius: "50%",
          background: "rgba(78,205,196,0.2)", border: "2px solid #4ecdc4",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 20px", cursor: "pointer",
          fontSize: "28px",
        }}>▶</div>
        <h2 style={{ color: "#fff", margin: "0 0 10px", fontWeight: 300, fontSize: "24px" }}>
          Luminary in Action
        </h2>
        <p style={{ color: "rgba(255,255,255,0.6)", margin: "0 0 24px", fontSize: "14px", lineHeight: 1.6 }}>
          See how our AI adapts to your learning style in real time — personalizing curriculum, tracking progress, and surfacing insights that help you grow faster.
        </p>
        <button
          onClick={onClose}
          style={{
            padding: "10px 28px", borderRadius: "999px",
            background: "rgba(255,255,255,0.1)", color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)", cursor: "pointer",
            fontSize: "13px", letterSpacing: "0.05em",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function CoursesPanel({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Explore courses"
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.25s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "rgba(15,35,25,0.97)", borderRadius: "20px",
          padding: "32px", maxWidth: "640px", width: "100%",
          border: "1px solid rgba(255,255,255,0.12)",
          animation: "slideUp 0.3s ease",
          maxHeight: "80vh", overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ color: "#fff", margin: 0, fontWeight: 300, fontSize: "22px" }}>Explore Courses</h2>
          <button onClick={onClose} aria-label="Close courses panel" style={{
            background: "none", border: "none", color: "rgba(255,255,255,0.5)",
            fontSize: "20px", cursor: "pointer", padding: "4px 8px",
          }}>✕</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {COURSES.map((course) => (
            <button
              key={course.title}
              aria-label={`${course.title} — ${course.level}, ${course.duration}`}
              style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px", padding: "18px", textAlign: "left", cursor: "pointer",
                transition: "background 0.2s, border-color 0.2s", color: "#fff",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = course.color; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: course.color, marginBottom: "10px" }} />
              <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>{course.title}</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>{course.level} · {course.duration}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardPanel({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const stats = [
    { label: "Courses Enrolled", value: "3" },
    { label: "Hours Learned", value: "24.5" },
    { label: "Streak", value: "7 days" },
    { label: "Completion", value: "68%" },
  ];

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="My Dashboard"
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.25s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "rgba(15,35,25,0.97)", borderRadius: "20px",
          padding: "32px", maxWidth: "520px", width: "100%",
          border: "1px solid rgba(255,255,255,0.12)",
          animation: "slideUp 0.3s ease",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div>
            <h2 style={{ color: "#fff", margin: "0 0 4px", fontWeight: 300, fontSize: "22px" }}>My Dashboard</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", margin: 0, fontSize: "13px" }}>Welcome back, learner 👋</p>
          </div>
          <button onClick={onClose} aria-label="Close dashboard" style={{
            background: "none", border: "none", color: "rgba(255,255,255,0.5)",
            fontSize: "20px", cursor: "pointer", padding: "4px 8px",
          }}>✕</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
          {stats.map(s => (
            <div key={s.label} style={{
              background: "rgba(255,255,255,0.06)", borderRadius: "14px",
              padding: "16px", border: "1px solid rgba(255,255,255,0.08)",
            }}>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#4ecdc4", marginBottom: "4px" }}>{s.value}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "14px", padding: "18px", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "10px", letterSpacing: "0.06em" }}>CURRENT COURSE</div>
          <div style={{ fontSize: "14px", color: "#fff", fontWeight: 600, marginBottom: "8px" }}>AI & Machine Learning</div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "999px", height: "6px", overflow: "hidden" }}>
            <div style={{ width: "68%", height: "100%", background: "linear-gradient(90deg, #4ecdc4, #88d8b0)", borderRadius: "999px" }} />
          </div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "6px" }}>68% complete</div>
        </div>
      </div>
    </div>
  );
}

export default function LuminaryHero() {
  const [mounted, setMounted] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  const [modal, setModal] = useState(null); // "demo" | "courses" | "dashboard" | null
  const [headingRef, headingInView] = useInView(0.1);
  const [subRef, subInView] = useInView(0.1);
  const [badgeRef, badgeInView] = useInView(0.1);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const openNav = (i) => {
    setActiveNav(i);
    if (i === 0) setModal("demo");
    else if (i === 1) setModal("courses");
    else if (i === 2) setModal("dashboard");
  };

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", minHeight: "100vh", position: "relative", overflow: "hidden" }}>

      {/* Animated gradient background */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "linear-gradient(135deg, #a8e6cf, #88d8b0, #6bcfb8, #4ecdc4, #45b7d1, #96c93d, #a8e6cf)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 8s ease infinite",
      }} />

      {/* Blobs */}
      <div style={{ position: "fixed", inset: 0, zIndex: 1, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(180,230,160,0.5) 0%, transparent 70%)", top: "-20%", left: "-10%", animation: "blobFloat1 12s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(120,200,200,0.45) 0%, transparent 70%)", bottom: "-10%", right: "-5%", animation: "blobFloat2 15s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: "35vw", height: "35vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(90,180,140,0.35) 0%, transparent 70%)", top: "30%", right: "20%", animation: "blobFloat3 10s ease-in-out infinite" }} />
      </div>

      {/* Noise texture */}
      <div style={{ position: "fixed", inset: 0, zIndex: 2, opacity: 0.04, pointerEvents: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "200px 200px" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

        {/* Nav */}
        <nav aria-label="Main navigation" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 48px", flexWrap: "wrap", gap: "12px" }}>
          <div role="tablist" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item}
                role="tab"
                aria-selected={activeNav === i}
                aria-label={item.charAt(0) + item.slice(1).toLowerCase()}
                onClick={() => openNav(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") openNav((i + 1) % NAV_ITEMS.length);
                  if (e.key === "ArrowLeft") openNav((i - 1 + NAV_ITEMS.length) % NAV_ITEMS.length);
                }}
                style={{
                  padding: "10px 22px", borderRadius: "999px",
                  border: "1.5px solid rgba(255,255,255,0.55)",
                  background: activeNav === i ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.08)",
                  color: "#fff", fontSize: "11px", letterSpacing: "0.12em",
                  fontWeight: 600, cursor: "pointer", backdropFilter: "blur(12px)",
                  textTransform: "uppercase",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(-12px)",
                  transition: `opacity 0.5s ease ${i * 0.08 + 0.1}s, transform 0.5s ease ${i * 0.08 + 0.1}s, background 0.2s ease, box-shadow 0.2s ease`,
                  boxShadow: activeNav === i ? "0 0 0 2px rgba(255,255,255,0.3)" : "none",
                }}
                onMouseEnter={e => { if (activeNav !== i) e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
                onMouseLeave={e => { if (activeNav !== i) e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              >
                {item}
              </button>
            ))}
          </div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", letterSpacing: "0.05em", opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.5s" }}>
            More info at{" "}
            <a href="https://luminary.ai/learn" target="_blank" rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.9)", textDecoration: "underline" }}
              aria-label="More info at luminary.ai/learn (opens in new tab)"
            >
              luminary.ai/learn
            </a>
          </div>
        </nav>

        {/* Hero */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 32px 80px" }}>

          {/* Badge */}
          <div ref={badgeRef} role="status" aria-label="AI Learning Platform" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "8px 20px", borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)", color: "rgba(255,255,255,0.9)",
            fontSize: "13px", letterSpacing: "0.06em", marginBottom: "32px",
            opacity: badgeInView && mounted ? 1 : 0,
            transform: badgeInView && mounted ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
          }}>
            AI Learning Platform
          </div>

          {/* Heading */}
          <div ref={headingRef} style={{ overflow: "hidden", marginBottom: "28px" }}>
            <h1 style={{
              margin: 0, fontSize: "clamp(52px, 10vw, 110px)",
              fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff",
              opacity: headingInView && mounted ? 1 : 0,
              transform: headingInView && mounted ? "translateY(0)" : "translateY(60px)",
              transition: "opacity 3s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 3s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}>
              Learn Smarter
            </h1>
          </div>

          {/* Subtitle */}
          <div ref={subRef} style={{ maxWidth: "560px" }}>
            <p style={{
              margin: "0 0 8px", fontSize: "15px", lineHeight: 1.7,
              color: "rgba(255,255,255,0.72)", letterSpacing: "0.01em",
              opacity: subInView && mounted ? 1 : 0,
              transform: subInView && mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 3s cubic-bezier(0.16, 1, 0.3, 1) 0.9s, transform 3s cubic-bezier(0.16, 1, 0.3, 1) 0.9s",
            }}>
              Discover a smarter way to learn. Luminary is built on{" "}
              <span style={{ textDecoration: "underline", color: "rgba(255,255,255,0.9)" }}>adaptive AI curriculum</span>.
            </p>
            <p style={{
              margin: 0, fontSize: "15px", lineHeight: 1.7,
              color: "rgba(255,255,255,0.72)", letterSpacing: "0.01em",
              opacity: subInView && mounted ? 1 : 0,
              transform: subInView && mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 3s cubic-bezier(0.16, 1, 0.3, 1) 1.3s, transform 3s cubic-bezier(0.16, 1, 0.3, 1) 1.3s",
            }}>
              We make world-class education feel personal — without the classroom.
            </p>
          </div>

          {/* CTA buttons */}
          <div style={{
            marginTop: "48px", display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 3s ease 1.6s, transform 3s ease 1.6s",
          }}>
            <button
              aria-label="Get started for free"
              onClick={() => setModal("courses")}
              style={{
                padding: "14px 36px", borderRadius: "999px",
                background: "rgba(255,255,255,0.95)", color: "#1a3a2a",
                border: "none", fontSize: "14px", fontWeight: 700,
                cursor: "pointer", letterSpacing: "0.04em",
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.12)"; }}
              onFocus={e => { e.currentTarget.style.outline = "3px solid rgba(255,255,255,0.7)"; e.currentTarget.style.outlineOffset = "3px"; }}
              onBlur={e => { e.currentTarget.style.outline = "none"; }}
            >
              Get Started Free
            </button>
            <button
              aria-label="Watch demo video"
              onClick={() => setModal("demo")}
              style={{
                padding: "14px 36px", borderRadius: "999px",
                background: "transparent", color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.55)",
                fontSize: "14px", fontWeight: 600,
                cursor: "pointer", letterSpacing: "0.04em",
                backdropFilter: "blur(10px)",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              onFocus={e => { e.currentTarget.style.outline = "3px solid rgba(255,255,255,0.7)"; e.currentTarget.style.outlineOffset = "3px"; }}
              onBlur={e => { e.currentTarget.style.outline = "none"; }}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {modal === "demo" && <VideoModal onClose={() => setModal(null)} />}
      {modal === "courses" && <CoursesPanel onClose={() => setModal(null)} />}
      {modal === "dashboard" && <DashboardPanel onClose={() => setModal(null)} />}

      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes blobFloat1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          33%       { transform: translate(3%,5%) scale(1.05); }
          66%       { transform: translate(-2%,3%) scale(0.97); }
        }
        @keyframes blobFloat2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          33%       { transform: translate(-4%,-3%) scale(1.07); }
          66%       { transform: translate(2%,-5%) scale(0.96); }
        }
        @keyframes blobFloat3 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%       { transform: translate(-3%,4%) scale(1.08); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        button:focus-visible {
          outline: 3px solid rgba(255,255,255,0.7);
          outline-offset: 3px;
        }
      `}</style>
    </div>
  );
}
