import { Container, Fab, Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../../Images/round1.png';
import adminImg from '../../Images/adminapp.png';
import vector from '../../Images/vector3.svg';
import vector1 from '../../Images/vector4.svg'
import vector2 from '../../Images/vector5.svg'
import { Box } from '@mui/system';

const AdminApp = () => {
  return <>
  
   <Grid container
  direction="row"
  justifyContent="space-between" 
  sx={{mb:10}}
   spacing={2}>
  <Grid item xs={1}  md={1}>
   <img style={{height:'20vh'}} src={img} />
  </Grid>
  <Grid item xs={11}  md={3}>
  <Typography sx={{color:'#FF0069',mb:2}}>
        ADMIN APPLICATION
   </Typography>
   <Typography variant='h3'>
   The perfect <br /> 
   app for your 
   <br /> users and you
   </Typography>
   <Grid sx={{mt:2}} container spacing={2}>
  <Grid item xs={2}>
   <img style={{height:'8vh',width:'8vh'}} src={vector} />
  </Grid>
  <Grid item xs={8}>
    <Typography sx={{mt:2}}>
        User Management
    </Typography>
  </Grid>
</Grid>

<Grid sx={{mt:2}} container spacing={0}>
  <Grid item xs={2}>
   <img style={{height:'8vh'}} src={vector1} />
  </Grid>
  <Grid item xs={8}>
    <Typography sx={{mt:2}}>
        Trip Management 
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
                mt: 3,
                mb:3
              }}
            >
              learn more
            </Fab>
  </Grid>
  <Grid item xs={12}  md={6}>
   <Box sx={{mt:3}}>
   <img style={{width:'100%'}} src={adminImg} />
   </Box>
   
  </Grid>
 
</Grid>
  </>;
};

export default AdminApp;

