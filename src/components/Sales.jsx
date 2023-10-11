import React from 'react'
import Carousel from './Carousel'
import Trending from './Trending'
import { Link } from 'react-router-dom'

const Sales = () => {
  return (
    <div>
    <div className="flex w-full">
    <div className="flex-row w-[20%] justify-between">
        <div className="flex w-full">
            <Carousel/>
        </div>
        <div className="flex w-full">
            <Trending/> 
        </div>


        </div>
        <div className="">
        <div className="w-full ml-4 mb-16 pr-6">
            <img src="./src/assets/banner1.jpg" className="w-[98%] h-full"/>
           {/*}
            <div>
                <p>35% Discount</p>
                <p>Smart Conditioner</p>
                <p>This is the best offer on the market</p>
                <button>
                    SHOP NOW
                </button>
            </div>
  */}
        </div>
        <div className="flex justify-between items-center">
        <div className="justify-start items-center p-2 w-[40%]">
            <p className="text-lg font-bold ml-4 ">
                FLASH <span className="text-orange-600 mx-auto">SALES</span> TODAY<span className="text-orange-600 ml-1">!!!</span> 
            </p>
        </div>
        <div className="w-[40%] flex justify-end">
            <p className="mx-4 px-4 font-bold text-xs">Flash</p>
            <p className="mx-4 px-4 font-bold text-xs">Popular</p>
            <p className="mx-4 px-4 font-bold text-xs text-orange-600">Top Rated</p>
        </div>
        </div>
        <div className="grid grid-cols-4 justify-between items-center">{/* ------------------------------------------------------------------------------
                -------Will Replace the Below with a card to prevent repeatation------------------*/}
            <div className="w-full">
                <img src="./src/assets/img19.jpg" className="w-full h-full"/>
                <div className="">
                     <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Discount</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div className="w-full">
                <img src="./src/assets/img19.jpg" className="w-full h-full"/>
                <div>
                     <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Discount</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div className="w-full">
                <img src="./src/assets/img19.jpg" className="w-full h-full"/>
                <div>
                     <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Discount</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div className="w-full"> 
                <img src="./src/assets/img19.jpg" className="w-full h-full"/>
                <div>
                     <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Discount</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div className="w-full">
                <img src="./src/assets/img19.jpg" className="w-full h-full"/>
                <div>
                     <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Discount</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div className="w-full">
                <img src="./src/assets/img19.jpg" className="w-full h-full"/>
                <div>
                     <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Discount</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div className="w-full">
                <img src="./src/assets/img19.jpg" className="w-full h-full"/>
                <div>
                     <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Discount</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div className="w-full">
                <img src="./src/assets/img19.jpg" className="w-full h-full"/>
                <div>
                    <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Discount</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            </div>
        </div>


</div>
    </div>
  )
}

export default Sales