import React from 'react'
import Ribbon from './Ribbon'
import Card from './Card';

const CardList = ({data}) => {
  console.log(data);
  return (
    <div>
      <Ribbon/>
      <div>
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