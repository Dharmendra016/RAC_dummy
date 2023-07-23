import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        {/* <Route path ="/about" element ={<Herosection/>}  /> */}
      </Routes>

    </div>
  )
}

export default Routers
