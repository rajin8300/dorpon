import { useCallback, useEffect, useRef, useState } from 'react'
import type { Photo } from '../data/gallery'
import { IconArrowLeft, IconArrowRight, IconClose } from './Icons'

interface LightboxProps {
  photos: Photo[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null
  const dialogRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const [loaded, setLoaded] = useState(false)

  const total = photos.length
  const current = isOpen ? photos[index] : null

  const goTo = useCallback(
    (next: number) => onNavigate((next + total) % total),
    [onNavigate, total],
  )

  const handlePrev = useCallback(() => goTo((index ?? 0) - 1), [goTo, index])
  const handleNext = useCallback(() => goTo((index ?? 0) + 1), [goTo, index])

  useEffect(() => {
    if (!isOpen) return

    previouslyFocused.current = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      previouslyFocused.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        handlePrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        handleNext()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose, handlePrev, handleNext])

  useEffect(() => {
    setLoaded(false)
  }, [index])

  useEffect(() => {
    if (!isOpen || index === null || total < 2) return
    const neighbours = [(index + 1) % total, (index - 1 + total) % total]
    neighbours.forEach((i) => {
      const img = new Image()
      img.src = photos[i].src
    })
  }, [isOpen, index, photos, total])

  if (!isOpen || !current || index === null) return null

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo view: ${current.alt}`}
      tabIndex={-1}
      className="fixed inset-0 z-[70] flex flex-col bg-paper/98 backdrop-blur-3xl outline-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {/* Top Floating Action Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 border-b border-rule bg-paper-2/90">
        <div className="flex items-center gap-3">
          <img
            src="/logo/logo-white.webp"
            alt="দর্পণ (Dorpon)"
            className="h-7 w-auto object-contain"
          />
          <div className="border-l border-rule pl-3">
            <span className="text-xs text-accent font-medium block">
              Dorpon Portfolio Lightbox
            </span>
            <p className="text-xs text-muted">
              {index + 1} of {total} Photographs
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="w-10 h-10 rounded-full bg-paper-3 hover:bg-paper text-ink flex items-center justify-center transition-colors cursor-pointer border border-rule"
        >
          <IconClose className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center p-3 sm:p-8 overflow-hidden select-none"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        {/* Previous Button (Left) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photograph"
          className="absolute left-3 sm:left-6 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full green-glass-panel text-ink hover:bg-accent hover:text-paper flex items-center justify-center transition-colors cursor-pointer shadow-2xl active:scale-95"
        >
          <IconArrowLeft className="w-5 h-5" />
        </button>

        {/* High-res Image */}
        <div className="relative max-h-[78vh] max-w-[92vw] flex items-center justify-center rounded-card overflow-hidden shadow-card border border-rule">
          <span
            aria-hidden="true"
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
              loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            style={{ backgroundImage: `url(${current.blur})` }}
          />
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            onLoad={() => setLoaded(true)}
            className={`max-h-[78vh] w-auto max-w-full object-contain transition-opacity duration-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Next Button (Right) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photograph"
          className="absolute right-3 sm:right-6 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full green-glass-panel text-ink hover:bg-accent hover:text-paper flex items-center justify-center transition-colors cursor-pointer shadow-2xl active:scale-95"
        >
          <IconArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Info Strip */}
      <div className="px-4 sm:px-8 py-3.5 border-t border-rule bg-paper-2/90 flex items-center justify-between text-xs text-muted">
        <p className="truncate max-w-md text-ink font-medium">
          {current.alt || 'দর্পণ (Dorpon) Photography'}
        </p>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-xs text-muted/60">
            [Left / Right] Navigation · [Esc] Close
          </span>
          <a
            href={current.src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline text-xs"
          >
            Full Size ↗
          </a>
        </div>
      </div>
    </div>
  )
}
