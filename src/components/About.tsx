import React from 'react';
import { ArrowUpRight, Film, HeartHandshake, Compass } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const About: React.FC = () => {
  const { founder } = siteConfig;

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#101010] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="border-b border-[#F3F0E9]/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B]">
                05 / Ethos & Identity
              </span>
              <span className="text-xs font-serif text-[#C6A66B]/60">আমাদের দর্শন</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F3F0E9]">
              About DORPON
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#A5A29C] font-light leading-relaxed">
            DORPON (দর্পণ — meaning mirror) reflects your celebrations without artificial distortion or staged theatrics.
          </p>
        </div>

        {/* Brand Mission & Identity */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F3F0E9] font-normal leading-snug">
              "DORPON is an independent visual storytelling brand focused on cinematic wedding films, photography, and meaningful human stories. We combine thoughtful framing, intentional movement, and careful editing to create films that feel personal rather than ordinary."
            </h3>

            <p className="text-sm sm:text-base text-[#A5A29C] font-light leading-relaxed">
              We do not treat a wedding as a high-volume factory line. Instead, we approach each celebration as an unrepeatable chapter of family heritage. In Bangladesh, where rituals carry centuries of weight and families assemble across continents, our camera moves with quiet respect—allowing sacred moments to unfold without direction or interference.
            </p>

            {/* Guiding Principles */}
            <div className="pt-8 border-t border-[#F3F0E9]/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C6A66B] uppercase tracking-cinema">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Unobtrusive</span>
                </div>
                <h4 className="font-serif text-lg text-[#F3F0E9]">Observational Dignity</h4>
                <p className="text-xs text-[#A5A29C] font-light">
                  Never barking instructions or staging fake embraces. Real emotion cannot be coaxed—it must be watched for.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C6A66B] uppercase tracking-cinema">
                  <Film className="w-3.5 h-3.5" />
                  <span>Color & Light</span>
                </div>
                <h4 className="font-serif text-lg text-[#F3F0E9]">Timeless Palette</h4>
                <p className="text-xs text-[#A5A29C] font-light">
                  Natural skin tones and realistic fabric hues. Color grades that won't feel dated in thirty years.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C6A66B] uppercase tracking-cinema">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Acoustics</span>
                </div>
                <h4 className="font-serif text-lg text-[#F3F0E9]">Acoustic Authenticity</h4>
                <p className="text-xs text-[#A5A29C] font-light">
                  Vows, laughter, and ancestral blessings recorded crisply, grounding the visual poetry in real life.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Profile Card */}
          <div className="lg:col-span-5 bg-[#141414] border border-[#F3F0E9]/10 p-6 sm:p-8">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B] pb-4 border-b border-[#F3F0E9]/10">
              <span>Filmmaker & Visual Director</span>
              <span>ঢাকা, বাংলাদেশ</span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-none overflow-hidden shrink-0 border border-[#C6A66B]/30 bg-[#202020]">
                <img
                  src={founder.profilePhoto}
                  alt={founder.name}
                  className="w-full h-full object-cover grayscale contrast-125"
                  loading="lazy"
                />
              </div>

              <div>
                <h4 className="font-serif text-2xl text-[#F3F0E9]">
                  {founder.name}
                </h4>
                <p className="text-xs font-mono text-[#C6A66B] mt-0.5">
                  {founder.role}
                </p>
                <p className="text-xs text-[#A5A29C] mt-2.5 font-light leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </div>

            {/* Founder Links */}
            <div className="mt-6 pt-5 border-t border-[#F3F0E9]/10 flex flex-wrap gap-4 text-xs">
              {founder.portfolioUrl && (
                <a
                  href={founder.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#F3F0E9] hover:text-[#C6A66B] transition-colors"
                >
                  <span className="font-mono text-[11px]">Personal Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {founder.facebookProfileUrl && (
                <a
                  href={founder.facebookProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#F3F0E9] hover:text-[#C6A66B] transition-colors"
                >
                  <span className="font-mono text-[11px]">Facebook / Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-[#F3F0E9]/5 text-[11px] text-[#A5A29C]/60 italic">
              Note: DORPON is an independent studio with personal creative oversight on every booking.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
