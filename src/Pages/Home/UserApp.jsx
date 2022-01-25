import { Container, Fab, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../Images/userapp.png';
import vector from '../../Images/vector.svg';
import vector1 from '../../Images/vector1.svg'
import vector2 from '../../Images/vector2.svg'

const UserApp = () => {
  return <div>
      <Container>
      <Grid  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  sx={{mb:10}}
  spacing={2}>
  <Grid item xs={12} md={5}>
   <img style={{height:'90%',width:'90%'}} src={img} />
  </Grid>
  <Grid sx={{ml:4}} item xs={12} md={4}>
   <Typography sx={{color:'#202FF0',mb:2}}>
        USER APPLICATION
   </Typography>
   <Typography variant='h3'>
   The perfect <br /> 
   app for your 
   <br /> users and you
   </Typography>
   <Grid sx={{mt:2}} container spacing={2}>
  <Grid item xs={2}>
   <img style={{height:'8vh'}} src={vector} />
  </Grid>
  <Grid item xs={8}>
    <Typography sx={{mt:2}}>
        RealTime Veichle Location
    </Typography>
  </Grid>
</Grid>

<Grid sx={{mt:2}} container spacing={0}>
  <Grid item xs={2}>
   <img style={{height:'8vh'}} src={vector1} />
  </Grid>
  <Grid item xs={8}>
    <Typography sx={{mt:2}}>
        Fast Unlocking & Locking
    </Typography>
  </Grid>
</Grid>

<Grid sx={{mt:2}} container spacing={2}>
  <Grid item xs={2}>
   <img style={{height:'8vh'}} src={vector2} />
  </Grid>
  <Grid item xs={8}>
    <Typography sx={{mt:2}}>
        Multiple Language support
    </Typography>
  </Grid>
</Grid>

<Fab
              variant="extended"
              size="medium"
              color="primary"
              sx={{
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "#263238",
                },
                px: 4,
                mt: 2,
                mb:3
              }}
            >
              learn more
            </Fab>
  </Grid>
</Grid>
      </Container>
  </div>;
};

export default UserApp;
