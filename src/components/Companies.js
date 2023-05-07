import React from "react";
import { compnaies } from "../assets/textContent/textContent";

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
      <h3 className="content-header">{compnaies.heading}</h3>
      <div className="box-container">
        {compnaies &&
          compnaies.arr.map((data,index) => (
            <div className="card" onMouseEnter={enterMouse} onMouseLeave={leaveMouse} key={index} >
                <div className="card-image">
                  <img src={data.img} alt="description" />
                </div>
                <div>
                  <div className="card-heading">{data.heading}</div>
                  <div className="card-subheading">{data.reviews}</div>
                </div>
                <i class="fa-solid fa-angle-right"></i>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card;
