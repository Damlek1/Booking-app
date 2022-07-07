import React from 'react'
import './searchItem.css'
import Image13 from '../../assets/image13.webp'


const SearchItem = () => {


  return (
    <div className='searchItem'>
        <img src={Image13} alt='' className='siImg' />

        <div className='siDesc'>
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
        </div>
        <div className='siDetails'>
        <div className="siRating">
          <span className='rate'>Excellent <br /><small>2,278 reviews</small></span>
          <button className='rate'>8.9</button>
        </div>
          <span className='locate'><h5>Location 9.6</h5></span>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
        </div>
    </div>
  )
}

export default SearchItem