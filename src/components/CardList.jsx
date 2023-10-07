import React from 'react'
import Ribbon from './Ribbon'
import Card from './Card';

const CardList = ({data}) => {
  console.log(data);
  return (
    <div className="w-screen mt-4 bg-slate-200">
      <Ribbon/>
      <div className="w-full flex mt-6">
        {data?
          data.map((item,index)=>(
            <Card data={item} key={index}/>
          )): "error no data found"
        }
      
      </div>
    </div>
  )
}

export default CardList