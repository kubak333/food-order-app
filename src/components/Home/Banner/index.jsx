import React from 'react';
import './styles.css';
import bannerImg from './ramen.jpeg';
import Logo from '../../common/Logo';

const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        <h1>Best ramens from your city!</h1>
        <p>We deliver favorite ramen from your neighborhood</p>
        <button onClick={handleScrollMenu}>
          View Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
);

export default Banner;