import React from 'react';



const Card = ({data}) => {
  return (
    <div className="mx-2">
      <img src={data.img} className="rounded-lg"/>
      <div className="w-full justify-between items-center">
        <p className="font-bold text-sm">
          {data.name}
          <span >
              {' '}${data.price}
          </span>
          <span className="bg-orange-600 text-xs p-1 m-1 rounded-lg text-white">
            {' '}-{data.offer}%</span> 
        </p>
        <span className="text-xs font-extralight text-slate-600">
        {data.orders} Orders</span>

      </div>
    </div>
  )
}

export default Card