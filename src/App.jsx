import { useState } from 'react'
import Preloader from './components/Preloader'
import HomeScreen from './HomeScreen'
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
        {!loading && <HomeScreen />}
      </div>
    </>
  )
}
