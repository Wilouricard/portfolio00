import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=''>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default App
