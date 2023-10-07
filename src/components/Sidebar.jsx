import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import {HiMenu} from 'react-icons/hi';
import {TbBrandOpenai} from 'react-icons/tb';

const Sidebar = () => {
  return (
    <div className="w-screen flex bg-gray-800 h-[50px] justify-start">
        <div className="w-[23%] px-3 mx-3 my-0 flex bg-blue-600 justify-between">
            <HiMenu className="px-1 mx-1 text-2xl my-auto px-auto" />
            <p className="text-sm text-[#ffffff] font-bold px-2 mx-2 my-auto px-auto">
              BROWSE CATEGORIES
            </p>
            <FaChevronDown className="pl-2 ml-2 text-lg my-auto px-auto"/>
        </div>
        <div className="p-2 m-2 items-center text-center text-white text-sm font-bold">
          <p>HOME</p>
        </div>
        <div className="p-2 m-2 items-center text-center text-white text-sm font-bold">
          <p>SHOP</p>
        </div>
        <div className="p-2 m-2 items-center text-center text-white text-sm font-bold">
          <p>PROMOTIONS</p>
        </div>
        <div className="p-2 m-2 items-center text-center text-white text-sm font-bold">
          <p>BLOGS</p>
        </div>
        <div className="p-2 m-2 items-center text-center text-white text-sm font-bold">
          <p>SPECIAL</p>
        </div>
        <div className="p-2 m-2 items-center text-center text-white text-sm font-bold">
          <p>PAGES</p>
        </div>
        <div className="p-2 m-2 items-center text-center text-white text-sm font-bold">
          <p>VENDOR STORE LIST</p>
        </div>
        <div className="p-2 m-2 ml-8 items-center text-center text-white text-sm font-bold flex justify-end">
          <p className="flex">SUPER DISCOUNT</p>
          <TbBrandOpenai className="flex text-orange-600 text-2xl ml-2"/>
        </div>
    </div>
  )
}

export default Sidebar