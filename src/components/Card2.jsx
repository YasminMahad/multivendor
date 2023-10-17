import React,{useState} from 'react'
import {AiFillStar} from 'react-icons/ai';

const Card2 = ({data}) => {
  return (

    <div className="w-full">
                <img src="./src/assets/img19.jpg" className="w-full h-full"/>
                <div className="">
                     <p className="text-xs font-bold">{data.name}</p>
                    <p className="text-sm font-bold mt-2">${data.price}<span className="ml-2 bg-orange-600 text-white font-bold rounded-md px-1 py-0.5"> 
                    -{data.offerPercentage}%</span></p>
                    <p className="text-xs text-slate-500 font-extralight flex pt-2">{data.order} +Orders~<span className="ml-2 flex">
                        <AiFillStar className="w-5 h-5 text-yellow-500 flex mr-1"/>{data.rating}</span> </p>
                </div>
            </div>
  )
}

export default Card2