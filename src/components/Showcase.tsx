import { useState, useRef, useEffect } from 'react'
import { useSite } from '../context/SiteContext'
import { translations } from '../data/translations'
import { filmsList, verticalReelsList, btsReelsList, type MediaVideoItem } from '../data/mediaData'
import { IconArrowLeft, IconArrowRight, IconFacebookOriginal, IconArrowUpRight } from './Icons'

export default function Showcase() {
  const { lang } = useSite()
  const t = translations[lang]
  const [activeTab, setActiveTab] = useState<'films' | 'reels' | 'bts'>('films')
  const carouselRef = useRef<HTMLDivElement>(null)

  // Pause cross-platform video players when changing tabs
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        if (typeof (window as unknown as { __pauseFacebook?: () => void }).__pauseFacebook === 'function') {
          ;(window as unknown as { __pauseFacebook: () => void }).__pauseFacebook()
        }
        if (typeof (window as unknown as { __pauseYouTube?: () => void }).__pauseYouTube === 'function') {
          ;(window as unknown as { __pauseYouTube: () => void }).__pauseYouTube()
        }
      }
    } catch {
      // Ignore audio sync interruption
    }

    // Trigger Facebook XFBML re-parser
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined' && (window as unknown as { FB?: { XFBML: { parse: () => void } } }).FB) {
          ;(window as unknown as { FB: { XFBML: { parse: () => void } } }).FB.XFBML.parse()
        }
      } catch {
        // Fallback gracefully
      }
    }, 150)

    return () => clearTimeout(timer)
  }, [activeTab])

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return
    const scrollAmount = direction === 'left' ? -340 : 340
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  const tabs = [
    { id: 'films' as const, label: t.showcase.tabFilms, count: filmsList.length },
    { id: 'reels' as const, label: t.showcase.tabReels, count: verticalReelsList.length },
    { id: 'bts' as const, label: t.showcase.tabBts, count: btsReelsList.length },
  ]

  return (
    <section
      id="showcase"
      aria-label="Unified Video and Reels Showcase"
      className="py-16 sm:py-24 relative border-t border-rule bg-paper text-ink overflow-hidden w-full max-w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-w-0 max-w-full">
        {/* Section Header: Direct & Confident Headline, No AI Eyebrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 min-w-0">
          <div className="min-w-0">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight">
              {t.showcase.title}
            </h2>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              className="w-11 h-11 rounded-full green-glass-panel hover:bg-paper-3 text-ink flex items-center justify-center transition-colors cursor-pointer active:scale-95 border border-rule shrink-0"
              aria-label="Scroll left"
            >
              <IconArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              className="w-11 h-11 rounded-full green-glass-panel hover:bg-paper-3 text-ink flex items-center justify-center transition-colors cursor-pointer active:scale-95 border border-rule shrink-0"
              aria-label="Scroll right"
            >
              <IconArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl green-glass-panel w-full max-w-full sm:max-w-xl mb-8 overflow-x-auto no-scrollbar border border-rule min-w-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id)
                  if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
                }}
                className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold transition-colors shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-ink text-paper shadow-md font-bold'
                    : 'text-muted hover:text-ink hover:bg-paper-3'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                    isActive ? 'bg-paper text-ink' : 'bg-paper-3 text-ink-2'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Carousel View for Video Players */}
        <div
          ref={carouselRef}
          className="carousel-snap flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 no-scrollbar w-full min-w-0 max-w-full"
          style={{ overscrollBehaviorX: 'contain' }}
        >
          {/* 1. CINEMATIC FILMS (11 Real Video Players) */}
          {activeTab === 'films' &&
            filmsList.map((film: MediaVideoItem, idx: number) => (
              <div
                key={film.id}
                className="carousel-snap-item shrink-0 w-[85vw] max-w-[360px] sm:w-[360px] md:w-[420px] min-w-0"
              >
                <div className="rounded-card overflow-hidden bg-paper-2 border border-rule shadow-card p-3 flex flex-col gap-3">
                  <div className="video-frame">
                    <div
                      id={`fb-film-${idx}`}
                      className="fb-video"
                      data-href={film.url}
                      data-show-text="false"
                      data-autoplay="false"
                      data-allowfullscreen="true"
                      title={film.title}
                    />
                    <a
                      href={film.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-fallback"
                    >
                      <span className="font-bangla">Facebook-এ দেখুন</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="truncate mr-2">
                      <span className="text-xs text-accent block font-medium">
                        Film #{idx + 1} ({film.tag})
                      </span>
                      <h3 className="text-sm font-semibold text-ink truncate mt-0.5">
                        {film.title}
                      </h3>
                    </div>
                    <a
                      href={film.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-1.5 rounded-lg bg-paper-3 hover:bg-accent/20 text-ink-2 hover:text-accent transition-colors flex items-center gap-1.5 text-xs font-medium border border-rule"
                      title="Open on Facebook"
                    >
                      <IconFacebookOriginal className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}

          {/* 2. VERTICAL REELS (6 Real Video Players) */}
          {activeTab === 'reels' &&
            verticalReelsList.map((reel: MediaVideoItem, idx: number) => (
              <div
                key={reel.id}
                className="carousel-snap-item shrink-0 w-[75vw] max-w-[260px] sm:w-[260px] md:w-[280px] min-w-0"
              >
                <div className="rounded-card overflow-hidden bg-paper-2 border border-rule shadow-card p-2.5 flex flex-col gap-2">
                  <div className="reel-frame">
                    {reel.type === 'youtube' ? (
                      <iframe
                        id="yt-player-0"
                        src="https://www.youtube-nocookie.com/embed/Su47lhgitkc?enablejsapi=1"
                        title={reel.title}
                        style={{ width: '100%', height: '100%', border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <div
                          id={`fb-reel-${idx}`}
                          className="fb-video"
                          data-href={reel.url}
                          data-show-text="false"
                          data-autoplay="false"
                          data-allowfullscreen="true"
                          title={reel.title}
                        />
                        <a
                          href={reel.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fb-fallback"
                        >
                          <span className="font-bangla">Facebook-এ দেখুন</span>
                        </a>
                      </>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="truncate mr-1">
                      <span className="text-xs text-accent block font-medium">
                        Reel #{idx + 1}
                      </span>
                      <p className="text-xs font-semibold text-ink truncate mt-0.5">{reel.title}</p>
                    </div>
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:text-ink transition-colors shrink-0 font-medium flex items-center gap-1"
                    >
                      <span>{t.showcase.watchBtn}</span>
                      <IconArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

          {/* 3. BTS REELS (5 Real Video Players) */}
          {activeTab === 'bts' &&
            btsReelsList.map((bts: MediaVideoItem, idx: number) => (
              <div
                key={bts.id}
                className="carousel-snap-item shrink-0 w-[75vw] max-w-[260px] sm:w-[260px] md:w-[280px] min-w-0"
              >
                <div className="rounded-card overflow-hidden bg-paper-2 border border-rule shadow-card p-2.5 flex flex-col gap-2">
                  <div className="reel-frame">
                    <div
                      id={`fb-bts-${idx}`}
                      className="fb-video"
                      data-href={bts.url}
                      data-show-text="false"
                      data-autoplay="false"
                      data-allowfullscreen="true"
                      title={bts.title}
                    />
                    <a
                      href={bts.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-fallback"
                    >
                      <span className="font-bangla">Facebook-এ দেখুন</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="truncate mr-1">
                      <span className="text-xs text-accent block font-medium">
                        BTS #{idx + 1}
                      </span>
                      <p className="text-xs font-semibold text-ink truncate mt-0.5">{bts.title}</p>
                    </div>
                    <a
                      href={bts.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:text-ink transition-colors shrink-0 font-medium flex items-center gap-1"
                    >
                      <span>{t.showcase.watchBtn}</span>
                      <IconArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
