/**
 * INTEGRATED PAGE COMPONENT
 * 
 * Combines HomeScreen hero with all sections below it.
 * Maintains the futuristic premium design aesthetic throughout.
 * Navigation is handled by the PremiumNavbar overlay.
 */

import useScrollReveal from '../hooks/useScrollReveal'
import PremiumNavbar from './PremiumNavbar'
import HomeScreen from './HomeScreen'

// New components (just created)
import Achievements from './Achievements'
// import Testimonials from './Testimonials'
// import Events from './Events'
// import Careers from './Careers'
// import Community from './Community'
// import Contact from './Contact'
// import Footer from './Footer'

/**
 * IntegratedPage Component
 * 
 * Structure:
 * 1. PremiumNavbar (fixed overlay)
 * 2. HomeScreen (hero section - preserved exactly as is)
 * 3. Additional sections with consistent design
 */
export default function IntegratedPage() {
  // Use existing scroll reveal hook for animations
  useScrollReveal()

  return (
    <>
      {/* Premium Navigation Overlay */}
      <PremiumNavbar />

      {/* ═════════════════════════════════════════════════════════ */}
      {/* HERO SECTION - Main Homepage (Preserved as is) */}
      {/* ═════════════════════════════════════════════════════════ */}
      <section id="home">
        <HomeScreen />
      </section>

      <div
        style={{
            position: "relative",
            zIndex: 10,
            background: "transparent",
        }}
        >

      {/* ═════════════════════════════════════════════════════════ */}
      {/* ADDITIONAL SECTIONS - Organized & Styled */}
      {/* ═════════════════════════════════════════════════════════ */}

      {/* ACHIEVEMENTS / IMPACT SECTION */}
      <section id="about" style={{ scrollMarginTop: '80px' }}>
        <Achievements />
      </section>
    {/* SERVICES */}
    <section
    id="services"
    style={{
        position: "relative",
        zIndex: 10,
        padding: "120px 24px",
        color: "white",
    }}
    >
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span style={{
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            fontSize: "12px"
        }}>
            Services
        </span>

        <h2 style={{
            fontSize: "clamp(42px,6vw,72px)",
            fontWeight: 300,
            marginTop: "20px",
        }}>
            What We Offer
        </h2>
        </div>

        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "24px",
        }}>
        {[
            "AI Training",
            "Healthcare Education",
            "Clinical Tools",
            "Digital Consulting",
            "Global Collaboration",
            "Innovation Strategy",
        ].map((item) => (
            <div
            key={item}
            style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "24px",
                padding: "32px",
                backdropFilter: "blur(18px)",
            }}
            >
            <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>
                {item}
            </h3>

            <p style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
            }}>
                Modern solutions designed for scalable healthcare learning and innovation.
            </p>
            </div>
        ))}
        </div>
    </div>
    </section>

    {/* EVENTS */}
    <section
    id="events"
    style={{
        position: "relative",
        zIndex: 10,
        padding: "120px 24px",
        color: "white",
    }}
    >
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span style={{
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            fontSize: "12px"
        }}>
            Events
        </span>

        <h2 style={{
            fontSize: "clamp(42px,6vw,72px)",
            fontWeight: 300,
            marginTop: "20px",
        }}>
            Workshops & Conferences
        </h2>
        </div>

        <div style={{
        display: "grid",
        gap: "24px",
        }}>
        {[1,2,3].map((item) => (
            <div
            key={item}
            style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "24px",
                padding: "32px",
                backdropFilter: "blur(18px)",
            }}
            >
            <h3 style={{ fontSize: "26px", marginBottom: "12px" }}>
                Future of Digital Healthcare
            </h3>

            <p style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
            }}>
                Interactive learning experiences focused on AI, informatics, and healthcare innovation.
            </p>
            </div>
        ))}
        </div>
    </div>
    </section>

    {/* CAREERS */}
    <section
    id="careers"
    style={{
        position: "relative",
        zIndex: 10,
        padding: "120px 24px 160px",
        color: "white",
    }}
    >
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span style={{
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            fontSize: "12px"
        }}>
            Careers
        </span>

        <h2 style={{
            fontSize: "clamp(42px,6vw,72px)",
            fontWeight: 300,
            marginTop: "20px",
        }}>
            Join Our Team
        </h2>
        </div>

        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "24px",
        }}>
        {[
            "Frontend Developer",
            "AI Research Intern",
            "Healthcare Consultant",
        ].map((role) => (
            <div
            key={role}
            style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "24px",
                padding: "32px",
                backdropFilter: "blur(18px)",
            }}
            >
            <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>
                {role}
            </h3>

            <p style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
            }}>
                Work on impactful technology shaping the future of healthcare education.
            </p>
            </div>
        ))}
        </div>
    </div>
    {/* COMMUNITY */}
    <section
    id="community"
    style={{
        position: "relative",
        zIndex: 10,
        padding: "120px 24px",
        color: "white",
    }}
    >
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span
            style={{
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            fontSize: "12px",
            }}
        >
            Community
        </span>

        <h2
            style={{
            fontSize: "clamp(42px,6vw,72px)",
            fontWeight: 300,
            marginTop: "20px",
            }}
        >
            Growing Together
        </h2>

        <p
            style={{
            color: "rgba(255,255,255,0.7)",
            maxWidth: "700px",
            margin: "20px auto 0",
            lineHeight: 1.7,
            }}
        >
            A vibrant ecosystem of educators, innovators, developers, and healthcare professionals collaborating globally.
        </p>
        </div>

        <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
        }}
        >
        {[
            "Global Network",
            "Student Communities",
            "Innovation Labs",
        ].map((item) => (
            <div
            key={item}
            style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "24px",
                padding: "32px",
                backdropFilter: "blur(18px)",
            }}
            >
            <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>
                {item}
            </h3>

            <p
                style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                }}
            >
                Empowering collaboration and meaningful connections across healthcare and technology.
            </p>
            </div>
        ))}
        </div>
    </div>
    </section>

    {/* CONTACT */}
    <section
    id="contact"
    style={{
        position: "relative",
        zIndex: 10,
        padding: "120px 24px 160px",
        color: "white",
    }}
    >
    <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <span
        style={{
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            fontSize: "12px",
        }}
        >
        Contact
        </span>

        <h2
        style={{
            fontSize: "clamp(42px,6vw,72px)",
            fontWeight: 300,
            marginTop: "20px",
            marginBottom: "24px",
        }}
        >
        Let’s Build The Future
        </h2>

        <p
        style={{
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.8,
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto 50px",
        }}
        >
        Interested in collaboration, partnerships, or learning opportunities?
        Reach out and let’s create meaningful impact together.
        </p>

        <div
        style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "32px",
            padding: "48px",
            backdropFilter: "blur(18px)",
        }}
        >
        <div style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
            Email
            </h3>

            <p style={{ color: "rgba(255,255,255,0.7)" }}>
            contact@luminaryhealth.ai
            </p>
        </div>

        <div style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
            Phone
            </h3>

            <p style={{ color: "rgba(255,255,255,0.7)" }}>
            +91 98765 43210
            </p>
        </div>

        <div>
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
            Location
            </h3>

            <p style={{ color: "rgba(255,255,255,0.7)" }}>
            Hyderabad, India
            </p>
        </div>
        </div>
    </div>
    </section>
    </section>
    </div>
    </>
  )
}
