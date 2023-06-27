import React from 'react'
import './styles.css';
import bannerImg from './banner.png';

const Banner = () => {
  return (
    <header>
        <div className="header-content"></div>
        <img src={bannerImg} alt="" className="header-img" />
    </header>
  )
}

export default Banner;