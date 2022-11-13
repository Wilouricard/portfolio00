import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=''>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
