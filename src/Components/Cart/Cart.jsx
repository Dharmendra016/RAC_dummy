import React from 'react'
import "./Cart.css"

function Cart({data}) {
  return (
    <div className='cart'>
        
        {
            data.id % 2 == 0 ? 
            <div className='left-side-cart'>
                <img src={data.image} alt="Hello image" className='comp-image'/>

                <p className='sub-heading-comp'>{data.description}</p>
            </div>  
            :
            <div className='right-side-cart'>
                <p className='sub-heading-comp'>{data.description}</p> 
                <img src={data.image} alt="" className='comp-image'/>         
            </div>
        }

    </div>
  )
}

export default Cart
