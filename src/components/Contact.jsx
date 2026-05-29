import { useState } from 'react'
import SectionHeader from './ui/SectionHeader'
import Button from './ui/Button'

const CONTACT = [
  {
    label: 'Email',
    value: 'jvedtech@gmail.com',
    href: 'mailto:jvedtech@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91 86556 07721',
    href: 'tel:+918655607721',
  },
  {
    label: 'Location',
    value: 'Mumbai, Maharashtra, India',
  },
  {
    label: 'Website',
    value: 'www.jvedtech.com',
    href: 'https://jvedtech.com',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="section-padding section-muted border-t border-brand-600/10">
      <div className="section-container">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <SectionHeader
              label="Contact"
              title="Let's Build the Future of Healthcare Together"
              description="Reach out for partnerships, training programs, or to learn more about Medi AI Informatics."
            />

            <ul className="mt-12 space-y-6">
              {CONTACT.map((item) => (
                <li key={item.label} className="group">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-dim">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="mt-1.5 block text-base text-brand-800 transition hover:text-brand-500"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1.5 text-base text-brand-800">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-delay-2">
            <form
              className="glass-strong rounded-2xl p-8 sm:p-10"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              {sent ? (
                <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-400/50 bg-brand-50 text-brand-600">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-brand-800">Message sent</h3>
                  <p className="mt-2 max-w-xs text-sm text-muted">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-semibold text-brand-800">Send a message</h3>
                  <p className="mt-2 text-sm text-muted">We typically respond within 24–48 hours.</p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-muted-dim">
                        Name
                      </span>
                      <input
                        required
                        type="text"
                        className="w-full rounded-xl border border-brand-600/15 bg-brand-50/50 px-4 py-3.5 text-sm text-brand-900 outline-none transition placeholder:text-brand-700/35 focus:border-brand-400 focus:ring-2 focus:ring-brand-300/40"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-muted-dim">
                        Email
                      </span>
                      <input
                        required
                        type="email"
                        className="w-full rounded-xl border border-brand-600/15 bg-brand-50/50 px-4 py-3.5 text-sm text-brand-900 outline-none transition placeholder:text-brand-700/35 focus:border-brand-400 focus:ring-2 focus:ring-brand-300/40"
                        placeholder="you@email.com"
                      />
                    </label>
                  </div>

                  <label className="mt-5 block">
                    <span className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-muted-dim">
                      Message
                    </span>
                    <textarea
                      required
                      rows={4}
                      className="w-full resize-none rounded-xl border border-brand-600/15 bg-brand-50/50 px-4 py-3.5 text-sm text-brand-900 outline-none transition placeholder:text-brand-700/35 focus:border-brand-400 focus:ring-2 focus:ring-brand-300/40"
                      placeholder="How can we help?"
                    />
                  </label>

                  <Button type="submit" className="mt-8 w-full">
                    Send Message
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
