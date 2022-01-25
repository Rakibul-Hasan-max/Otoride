import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../Images/image6.png'

const Payment = () => {
  return <>
  <Container sx={{mb:10}}>
    <Box display="flex"  sx={{ justifyContent: 'center',flexWrap: 'wrap' }}>
        <Box>
        <Typography variant="h3">
       A fully integrated 
       </Typography>
       <Typography variant="h3">
       suite of payments 
       </Typography>
       <Typography variant="h3">
       products 
       </Typography>
       
        </Box>
      
      <Box sx={{ml:6,mt:4,color:'#858585'}}>
         <Typography>
         Add di!erent types of vehicles in the  
         </Typography>
         <Typography>
         same app easily. Started with scooters,
         </Typography>
         <Typography>
         but want to add bikes? No problem!
         </Typography>
         <Typography>
         We’ll help you
         </Typography>
      </Box>
    </Box>
    <Box display="flex"  sx={{ justifyContent: 'center',mt:7 }}>
        <img style={{width:'70%'}} src={img} />
    </Box>
  </Container>
  </>;
};

export default Payment;
