import React from 'react'
import Destination from '../../components/Destination/Destination'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Local from '../../components/local/Local'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.css'


const Home = () => {
  return (
    <div className='overflow'>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <h1 className="homeTitle">Explore Nigeria</h1>
          <span>These popular destination have a lot to offer</span>
          <Local />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <Featured />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties />
          <h1 className="homeTitle">Destination we love</h1>
          <div className='desti'>
          <span className='region'>Regions</span>
          <span className='destcity'>Cities</span>
          <span className='destcity'>Places of Interest</span>
          </div>
          <Destination />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default Home