import About from './components/About'
import BtsReels from './components/BtsReels'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Portfolio from './components/Portfolio'
import Reels from './components/Reels'
import Videos from './components/Videos'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Portfolio />
        <Videos />
        <Reels />
        <BtsReels />
        <Packages />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
