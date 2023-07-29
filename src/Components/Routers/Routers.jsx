import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import About from '../About/About'
import Gallery from '../Gallery/Gallery'

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>

    </div>
  )
}

export default Routers
