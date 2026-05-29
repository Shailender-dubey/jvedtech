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
    <section
        style={{
          position: "relative",
          zIndex: 10,
          padding: "120px 24px",
          background: "transparent",
        }}
      >
      <div className="section-container">
        <div className="mb-4 flex items-center gap-3">
         <span className="inline-block w-12 h-px bg-gradient-to-r from-brand-300 to-transparent" />
         <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                Services
          </span>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10`}
              >
                <div className="card-shine pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" />

                <div className="relative">
                  <AnimatedIconBox animation={service.animation}>
                    <Icon />
                  </AnimatedIconBox>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-white/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more

                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6h8M7 3l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
