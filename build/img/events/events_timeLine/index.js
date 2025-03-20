import React from 'react'
import './style.css' 
import Footer from '../../footer'
import Navbar from '../../Navbar';

function Timeline() {
  return (
    <div className='events_timeline'> 
      <Navbar/>
    <div class="container_header">
      <div>
      <h1>Events Timeline</h1>
      </div>
      </div>
    <div class="timeline">
      <div class="container left-container">
            <img src="  " alt='logo'/>
            <div class="text-box">
                <h2>Event name1</h2>
                <small>timings1</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
                    necessitatibus repellendus? Delectus porro laborum dolores maiores explicabo iste minima? Dolor?
                </p>
                
            </div>
            <span class="left-container-arrow"></span>
        </div>
        <div class="container right-container">
            <img src="nitplogo.png"/>
            <div class="text-box">
                <h2>Event name2</h2>
                <small>timings2</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
                     necessitatibus repellendus? Delectus porro laborum dolores maiores explicabo iste minima? Dolor?
                </p>
                <span class="right-container-arrow"></span>
            </div>
        </div>
        <div class="container left-container">
            <img src="nitplogo.png"/>
            <div class="text-box">
                <h2>Event name3</h2>
                <small>timings3</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
                    necessitatibus repellendus? Delectus porro laborum dolores maiores explicabo iste minima? Dolor?
                </p>
                <span class="left-container-arrow"></span>
            </div>
        </div>
        <div class="container right-container">
            <img src="nitplogo.png"/>
            <div class="text-box">
                <h2>Event name4</h2>
                <small>timings4</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
                    necessitatibus repellendus? Delectus porro laborum dolores maiores explicabo iste minima? Dolor?
                </p>
                <span class="right-container-arrow"></span>
            </div>
        </div>
        <div class="container left-container">
            <img src="nitplogo.png"/>
            <div class="text-box">
                <h2>Event name5</h2>
                <small>timings5</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
                    necessitatibus repellendus? Delectus porro laborum dolores maiores explicabo iste minima? Dolor?
                </p>
                <span class="left-container-arrow"></span>
            </div>
        </div>
        <div class="container right-container">
            <img src="nitplogo.png"/>
            <div class="text-box">
                <h2>Event name6</h2>
                <small>timings6</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
                    necessitatibus repellendus? Delectus porro laborum dolores maiores explicabo iste minima? Dolor?
                </p>
                <span class="right-container-arrow"></span>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Timeline


