import React, { useState } from 'react'
import "./WorkshopCart.css"
import {FcLikePlaceholder} from "react-icons/fc";
import {FcLike} from "react-icons/fc"
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';

function WorkshopCart({data}) {

    const[clicked , setClicked] = useState(false);

    function clickHandeler(){
        if( clicked === false){
            setClicked(true);
            toast.success("Liked");
        }
        else{
            toast.error("Not liked");
            setClicked(false);
        }
    }

  return (
    <div className='workshop-cart'>
        <img src={data.image} alt=""  className="workshop-img" />

        <div className='like-sec'>
            <h3 className='workshop-heading'>{data.title}</h3>
            <div className="likeBtn">
                    <button onClick={clickHandeler} className='likeBtn'>
                        {clicked ?  <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>}
                        
                    </button>
            </div>
        </div>

    </div>
  )
}

export default WorkshopCart
