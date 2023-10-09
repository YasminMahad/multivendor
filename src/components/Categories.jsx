import React from "react";
import {FaUserAlt} from 'react-icons/fa';

const Categories = () => {
  return (
    <div className="w-screen bg-slate-200">
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
        <div className="w-[50%] flex-row bg-slate-50 rounded-lg ml-2">
          <div className="w-[100%] flex">
            <div className="w-[50%]">
              <div className="w-full p-2 py-4">
                <div className="w-full font-bold text-sm pl-3 pt-2 pb-2">
                  <p>Top Ranking</p>
                </div>
                <div className="w-full flex bg-slate-200">
                  <div className="flex w-[200px] h-[110px] rounded-lg m-1">
                    <img src="./src/assets/img9.jpg" className="w-full h-full rounded-lg" />
                  </div>
                  <div className="flex w-[200px] h-[110px] rounded-lg m-1">
                    <img src="./src/assets/img8.jpg" className="w-full h-full rounded-lg " />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%]">
              <div className="w-full p-2 py-4">
                <div className="w-full font-bold text-sm pl-3 pt-2 pb-2">
                  <p>Smart Phones</p>
                </div>
                <div className="w-full flex bg-slate-200">
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img9.jpg" className="w-full h-full rounded-lg"/>
                  </div>
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img8.jpg" className="w-full h-full rounded-lg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------------------------------------*/}
          {/*---------------------------------------------------------------------*/}

          <div className="w-[100%] flex">
            <div className="w-[50%]">
              <div className="w-full p-2 py-4">
                <div className="w-full font-bold text-sm pl-3 pt-2 pb-2">
                  <p>Home Appliances</p>
                </div>
                <div className="flex rounded-xl bg-slate-200">
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img9.jpg" className="w-full h-full rounded-lg"/>
                  </div>
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img8.jpg" className="w-full h-full rounded-lg"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%]">
              <div className="w-full p-2 py-4">
                <div className="w-full font-bold text-sm pl-3 pt-2 pb-2">
                  <p>Sports</p>
                </div>
                <div className="flex bg-slate-200">
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img9.jpg" className="w-full h-full rounded-lg"/>
                  </div>
                  <div className="flex w-[200px] h-[110px] rounded-xl m-1">
                    <img src="./src/assets/img8.jpg" className="w-full h-full rounded-lg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg justify-center items-center px-3 py-2 ml-5">
            <div className="items-center justify-center flex pt-1"> 
            <div className="w-[50px] flex justify-center items-center rounded-full p-3">
                <FaUserAlt className="text-2xl text-slate-500"/>
            </div>
            </div>
            <div className="flex justify-center items-center mt-3">
                <p className="text-lg font-bold">
                    Welcome to Quickies
                </p>
            </div>
            <div className="flex justify-between items-center py-3">
                <button type="button" className="p-2 ml-8 rounded-full border border-orange-400">
                    Join Us
                </button>
                <button type="button" className="p-2 mr-8    rounded-full border border-orange-400">
                    Sign In
                </button>
            </div>
            <div className="rounded-lg">
                <img src="./src/assets/img13.jpg" className="rounded-lg w-full h-full" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
