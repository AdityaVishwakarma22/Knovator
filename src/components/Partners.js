import React from 'react'
import { partners } from "../assets/textContent/textContent";

function Partners() {
  return (
      <div className='partners-section main-container'>
        <h5 className="partner-heading">
          We've helped <span className='highlighted'>2000+</span> world's best companies
        </h5>
        <div className='partner-logo'>
          {
            partners.list.map(
              (company)=>
                <img src={company} alt={`partner ${company}`} />
            )
          }
        </div>
        <img src={partners.advertisement} alt="Advertisement" id='partners-image' />
      </div>
  )
}

export default Partners