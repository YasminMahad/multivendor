import React from 'react'

const Ribbon = () => {
  return (
    <div className="w-screen h-15 flex justify-between items-center mt-20">
        <div className="w-[30%] p-2 m-2 flex">
        <p className="font-extrabold text-3xl">
            Super <span className="text-orange-600"> 
                Deals
            </span>
        </p>
        </div>
        <div className="w-[30%] p-2 m-2 flex">
            <p>
                Top products.Incredibale Prices 
                <span className="text-md font-bold bg-blue-600 p-2 m-1 rounded-lg">
                    00
                </span>
                <span className="text-md font-bold bg-blue-600 p-2 m-1 rounded-lg">
                    00
                </span>
                <span className="text-md font-bold bg-orange-600 p-2 m-1 rounded-lg">
                    00
                </span>
            </p>
        </div>
        <div className="w-[30%] p-2 m-2 flex justify-end">
            <p>
                View More
            </p>
        </div>

    </div>
  )
}

export default Ribbon