import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavPage from './Components/Pages/NavPage'

import { Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      
      <Routes>
        <Route path="/" element={<NavPage />} />
        {/* <Route path="/section1" element={<Section1 />} /> */}
      </Routes>
    </>
  )
}

export default App
