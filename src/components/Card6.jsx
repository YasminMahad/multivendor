import React from 'react'

const Card6 = ({data}) => {
  return (
    <div>
        <div>
          <img src={data.img}/>
        </div>
        <div>
          message.icon
        </div>
        <div>
          {data.title}
        </div>
        <div>
          {data.header}
        </div>
        <div>
          {data.content}
        </div>
        <div>
          {data.author}
        </div>
        <div>
          {data.published}
        </div>
    </div>
  )
}

export default Card6