import { site } from '../config/site'
import { IconArrowUp } from './Icons'

export default function Footer() {
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
            src="/logo/logo-white.webp"
            alt="দর্পণ (Dorpon)"
            className="h-8 sm:h-9 w-auto object-contain"
          />
          <span className="hidden sm:inline text-muted/30">|</span>
          <p className="text-muted">
            Photography and Cinematography in {site.location}
          </p>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-6">
          <p className="text-muted/60 font-mono text-xs">
            &copy; {currentYear} দর্পণ (Dorpon). All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full green-glass-panel hover:bg-paper-3 text-ink transition-colors cursor-pointer border border-rule flex items-center justify-center shrink-0"
            title="Scroll to top"
            aria-label="Back to top"
          >
            <IconArrowUp className="w-4 h-4 text-accent" />
          </button>
        </div>
      </div>
    </footer>
  )
}
