import React from 'react'
import './local.css'
import Abuja from '../../assets/abuja.webp'
import Ikeja from '../../assets/ikeja.webp'
import Lagos from '../../assets/lagos.webp'
import Ibadan from '../../assets/ibadan.webp'
import Kano from '../../assets/kano.webp'
import Lekki from '../../assets/lekki.webp'



const Local = () => {
  return (
    <div className='lList'>
        
        <div className="lListItem">
            <img src={Abuja} alt="" className="lListImg" />
          <div className="lListTitles">
            <h1>Abuja</h1>
            <h2>233 properties</h2>
          </div>
      </div>
        <div className="lListItem">
            <img src={Ikeja}  alt='' className="lListImg" />
          <div className="lListTitles">
            <h1>Ikeja</h1>
            <h2>103 properties</h2>
          </div>
      </div>
        <div className="lListItem">
            <img src={Lagos} alt="" className="lListImg" />
          <div className="lListTitles">
            <h1>Lagos</h1>
            <h2>569 properties</h2>
          </div>
      </div>
        <div className="lListItem">
            <img src={Ibadan} alt="" className="lListImg" />
          <div className="lListTitles">
            <h1>Ibadan</h1>
            <h2>45 properties</h2>
          </div>
      </div>
        <div className="lListItem">
            <img src={Kano} alt="" className="lListImg" />
          <div className="pListTitles">
            <h1>Kano</h1>
            <h2>8 Properties</h2>
          </div>
      </div>
        <div className="lListItem">
            <img src={Lekki} alt="" className="lListImg" />
          <div className="lListTitles">
            <h1>Lekki</h1>
            <h2>233 properties</h2>
          </div>
      </div>
    </div>
  )
}

export default Local