import { useState, useEffect } from 'react'
import { photos } from '../data/gallery'
import { useSite } from '../context/SiteContext'
import { translations } from '../data/translations'
import { IconWhatsApp, IconZoomIn } from './Icons'

interface HeroProps {
  onOpenLightbox: (index: number) => void
  onBookClick: () => void
}

export default function Hero({ onOpenLightbox, onBookClick }: HeroProps) {
  const { lang } = useSite()
  const t = translations[lang]
  const deckPhotos = photos
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % deckPhotos.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [deckPhotos.length])

  const activePhoto = deckPhotos[activeIndex] || deckPhotos[0]

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-[90svh] sm:min-h-dvh pt-24 sm:pt-32 pb-12 sm:pb-20 flex items-center justify-center bg-paper text-ink w-full max-w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 min-w-0">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center min-w-0">
          {/* Left Column: Brand Identity, Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center min-w-0 w-full">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-2 border border-rule w-fit mb-4">
              <span className="inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
              <span className="text-xs text-ink-2 font-medium">
                {t.hero.status}
              </span>
            </div>

            {/* Editorial Headline: Bold, Confident, Solid Typography */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink leading-[1.08] mb-3 break-words">
              {t.hero.title}
            </h1>

            <p className="text-sm sm:text-base text-muted max-w-xl leading-relaxed mb-8">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 w-full max-w-md">
              <button
                type="button"
                onClick={onBookClick}
                className="brand-btn w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold flex items-center justify-center cursor-pointer text-center"
              >
                {t.hero.bookBtn}
              </button>

              <a
                href={
                  lang === 'bn'
                    ? 'https://wa.me/8801740744170?text=%E0%A6%86%E0%A6%B8%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%81%20%E0%A6%86%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%95%E0%A7%81%E0%A6%AE%20%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%AA%E0%A6%A3%E0%A7%A4%20%E0%A6%86%E0%A6%AE%E0%A6%BF%20%E0%A6%B6%E0%A7%81%E0%A6%9F%20%E0%A6%AC%E0%A7%81%E0%A6%95%E0%A6%BF%E0%A6%82%20%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87%20%E0%A6%95%E0%A6%A5%E0%A6%BE%20%E0%A6%AC%E0%A6%B2%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4'
                    : 'https://wa.me/8801740744170?text=Hello%20Dorpon,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20wedding%20session.'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="green-glass-panel hover:bg-paper-3 text-ink w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer border border-rule text-center"
              >
                <IconWhatsApp className="w-4 h-4 text-accent shrink-0" />
                <span>{t.hero.waBtn}</span>
              </a>
            </div>

            {/* Authentic Portfolio Counts */}
            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-rule max-w-md">
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {lang === 'bn' ? '১২' : '12'}
                </p>
                <p className="text-xs text-muted">
                  {lang === 'bn' ? 'মাস্টার ছবি' : 'Master photos'}
                </p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {lang === 'bn' ? '২২' : '22'}
                </p>
                <p className="text-xs text-muted">
                  {lang === 'bn' ? 'ফিল্ম ও রিল' : 'Films & reels'}
                </p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {lang === 'bn' ? '৭' : '7'}
                </p>
                <p className="text-xs text-muted">
                  {lang === 'bn' ? 'সুনির্দিষ্ট প্যাকেজ' : 'Curated packages'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Uncropped Photo Deck (Signature Stage) */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto min-w-0">
            <div className="relative rounded-card overflow-hidden green-glass-panel p-3 sm:p-4 shadow-card border border-rule group min-w-0">
              {/* Natural Proportion Display Box */}
              <div
                className="relative aspect-[4/3] sm:aspect-[3/4] max-h-[430px] rounded-xl overflow-hidden bg-paper cursor-pointer flex items-center justify-center p-1.5 w-full"
                onClick={() => onOpenLightbox(activeIndex)}
              >
                <img
                  src={activePhoto.thumb}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-105 pointer-events-none"
                />
                <img
                  key={activePhoto.src}
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  loading="eager"
                  className="relative z-10 max-h-full max-w-full object-contain rounded-lg"
                />

                <div className="absolute top-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-paper-2/90 backdrop-blur-md border border-rule text-xs font-semibold text-accent">
                    {t.hero.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-paper-2/90 backdrop-blur-md text-xs font-mono text-ink-2 border border-rule">
                    {activeIndex + 1} / {deckPhotos.length}
                  </span>
                </div>

                {/* Minimalist Tap to Zoom Pill */}
                <div className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-full bg-paper-2/90 backdrop-blur-md border border-rule flex items-center gap-1.5 pointer-events-none text-accent shadow-md">
                  <IconZoomIn className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs font-medium">{t.hero.deckHint}</span>
                </div>
              </div>

              {/* Interactive Thumbnail Selector Deck */}
              <div className="w-full min-w-0 overflow-hidden mt-3">
                <div className="flex items-center gap-2 px-0.5 overflow-x-auto no-scrollbar py-1 w-full min-w-0">
                  {deckPhotos.map((item, idx) => (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`relative w-12 h-14 sm:w-14 sm:h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-transform cursor-pointer ${
                        activeIndex === idx
                          ? 'border-accent scale-105 shadow-md'
                          : 'border-rule opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={item.thumb}
                        alt={`Photograph ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
