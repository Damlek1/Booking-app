import React from 'react'
import './featuredProperties.css'
import Image7 from '../../assets/image7.webp'
import Image8 from'../../assets/image8.jpg'
import Image9 from '../../assets/image9.jpg'
import Image10 from '../../assets/image10.jpg'



const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className='fpItem'>
           <img  src={Image7} alt="" className='fpImg' />
           <span className='fpName'>Aparthotel Stare Miasto</span>
           <span className='fpCity'>Madrid</span>
           <span className='fpPrice'>Starting from NGN 181,188</span>
           <div className='fpRating'>
             <button>8.9</button>
             <span>Excellent </span><small className='review'>229 reviews</small>
           </div>
        </div>
        <div className='fpItem'>
           <img src={Image8} alt="" className='fpImg' />
           <span className='fpName'>Comfort Suites Airport</span>
           <span className='fpCity'>Austin</span>
           <span className='fpPrice'>Starting from NGN 749,846</span>
           <div className='fpRating'>
             <button>9.3</button>
             <span>Exceptional</span><small className='review'>2129 reviews</small>
           </div>
        </div>
        <div className='fpItem'>
           <img src={Image9} alt="" className='fpImg' />
           <span className='fpName'>Four Seasons Hotel</span>
           <span className='fpCity'>Lisbon</span>
           <span className='fpPrice'>Starting from NGN 174,806</span>
           <div className='fpRating'>
             <button>8.6</button>
             <span>Excellent</span><small className='review'>567 reviews</small>
           </div>
        </div>
        <div className='fpItem'>
           <img src={Image10} alt="" className='fpImg' />
           <span className='fpName'>Hilton Garden Inn</span>
           <span className='fpCity'>Berlin</span>
           <span className='fpPrice'>Starting from NGN 346,788</span>
           <div className='fpRating'>
             <button>8.9</button>
             <span>Excellent</span><small className='review'>1084 reviews</small>
           </div>
        </div>
    </div>
  )
}

export default FeaturedProperties