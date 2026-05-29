import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function DropletIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 2C16 2 4 18 4 28C4 35.732 9.268 42 16 42C22.732 42 28 35.732 28 28C28 18 16 2 16 2Z"
        fill="white"
      />
    </svg>
  )
}

export default function Preloader({ onComplete }) {
  const rootRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      gsap.set('.preloader-droplet', { y: -72, opacity: 0, scale: 0.6 })
      gsap.set('.preloader-line', { scaleX: 0, opacity: 0 })
      gsap.set('.preloader-ripple', { scale: 0, opacity: 0 })
      gsap.set('.preloader-stage', { opacity: 1 })

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = ''
          onComplete?.()
        },
      })

      tl.to('.preloader-line', {
        opacity: 1,
        scaleX: 1,
        duration: 1.1,
        ease: 'power3.inOut',
      }, 0.2)
        .to('.preloader-droplet', {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        }, 0.35)
        .to('.preloader-droplet', {
          y: 0,
          duration: 0.85,
          ease: 'power2.in',
        }, 0.55)
        .to('.preloader-droplet', {
          y: 6,
          duration: 0.12,
          ease: 'power1.in',
        }, 1.4)
        .to('.preloader-droplet', {
          y: 0,
          duration: 0.45,
          ease: 'bounce.out',
        }, 1.52)
        .to('.preloader-ripple', {
          scale: 1.8,
          opacity: 0.55,
          duration: 0.55,
          ease: 'power2.out',
        }, 1.45)
        .to('.preloader-ripple', {
          scale: 2.6,
          opacity: 0,
          duration: 0.65,
          ease: 'power2.in',
        }, 1.75)
        .to('.preloader-line', {
          scaleX: 1.15,
          duration: 0.25,
          ease: 'power2.out',
        }, 1.42)
        .to('.preloader-line', {
          scaleX: 1,
          duration: 0.4,
          ease: 'power2.inOut',
        }, 1.67)
        .to({}, { duration: 0.5 })
        .to('.preloader-stage', {
          scale: 1.08,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.in',
        }, 2.85)
        .to(rootRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.inOut',
        }, 3.2)
    }, rootRef)

    return () => {
      ctx.revert()
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div
      ref={rootRef}
      className="preloader-root fixed inset-0 z-[9999] flex items-center justify-center bg-brand-900"
      aria-label="Loading"
      role="status"
    >
      <div className="preloader-stage relative flex flex-col items-center">
        <div className="preloader-droplet relative z-10 mb-3">
          <DropletIcon className="h-9 w-7 sm:h-11 sm:w-8" />
        </div>

        <div
          className="preloader-ripple pointer-events-none absolute left-1/2 top-[calc(100%-2px)] h-8 w-8 -translate-x-1/2 rounded-full border border-brand-300/50"
          aria-hidden
        />

        <div
          className="preloader-line h-px w-[min(38vw,220px)] bg-brand-300 sm:w-[min(36vw,280px)]"
          style={{ transformOrigin: 'center center' }}
        />
      </div>
    </div>
  )
}
