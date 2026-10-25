import { useEffect, useRef, useState } from 'react'
import { site } from '../config/site'
import { brandAssets } from '../data/brand'
import { IconClose, IconMenu } from './Icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Swap from the transparent (over-hero) header to the solid one on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll, trap focus, and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const menuEl = mobileMenuRef.current
    const focusable = menuEl?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    focusable?.[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
      } else if (event.key === 'Tab' && focusable && focusable.length > 0) {
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey) {
          if (document.activeElement === first || document.activeElement === menuEl) {
            event.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            event.preventDefault()
            first.focus()
          }
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      menuButtonRef.current?.focus()
    }
  }, [menuOpen])

  const onDark = !scrolled && !menuOpen

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
          scrolled && !menuOpen
            ? 'border-b border-line bg-cream/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        ].join(' ')}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 md:h-20 lg:px-12">
          <a
            href="#home"
            aria-label={`${site.brand.full} — home`}
            className="group flex items-center"
          >
            <span className="relative block h-9 aspect-[640/367] sm:h-11">
              <img
                src={brandAssets.logoCream}
                alt=""
                aria-hidden="true"
                width={640}
                height={367}
                fetchPriority="high"
                decoding="async"
                className={[
                  'absolute inset-0 h-full w-full object-contain transition-opacity duration-500',
                  onDark ? 'opacity-100' : 'opacity-0',
                ].join(' ')}
              />
              <img
                src={brandAssets.logoBlack}
                alt=""
                aria-hidden="true"
                width={640}
                height={367}
                decoding="async"
                className={[
                  'absolute inset-0 h-full w-full object-contain transition-opacity duration-500',
                  onDark ? 'opacity-0' : 'opacity-100',
                ].join(' ')}
              />
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={[
                  'relative py-1 text-[0.72rem] font-medium uppercase tracking-label transition-colors duration-300',
                  'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full',
                  onDark ? 'text-cream/85 hover:text-cream' : 'text-ink-soft hover:text-ink',
                ].join(' ')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={[
                'hidden rounded-full border px-5 py-2 text-[0.72rem] font-medium uppercase tracking-label transition-colors duration-300 md:inline-flex',
                onDark
                  ? 'border-cream/45 text-cream hover:bg-cream hover:text-ink'
                  : 'border-ink/25 text-ink hover:bg-ink hover:text-cream',
              ].join(' ')}
            >
              Contact Us
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={[
                'inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 md:hidden',
                onDark ? 'text-cream hover:bg-cream/10' : 'text-ink hover:bg-ink/5',
              ].join(' ')}
            >
              <IconMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation panel */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        tabIndex={-1}
        hidden={!menuOpen}
        className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-cream outline-none md:hidden"
        style={{ backgroundColor: '#faf7f2' }}
      >
        <div className="flex h-16 items-center justify-between px-5 sm:px-8">
          <img
            src={brandAssets.logoBlack}
            alt={site.brand.full}
            width={640}
            height={367}
            className="h-9 w-auto"
          />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
          >
            <IconClose className="h-6 w-6" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col px-5 pt-6 sm:px-8">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line py-5 font-display text-3xl text-ink transition-colors hover:text-sand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="px-5 pt-8 sm:px-8">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-[0.75rem] font-medium uppercase tracking-label text-cream transition-opacity hover:opacity-90"
          >
            Contact Us
          </a>
          <p className="mt-8 text-sm text-muted">
            {site.label} · {site.location}
          </p>
        </div>
      </div>
    </>
  )
}
