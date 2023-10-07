import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import CardList from '../components/CardList';
import {superDeals} from '../data/superDeals';
import { topSelection } from '../data/topSelection';

const Home = () => {
  return (
    <div className="w-screen">
        <Navbar/>
        <Sidebar/>
        <Hero/>
        <CardList data={superDeals}/>
        <CardList data={topSelection}/>
    </div>
  )
}

export default Home