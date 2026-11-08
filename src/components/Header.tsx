import { useState, useEffect } from 'react'
import { useSite } from '../context/SiteContext'
import { translations } from '../data/translations'
import { IconMenu, IconClose, IconPhone, IconWhatsApp, IconSun, IconMoon } from './Icons'

interface HeaderProps {
  onBookClick?: () => void
}

export default function Header({ onBookClick }: HeaderProps) {
  const { theme, toggleTheme, lang, setLang, logoSrc } = useSite()
  const t = translations[lang]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t.nav.films, href: '#showcase', count: '22' },
    { label: t.nav.packages, href: '#packages', count: '7' },
    { label: t.nav.storyFaq, href: '#about-faq' },
    { label: t.nav.contact, href: '#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const triggerBookAction = () => {
    setMobileMenuOpen(false)
    if (onBookClick) {
      onBookClick()
    } else {
      const el = document.querySelector('#booking-studio')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-2 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-5xl transition-colors duration-200 rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between ${
          scrolled
            ? 'bg-paper/95 backdrop-blur-2xl border border-rule shadow-card'
            : 'bg-paper-2/90 backdrop-blur-xl border border-rule shadow-md'
        }`}
      >
        {/* Brand Logo Artwork */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none shrink-0"
          aria-label="দর্পণ (Dorpon) Home"
        >
          <img
            src={logoSrc}
            alt="দর্পণ (Dorpon)"
            className="h-7 sm:h-8 w-auto object-contain transition-opacity group-hover:opacity-85"
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).src =
                theme === 'light' ? '/logo/logo-black.webp' : '/logo/logo-cream.webp'
            }}
          />
          <div className="hidden md:flex flex-col border-l border-rule pl-3">
            <span className="text-xs font-medium text-accent">
              {lang === 'bn' ? 'রাজবাড়ী, ফরিদপুর ও ঢাকা' : 'Rajbari, Faridpur & Dhaka'}
            </span>
            <span className="text-xs text-muted">
              {lang === 'bn' ? 'ওয়েডিং ফটোগ্রাফি ও সিনেমা' : 'Photography & Cinematography'}
            </span>
          </div>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 bg-paper/60 p-1 rounded-full border border-rule">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-ink-2 hover:text-ink hover:bg-paper-3 transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              <span>{link.label}</span>
              {link.count && (
                <span className="px-1.5 py-0.2 rounded-full text-xs bg-accent/20 text-accent font-mono">
                  {link.count}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Controls: Language Pill + Theme Toggle + Book CTA + Mobile Drawer Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language Selector (Segmented Pill) */}
          <div
            className="flex items-center rounded-full bg-paper/80 p-0.5 border border-rule"
            role="group"
            aria-label={t.nav.languageLabel}
          >
            <button
              type="button"
              onClick={() => setLang('bn')}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                lang === 'bn'
                  ? 'bg-ink text-paper shadow-sm'
                  : 'text-muted hover:text-ink'
              }`}
              title="বাংলা সংস্করণ"
              aria-pressed={lang === 'bn'}
            >
              বাং
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                lang === 'en'
                  ? 'bg-ink text-paper shadow-sm'
                  : 'text-muted hover:text-ink'
              }`}
              title="English version"
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle (Dark / Light) */}
          <button
            type="button"
            data-theme-toggle="true"
            onClick={toggleTheme}
            className="p-2 min-w-[36px] min-h-[36px] rounded-full bg-paper/80 text-ink-2 hover:text-ink hover:bg-paper-3 border border-rule transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            aria-label={theme === 'dark' ? t.nav.switchThemeLight : t.nav.switchThemeDark}
            title={theme === 'dark' ? t.nav.switchThemeLight : t.nav.switchThemeDark}
          >
            {theme === 'dark' ? (
              <IconSun className="w-4 h-4 text-accent" />
            ) : (
              <IconMoon className="w-4 h-4 text-accent" />
            )}
          </button>

          {/* Primary Book Action */}
          <button
            type="button"
            onClick={triggerBookAction}
            className="brand-btn px-3.5 sm:px-5 py-2 min-h-[36px] sm:min-h-[40px] rounded-full text-xs font-bold focus-visible:outline-none cursor-pointer flex items-center justify-center shrink-0"
          >
            {t.nav.book}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 min-w-[38px] min-h-[38px] rounded-full bg-paper-2 text-ink-2 hover:text-ink hover:bg-paper-3 border border-rule transition-colors cursor-pointer flex items-center justify-center shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-3 top-16 z-50 p-5 rounded-card bg-paper/98 backdrop-blur-2xl border border-rule shadow-card lg:hidden flex flex-col gap-4 animate-in fade-in duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-rule">
            <img
              src={logoSrc}
              alt="দর্পণ (Dorpon)"
              className="h-7 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-full text-muted hover:text-ink cursor-pointer"
              aria-label="Close menu"
            >
              <IconClose className="w-5 h-5" />
            </button>
          </div>

          {/* Language & Theme Controls Row */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-paper-2 border border-rule">
            {/* Language Switch */}
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted pr-1">
                {lang === 'bn' ? 'ভাষা:' : 'Lang:'}
              </span>
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  lang === 'bn' ? 'bg-ink text-paper shadow-sm' : 'text-muted hover:text-ink'
                }`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  lang === 'en' ? 'bg-ink text-paper shadow-sm' : 'text-muted hover:text-ink'
                }`}
              >
                English
              </button>
            </div>

            {/* Theme Switch */}
            <button
              type="button"
              data-theme-toggle="true"
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-lg bg-paper border border-rule text-xs font-semibold text-ink flex items-center gap-1.5 cursor-pointer hover:bg-paper-3 transition-colors"
              aria-label={theme === 'dark' ? t.nav.switchThemeLight : t.nav.switchThemeDark}
            >
              {theme === 'dark' ? (
                <IconSun className="w-4 h-4 text-accent" />
              ) : (
                <IconMoon className="w-4 h-4 text-accent" />
              )}
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2.5 py-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="p-3 rounded-xl bg-paper-2 hover:bg-paper-3 border border-rule flex flex-col gap-1 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-ink">{link.label}</span>
                  {link.count && (
                    <span className="text-xs text-accent font-mono px-1.5 py-0.5 rounded bg-paper">
                      {link.count}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-rule flex flex-col gap-2.5">
            <button
              onClick={triggerBookAction}
              className="brand-btn w-full py-3.5 min-h-[44px] rounded-full text-center text-sm font-bold flex items-center justify-center cursor-pointer"
            >
              {t.hero.bookBtn}
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/8801740744170"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 min-h-[44px] px-3 rounded-xl bg-accent/20 text-accent border border-accent/40 text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+8801740744170"
                className="py-3 min-h-[44px] px-3 rounded-xl bg-paper-2 text-ink border border-rule text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <IconPhone className="w-4 h-4 text-accent" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
