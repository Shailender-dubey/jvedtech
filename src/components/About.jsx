import SectionHeader from './ui/SectionHeader'

const PILLARS = [
  {
    num: '01',
    title: 'Innovation',
    description:
      'Pioneering digital tools and AI solutions that transform how healthcare is taught, delivered, and experienced.',
  },
  {
    num: '02',
    title: 'Leadership',
    description:
      'Building confident healthcare leaders through mentorship, strategic programs, and global collaboration.',
  },
  {
    num: '03',
    title: 'Compassion',
    description:
      'Every initiative is rooted in empathy — ensuring technology serves patients and practitioners alike.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding section-light relative">
      <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-40" />
      <div className="section-container relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <div className="reveal">
            <SectionHeader
              label="About Us"
              title="Where Compassion Meets Technology"
              description="JV EdTech Medovation is a Mumbai-based health and human services company dedicated to redefining global healthcare learning."
            />
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              We combine clinical expertise with cutting-edge informatics to create
              accessible, patient-centered solutions for India and beyond. Led by
              Dr. Jyoti Dongre Rao, our mission empowers healthcare professionals to
              thrive in a rapidly evolving digital landscape.
            </p>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-brand-600/10 pt-8">
              <div>
                <p className="font-display text-3xl font-bold text-brand-500">AI</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-dim">First approach</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-brand-800">India</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-dim">Rooted locally</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-brand-800">Global</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-dim">Impact scale</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {PILLARS.map((pillar, i) => (
              <article
                key={pillar.title}
                className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-2xl border border-brand-600/10 bg-white p-7 shadow-sm transition duration-500 hover:border-brand-400/40 hover:shadow-lg hover:shadow-brand-300/20`}
              >
                <div className="card-shine pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span className="font-display text-xs font-semibold tracking-widest text-brand-500">
                      {pillar.num}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold text-brand-800">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {pillar.description}
                    </p>
                  </div>
                  <span className="font-display text-4xl font-bold text-brand-100 transition group-hover:text-brand-200">
                    {pillar.num}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
