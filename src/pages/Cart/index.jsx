import React from 'react'
import Logo from '../../components/common/Logo'
import Menu from '../../components/common/Menu'
import Footer from '../../components/common/Footer'
import './styles.css'
import EmptyCart from '../../components/Cart/EmptyCart'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart.selector'
import { connect } from 'react-redux'


const Cart = ({ cartCount, cartList, cartTotal}) => 
    <>
        <div className='cart-header'>
            <Logo/>
        </div>
        {cartCount === 0 ? (
          <EmptyCart/>
        ) : (
          <div className="orders">
            <h1 className='orders-heading'>Your orders</h1>
            <div className="orders-menu">
                <Menu list={cartList}/>
            </div>
            <h3 className="orders-total">Your total: {cartTotal} PLN<button class="payment-button" onClick={() => alert("This is a project created to learn programming.\n\nThe target project here would include an address form and a redirect to a payment gateway. \n\nIn the present version, the button is disabled.")}>Go to payment</button></h3>
            
          </div>
    )}
        <Footer/>
    </>

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(Cart);