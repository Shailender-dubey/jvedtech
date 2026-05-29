import { useEffect, useRef } from 'react'

export default function AnimatedIconBox({ animation = 'default', children, className = '' }) {
  const boxRef = useRef(null)

  useEffect(() => {
    const node = boxRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-animated')
        }
      },
      { threshold: 0.35, rootMargin: '0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={boxRef}
      className={`icon-box icon-box--${animation} relative flex h-12 w-12 items-center justify-center rounded-xl border border-brand-300/50 bg-brand-50 text-brand-700 transition duration-500 group-hover:border-brand-400 group-hover:bg-brand-100 group-hover:shadow-md group-hover:shadow-brand-300/30 ${className}`}
    >
      <span className="icon-box__ring pointer-events-none absolute inset-0 rounded-xl" aria-hidden />
      <span className={`icon-anim icon-anim--${animation} relative z-10 flex items-center justify-center`}>
        {children}
      </span>
    </div>
  )
}
