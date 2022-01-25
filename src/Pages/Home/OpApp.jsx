import { Fab, Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../../Images/opapp.png';
import vector from '../../Images/vector6.svg';
import vector1 from '../../Images/vector7.png'
import vector2 from '../../Images/vector8.svg';
import round from '../../Images/round2.png'
import { Box } from '@mui/system';

const OpApp = () => {
  return <>
    <Grid container  direction="row"
  justifyContent="flex-end"
  sx={{mb:10}}
   spacing={2}>
  <Grid item xs={12} md={4}>
    <img style={{width:'100%',}} src={img} />
  </Grid>

  <Grid item xs={10} md={4}>
  <Typography sx={{color:'#1AC131',mb:2,mt:5}}>
        OPERATOR APPLICATION
   </Typography>
   <Typography variant='h3'>
   Easy and 
   <br />
   Affordable
   </Typography>
   <Grid sx={{mt:2}} container spacing={2}>
  <Grid item xs={2}>
   <img style={{height:'8vh',width:'8vh'}} src={vector} />
  </Grid>
  <Grid item xs={8}>
    <Typography sx={{mt:2}}>
        Smart Task Management
    </Typography>
  </Grid>
</Grid>

<Grid sx={{mt:2}} container spacing={0}>
  <Grid item xs={2}>
   <img style={{height:'8vh'}} src={vector1} />
  </Grid>
  <Grid item xs={8}>
    <Typography sx={{mt:2}}>
        Real Time Veichle Routing
    </Typography>
  </Grid>
</Grid>

<Grid sx={{mt:2}} container spacing={2}>
  <Grid item xs={2}>
   <img style={{height:'8vh'}} src={vector2} />
  </Grid>
  <Grid item xs={8}>
    <Typography sx={{mt:2}}>
       Filter Veichle by issue type
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

  <Grid item xs={1} md={2}>
    <Box sx={{mt:10,ml:7}}>
        <img style={{width:'70%'}} src={round} />
    </Box>
  </Grid>
</Grid>
  </>;
};

export default OpApp;

