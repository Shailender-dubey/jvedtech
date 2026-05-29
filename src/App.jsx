import { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Services from './components/Services'
import Initiatives from './components/Initiatives'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  const [loading, setLoading] = useState(true)
  useScrollReveal([loading])

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div
        className={`transition-opacity duration-1000 ease-out ${
          loading ? 'pointer-events-none h-screen overflow-hidden opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <About />
          <Services />
          <Initiatives />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
