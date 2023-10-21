import React from 'react'
import {blogs} from '../data/blogs';
import Card6 from './Card6';

const MostPopular = () => {
  return (
    <div className="w-screen mt-24">
        <div className="w-full flex justify-between items-center">
        <div>
            <p className="text-4xl font-bold px-2">Most Popular Blog</p>
        </div>
        <div>
            <p className="mr-2 text-orange-600">View All Posts</p>
        </div>
        </div>
        <div className="gird grid-cols-3">
            {blogs ? blogs.map((item,index)=>(<Card6 data={item} key={index}/>)):"No Data"}


        </div>
    </div>
  )
}

export default MostPopular