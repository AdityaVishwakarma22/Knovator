import React from 'react'
import { footer } from "../assets/textContent/textContent";


function  Footer() {
    function enterMouse(){
        var a = document.querySelector('#linkedin');
        if(a.src === footer.asset[2]){
          a.src = footer.asset[1]
        }
      }
      function leaveMouse(){
        var a = document.querySelector('#linkedin');
        if(a.src === footer.asset[1]){
          a.src = footer.asset[2]
        }
      }
  return (
    <div className='footer-section main-container'>
        <div className='footer-grid'>
        <div className='social-links-section'>
            <img src={footer.asset[0]} alt="logo"/>
            <div className='social-links'>
                <span>Follow us on <img src={footer.asset[2]}  id='linkedin' alt="linkedin" onMouseEnter={enterMouse} onMouseLeave={leaveMouse}/> </span>
            </div>
        </div>
        {
            footer.company_footer.map((data)=>
                <ul className='individual-section'>
                    {data.map((e)=><li>{e}</li>)}
                </ul>
            )
        }
        </div>
        <hr />
        <p>2022 <span className='highlighted'>Orbit Jobs</span> All rights reserved</p>
    </div>
  )
}

export default Footer