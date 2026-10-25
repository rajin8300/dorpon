import React, { useState, useEffect } from 'react';
import { X, Play, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { PortfolioProject } from '../types';
import { portfolioProjects } from '../data/portfolio';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppLink } from '../utils/whatsapp';
import { Lightbox } from './Lightbox';

interface ProjectModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: PortfolioProject) => void;
  onOpenBooking: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onSelectProject,
  onOpenBooking,
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const modalContainerRef = React.useRef<HTMLDivElement>(null);

  // Helper to safely enable autoplay without parameter conflicts
  const getAutoplayEmbedUrl = (url?: string) => {
    if (!url) return '';
    if (url.includes('autoplay=0')) {
      return url.replace('autoplay=0', 'autoplay=1');
    }
    return url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;
  };

  // Reset video state and scroll position when project changes
  useEffect(() => {
    setIsPlayingVideo(false);
    if (modalContainerRef.current) {
      modalContainerRef.current.scrollTop = 0;
    }
  }, [project?.id]);

  // Handle ESC key and scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !lightboxOpen) {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, lightboxOpen, onClose]);

  if (!isOpen || !project) return null;

  // Related projects
  const relatedProjects = portfolioProjects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const whatsappInquiryUrl = buildWhatsAppLink(
    siteConfig.contact.whatsappNumber,
    `Hello DORPON, I was viewing your project "${project.title}" (${project.category}) and would like to discuss a similar visual direction for our celebration.`
  );

  const handleOpenStill = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-[#0B0B0B]/90 backdrop-blur-md overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          ref={modalContainerRef}
          className="relative w-full max-w-5xl bg-[#141414] border border-[#F3F0E9]/10 shadow-2xl text-[#F3F0E9] min-h-screen sm:min-h-0 sm:max-h-[92vh] sm:overflow-y-auto sm:my-auto my-0"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#141414]/95 backdrop-blur-md border-b border-[#F3F0E9]/10">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-mono tracking-cinema text-[#C6A66B]">
                {project.category}
              </span>
              <span className="text-[#A5A29C]/40">•</span>
              <span className="text-xs text-[#A5A29C]">{project.year}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#A5A29C] hover:text-[#F3F0E9] transition-colors focus:outline-none"
              aria-label="Close project modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Media Player Area (Video or Cover Image) */}
          <div className="relative bg-[#0A0A0A] aspect-video w-full overflow-hidden">
            {project.videoEmbedUrl && isPlayingVideo ? (
              <iframe
                src={getAutoplayEmbedUrl(project.videoEmbedUrl)}
                title={`Cinematic film: ${project.title}`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full group">
                <img
                  src={project.videoPoster || project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center brightness-90 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />

                {project.videoEmbedUrl ? (
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className="absolute inset-0 flex items-center justify-center group/btn focus:outline-none"
                    aria-label={`Play film ${project.title}`}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#101010]/80 group-hover/btn:bg-[#C6A66B] text-[#C6A66B] group-hover/btn:text-[#101010] border border-[#C6A66B]/50 flex items-center justify-center transition-all duration-300 shadow-2xl scale-95 group-hover/btn:scale-105">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                    </div>
                    <span className="absolute mt-24 text-[10px] tracking-cinema-wide uppercase text-[#F3F0E9] bg-black/60 px-3 py-1 backdrop-blur-sm">
                      Watch Film Preview
                    </span>
                  </button>
                ) : (
                  <div className="absolute bottom-4 left-6 text-xs text-[#A5A29C] bg-black/60 px-3 py-1 backdrop-blur-sm">
                    Editorial Photographic Showcase
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Project Details Body */}
          <div className="p-6 sm:p-10 space-y-10">
            {/* Title & Metadata Header */}
            <div className="border-b border-[#F3F0E9]/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2
                  id="modal-project-title"
                  className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F3F0E9]"
                >
                  {project.title}
                </h2>
                {project.bengaliTitle && (
                  <p className="font-serif text-lg text-[#C6A66B] mt-1.5">
                    {project.bengaliTitle}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-6 text-xs text-[#A5A29C]">
                {project.location && (
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
                    <span>{project.location}, Bangladesh</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C6A66B]" />
                  <span>Production Year {project.year}</span>
                </div>
              </div>
            </div>

            {/* Synopsis & Narrative Intention */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-cinema text-[#C6A66B]">
                  Editorial Synopsis & Vision
                </span>
                <p className="text-base sm:text-lg text-[#F3F0E9]/90 font-light leading-relaxed">
                  {project.synopsis}
                </p>
              </div>

              {/* Specs & Deliverables sidebar */}
              <div className="bg-[#181818] p-5 border border-[#F3F0E9]/10 space-y-5 text-xs">
                {project.deliverables && project.deliverables.length > 0 && (
                  <div>
                    <span className="font-mono text-[10px] text-[#C6A66B] uppercase tracking-cinema block mb-2">
                      Deliverables
                    </span>
                    <ul className="space-y-1.5 text-[#A5A29C]">
                      {project.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#C6A66B]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.gearUsed && project.gearUsed.length > 0 && (
                  <div className="border-t border-[#F3F0E9]/10 pt-4">
                    <span className="font-mono text-[10px] text-[#C6A66B] uppercase tracking-cinema block mb-2">
                      Optical Configuration
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.gearUsed.map((gear, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-[#202020] text-[#A5A29C] text-[11px] font-mono border border-[#F3F0E9]/5"
                        >
                          {gear}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Stills Gallery */}
            {project.stills && project.stills.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-[#F3F0E9]/10">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl uppercase tracking-wide text-[#F3F0E9]">
                    Film Stills & Photographic Frames
                  </h3>
                  <span className="text-xs text-[#A5A29C]">
                    Click any frame to expand
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {project.stills.map((still, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOpenStill(idx)}
                      className="group relative aspect-[4/3] overflow-hidden bg-black focus:outline-none"
                    >
                      <img
                        src={still.url}
                        alt={still.caption || `Frame ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-95 group-hover:brightness-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-[10px] tracking-cinema uppercase text-[#F3F0E9] bg-black/60 px-2 py-1">
                          Expand Frame
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Inquire CTA for this project */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-[#181818] to-[#161616] border border-[#C6A66B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-cinema text-[#C6A66B]">
                  Inspired by this story?
                </span>
                <h4 className="font-serif text-2xl text-[#F3F0E9] mt-1">
                  Commission DORPON for your celebrations
                </h4>
                <p className="text-xs text-[#A5A29C] mt-1">
                  We take on a limited number of weddings per season to maintain uncompromised craft.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#C6A66B] hover:bg-[#DBC392] text-[#101010] text-xs font-medium tracking-cinema uppercase transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire via WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#F3F0E9]/20 hover:border-[#C6A66B] text-[#F3F0E9] hover:text-[#C6A66B] text-xs font-medium tracking-cinema uppercase transition-colors"
                >
                  <span>Book Dates</span>
                </button>
              </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="pt-6 border-t border-[#F3F0E9]/10">
                <span className="text-[10px] uppercase font-mono tracking-cinema text-[#A5A29C] block mb-4">
                  Explore More Stories
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedProjects.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => onSelectProject(rel)}
                      className="group text-left border border-[#F3F0E9]/5 hover:border-[#C6A66B]/40 p-3 bg-[#161616] transition-all"
                    >
                      <div className="aspect-video overflow-hidden mb-2.5 bg-black">
                        <img
                          src={rel.coverImage}
                          alt={rel.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[9px] uppercase font-mono text-[#C6A66B] block">
                        {rel.category}
                      </span>
                      <span className="font-serif text-lg text-[#F3F0E9] group-hover:text-[#C6A66B] transition-colors block">
                        {rel.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox for Gallery Stills */}
      <Lightbox
        images={project.stills}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
};
