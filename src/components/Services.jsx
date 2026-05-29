import SectionHeader from './ui/SectionHeader'
import AnimatedIconBox from './ui/AnimatedIconBox'
import {
  IconEducation,
  IconAI,
  IconChart,
  IconMegaphone,
  IconGlobe,
  IconBulb,
} from './icons/ServiceIcons'

const SERVICES = [
  {
    icon: IconEducation,
    animation: 'education',
    title: 'Healthcare Education',
    description:
      'Digital learning programs, workshops, and certifications designed for modern clinical practice.',
  },
  {
    icon: IconAI,
    animation: 'ai',
    title: 'AI Training & Informatics',
    description:
      'Hands-on AI literacy for healthcare teams — from clinical decision support to data-driven care.',
  },
  {
    icon: IconChart,
    animation: 'chart',
    title: 'Clinical Decision Tools',
    description:
      'Evidence-based digital resources that improve diagnosis, treatment planning, and patient outcomes.',
  },
  {
    icon: IconMegaphone,
    animation: 'megaphone',
    title: 'Strategic Marketing',
    description:
      'Brand strategy and outreach for healthcare organizations entering the digital-first era.',
  },
  {
    icon: IconGlobe,
    animation: 'globe',
    title: 'Global Collaboration',
    description:
      'Partnerships and networks connecting innovators, educators, and practitioners worldwide.',
  },
  {
    icon: IconBulb,
    animation: 'bulb',
    title: 'Digital Health Consulting',
    description:
      'End-to-end guidance on digital transformation, compliance, and sustainable health tech adoption.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding section-muted">
      <div className="section-container">
        <div className="reveal">
          <SectionHeader
            label="What We Do"
            title="Services That Drive Healthcare Forward"
            description="Comprehensive solutions spanning education, technology, and strategy — tailored for evolving healthcare ecosystems."
            align="center"
            className="mx-auto"
          />
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-brand-600/10 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-xl hover:shadow-brand-300/25`}
              >
                <div className="card-shine pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" />
                <div className="relative">
                  <AnimatedIconBox animation={service.animation}>
                    <Icon />
                  </AnimatedIconBox>
                  <h3 className="mt-5 font-display text-lg font-semibold text-brand-800">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
