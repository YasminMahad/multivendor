import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const Card3 = ({data}) => {
  return (
   
<div className="flex my-2">
            <img src="./src/assets/img11.jpg" className="w-[80px] h-[80px]"/>
            <div className="justify-between items-center">
                <p className="font-bold text-sm mt-1">{data.name}</p>
                <p className=" text-md text-orange-600 font-bold">${data.price}
                <span className="text-white bg-orange-600 font-bold text-sm px-1.5 ml-2 rounded-md">-{data.offerPercentage}%</span></p>
                <p className=" text-xs font-extralight flex mt-2">{data.order} +Orders~
                <span className="flex"><AiFillStar className="text-yellow-500 flex ml-1"/>{data.rating}</span></p>

            </div>
            
        </div>
  )
    
}

export default Card3
