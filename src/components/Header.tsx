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

  // Dark theme is always active — cream text and logo are used in all states.

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
          scrolled && !menuOpen
            ? 'border-b border-white/10 bg-[#141210]/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        ].join(' ')}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 md:h-20 lg:px-12">
          <a
            href="#home"
            aria-label={`${site.brand.full} — home`}
            className="group flex items-center"
          >
            <img
              src={brandAssets.logoCream}
              alt=""
              aria-hidden="true"
              width={640}
              height={367}
              fetchPriority="high"
              decoding="async"
              className="block h-9 w-auto object-contain sm:h-11"
            />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
              className="relative py-1 text-[0.72rem] font-medium uppercase tracking-label text-cream/85 transition-colors duration-300 hover:text-cream after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-cream/45 px-5 py-2 text-[0.72rem] font-medium uppercase tracking-label text-cream transition-colors duration-300 hover:bg-cream hover:text-ink md:inline-flex"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-cream transition-colors duration-300 hover:bg-cream/10 md:hidden"
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
        className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-[#141210] outline-none md:hidden"
        style={{ backgroundColor: '#141210' }}
      >
        <div className="flex h-16 items-center justify-between px-5 sm:px-8">
          <img
            src={brandAssets.logoCream}
            alt={site.brand.full}
            width={640}
            height={367}
            className="h-9 w-auto"
          />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-cream transition-colors hover:bg-cream/10"
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
              className="border-b border-white/10 py-5 font-display text-3xl text-cream transition-colors hover:text-sand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="px-5 pt-8 sm:px-8">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full bg-cream px-6 py-3.5 text-[0.75rem] font-medium uppercase tracking-label text-ink transition-opacity hover:opacity-90"
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
