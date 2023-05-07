import React from "react";
import { category } from "../assets/textContent/textContent";
import arrow from "../assets/categories-arrow.svg"

function Card() {
    
  function enterMouse(event){
      if(event.target.className === "card"){
        event.target.className ="card card-color"
      }

  }  
  function leaveMouse(event){
    if(event.target.className === "card card-color"){
      event.target.className ="card"
    }
  }

  return (
    <div className="main-container category-section">
      <div className="content-header">
      <h3>{category.heading}</h3>
      <span className="all-categories">All Categories<i class="fa-solid fa-angle-right"></i></span>
      
      </div>
      <div className="box-container">
        {category &&
          category.arr.map((data,index) => (
            <div className="card" onMouseEnter={enterMouse} onMouseLeave={leaveMouse} key={index} >
              <div className="card-image">
                <img src={data.img} alt="description" />
              </div>
              <div className="card-texts">
                <div className="card-heading">{data.heading}</div>
                <div className="card-subheading">{data.opening}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card;
