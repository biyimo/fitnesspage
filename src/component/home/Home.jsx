import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="left">
        
        <h5 className='h5Home'>TRAIN SMATER. GET STRONGER</h5>
        <h1 className='homeH'>Simple fitness <br/>experience for <br/> everyone.</h1>
        <br />
        <p className='pHome'>Track your workouts, get better results, and be the best <br/> version of you. Less thinking, more lifting.</p>

        <br />
        <div className="buttons">
        <button className='homeButton'><span>Download App</span></button>
        <button className='homeButton1'><span>Book a Class</span></button>
        </div>
        
      </div>

      <div className="right">
        <img src="./assest/Dark.png" alt="" className='rightImg'/>

        {/* <div className="button">
        <img src="./assest/clickDown.svg" className='clickDown' alt="" />
       </div> */}
      </div>


    </div>
  )
}

export default Home