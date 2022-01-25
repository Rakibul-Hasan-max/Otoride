import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../Images/contact.png';
import arrow from '../../Images/arrow.png'

const Contact = () => {
  return <>
  <Box sx={{height:'46vh',backgroundColor:'#FFFC00',mb:10}}>
    <Typography display="flex"  sx={{ justifyContent: 'center',pt:7 }} variant='h2'>
            Need OTP Application?
    </Typography>
    <Box display="flex"  sx={{ justifyContent: 'center',ml:-16,mt:3}}>
        <img style={{width:'25%',marginRight:'25px'}} src={img} />
        <img style={{height:'5vh',marginTop:'10px'}} src={arrow} />
        
    </Box>
    
  </Box>
  </>;
};

export default Contact;
