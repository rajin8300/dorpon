import { useEffect } from 'react'
import SectionIntro from './SectionIntro'

declare global {
  interface Window {
    FB?: {
      init: (options: any) => void
      XFBML: {
        parse: (element?: HTMLElement | null) => void
      }
      Event: {
        subscribe: (event: string, callback: (msg: any) => void) => void
      }
    }
    __setupLazyFB?: () => void
    __setupFallbackFB?: () => void
    __dorponFBPlayers?: Array<{ id: string; player: any }>
    __dorponYTPlayer?: any
    __pauseYouTube?: () => void
    __pauseFacebook?: () => void
  }
}

const videos = [
  { id: 'fb-video-22', href: 'https://www.facebook.com/reel/1752194542531779', title: 'Dorpon — Featured Reel' },
  { id: 'fb-video-1', href: 'https://www.facebook.com/reel/1531786270788297', title: 'Dorpon — Maroon Saree Walk' },
  { id: 'fb-video-11', href: 'https://www.facebook.com/reel/1021736793909368', title: 'Dorpon — Haldi Reel' },
  { id: 'fb-video-6', href: 'https://www.facebook.com/reel/1634892954699923', title: 'Dorpon — Portrait Reel' },
  { id: 'fb-video-2', href: 'https://www.facebook.com/reel/1461538111464192', title: 'Dorpon — Red Saree Bridge' },
  { id: 'fb-video-3', href: 'https://www.facebook.com/watch/?v=1445836667289025', title: 'Dorpon — Red Saree Station' },
  { id: 'fb-video-4', href: 'https://www.facebook.com/reel/2316011832096431', title: 'Dorpon — Portrait (Ipty)' },
  { id: 'fb-video-5', href: 'https://www.facebook.com/watch/?v=2521324541592505', title: 'Dorpon — Yellow Saree Palms' },
  { id: 'fb-video-7', href: 'https://www.facebook.com/reel/1141303574017253', title: 'Dorpon — Commercial Shoot' },
  { id: 'fb-video-9', href: 'https://www.facebook.com/reel/499348682557516', title: 'Dorpon — Green Saree Portrait' },
  { id: 'fb-video-10', href: 'https://www.facebook.com/reel/3950935668468565', title: 'Dorpon — Purple Dress Portrait' },
  { id: 'fb-video-0', href: 'https://www.facebook.com/reel/1224904015771152', title: 'Dorpon — Rag Day Drone' },
]

export default function Videos() {
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
      id="videos"
      aria-labelledby="videos-title"
      className="section-tint-violet border-y border-white/10 py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow="Film"
          title="Behind the Lens"
          titleId="videos-title"
          description="Watch our stories come to life."
        />

        <div className="video-grid reveal">
          {videos.map((vid) => (
            <figure key={vid.id}>
              <div className="video-frame">
                <div
                  id={vid.id}
                  className="fb-video"
                  data-href={vid.href}
                  data-show-text="false"
                  data-autoplay="false"
                  data-allowfullscreen="true"
                  title={vid.title}
                />
              </div>
              <figcaption className="video-cap">{vid.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
