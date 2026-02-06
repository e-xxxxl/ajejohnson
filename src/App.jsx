import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavPage from './Components/Pages/NavPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavPage/>
    </>
  )
}

export default App
