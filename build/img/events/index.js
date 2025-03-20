import React from 'react';
import "./style.css";
import {useNavigate } from "react-router-dom";
// import "./style.scss";

const Events = () => {
  
  const navigate = useNavigate();
  return (
    <div>
      <section class="events" id="events">
    <div class="event_header">
      <h1>Events</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex accusamus sint natus voluptatem fuga aperiam
        perspiciatis modi vero quam atque quisquam laboriosam, optio id. Totam inventore corrupti quod obcaecati. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex accusamus sint natus voluptatem fuga aperiam
        perspiciatis modi vero quam atque quisquam laboriosam, optio id. Totam inventore corrupti quod obcaecati. </p>
    </div>
    <div class="events_box">

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="img/stock_grow.jpg " alt="event"/>
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
            <a href="events timeline/index.html" class="btn">View More</a>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="img/stock_grow.jpg " alt="event"/>
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
            <a href="events timeline/index.html" class="btn">View More</a>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="img/stock_grow.jpg " alt="event"/>
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
            <a href="events timeline/index.html" class="btn">View More</a>
          </div>
        </div>
      </div>



    </div>

    <div class="events_btn">
    <button className='btn' onClick={ () =>  navigate('/timeline')}> 
    Litsen More</button>
    </div>

  </section>
    </div>
  )
}

export default Events