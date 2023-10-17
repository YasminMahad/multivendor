import React from 'react'

const Trending = () => {
  return (
    <div>
        {
        /*------------------------------------------------------------------------------------

        ----------------WILL CREATE A CARD COMPONENT TO LOOP THROUGH THE ITEMS------------------*/
        }
        <p className="text-bold m-2 p-2 text-lg text-orange-600">
            Trending 
            <span className="text-black ml-2">Products</span></p>
        <div className="relative">
            <img src="./src/assets/img11.jpg" className="w-full h-full"/>
            <div className="justify-between items-center absolute top-0">
                <p className="justify-center items-center text-center text-bold text-md p-2 m-2">Product.Name</p>
                <p className="justify-center items-center text-center text-bold text-md p-2 m-2">Product.Price</p>
                <p className="justify-center items-center text-center text-bold text-md p-2 m-2">Product.order</p>
                <p className="justify-center items-center text-center text-bold text-md p-2 m-2">Product.Star</p>

            </div>
            
        </div>
        <div>
            <img src="./src/assets/img11.jpg" className="w-full h-full"/>
            <div>
                <p>Product.Name</p>
                <p>Product.Price</p>
                <p>Product.order</p>
                <p>Product.Star</p>

            </div>
            
        </div>
        <div>
            <img src="./src/assets/img11.jpg" className="w-full h-full"/>
            <div>
                <p>Product.Name</p>
                <p>Product.Price</p>
                <p>Product.order</p>
                <p>Product.Star</p>

            </div>
            
        </div>
        <div>
            <img src="./src/assets/img11.jpg" className="w-full h-full"/>
            <div>
                <p>Product.Name</p>
                <p>Product.Price</p>
                <p>Product.order</p>
                <p>Product.Star</p>

            </div>
            
        </div>
    </div>
  )
}

export default Trending