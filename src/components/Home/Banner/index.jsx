import React from 'react'
import './styles.css';
import bannerImg from './ramen.jpeg';
import Logo from '../../common/Logo';

const Banner = () => {
  return (
    <header>
        <div className="header-content">
          <Logo/>
          <div className="content-main">
            <h1>Best ramens from your city</h1>
            <p>Different restaurants - one payment</p>
            <button>View Menu <i className="fas fa-long-arrow-alt-right"></i></button>
          </div>
        </div>
        <img src={bannerImg} alt="banner" className="header-img" />
    </header>
  )
}

export default Banner;