import { useRef, useEffect, useState } from 'react'

const SAMPLE_EVENTS = [
  {
    id: 1,
    title: 'Healthcare AI & Machine Learning Workshop',
    date: '2025-06-15',
    time: '10:00 AM – 1:00 PM',
    location: 'Mumbai, India',
    status: 'upcoming',
    description: 'Learn how AI is transforming healthcare delivery, diagnostics, and patient care management.',
    attendees: 45,
  },
  {
    id: 2,
    title: 'Clinical Training Excellence Seminar',
    date: '2025-07-01',
    time: '2:00 PM – 5:00 PM',
    location: 'Online — MS Teams',
    status: 'upcoming',
    description: 'Explore best practices in clinical staff training and professional development strategies.',
    attendees: 62,
  },
  {
    id: 3,
    title: 'Digital Health Leadership Summit',
    date: '2025-05-20',
    time: '9:00 AM – 3:00 PM',
    location: 'Online — Hybrid',
    status: 'upcoming',
    description: 'Network with healthcare leaders and explore the future of digital health innovation.',
    attendees: 120,
  },
  {
    id: 4,
    title: 'Telemedicine Integration Bootcamp',
    date: '2025-05-10',
    time: '11:00 AM – 2:00 PM',
    location: 'Mumbai',
    status: 'past',
    description: 'A forward-looking seminar examining digital transformation in healthcare delivery.',
    attendees: 38,
  },
]

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true)
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function EventCard({ event, delay }) {
  const [ref, inView] = useInView()

  const eventDate = new Date(event.date)
  const day = eventDate.getDate()
  const month = eventDate.toLocaleString('en-US', { month: 'short' }).toUpperCase()

  const statusStyles = {
    upcoming: 'bg-brand-50 text-brand-600 border-brand-200',
    live: 'bg-amber-50 text-amber-700 border-amber-200 animate-pulse',
    past: 'bg-gray-100 text-gray-600 border-gray-200',
  }

  return (
    <div
      ref={ref}
      className="group"
      style={{
        animation: inView ? `fadeUp 0.6s ease-out ${delay}s both` : 'none',
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-brand-400/20 h-full">
        {/* Header with Date Badge */}
        <div className="relative p-6 border-b border-brand-600/10">
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-brand-100 to-brand-50 rounded-lg flex flex-col items-center justify-center">
            <div className="text-xs font-semibold text-brand-400 uppercase">{month}</div>
            <div className="text-2xl font-bold text-brand-700">{day}</div>
          </div>

          <div className="flex gap-2 mb-3 pr-20">
            <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded border ${statusStyles[event.status]}`}>
              {event.status === 'upcoming' ? 'Upcoming' : event.status === 'live' ? 'LIVE' : 'Past'}
            </span>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground-muted bg-surface-elevated rounded border border-brand-600/10">
              {event.time.split('–')[0].trim()}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-brand-900 pr-20">
            {event.title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            {event.description}
          </p>

          {/* Meta Info */}
          <div className="space-y-3 mb-6 pt-4 border-t border-brand-600/10">
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-brand-700 font-medium">{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-brand-700 font-medium">{event.attendees} interested</span>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full px-4 py-2 bg-brand-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-brand-600 hover:shadow-md hover:shadow-brand-500/30">
            Register Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Events() {
  const [filter, setFilter] = useState('all')
  const filteredEvents = filter === 'all' 
    ? SAMPLE_EVENTS 
    : SAMPLE_EVENTS.filter(e => e.status === filter)

  return (
    <section className="section-light py-28 sm:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500 block mb-3">
            Learning & Networking
          </span>
          <h2 className="text-4xl sm:text-5xl font-light font-display text-brand-900 mb-4 leading-tight">
            Upcoming Events
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Join our webinars, workshops, and summits to stay updated on the latest trends in healthcare education and AI-driven innovation.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-brand-500 text-white'
                : 'border border-brand-200 text-brand-700 hover:bg-brand-50'
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'upcoming'
                ? 'bg-brand-500 text-white'
                : 'border border-brand-200 text-brand-700 hover:bg-brand-50'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'past'
                ? 'bg-brand-500 text-white'
                : 'border border-brand-200 text-brand-700 hover:bg-brand-50'
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} delay={index * 0.1} />
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <div className="text-4xl mb-4">📋</div>
              <p className="text-foreground-muted">No events found for this filter.</p>
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 pt-16 border-t border-brand-600/10">
          <div className="bg-gradient-to-r from-brand-50 to-brand-100/50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-light font-display text-brand-900 mb-3">
              Don't miss upcoming events
            </h3>
            <p className="text-foreground-muted mb-6 max-w-md mx-auto">
              Subscribe to our newsletter to receive invitations to all future workshops and webinars.
            </p>
            <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-400 focus:outline-none text-sm"
              />
              <button className="px-6 py-2 bg-brand-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-brand-600 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
