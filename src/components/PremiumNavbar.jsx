import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home', smooth: true },
  { label: 'About', href: '#about', smooth: true },
  { label: 'Services', href: '#services', smooth: true },
  { label: 'Events', href: '#events', smooth: true },
  { label: 'Careers', href: '#careers', smooth: true },
  { label: 'Community', href: '#community', smooth: true },
  { label: 'Contact', href: '#contact', smooth: true },
]

export default function PremiumNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ['home', 'about', 'services', 'events', 'careers', 'community', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(4px)',
          background: isScrolled
            ? 'rgba(15, 35, 25, 0.85)'
            : 'rgba(15, 35, 25, 0.4)',
          borderBottom: isScrolled ? '1px solid rgba(78, 205, 196, 0.2)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: isScrolled ? '12px 32px' : '20px 32px',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{
              fontSize: '18px',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #4ecdc4, #88d8b0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #4ecdc4, #88d8b0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              JV
            </span>
            JVEDTECH
          </a>

          {/* Desktop Menu */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              '@media (max-width: 768px)': {
                display: 'none',
              },
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: activeSection === link.href.replace('#', '') ? '#4ecdc4' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 500,
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background:
                    activeSection === link.href.replace('#', '')
                      ? 'rgba(78, 205, 196, 0.15)'
                      : 'transparent',
                  borderBottom:
                    activeSection === link.href.replace('#', '')
                      ? '2px solid #4ecdc4'
                      : '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4ecdc4'
                  e.currentTarget.style.background = 'rgba(78, 205, 196, 0.1)'
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.replace('#', '')) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              background: 'rgba(78, 205, 196, 0.2)',
              border: '1px solid rgba(78, 205, 196, 0.4)',
              color: '#4ecdc4',
              padding: '8px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '18px',
              '@media (max-width: 768px)': {
                display: 'block',
              },
            }}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            background: 'rgba(15, 35, 25, 0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(78, 205, 196, 0.2)',
            zIndex: 999,
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: activeSection === link.href.replace('#', '') ? '#4ecdc4' : 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                padding: '12px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background:
                  activeSection === link.href.replace('#', '')
                    ? 'rgba(78, 205, 196, 0.15)'
                    : 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(78, 205, 196, 0.1)'
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.href.replace('#', '')) {
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          [style*="display: flex"] {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
