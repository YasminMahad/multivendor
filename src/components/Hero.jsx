import React from 'react'

const Hero = () => {
  return (
    <div className="w-screen flex justify-end items-center">
        
            <div className="w-[34%] justify-end items-center text-left">
                <p className="text-6xl font-extrabold">
                    Always <br/>Be Your <br/>
                    <span className="text-6xl text-orange-600 font-extrabold mt-4 mb-4">
                        MULTIVENDOR<br/>
                    </span>

               <span className="text-4xl text-slate-500 mt-2 mb-2">
                    Women </span><span className="text-4xl text-orange-600 mt-2 mb-2">Fashion
                    </span><br/> <span className="text-3xl text-slate-700 font-light">               
                    Total Order </span>:<span className="text-3xl font-bold"> $30.00</span>
                </p>
              
                <button className="mx-6 px-6 p-2 m-2 mt-10 rounded-full bg-blue-600 text-white font-bold">
                    Shop Now
                </button>
            </div>
            
          
            <img src="./src/assets/img4.png" className=" w-[550px] h-[550px] "/>
       
    </div>
  )
}

export default Hero