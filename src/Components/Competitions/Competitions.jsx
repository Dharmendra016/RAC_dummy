import React from 'react'
import "./Competitions.css"
import WorkshopCart from './WorkshopCart/WorkshopCart'
import workshopData from '../../workshopData'

function Competitions() {
  return (
    <div className='Competitions'>

        <h2 className='h1-heading'>Workshop</h2>

        <div className='workshop-carts'>
            {
                workshopData.map((data) => {
                    return <WorkshopCart key={data.id} data = {data}></WorkshopCart>
                })
            }
        </div>

        <div>
            <img src="./blob" alt="" />
        </div>

    </div>
  )
}

export default Competitions
