import React from 'react'

const Categories = () => {
  return (
    <div className="w-screen">
        <div className="w-full  justify-center items-center p-2 m-2 mt-20">
        <div className="w-full flex items-center justify-center mt-20 mb-5 text-center">
            <p className="flex justify-center items-center text-4xl font-extrabold text-center">Choose
            <span className="text-orange-600 ml-2"> Category</span></p>
        </div>
        </div>
        <div>
            <div className="w-[280px] flex relative justify-center items-center ml-4">
             
                <img src="./src/assets/category1.jpg" className="object-cover flex rounded-lg"/>
                   <div className="absolute top-1 left-1">
                    <p>ON THE WEEKEND</p>
                    <p>TOP CLOTHING</p>
                    <button type="button">
                        SHOP NOW
                    </button>
                </div>
            </div>

        </div>
        <div>
            <div>
                <div>
                    <p>Top Ranking</p>
                </div>
                <div>
                    <div >
                        <img src="./src/assets/img9.jpg"/>
                    </div>
                    <div>
                        <img src="./src/assets/img8.jpg"/>
                    </div>
                </div>
                </div>

        </div>
        
        <div>
            <div>
                <div>
                    <p>Smart Phones</p>
                </div>
                <div>
                    <div>
                        <img src="./src/assets/img9.jpg"/>
                    </div>
                    <div>
                        <img src="./src/assets/img8.jpg"/>
                    </div>
                 </div>

        </div>
    </div>
       
        <div>
            
            <div>
                <div>
                    <p>Home Appliances</p>
                </div>
                <div>
                    <div>
                        <img src="./src/assets/img9.jpg"/>
                    </div>
                    <div>
                        <img src="./src/assets/img8.jpg"/>
                    </div>
            </div>

        </div>
        </div>
        
        <div>
            <div>
                <div>
                    <p>Sports</p>
                </div>
                <div>
                    <div>
                        <img src="./src/assets/img9.jpg"/>
                    </div>
                    <div>
                        <img src="./src/assets/img8.jpg"/>
                    </div>
            </div>
            </div>

        </div>
        </div>


  )
}

export default Categories