import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import CardList from '../components/CardList';
import {superDeals} from '../data/superDeals';
import { topSelection } from '../data/topSelection';
import CardList2 from '../components/CardList2';
import CardList3 from '../components/CardList3';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div className="w-screen">
        <Navbar/>
        <Sidebar/>
        <Hero/>
        <CardList data={superDeals}/>
        <CardList2 data={topSelection}/>
        <CardList3 data={superDeals}/>
        <Categories/>
       
    </div>
  )
}

export default Home