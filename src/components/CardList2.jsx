import React from 'react'
import Ribbon from './Ribbon'
import Card from './Card';

const CardList2 = ({data}) => {
  console.log(data);
  return (
    <div className="w-screen mt-20 bg-slate-200">
    <div className="w-screen mt-20 justify-between flex">
        
            <p className="font-bold text-3xl flex w-[30%] items-center p-2 m-2">
                Top <span className="text-orange-600 ml-2">Selections</span>
            </p>
            
            
            <p className="flex w-[30%] items-center p-2 m-2 justify-end">
                View More
            </p>

        
        </div>

    
    <div className="w-screen mt-2">
        
      
      <div className="w-full flex">
        {data?
          data.map((item,index)=>(
            <Card data={item} key={index}/>
          )): "error no data found"
        }
      
      </div>
    </div>
    </div>
  )
}

export default CardList2