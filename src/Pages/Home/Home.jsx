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

const Home = () => {
  return <>
    <Navbar />
    <Banner />
    <WhyUs />
    <UserApp />
    <AdminApp />
    <OpApp />
    <Bike />
    <Blog />
    <div className='pay'>
    <Payment />
    </div>
    <div className='world'>
    <World />
    </div>
    <Contact />
  </>;
};

export default Home;
