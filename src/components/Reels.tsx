import { useEffect } from 'react'
import SectionIntro from './SectionIntro'

const fbReels = [
  { id: 'fb-video-12', href: 'https://www.facebook.com/reel/2881895688836059', title: 'Dorpon — Cinematic Reel' },
  { id: 'fb-video-13', href: 'https://www.facebook.com/reel/1788533128992811', title: 'Dorpon — Glow-Up Reel' },
  { id: 'fb-video-14', href: 'https://www.facebook.com/reel/1446444140752490', title: 'Dorpon — Holud Makeover Reel' },
  { id: 'fb-video-15', href: 'https://www.facebook.com/reel/4281918682137578', title: 'Dorpon — Elegance Reel' },
  { id: 'fb-video-16', href: 'https://www.facebook.com/reel/1073006068217205', title: 'Dorpon — Blue Saree Roses' },
]

export default function Reels() {
  useEffect(() => {
    if (window.__setupLazyFB) window.__setupLazyFB()
    if (window.__setupFallbackFB) window.__setupFallbackFB()
    if (window.FB && window.FB.XFBML) {
      try {
        window.FB.XFBML.parse()
      } catch (e) {}
    }
  }, [])

  return (
    <section
      id="reels"
      aria-labelledby="reels-title"
      className="border-b border-white/10 py-20 sm:py-28 lg:py-36 bg-[#141210]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow="Reels"
          title="Vertical Reels"
          titleId="reels-title"
          description="Short vertical stories from our page."
        />

        <div className="reel-grid reveal">
          {/* YouTube Short Reel */}
          <figure>
            <div className="reel-frame">
              <iframe
                id="yt-player-0"
                src="https://www.youtube-nocookie.com/embed/Su47lhgitkc?enablejsapi=1"
                title="Ipty - Cinematic Wedding Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <figcaption className="video-cap">Ipty — Wedding Reel</figcaption>
          </figure>

          {/* Facebook Vertical Reels */}
          {fbReels.map((reel) => (
            <figure key={reel.id}>
              <div className="reel-frame">
                <div
                  id={reel.id}
                  className="fb-video"
                  data-href={reel.href}
                  data-show-text="false"
                  data-autoplay="false"
                  data-allowfullscreen="true"
                  title={reel.title}
                />
              </div>
              <figcaption className="video-cap">{reel.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
