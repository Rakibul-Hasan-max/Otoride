import React from 'react';
import Banner from './Banner';
import WhyUs from './WhyUs';
import UserApp from './UserApp';
import AdminApp from './AdminApp';
import OpApp from './OpApp';
import Bike from './Bike';
import Blog from './Blog';
import Payment from './Payment';
import World from './World';
import Contact from './Contact';
import Navbar from '../Navbar';
import Footer from './Footer';
import Success from './Success';

const Home = () => {
  return <>
    <Navbar />
    <Banner />
    <WhyUs />
    <UserApp />
    <AdminApp />
    <OpApp />
    <Bike />
    <Success />
    <Blog />
    <div className='pay'>
    <Payment />
    </div>
    <div className='world'>
    <World />
    </div>
    <Contact />
    <Footer />
  </>;
};

export default Home;
