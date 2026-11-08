import { useState } from 'react'
import { SiteProvider } from './context/SiteContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Packages from './components/Packages'
import AboutAndFaq from './components/AboutAndFaq'
import BookingStudio from './components/BookingStudio'
import ContactBento from './components/ContactBento'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import { photos } from './data/gallery'

function MainContent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<string>('Wedding & Cinematography')

  const handleBookClick = () => {
    const studioEl = document.querySelector('#booking-studio')
    if (studioEl) {
      studioEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectPackage = (serviceValue: string) => {
    setSelectedService(serviceValue)
    const studioEl = document.querySelector('#booking-studio')
    if (studioEl) {
      studioEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-dvh bg-paper text-ink flex flex-col selection:bg-accent selection:text-paper w-full max-w-full">
      {/* Floating Glass Dock Navbar */}
      <Header onBookClick={handleBookClick} />

      <main id="main" className="flex-1 outline-none w-full max-w-full">
        {/* Viewport 1: Cinematic Bento / Split Hero */}
        <Hero
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
          onBookClick={handleBookClick}
        />

        {/* Viewport 2: Unified Media Showcase Hub (Films, Reels, BTS) */}
        <Showcase />

        {/* Viewport 3: Interactive Service Packages Strip */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* Viewport 4: Story Bento & Single-Open FAQ Accordion */}
        <AboutAndFaq />

        {/* Interactive Booking Studio Console */}
        <BookingStudio
          selectedService={selectedService}
          onServiceChange={(service) => setSelectedService(service)}
        />

        {/* Command Contact Bento & Mobile Quick-Connect */}
        <ContactBento onBookClick={handleBookClick} />
      </main>

      {/* Streamlined Footer */}
      <Footer />

      {/* Global Lightbox Modal */}
      <Lightbox
        photos={photos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(next) => setLightboxIndex(next)}
      />
    </div>
  )
}

export default function App() {
  return (
    <SiteProvider>
      <MainContent />
    </SiteProvider>
  )
}
