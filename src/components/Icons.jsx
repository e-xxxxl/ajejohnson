/* Small inline SVG set. All decorative unless a parent labels them. */

const base = { 'aria-hidden': true, focusable: false }

export function GithubIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function XIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

export function HeartIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21.2 10.6 20C5.4 15.3 2 12.2 2 8.4 2 5.3 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.900 3 16.600 3 19.600 3 22 5.300 22 8.400c0 3.800-3.400 6.900-8.600 11.600L12 21.200Z" />
    </svg>
  )
}

export function StarIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="m12 2 2.9 6.6 7.1.7-5.4 4.7 1.6 7L12 17.300 5.800 21l1.600-7L2 9.300l7.100-.7L12 2Z" />
    </svg>
  )
}

export function GridIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="3" y="3" width="8" height="8" />
      <rect x="13" y="3" width="8" height="8" />
      <rect x="3" y="13" width="8" height="8" />
      <rect x="13" y="13" width="8" height="8" />
    </svg>
  )
}

export function PersonIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="7.500" r="4.500" />
      <path d="M3 22c0-5 4-8 9-8s9 3 9 8H3Z" />
    </svg>
  )
}

export function DiamondIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="m12 1 11 11-11 11L1 12 12 1Z" />
    </svg>
  )
}

export function ArrowUpRight({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg
      {...base}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.600"
      strokeLinecap="square"
      className={className}
    >
      <path d="M6 18 18 6M8 6h10v10" />
    </svg>
  )
}

/* Four-point spark used in folder tabs */
export function Spark({ className = 'h-3 w-3' }) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c.8 6.400 5.600 11.200 12 12-6.400.8-11.200 5.600-12 12-.8-6.400-5.600-11.200-12-12C6.400 11.200 11.200 6.400 12 0Z" />
    </svg>
  )
}

/* Flat "sticker" art, drawn rather than emoji */
export function TargetSticker({ className = 'h-[0.9em] w-[0.9em]' }) {
  return (
    <svg {...base} viewBox="0 0 40 40" className={className}>
      <circle cx="20" cy="20" r="18" fill="#2fb463" stroke="#151515" strokeWidth="3" />
      <circle cx="20" cy="20" r="11" fill="#fbfaf6" stroke="#151515" strokeWidth="3" />
      <circle cx="20" cy="20" r="5" fill="#ff5c93" stroke="#151515" strokeWidth="3" />
    </svg>
  )
}

export function FlowerSticker({ className = 'h-[0.9em] w-[0.9em]' }) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <svg {...base} viewBox="0 0 40 40" className={className}>
      {petals.map((deg) => (
        <ellipse
          key={deg}
          cx="20"
          cy="9.500"
          rx="4.500"
          ry="7"
          fill="#ff5c93"
          stroke="#151515"
          strokeWidth="2"
          transform={`rotate(${deg} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="5" fill="#f2c23e" stroke="#151515" strokeWidth="2" />
    </svg>
  )
}

/* Little hand-drawn arrow for annotations. `dir` rotates it. */
export function ScribbleArrow({ className = 'h-8 w-8', style }) {
  return (
    <svg
      {...base}
      viewBox="0 0 48 48"
      fill="none"
      stroke="#151515"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path d="M6 40C10 24 22 12 40 8" />
      <path d="M30 6l11 2-5 10" />
    </svg>
  )
}
