import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Ribbon from '../components/Ribbon'
import CardList from '../components/CardList'

const Home = () => {
  return (
    <div className="w-screen">
        <Navbar/>
        <Sidebar/>
        <Hero/>
        <CardList/>
    </div>
  )
}

export default Home