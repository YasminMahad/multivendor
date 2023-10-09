import React from "react";

const Categories = () => {
  return (
    <div className="w-screen">
      <div className="w-[99%] p-2 m-2 mt-20 flex">
        <div className="w-full flex items-center justify-center mt-20 mb-5 text-center">
          <p className="flex justify-center items-center text-4xl font-extrabold text-center">
            Choose
            <span className="text-orange-600 ml-2"> Category</span>
          </p>
        </div>
      </div>
      <div className="flex">
        <div>
          <div className="w-[280px] flex relative justify-center items-center ml-4">
            <img
              src="./src/assets/category1.jpg"
              className="object-cover flex rounded-lg"
            />
            <div className="absolute top-1 left-1 m-2 p-3 items-center justify-center">
              <p className="text-xs text-white pt-2">
                ON THE <span className="text-orange-600">WEEKEND</span>
              </p>
              <p className="text-xl mt-1 font-bold text-orange-600">
                TOP
                <span className="text-white ml-1">CLOTHING</span>
              </p>
              <button
                type="button"
                className="rounded-full px-4 bg-white mt-4 py-2 text-xs items-center justify-center"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/*---------------------------------------------------------------------*/}
        {/*---------------------------------------------------------------------*/}
        <div className="w-[50%] flex-row">
          <div className="w-[100%] flex">
            <div className="w-[50%]">
              <div className="w-full">
                <div className="w-full font-bold text-sm">
                  <p>Top Ranking</p>
                </div>
                <div className="w-full flex">
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img9.jpg" className="w-full h-full" />
                  </div>
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img8.jpg" className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%]">
              <div className="w-full">
                <div className="w-full font-bold text-sm">
                  <p>Smart Phones</p>
                </div>
                <div className="w-full flex">
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img9.jpg" className="w-full h-full"/>
                  </div>
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img8.jpg" className="w-full h-full"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------------------------------------*/}
          {/*---------------------------------------------------------------------*/}

          <div className="w-[100%] flex">
            <div className="w-[50%]">
              <div className="w-full">
                <div className="w-full font-bold text-sm">
                  <p>Home Appliances</p>
                </div>
                <div className="flex">
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img9.jpg" className="w-full h-full"/>
                  </div>
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img8.jpg" className="w-full h-full"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%]">
              <div className="w-full">
                <div className="w-full font-bold text-sm">
                  <p>Sports</p>
                </div>
                <div className="flex">
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img9.jpg" />
                  </div>
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img8.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
