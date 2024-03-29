import { Box } from '@mui/system';
import React from 'react';
import rectangle from '../../Images/rectangle.png'
import { Container, Fab, Grid, Typography } from '@mui/material';
import globe from '../../Images/globe.png';

const World = () => {
  return <>
    <Box  style={{ backgroundImage: `url(${rectangle})`,backgroundRepeat: 'no-repeat',
        height:'150vh',width:'100%'}} >
      <Box style={{
        position:'relative',
      top:'70vh'
      }}>
        <Container>
        <Grid   container
        direction="row"
        justifyContent="center"
        sx={{ml:5}}
      spacing={2}>
        <Grid item sx={{color:'white',mt:6}} xs={6} md={5}>
        <Box display="flex" sx={{flexwrap: 'wrap',flexDirection: 'column'}}>
        <Box>
        <Typography variant="h3">
          The Backbone for 
          </Typography>
          <Typography variant="h3">
          Internet Business 
          </Typography>
          <Typography variant="h3">
          Worldwide
          </Typography>
        </Box>
          <Box sx={{mt:2,color:'#CCCCCC'}}>
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
            <Fab
                variant="extended"
                sx={{
                  backgroundColor: "#FEFB00",
                  "&:hover": {
                    backgroundColor: "#263238",
                  },
                  px:4,
                  mt: 12,
                }}
            >
              Get Started
            </Fab>
          </Box>
            </Box>
            </Grid>
            <Grid item xs={6} md={5}>
              <img style={{width:'100%'}} src={globe} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  </>;
};

export default World;
