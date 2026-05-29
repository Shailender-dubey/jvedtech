import { IconDroplet } from './icons/ServiceIcons'

const FOOTER_LINKS = [
  {
    title: 'Navigate',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Initiatives',
    links: [
      { label: 'Medi AI Informatics', href: '#initiatives' },
      { label: 'Healthcare Education', href: '#services' },
      { label: 'AI Training', href: '#services' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="section-dark border-t border-white/10 pt-16 pb-8">
      <div className="section-container">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-wider text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-300/30 bg-brand-300/10 text-brand-300">
                <IconDroplet className="h-3.5 w-2.5" animated />
              </span>
              JV<span className="text-brand-300">EDTECH</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Where compassion meets technology — redefining global healthcare learning.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-300/80">
                {group.title}
              </p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/65 transition hover:text-brand-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-300/80">
              Connect
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li>
                <a href="mailto:jvedtech@gmail.com" className="transition hover:text-brand-300">
                  jvedtech@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918655607721" className="transition hover:text-brand-300">
                  +91 86556 07721
                </a>
              </li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="glow-line mt-14 h-px w-full opacity-80" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} JV EdTech Medovation. All rights reserved.</p>
          <p className="uppercase tracking-[0.25em] text-brand-300/70">
            Compassion · Technology · Innovation
          </p>
        </div>
      </div>
    </footer>
  )
}
