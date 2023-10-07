import React from 'react';



const Card = ({data}) => {
  return (
    <div>
      <img src={data.img} className=""/>
      <div>
        <p>
          {data.name}
          <span>
            {data.price}
          </span>
        </p>
        {data.orders}

      </div>
    </div>
  )
}

export default Card