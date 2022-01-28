import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../../Images/image1.png';

const Success = () => {
    return (
        <Box>
            <Container>
                <Box sx={{textAlign: 'center', mt: 20, mb: 5}}>
                    <Typography variant="h6" gutterBottom component="div">
                        CLIENTS
                    </Typography>
                        <Typography variant="h4" gutterBottom component="div">
                            Success on OTORide
                    </Typography>
                </Box>
                <Box>
                    <Grid container rowSpacing={1} sx={{backgroundColor: 'black', color: 'green', mb: 15, pt: 15, pb: 10, pl: 10, pr: 10}}>
                        <Grid item sm={4} xs={12} >
                            <img src={img} alt="" />
                        </Grid>
                        <Grid item sm={8} xs={12} sx={{backgroundColor: 'white', p: 10 }} >
                            <Typography variant="subtitle1" gutterBottom component="div">
                                Rahim Darex
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                CEO, Ignite
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Mario Rautenberg ist zum Chief Financial Officer von Wunder Mobility ernannt worden. Mario Rautenberg ist zum Chief Financial Officer von Wunder Mobility ernannt worden.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Success;