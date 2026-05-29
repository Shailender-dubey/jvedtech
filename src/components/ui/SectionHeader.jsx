export default function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className = '',
  dark = false,
}) {
  const alignClass = align === 'center' ? 'mx-auto text-center max-w-2xl' : 'max-w-2xl'
  const labelColor = dark ? 'text-brand-300' : 'text-brand-500'
  const lineColor = dark ? 'bg-brand-300/60' : 'bg-brand-400/80'
  const titleColor = dark ? 'text-white' : 'text-brand-800'
  const descColor = dark ? 'text-white/75' : 'text-muted'

  return (
    <div className={`${alignClass} ${className}`}>
      <div className="mb-5 flex items-center gap-3">
        <span className={`h-px w-8 ${lineColor}`} />
        <p className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${labelColor}`}>
          {label}
        </p>
      </div>
      <h2
        className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>
      )}
    </div>
  )
}
