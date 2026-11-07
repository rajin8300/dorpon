import { useEffect } from 'react'
import SectionIntro from './SectionIntro'

const btsReels = [
  { id: 'fb-video-21', href: 'https://www.facebook.com/reel/979993120918648', title: 'Dorpon — Rag Day 2K25' },
  { id: 'fb-video-17', href: 'https://www.facebook.com/reel/1175265943968509', title: 'Dorpon — BTS Maroon Bench' },
  { id: 'fb-video-18', href: 'https://www.facebook.com/reel/715877131010386', title: 'Dorpon — Nabin Boron' },
  { id: 'fb-video-19', href: 'https://www.facebook.com/reel/1079451777327036', title: 'Dorpon — BTS Boishakhi' },
  { id: 'fb-video-20', href: 'https://www.facebook.com/reel/1467362517590851', title: 'Dorpon — BTS Red Saree' },
]

export default function BtsReels() {
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
      id="bts-reels"
      aria-labelledby="bts-reels-title"
      className="border-b border-white/10 py-20 sm:py-28 lg:py-36 bg-[#141210]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow="Behind the Scenes"
          title="BTS Reels"
          titleId="bts-reels-title"
          description="Behind-the-scenes moments from our shoots."
        />

        <div className="reel-grid reveal">
          {btsReels.map((reel) => (
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
