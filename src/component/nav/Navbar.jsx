import React from 'react'
import './nav.css' 
import { BsInstagram, BsTwitter, BsFacebook, BsWhatsapp } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="first">
            <img src="./assest/logo.svg" alt="" className='logo' />
        </div>


        <div className="second">
            <a className='tags' href="">Features</a>
            <a className='tags' href="">Pricing</a>
            <a className='tags' href="">Download</a>
            <a className='tags' href="">Class</a>
            <a className='tags' href="">Lifestyle</a>
        </div>

        <div className="third">
        <BsInstagram className='navIcons hoverColor'/>
        <BsTwitter className='navIcons hoverColor'/>
        <BsFacebook className='navIcons hoverColor'/>
        <BsWhatsapp className='navIcons hoverColor'/>


        <button className="navButton">Get Free Trial</button>
        </div>
    </nav>
  )
}

export default Navbar