import React from 'react'
import './propertylist.css'
import Image4 from '../../assets/image4.webp'
import Image5 from '../../assets/image5.jpg'
import Image6 from '../../assets/image6.jpg'
import Image11 from '../../assets/image11.jpg'
import Image12 from '../../assets/image12.jpg'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src={Image4} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 hotels</h2>
          </div>
      </div>
        <div className="pListItem">
            <img src={Image5}  alt='' className="pListImg" />
          <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>879 apartments</h2>
          </div>
      </div>
        <div className="pListItem">
            <img src={Image6} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>540 resorts</h2>
          </div>
      </div>
        <div className="pListItem">
            <img src={Image11} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Villas</h1>
            <h2>2343 villas</h2>
          </div>
      </div>
        <div className="pListItem">
            <img src={Image12} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>233 cabins</h2>
          </div>
      </div>
    </div>
  )
}

export default PropertyList