import React from 'react'
import Carousel from './Carousel'
import Trending from './Trending'
import { Link } from 'react-router-dom'

const Sales = () => {
  return (
    <div>
        <div>
            <Carousel/>
        </div>
        <div>
            <Trending/> 
        </div>
        <div>
            <img src="./src/assets/banner1.jpg"/>
            <div>
                <p>35% Discount</p>
                <p>Smart Conditioner</p>
                <p>This is the best offer on the market</p>
                <button>
                    SHOP NOW
                </button>
            </div>
        </div>
        <div>
        <div>
            <p>
                FLASH SALES TODAY
            </p>
        </div>
        <div>
            <p>Flash</p>
            <p>Popular</p>
            <p>Top Rated</p>
        </div>
        </div>
        <div>{/* ------------------------------------------------------------------------------
                -------Will Replace the Below with a card to prevent repeatation------------------*/}
            <div>
                <img src="./src/assets/img19.jpg"/>
                <div>
                    <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div>
                <img src="./src/assets/img19.jpg"/>
                <div>
                    <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div>
                <img src="./src/assets/img19.jpg"/>
                <div>
                    <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div>
                <img src="./src/assets/img19.jpg"/>
                <div>
                    <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div>
                <img src="./src/assets/img19.jpg"/>
                <div>
                    <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div>
                <img src="./src/assets/img19.jpg"/>
                <div>
                    <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div>
                <img src="./src/assets/img19.jpg"/>
                <div>
                    <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            <div>
                <img src="./src/assets/img19.jpg"/>
                <div>
                    <p>Product.Name</p>
                    <p>Product.Price</p>
                    <p>Product.Order</p>
                    <p>Product.Star</p>
                </div>
            </div>
            
        </div>



    </div>
  )
}

export default Sales