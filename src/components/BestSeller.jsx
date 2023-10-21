import React, {useState} from 'react'
import {FaTruckFast} from 'react-icons/fa6';
import {BsSmartwatch} from 'react-icons/bs';
import {HiOutlineLightBulb} from 'react-icons/hi';
import {GiConverseShoe,GiForkKnifeSpoon,GiQueenCrown} from 'react-icons/gi';
import {MdOutlineSportsTennis} from 'react-icons/md';
import {AiOutlineControl} from 'react-icons/ai';
import {bestVendor} from '../data/bestVendor';
import Card4 from './Card4';

const BestSeller = () => {
  const [stateOne,setStateOne]=useState(true);
  const [stateTwo,setStateTwo]=useState(false);
  const [stateThree,setStateThree]=useState(false);
  const [stateFour,setStateFour]=useState(false);
  const [stateFive,setStateFive]=useState(false);
  const [stateSix,setStateSix]=useState(false);
  return (
    <div>
      <div className="pt-10 w-full">
        <p className="text-4xl font-bold text-center pt-12 pb-12 mt-12 mb-5">
          Find Best Seller Vendor
          </p>
      </div>
      {/*----CREATE A CARD TO TAKE THE NAME AND ICON AS THE PARAMETERS-------*/}
      <div className="px-10"> 
        <div className="grid grid-cols-5 w-full px-10 justify-between items-center rounded-md mb-2">
          <div 
          className={stateOne ? "justify-center items-center py-4 px-5 rounded-md bg-orange-600 text-white hover:cursor-pointer":"justify-center items-center py-6 px-8 rounded-md hover:cursor-pointer"} 
          onClick={
            ()=>{setStateOne(true),setStateTwo(false),setStateThree(false),setStateFour(false),setStateFive(false),setStateSix(false)}}>
            <p className="justify-center items-center rounded-full text-center flex w-full">
              <FaTruckFast className={stateOne ? "text-5xl rounded-full p-2  text-orange-600 bg-white font-light ":"text-5xl rounded-full p-2  text-slate-500 font-light "}/></p>
            <p className="text-xs hover:cursor-pointer flex justify-center text-center items-center">ALL CATEGORIES</p>
          </div>
          <div 
          className={stateTwo ? "justify-center items-center py-4 px-5 rounded-md bg-orange-600 text-white hover:cursor-pointer":"justify-center items-center py-6 px-8 rounded-md hover:cursor-pointer"} 
          onClick={
            ()=>{setStateOne(false),setStateTwo(true),setStateThree(false),setStateFour(false),setStateFive(false),setStateSix(false)}}>
          <p className="justify-center items-center rounded-full text-center flex w-full">
            <BsSmartwatch className={stateTwo ? "text-5xl rounded-full p-2  text-orange-600 bg-white font-light ":"text-5xl rounded-full p-2  text-slate-500 font-light "}/></p>
            <p className="text-xs hover:cursor-pointer flex justify-center text-center items-center">SMART WATCH</p>
          </div>
          <div 
          className={stateThree ? "justify-center items-center py-4 px-5 rounded-md bg-orange-600 text-white hover:cursor-pointer":"justify-center items-center py-6 px-8 rounded-md hover:cursor-pointer"} 
          onClick={
            ()=>{setStateOne(false),setStateTwo(false),setStateThree(true),setStateFour(false),setStateFive(false),setStateSix(false)}}>
          <p className="justify-center items-center rounded-full text-center flex w-full">
            <HiOutlineLightBulb className={stateThree ? "text-5xl rounded-full p-2  text-orange-600 bg-white font-light ":"text-5xl rounded-full p-2  text-slate-500 font-light "}/></p>
            <p className="text-xs hover:cursor-pointer flex justify-center text-center items-center">CONSUMER ELECTRONICS</p>
          </div>
          <div 
          className={stateFour ? "justify-center items-center py-4 px-5 rounded-md bg-orange-600 text-white hover:cursor-pointer":"justify-center items-center py-6 px-8 rounded-md hover:cursor-pointer"} 
          onClick={
            ()=>{setStateOne(false),setStateTwo(false),setStateThree(false),setStateFour(true),setStateFive(false),setStateSix(false)}}>
          <p className="justify-center items-center rounded-full text-center flex w-full">
            <GiForkKnifeSpoon className={stateFour ? "text-5xl rounded-full p-2  text-orange-600 bg-white font-light ":"text-5xl rounded-full p-2  text-slate-500 font-light "}/></p>
            <p className="text-xs hover:cursor-pointer flex justify-center text-center items-center">HOME APPLIANCE</p>
          </div>
          <div 
          className={stateFive ? "justify-center items-center py-4 px-5 rounded-md bg-orange-600 text-white hover:cursor-pointer":"justify-center items-center py-6 px-8 rounded-md hover:cursor-pointer"} 
          onClick={
            ()=>{setStateOne(false),setStateTwo(false),setStateThree(false),setStateFour(false),setStateFive(true),setStateSix(false)}}>
          <p className="justify-center items-center rounded-full text-center flex w-full">
            <GiConverseShoe className={stateFive ? "text-5xl rounded-full p-2  text-orange-600 bg-white font-light ":"text-5xl rounded-full p-2  text-slate-500 font-light "}/></p>
           <p className="text-xs hover:cursor-pointer flex justify-center text-center items-center"> SHOES & ACCESSORIES</p>
          </div><div></div><div></div>
          <div 
          className={stateSix ? "justify-center items-center py-4 px-5 rounded-md bg-orange-600 text-white hover:cursor-pointer":"justify-center items-center py-6 px-8 rounded-md hover:cursor-pointer"} 
          onClick={
            ()=>{setStateOne(false),setStateTwo(false),setStateThree(false),setStateFour(false),setStateFive(false),setStateSix(true)}}>
          <p className="justify-center items-center rounded-full text-center flex w-full">
            <MdOutlineSportsTennis className={stateSix ? "text-5xl rounded-full p-2  text-orange-600 bg-white font-light ":"text-5xl rounded-full p-2  text-slate-500 font-light "}/></p>
            <p className="text-xs hover:cursor-pointer flex justify-center text-center items-center">SPORTS & ENTERTAINMENT</p>
            </div>  
        </div>
      </div>
      {stateOne ? bestVendor.map((item,index)=>(<Card4 data={item} key={index}/>)):""}
      {stateTwo ? 
      bestVendor.filter((vendor)=>vendor.category == "watch").map((list,index)=>(<Card4 data={list} key={index}/>)):""}
      {stateThree ? 
      bestVendor.filter((vendor)=>vendor.category == "electronic").map((list,index)=>(<Card4 data={list} key={index}/>)):""}
      {stateFour ? 
      bestVendor.filter((vendor)=>vendor.category == "appliance").map((list,index)=>(<Card4 data={list} key={index}/>)):""}
      {stateFive ? 
      bestVendor.filter((vendor)=>vendor.category == "shoes").map((list,index)=>(<Card4 data={list} key={index}/>)):""}
      {stateSix ? 
      bestVendor.filter((vendor)=>vendor.category == "sports").map((list,index)=>(<Card4 data={list} key={index}/>)):""}
        </div>
    
  )
}

export default BestSeller