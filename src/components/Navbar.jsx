import React from 'react';
import { Link } from 'react-router-dom';
import {FaChevronDown,FaSearch,FaRegStar} from 'react-icons/fa';
import {BiGitCompare} from 'react-icons/bi';
import {AiOutlineShopping,AiOutlineUser} from 'react-icons/ai';
const Navbar = () => {
  return (
    <nav className="w-screen  t-0 r-0 z-30 bg-[#e9f2f5] lg:justify-center  justify-between ">
         <div className="flex">
            <div className="flex-col m-2 p-2 w-60"> 
            <Link to="/">
                <p className="text-2xl font-bold m-2 p-2">Quickies.</p>
                </Link>

            </div>
            <div className="flex rounded-full mt-0 mb-0 pt-0 pb-0 items-center justify-start">
            
                <input type="text" placeholder='search for products' className="rounded-l-full flex text-sm w-80 h-10 mr-0 pr-0 border-2 border-[#d4d1d4]"/>
                <div className="flex ml-0 pl-0  h-10">
                    <p className="flex px-5 h-10 text-sm font-thin border-t-2 border-b-2 border-[#d8d4d8] items-center">All Categories</p>
                    <p className="justify-end flex text-xs font-thin border-t-2 border-b-2 border-[#d3cfd3] items-center px-2"><FaChevronDown/></p>
                </div>
                <p className=" flex  p-2.5 bg-orange-600 rounded-r-full pr-3 pl-3">
                    <FaSearch className="text-[#ffffff] text-xl text-bold" />
                </p>
            
            </div>
            <div className="justify-center items-center p-2">
                <p className=" flex justify-center items-center mt-3"><FaRegStar/></p>
                <p className="text-sm">WhishList</p>
            </div>
            <div className="justify-center items-center p-2">
                <p className=" flex justify-center items-center mt-3"><BiGitCompare/></p>
                <p>Compare</p>
            </div>
            <div className="justify-center items-center p-2">
                <p className=" flex justify-center items-center mt-3"><AiOutlineShopping/></p>
                <p>Cart</p>
            </div>
            <div className="flex justify-start items-center">
                <AiOutlineUser className="text-4xl text-orange-500 flex justify-start"/>
                <div className="flex justify-center w-full">
                    <button className="mx-1 px-2 flex rounded-full bg-[#ec463093]">
                        Sign Up
                    </button>
                    <button className="mx-1 px-2 flex rounded-full bg-[#37f78dc9]">
                        Login
                    </button>
                </div>
            </div>
        </div>   

    </nav>
  )
}

export default Navbar