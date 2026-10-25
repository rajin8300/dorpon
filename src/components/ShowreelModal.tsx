import React, { useEffect, useState } from 'react';
import { X, Play, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const showreelVideoUrl =
    'https://www.youtube-nocookie.com/embed/S_8qMhD33o0?autoplay=1&rel=0&modestbranding=1';

  const whatsappUrl = buildWhatsAppLink(
    siteConfig.contact.whatsappNumber,
    'Hello DORPON, I just viewed your cinematic showreel on the website and would love to check availability for our wedding!'
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="DORPON Cinematic Showreel"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B0B0B]/95 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#141414] border border-[#F3F0E9]/10 shadow-2xl overflow-hidden my-auto max-h-[95vh] overflow-y-auto">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141414] border-b border-[#F3F0E9]/10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C6A66B] animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-cinema text-[#C6A66B]">
              Cinematic Showreel Edition
            </span>
            <span className="text-[#A5A29C]/40">•</span>
            <span className="text-xs text-[#A5A29C]">Director's Cut</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#A5A29C] hover:text-[#F3F0E9] transition-colors focus:outline-none"
            aria-label="Close showreel modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cinematic Player */}
        <div className="relative aspect-video bg-black w-full overflow-hidden">
          {isPlaying ? (
            <iframe
              src={showreelVideoUrl}
              title="DORPON Cinematic Studio Showreel"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full group">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80"
                alt="DORPON Showreel Poster"
                className="w-full h-full object-cover brightness-[0.55] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex flex-col items-center justify-center group/btn focus:outline-none"
                aria-label="Play showreel"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C6A66B] text-[#101010] flex items-center justify-center shadow-2xl transition-transform duration-300 transform scale-90 group-hover/btn:scale-105">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <span className="mt-4 text-[10px] tracking-cinema uppercase text-[#F3F0E9] bg-black/70 px-4 py-1.5 border border-[#F3F0E9]/10 backdrop-blur-sm">
                  Start Cinematic Reel (High Definition)
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Editorial Film Commentary */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#F3F0E9]/10 pb-5">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F3F0E9] uppercase">
                The Narrative Perspective
              </h3>
              <p className="font-serif text-sm text-[#C6A66B] mt-1">
                মুহূর্তের গভীরতা ও সিনেমাটিক প্রকাশ
              </p>
            </div>

            <span className="text-[11px] font-mono text-[#A5A29C]">
              Sony a6700 • S-Log3 • Custom Film Emulation
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#A5A29C] font-light leading-relaxed">
            Every clip in this reel was captured in the natural ambient conditions of Bangladeshi family weddings—without staging fake tears or shouting instructions at couples. Our camera moves with observational dignity, balancing fluid motion and quiet telephoto portraits.
          </p>

          {/* Chapter Outline */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
            <div className="p-3 bg-[#181818] border border-[#F3F0E9]/5">
              <span className="font-mono text-[10px] text-[#C6A66B] block">01 — The Morning Prep</span>
              <span className="text-[11px] text-[#A5A29C] block mt-1">Quiet anticipation & Jamdani details</span>
            </div>
            <div className="p-3 bg-[#181818] border border-[#F3F0E9]/5">
              <span className="font-mono text-[10px] text-[#C6A66B] block">02 — Gaye Holud</span>
              <span className="text-[11px] text-[#A5A29C] block mt-1">Vibrant turmeric energy & rhythm</span>
            </div>
            <div className="p-3 bg-[#181818] border border-[#F3F0E9]/5">
              <span className="font-mono text-[10px] text-[#C6A66B] block">03 — Sacred Vows</span>
              <span className="text-[11px] text-[#A5A29C] block mt-1">Parental tears & ancestral blessings</span>
            </div>
            <div className="p-3 bg-[#181818] border border-[#F3F0E9]/5">
              <span className="font-mono text-[10px] text-[#C6A66B] block">04 — Night Reception</span>
              <span className="text-[11px] text-[#A5A29C] block mt-1">Warm tungsten lighting & shared laughter</span>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="pt-4 border-t border-[#F3F0E9]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#A5A29C] font-light text-center sm:text-left">
              Ready to capture your celebration with this level of craftsmanship?
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#C6A66B] hover:bg-[#DBC392] text-[#101010] text-xs font-medium tracking-cinema uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discuss on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-5 py-2.5 border border-[#F3F0E9]/20 hover:border-[#C6A66B] text-[#F3F0E9] hover:text-[#C6A66B] text-xs font-medium tracking-cinema uppercase transition-colors"
              >
                <span>Check Dates</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
