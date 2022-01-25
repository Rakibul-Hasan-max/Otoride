import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Typography } from '@mui/material';
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
   <div div  className='world'>
   <World />
   </div>
  <Contact />
  {/* style={{
          
          position :'relative',
         
          
          zIndex: 1
      }} */}

{/* style={{
        position:'relative',
        top:'-138vh',
        zIndex:2    
}} */}
  </>;
};

export default Home;
