import React from 'react'
import "./Workshopsection.css"
import data from '../../data'
import Cart from '../Cart/Cart'

function WorkshopSection() {

  return (
    <div className='workshop-section'>
          
      <h2 className="h1-heading">Competitions</h2>

      <div className='carts'>
          {
            data.map((dat) => {
              return <Cart key= { dat.id }data = {dat}/>
            })
          
          }
      </div>

    </div>
  )
}

export default WorkshopSection
