import React from 'react'
import Banner from '../../components/Home/Banner';
import Menu from '../../components/common/Menu';
import Footer from '../../components/common/Footer';
import CartCountButton from '../../components/common/CartCountButton';

const Home = () => {
  return (
    <div>
        {/* Banner */}
        <Banner/>
        {/* Menu */}
        <Menu />
        {/* Footer */}
        <Footer />
        {/* Cart Count Button */}
        <CartCountButton/>
    </div>
  )
}

export default Home;