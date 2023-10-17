import React,{useState} from 'react'

const Card2 = ({data}) => {
  return (

    <div className="w-full">
                <img src="./src/assets/img19.jpg" className="w-full h-full"/>
                <div className="">
                     <p>{data.name}</p>
                    <p>{data.price}</p>
                    <p>{data.offerPercentage}</p>
                    <p>{data.rating}</p>
                    <p>{data.order}</p>
                </div>
            </div>
  )
}

export default Card2