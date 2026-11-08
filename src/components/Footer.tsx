import { site } from '../config/site'
import { useSite } from '../context/SiteContext'
import { translations } from '../data/translations'
import { IconArrowUp, IconSun, IconMoon } from './Icons'

export default function Footer() {
  const { lang, logoSrc, theme, toggleTheme } = useSite()
  const t = translations[lang]
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-rule bg-paper-2 py-12 sm:py-16 text-muted text-xs">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Lockup with Real Calligraphy Logo */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <img
            src={logoSrc}
            alt="দর্পণ (Dorpon)"
            className="h-8 sm:h-9 w-auto object-contain"
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).src =
                theme === 'light' ? '/logo/logo-black.webp' : '/logo/logo-cream.webp'
            }}
          />
          <span className="hidden sm:inline text-muted/30">|</span>
          <p className="text-muted">
            {lang === 'bn'
              ? `${site.location}-এ ওয়েডিং ফটোগ্রাফি ও সিনেমাটোগ্রাফি`
              : `Photography and Cinematography in ${site.location}`}
          </p>
        </div>

        {/* Links, Theme Quick Button & Back to Top */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full bg-paper hover:bg-paper-3 text-ink-2 hover:text-ink border border-rule transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label={theme === 'dark' ? t.nav.switchThemeLight : t.nav.switchThemeDark}
          >
            {theme === 'dark' ? (
              <IconSun className="w-3.5 h-3.5 text-accent" />
            ) : (
              <IconMoon className="w-3.5 h-3.5 text-accent" />
            )}
            <span className="text-xs">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>

          <p className="text-muted/60 font-mono text-xs">
            &copy; {currentYear} দর্পণ (Dorpon). {t.footer.allRights}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full green-glass-panel hover:bg-paper-3 text-ink transition-colors cursor-pointer border border-rule flex items-center justify-center shrink-0"
            title={t.footer.topBtn}
            aria-label={t.footer.topBtn}
          >
            <IconArrowUp className="w-4 h-4 text-accent" />
          </button>
        </div>
      </div>
    </footer>
  )
}
