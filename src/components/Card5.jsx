import React from 'react'

const Card5 = ({data}) => {
  return (
    <div className="p-2 m-2 justify-center relative rounded-md">
      <img src={data.img} className="w-full h-full p-2"/>
      <div className="absolute bottom-0 right-[20%] bg-[#150a3f75] px-6 py-1 rounded-full">
        <div className="flex">
          <p className="text-xs font-bold text-white">{data.name}</p>
          <p className="ml-2 text-xs font-bold text-white">${data.price}</p>
          </div>
        <p className="text-xs font-bold text-white">{data.sale}</p>
      </div>
    </div>
  )
}

export default Card5  