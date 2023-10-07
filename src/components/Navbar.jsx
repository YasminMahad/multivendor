import React from 'react';
import { Link } from 'react-router-dom';
import {FaChevronDown,FaSearch,FaRegStar} from 'react-icons/fa';
import {BiGitCompare} from 'react-icons/bi';
import {AiOutlineShopping,AiOutlineUser} from 'react-icons/ai';
const Navbar = () => {
  return (
    <nav className="w-screen fixed t-0 r-0 z-30 bg-[#e9f2f5] lg:justify-center  justify-between ">
         <div className="flex">
            <div className="flex-col m-2 p-2 w-60"> 
            <Link to="/">
                <p className="text-2xl text-bold m-2 p-2">MultiVendor.</p>
                </Link>

            </div>
            <div className="flex rounded-full w-[50%] h-20 items-center justify-start">
            
                <input type="text" placeholder='search for products' className="rounded-l-full flex text-sm w-80 mr-0 pr-0"/>
                <div className="flex ml-0 pl-0 border-l-2">
                    <p className="flex ml-3 mr-5">All Categories</p>
                    <p className="justify-end flex"><FaChevronDown/></p>
                </div>
                <p className=" flex m-2 p-2 bg-orange-600 rounded-r-full">
                    <FaSearch className="text-[#ffffff] text-lg text-bold" />
                </p>
            
            </div>
            <div className="justify-center items-center p-2">
                <p className=" flex justify-center items-center"><FaRegStar/></p>
                <p className="text-sm">WhishList</p>
            </div>
            <div className="justify-center items-center p-2">
                <p className=" flex justify-center items-center"><BiGitCompare/></p>
                <p>Compare</p>
            </div>
            <div className="justify-center items-center p-2">
                <p className=" flex justify-center items-center"><AiOutlineShopping/></p>
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