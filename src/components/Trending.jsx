import React from 'react'
import Card3 from './Card3';
import { trending } from '../data/trending';

const Trending = () => {
  return (
    <div className="w-full justify-center items-center">
      
        <p className="text-bold m-2 p-2 text-lg text-orange-600">
            Trending 
            <span className="text-black ml-2">Products</span></p>
            {trending ? trending.map((item,index)=>(<Card3 data={item} key={index}/>)):""}
        
        
    </div>
  )
}

export default Trending