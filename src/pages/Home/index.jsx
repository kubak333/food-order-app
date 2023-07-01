import React from 'react'
import Banner from '../../components/Home/Banner';
import Menu from '../../components/common/Menu';
import Footer from '../../components/common/Footer';
import CartCountButton from '../../components/common/CartCountButton';
import { menuItemsData } from '../../components/common/Menu/data';

const Home = () => {
  return (
    <div>
        {/* Banner */}
        <Banner/>
        {/* Menu */}
        <Menu list={menuItemsData}/>
        {/* Footer */}
        <Footer />
        {/* Cart Count Button */}
        <CartCountButton/>
    </div>
  )
}

export default Home;