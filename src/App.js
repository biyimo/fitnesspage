import React from 'react'
import './App.css'
import Navbar from './component/nav/Navbar'
import Home from './component/home/Home'
import { FooterHome } from './component/footerHome/FooterHome'
import Home2 from './component/home2/Home2'
import Home3 from './component/home3/Home3'
import Home4 from './component/home4/Home4'
import HomeNo5 from './component/home5/HomeNo5'
import Home6 from './component/home6/Home6'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <FooterHome/>
      <Home2/>
      <Home3/>
      <Home4/>
      <HomeNo5/>
      <Home6/>
      
     
    </div>
  )
}

export default App


