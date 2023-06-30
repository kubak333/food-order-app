import React from 'react';
import './styles.css';
import logoImg from './logo.png';

const Logo = () => {
  return (
    <div className='logo'>
        <div>
            <img src={logoImg} alt="logo" />
        </div>
        <p>
            <b>RAMEN LOVERS</b>
        </p>
    </div>
  )
}

export default Logo