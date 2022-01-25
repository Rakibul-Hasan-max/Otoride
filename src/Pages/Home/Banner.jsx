import { Container, Fab, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import trusted from '../../Images/trusted.png';
import banner from '../../Images/pic.png';
import img23 from '../../Images/image23.png'
import img24 from '../../Images/image24.png'
import img25 from '../../Images/image25.png'
import img26 from '../../Images/image26.png'

const Banner = () => {
  return (
    <div>
      <Container sx={{mb:5}}>
        <Grid  container
  direction="row"
  justifyContent="center"
  alignItems="center" spacing={2}>
         
          <Grid item xs={12} md={6}>
          <Container sx={{mt:13,ml:8}}>
            <Typography variant="h3">
              Most Advanced <br /> 
              Veichale Sharing <br/>
               Platform
            </Typography>
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
            <Box sx={{ flexDirection: 'row',mt:10 }}>
            <img style={{marginBottom:'15px',}} src={trusted} />
            <img style={{marginLeft:'15px',}} src={img23} />
            <img src={img24} />
            <img src={img25} />
            <img src={img26} />
            </Box>
            
            </Container>
          </Grid>
          
          <Grid item xs={12} md={6}>
              <Box >
                  <img style={{width:'100%'}} src={banner} />
              </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
