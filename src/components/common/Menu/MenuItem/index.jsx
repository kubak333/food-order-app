import React from 'react'
import './styles.css'
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';

const MenuItem = ({ item }) => {
  const {id, name, info, restaurantName, price, img } = item;
  return (
    <div className='item'>
        <img src={img} alt="item" />
        <div className='item-head-desc'>
          <p className="head_desc-name">{name}</p>
          <p className="head_desc-restaurant-name">Restaurant:<br/>{restaurantName}</p>
          <p className='head_desc-info'>
            <small><hr/>{info}</small>
          </p>
        </div>
        <div className='item-foot_desc'>
          <span className='foot_desc-price'>${price}</span>
          <ButtonAddRemoveItem className='button-item' quantity={0}/>
        </div>
    </div>
  )
}

export default MenuItem