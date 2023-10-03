import React from 'react'
import './home2.css'

const Home2 = () => {
  return (
    <div className='home2'>
        <div className="home2Div">
            <h2>How it work</h2>
            <br />
            <p>
            Stacks is a production-ready library of stackable <br /> content blocks built in React Native.
            </p>
            
            <div className="test">
              <img src="./assest/frame700.png" alt="" className='steps' />

              <img src="./assest/frame792.png" alt="" className='procedure'/>
            </div>
        </div>
        
       

        {/* <div className="steps">
          <img src="./assest/step1.svg" alt="" className='steps' />
          <img src="./assest/connectline.svg" alt="" className='arrow' />
          <img src="./assest/step2.svg" alt="" className='steps' />
          <img src="./assest/connectline.svg" alt="" className='arrow' />
          <img src="./assest/step3.svg" alt="" className='steps' />
          <img src="./assest/connectline.svg" alt="" className='arrow' />
          <img src="./assest/step4.svg" alt="" className='steps' />
        </div> */}
    </div>
  )
}

export default Home2