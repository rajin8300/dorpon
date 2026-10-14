import React from 'react';
import { ArrowDown, Play } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeroProps {
  onExploreWork: () => void;
  onContact: () => void;
  onPlayFeaturedFilm?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onContact,
  onPlayFeaturedFilm,
}) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pb-16">
      {/* Background Cinematic Poster Image with Dual Tone Gradients */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
          alt="Cinematic wedding photography portrait by DORPON"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out brightness-[0.42] contrast-[1.12]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Soft Vignette and Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/50 to-[#101010]/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#101010]/40 to-[#101010]/90" />
      </div>

      {/* Decorative Subtle Film Letterbox Border Overlay */}
      <div className="absolute top-0 left-0 right-0 h-4 sm:h-6 bg-[#101010] z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-10 bg-gradient-to-t from-[#101010] to-transparent z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Editorial Sub-badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-6 border border-[#C6A66B]/30 bg-[#101010]/60 backdrop-blur-sm text-[10px] sm:text-[11px] tracking-cinema-wide uppercase text-[#C6A66B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B] animate-pulse" />
          <span>Independent Cinematic Studio</span>
          <span className="text-[#A5A29C]/40">•</span>
          <span>Bangladesh</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F3F0E9] uppercase leading-[1.05] sm:leading-[1.02] max-w-4xl">
          YOUR STORY.
          <span className="block italic text-[#C6A66B] font-light">OUR PERSPECTIVE.</span>
        </h1>

        {/* Supporting Bengali Tagline */}
        <p className="mt-4 sm:mt-5 font-serif text-lg sm:text-xl md:text-2xl text-[#C6A66B]/90 tracking-wide font-normal">
          {siteConfig.heroBengaliSupport}
        </p>

        {/* Supporting Description Copy */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#A5A29C] max-w-2xl font-light leading-relaxed">
          {siteConfig.heroDescription}
        </p>

        {/* Action CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row items-center justify-center gap-4 w-full xs:w-auto">
          <button
            onClick={onExploreWork}
            className="w-full xs:w-auto px-7 py-3.5 bg-[#C6A66B] hover:bg-[#DBC392] text-[#101010] font-medium text-xs tracking-cinema uppercase transition-all duration-200 shadow-lg shadow-[#C6A66B]/10 hover:shadow-[#C6A66B]/20"
          >
            Explore Our Work
          </button>

          <button
            onClick={onContact}
            className="w-full xs:w-auto px-7 py-3.5 border border-[#F3F0E9]/20 hover:border-[#C6A66B] text-[#F3F0E9] hover:text-[#C6A66B] bg-[#101010]/40 backdrop-blur-sm font-medium text-xs tracking-cinema uppercase transition-all duration-200"
          >
            Let's Talk
          </button>

          {onPlayFeaturedFilm && (
            <button
              onClick={onPlayFeaturedFilm}
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs text-[#A5A29C] hover:text-[#F3F0E9] transition-colors tracking-cinema uppercase"
              aria-label="Watch Featured Reel"
            >
              <div className="w-6 h-6 rounded-full border border-[#C6A66B]/40 flex items-center justify-center text-[#C6A66B]">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Watch Showreel</span>
            </button>
          )}
        </div>

        {/* Editorial Quote Footnote */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[#F3F0E9]/10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-[#A5A29C]/70">
          <span className="italic font-serif text-sm text-[#F3F0E9]/90">"{siteConfig.coreMessage}"</span>
          <span className="hidden sm:inline text-[#C6A66B]">•</span>
          <span className="font-serif text-[#C6A66B]/80">{siteConfig.taglineBengali}</span>
        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <button
        onClick={onExploreWork}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[#A5A29C]/60 hover:text-[#C6A66B] transition-colors focus:outline-none"
        aria-label="Scroll down to portfolio section"
      >
        <span className="text-[9px] uppercase tracking-cinema-wide font-mono">SCROLL</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </button>
    </section>
  );
};
