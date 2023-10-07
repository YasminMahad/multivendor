import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import {HiMenu} from 'react-icons/hi';

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
        <div>
          <p>HOME</p>
        </div>
        <div>
          <p>SHOP</p>
        </div>
        <div>
          <p>PROMOTIONS</p>
        </div>
        <div>
          <p>BLOGS</p>
        </div>
        <div>
          <p>SPECIAL</p>
        </div>
        <div>
          <p>PAGES</p>
        </div>
        <div>
          <p>VENDOR STORE LIST</p>
        </div>
        <div>
          SUPER DISCOUNT
        </div>
    </div>
  )
}

export default Sidebar