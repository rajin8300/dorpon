import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function IconArrowLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  )
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  )
}

export function IconArrowUp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}

export function IconMapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M6.2 3.5h3l1.5 4-2 1.3a12.4 12.4 0 0 0 6.5 6.5l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  )
}

export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.6 6.5 8.4 6 8.4-6" />
    </svg>
  )
}

export function IconPlay(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor" />
    </svg>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M20 6L9 17l-5-5" strokeWidth={2} />
    </svg>
  )
}

export function IconCopy(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M6 9l6 6 6-6" strokeWidth={2} />
    </svg>
  )
}

export function IconZoomIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  )
}

export function IconCamera(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

export function IconRing(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <circle cx="12" cy="14" r="7" />
      <path d="M12 2l2.5 5h-5L12 2z" />
    </svg>
  )
}

export function IconHeartHandshake(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

export function IconSparkles(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
    </svg>
  )
}

export function IconBriefcase(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

export function IconUser(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export function IconSliders(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  )
}

/** Filled Instagram glyph. */
export function IconInstagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.8c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 3.06a4.98 4.98 0 1 1 0 9.96 4.98 4.98 0 0 1 0-9.96Zm0 1.8a3.18 3.18 0 1 0 0 6.36 3.18 3.18 0 0 0 0-6.36Zm5.19-3.2a1.16 1.16 0 1 1 0 2.33 1.16 1.16 0 0 1 0-2.33Z" />
    </svg>
  )
}

/** Filled Facebook glyph. */
export function IconFacebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M24 12.07C24 5.44 18.63 0 12 0S0 5.44 0 12.07C0 18.06 4.39 23.03 10.13 23.93v-8.39H7.08v-3.47h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.49 0-1.96.93-1.96 1.88v2.25h3.33l-.53 3.47h-2.8v8.39C19.61 23.03 24 18.06 24 12.07Z" />
    </svg>
  )
}

/** Filled WhatsApp glyph. */
export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.83c0 1.94.55 3.75 1.5 5.28L2 22l5.03-1.63a9.83 9.83 0 0 0 5.01 1.37h.01c5.43 0 9.83-4.4 9.83-9.83C21.88 6.4 17.47 2 12.04 2Zm0 17.93c-1.62 0-3.13-.44-4.43-1.2l-.32-.19-3.29 1.07 1.08-3.2-.21-.33a8.09 8.09 0 0 1-1.24-4.24c0-4.47 3.64-8.1 8.11-8.1a8.1 8.1 0 0 1 8.1 8.1c0 4.48-3.63 8.1-8.1 8.1Zm4.45-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.38.1-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.2-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

/** Colourful Google Maps-style pin — used for the Location card. */
export function IconGoogleMaps(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path
        fill="#EA4335"
        d="M24 4a12 12 0 0 0-12 12c0 9 12 22 12 22s12-13 12-22A12 12 0 0 0 24 4Z"
      />
      <circle cx="24" cy="16" r="6" fill="#fff" />
      <circle cx="24" cy="16" r="2.8" fill="#4285F4" />
    </svg>
  )
}

/** Gmail-style envelope. */
export function IconGmail(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path fill="#EA4335" d="M6 10l18 14L6 38V10Z" />
      <path fill="#4285F4" d="M42 10L24 24l18 14V10Z" />
      <path fill="#FBBC04" d="M6 10l18 14-6 5L6 14V10Z" opacity="0.9" />
      <path fill="#34A853" d="M42 10L24 24l6 5 12-15V10Z" opacity="0.9" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M6 10l18 14 18-14"
      />
    </svg>
  )
}

export function IconFacebookOriginal(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#fff"
        d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7h2.8Z"
      />
    </svg>
  )
}

export function IconInstagramOriginal(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#instagram-gradient)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="#fff" />
    </svg>
  )
}
