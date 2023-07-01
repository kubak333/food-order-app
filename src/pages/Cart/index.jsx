import React from 'react'
import Logo from '../../components/common/Logo'
import Menu from '../../components/common/Menu'
import Footer from '../../components/common/Footer'
import { menuItemsData } from '../../components/common/Menu/data'
import './styles.css'
import EmptyCart from '../../components/Cart/EmptyCart'

const Cart = () => {
  return (
    <>
    <div>
        <div className='cart-header'>
            <Logo/>
        </div>
        <EmptyCart/>
        <div className="orders">
            <h1 className='orders-heading'>Your orders</h1>
            <div className="orders-menu">
                <Menu list={menuItemsData}/>
            </div>
            <h3 className="orders-total">Your total:</h3>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cart