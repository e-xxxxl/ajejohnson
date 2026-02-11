import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavPage from './Components/Pages/NavPage'
import Section1 from './Components/HeroSection/Section1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      
      <Section1/>
    </>
  )
}

export default App
