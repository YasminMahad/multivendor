import React, { useState } from "react";
import Carousel from "./Carousel";
import Trending from "./Trending";
import { Link } from "react-router-dom";
import { topRated, popular, flash } from "../data/sales";
import Card2 from "./Card2";

const Sales = () => {
  const [topState, setTopState] = useState(false);
  const [popularState, setPopularState] = useState(false);
  const [flashState, setFlashState] = useState(true);

  return (
    <div>
      <div className="flex w-full mt-[150px]">
        <div className="flex-row w-[25%] justify-between">
          <div className="flex w-full">
            <Carousel />
          </div>
          <div className="flex w-full">
            <Trending />
          </div>
        </div>
        <div className="">
          <div className="w-full ml-4 mb-16 pr-6">
            <img src="./src/assets/banner1.jpg" className="w-[98%] h-full" />
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
                FLASH <span className="text-orange-600 mx-auto">
                  SALES
                </span>{" "}
                TODAY<span className="text-orange-600 ml-1">!!!</span>
              </p>
            </div>
            <div className="w-[40%] flex justify-end">
              <p
                className={
                  flashState
                    ? "mx-4 px-4 font-bold text-xs text-orange-600 hover:cursor-pointer shadow-b shadow-sm shadow-orange-600"
                    : "mx-4 px-4 font-bold text-xs text-slate-600 hover:cursor-pointer"
                }
                onClick={() => {
                  setFlashState(true);
                  setPopularState(false);
                  setTopState(false);
                }}
              >
                Flash
              </p>

              <p
                className={
                  popularState
                    ? "mx-4 px-4 font-bold text-xs text-orange-600 hover:cursor-pointer shadow-b shadow-sm shadow-orange-600"
                    : "mx-4 px-4 font-bold text-xs text-slate-600 hover:cursor-pointer"
                }
                onClick={() => {
                  setPopularState(true);
                  setFlashState(false);
                  setTopState(false);
                }}
              >
                Popular
              </p>

              <p
                className={
                  topState
                    ? "mx-4 px-4 font-bold text-xs text-orange-600 hover:cursor-pointer shadow-b shadow-sm shadow-orange-600"
                    : "mx-4 px-4 font-bold text-xs text-slate-600 hover:cursor-pointer"
                }
                onClick={() => {
                  setTopState(true);
                  setFlashState(false);
                  setPopularState(false);
                }}
              >
                Top Rated
              </p>
            </div>
          </div>
          {/*------------
        --------------------Card Holder--------------
        --------------*/}
          <div className="grid grid-cols-4 justify-between items-center">
            {/* ------------------------------------------------------------------------------
                -------Will Replace the Below with a card to prevent repeatation----------------
                ----------------------------------------------------------------------------------*/}
            {popularState
              ? popular.map((item, index) => <Card2 data={item} key={index} />)
              : ""}
            {topState
              ? topRated.map((item, index) => <Card2 data={item} key={index} />)
              : ""}
            {flashState
              ? flash.map((item, index) => <Card2 data={item} key={index} />)
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
