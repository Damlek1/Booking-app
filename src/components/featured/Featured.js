import React from 'react'
import './featured.css'
import Image1 from '../../assets/image1.webp'
import Image2 from '../../assets/image2.webp'
import Image3 from '../../assets/image3.webp'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img className='featuredImg' src={Image1} alt='' />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img className='featuredImg' src={Image2} alt='' />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>512 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img className='featuredImg' src={Image3} alt='' />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured