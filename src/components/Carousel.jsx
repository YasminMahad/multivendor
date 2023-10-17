import React, { useState,useEffect } from 'react';
//import { BsArrowLeftSquareFill } from 'react-icons/bs';
import { carousel } from "../data/carousel";
import { BsArrowLeftSquareFill,BsArrowRightSquareFill } from 'react-icons/bs';

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const [items, setItems] = useState(carousel);
    const length = items.length;
   // console.log(items);
    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
     };
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
     };

  return (
      <div className="w-[400px] mx-auto relative px-4 py-4 justify-center items-center">
          
          
          {items.map((item, index) => {

              return (
                  
                   <> 
                  <div className={index === slide ? 'opacity-100 relative':'opacity-0'} key={index}>
                      {index === slide && (<img className="w-full rounded-md" src={item.imgsrc} alt="This is an Image" />)}
                    <div className="absolute top-0 left-5 justify-center items-center">
                      <p className="text-sm text-orange-600">{item.detail1}</p>
                      <p className="text-md font-bold">{item.name}</p>
                      <p className="text-sm text-slate-700">{item.detail3}</p>
                      <button type="button" className="px-3 py-1 bg-blue-700 text-sm font-bold rounded-full">
                        SHOP NOW
                      </button>
                    </div>
  
                  </div>
                  </>   
                     
              )
          }
          )
        }
          <BsArrowLeftSquareFill
              onClick={prevSlide}
              className="absolute top-[50%] text-md z-100 text-[#16d9f3b4] cursor-pointer left-8" />
          <BsArrowRightSquareFill
              onClick={nextSlide}
              className="absolute top-[50%] text-md z-100 text-[#12cff0b9] cursor-pointer right-8" />
    </div>
  )
}

export default Carousel