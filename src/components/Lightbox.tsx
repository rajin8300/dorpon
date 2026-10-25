import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { url: string; caption?: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!images || images.length <= 1) return;
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      }
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images, onClose, onNavigate]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];
  if (!currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
      className="fixed inset-0 z-[60] bg-[#0B0B0B]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between text-xs tracking-cinema text-[#A5A29C] z-10">
        <div>
          <span className="text-[#C6A66B] font-mono">{currentIndex + 1}</span>
          <span className="mx-1">/</span>
          <span>{images.length}</span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-[#F3F0E9] hover:text-[#C6A66B] transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Display */}
      <div
        className="relative flex-1 flex items-center justify-center my-2 max-w-6xl mx-auto w-full overflow-hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <img
          src={currentImage.url}
          alt={currentImage.caption || `Photograph ${currentIndex + 1}`}
          className="max-h-[82vh] max-w-full object-contain select-none shadow-2xl pointer-events-auto"
        />

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#101010]/70 hover:bg-[#C6A66B] hover:text-[#101010] text-[#F3F0E9] transition-all duration-200 border border-[#F3F0E9]/10"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#101010]/70 hover:bg-[#C6A66B] hover:text-[#101010] text-[#F3F0E9] transition-all duration-200 border border-[#F3F0E9]/10"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Caption Footnote */}
      <div className="text-center py-2 text-xs sm:text-sm text-[#A5A29C] font-serif italic max-w-2xl mx-auto">
        {currentImage.caption || 'Fine-art photograph from DORPON archive'}
      </div>
    </div>
  );
};
