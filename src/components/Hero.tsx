import { useEffect, useState } from 'react'
import { site } from '../config/site'
import { IconGoogleMaps } from './Icons'
import { slides } from '../data/gallery'
import HeroSlideshow from './HeroSlideshow'

export default function Hero() {
  // Desktop (md breakpoint, 768px and up): only wide/landscape photos.
  // Mobile (below 768px): only portrait photos, excluding the wide ones.
  // A photo is wide when its width is greater than its height.
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches,
  )

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const wideSlides = slides.filter((s) => s.width > s.height)
  const portraitSlides = slides.filter((s) => s.width < s.height)
  const activeSlides = isDesktop ? wideSlides : portraitSlides
  // Fallback: if a set were ever empty, show all slides rather than nothing.
  const shownSlides = activeSlides.length > 0 ? activeSlides : slides

  return (
    <section id="home" className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink">
      <HeroSlideshow
        key={isDesktop ? 'desktop' : 'mobile'}
        slides={shownSlides}
        intervalMs={5000}
        fadeMs={1000}
        showIndicators
      />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 md:pb-24 lg:px-12 lg:pb-28">
        <p className="mb-6 flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-label text-cream/90 [text-shadow:0_2px_10px_rgba(0,0,0,0.65)] sm:text-[0.72rem]">
          <IconGoogleMaps className="h-5 w-5 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
          {site.label} &middot; Rajbari
        </p>
        <h1 className="max-w-3xl font-display text-[2.5rem] font-normal leading-[1.06] tracking-[-0.02em] text-cream [text-shadow:0_2px_14px_rgba(0,0,0,0.65)] sm:text-6xl lg:text-[4.5rem]">
          Every Frame Tells a Story.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 [text-shadow:0_2px_10px_rgba(0,0,0,0.65)] sm:text-lg">
          Capturing meaningful moments through photography and cinematic storytelling.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#portfolio"
            className="btn-gradient inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[0.75rem] font-medium uppercase tracking-label transition-transform duration-300 hover:-translate-y-0.5"
          >
            Explore Our Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-cream/50 px-7 py-3.5 text-[0.75rem] font-medium uppercase tracking-label text-cream transition-colors duration-300 hover:bg-cream hover:text-ink"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
