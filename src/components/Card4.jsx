import React,{useState} from 'react'
const fetchIcon=(icon)=>{
  return(
    {icon}
  )
}

const Card4 = ({data}) => {
  const [icon,setIcon]=useState(data.icon)
  
  return (
    
<div>
  <div className="justify-start items-center w-[25%]">
    <div className="pl-4">
    {
      data.icon
    }
    </div>
    <div>
      <p>
        Theme Beyond Technology
      </p>
    </div>
    <div className="">
      <p>2 Years</p>
      <p>Verified
       {data.icon}
      </p>
      <p>40k Customers</p>
    </div>
  </div>
  <div>
    <p>NO.1 Vendor Rankings</p>
    <p>Annual Sales $45,000,</p>
  </div>
  <div className="gird grid-cols-3">
    <div>
      <p>
        +/- 5Hr
      </p>
      <p>
        Respose Time
      </p>
    </div>
    <div>
      <p>5,000,000+</p>
      <p>Transactions</p>
    </div>
    <div>
      <p>100%</p>
      <p>on-time delivery</p>
    </div>
  </div>
</div>

  )
}

export default Card4