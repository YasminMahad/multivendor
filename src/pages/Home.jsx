import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className="w-screen">
        <Navbar/>
        <Sidebar/>
        <Hero/>
    </div>
  )
}

export default Home