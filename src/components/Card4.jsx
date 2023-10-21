import React,{useState} from 'react';
//import CardList4 from './CardList4';
import Card5 from './Card5';

{/* -------------------------******************************************-----------------------
--------------HAVING TROUBLE RENDERING THE ICON COMPONENT!!!!!-will fix later-----------------*/}

const fetchIcon=(icon)=>{
  return(
    {icon}
  )
}

const Card4 = ({data}) => {
  const [icon,setIcon]=useState(data.icon)
  
  return (
    
<div className="py-4 px-auto bg-slate-200 flex my-6 mx-auto rounded-md m-2">
  <div className="justify-start items-center w-[40%] p-2">
    
    <div className="pl-4 flex">
    {
      //data.icon
    }
    </div>
    <div className="justify-between items-center p-2">
      <p className="font-bold text-md text-center">
        {data.companyName}
      </p>
    </div>
    <div className="flex w-full justify-between items-center px-2">
      <p className="text-xs pl-4 text-slate-500">2 Years</p>
      <p className="text-sm font-bold text-blue-600">Verified
       {//data.icon}
}
      </p>
      <p className="text-xs font-light text-slate-500">{data.customers}Customers</p>
    </div>
  
  <div className="mt-2 text-sm text-red-600 px-2 py-1 m-2 justify-between flex bg-[#e69c9c79] rounded-lg">
    <p className="p-2 m-2 border-r pr-16 border-slate-500 text-xs font-bold">No.1 Vendor Rankings</p>
    <p className="p-2 m-2 text-xs font-bold">Annual Sales $45,000,</p>
  </div>
  <div className="grid grid-cols-3  ">
    <div className="p-2 w-full mx-2">
      <p className="text-xl font-bold">
        +/- {data.response}Hr
      </p>
      <p className="text-sm text-slate-400">
        Respose Time
      </p>
    </div>
    <div className="px-2 w-full mx-2 border-x  border-slate-400">
      <p className="text-xl font-bold">{data.transactions}+</p>
      <p className="text-sm text-slate-400">Transactions</p>
    </div>
    <div className="p-2 w-full mx-2">
      <p className="text-xl font-bold">100%</p>
      <p className="text-sm text-slate-400">on-time delivery</p>
    </div>
  </div>
</div>
<div className="flex w-full p-2 m-2">
  {data.items.map((item,index)=>(<Card5 key={index} data={item}/>))}
</div>
</div>

  )
}

export default Card4