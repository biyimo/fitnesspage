import React from 'react'
import './home3.css'

const Home3 = () => {
  return (
    <div className='home3'>
        <div className="left">
            <h1>Train smarter,</h1>
            <h1>get stronger.</h1>
            <br />
            <p className='h3p'>
                Fitness Pro helps track your workouts, get better results,
                <br /> and be the best version of you. Less thinking, more <br /> lifting 🔥🏀
            </p>

            <button className='homeButton3'><span>Start free trial</span></button>
        </div>


        <div className="right">
            <img src="./assest/home3.svg" alt="" className='rightImg'/>
        </div>
    </div>
  )
}

export default Home3