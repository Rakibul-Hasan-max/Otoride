import * as React from 'react';
import Box from '@mui/material/Box';
import logo from '../Images/logo.svg'
import { Container, Fab, Grid } from '@mui/material';

const Navbar = () => {
  return (
    <Box>
      <Container>
        <Grid container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{ mt: 1 }} spacing={2}>
          <Grid item xs={12} md={5}>
            <Box sx={{ p: 1, ml: 1 }}>
              <img src={logo} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <span >Products</span>
            <span style={{ marginLeft: '5vh' }}>Features</span>
            <Fab
              variant="extended"
              color="primary"
              size="small"
              sx={{
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "#263238",
                },
                px: 5,
                ml: 5
              }}
            >
              Contact Us
            </Fab>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
