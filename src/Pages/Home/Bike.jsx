import { Container, Fab, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img1 from '../../Images/image1.png';
import img2 from '../../Images/image2.png';
import img3 from '../../Images/image3.png';
import img4 from '../../Images/image4.png';

const Bike = () => {
  return <>
      <Container sx={{mb:10}}>
            <Box >
                  <Typography display="flex"  sx={{ justifyContent: 'center', }} variant='h3'>
                   Kick scooters,
                  </Typography>
                  <Typography display="flex"  sx={{ justifyContent: 'center', }} variant='h3'>
                  scooters, bikes, e-bikes 
                  </Typography>
                  <Typography display="flex"  sx={{ justifyContent: 'center', }} variant='h3'>
                  and more in one app
                  </Typography>
                  <Box display="flex"  sx={{ justifyContent: 'center', }}>
                  <Fab
              variant="extended"
              color="primary"
              sx={{
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "#263238",
                },
                px: 4,
                mt: 3,
              }}
            >
              Get Started
            </Fab>
                  </Box>
            </Box>
            <Box display="flex"  sx={{ justifyContent: 'center',mt:5,mb:5,flexWrap: 'wrap' }}>
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} />
            </Box>
            
    </Container>
  </>;
};

export default Bike;
