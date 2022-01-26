import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../../Images/logo.svg';

const Footer = () => {
    return (
        <Box className="footer" sx={{ backgroundColor: 'black', border: '1px solid black', overflow: 'hidden', color: 'white', p: '50px'}}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={3}>
                        <Box>
                            <Box sx={{ my: 2 }}>
                                <Box sx={{ p: 1, mb: 4, backgroundColor: 'white', width: '60%' }}>
                                    <img src={logo} />
                                </Box>
                                <Typography variant='caption'>Social Connection</Typography>
                                <Box sx={{ display: 'flex', mt: 2, gap: 4 }}>
                                    <Box className="footer-icon">
                                        <FaFacebookF />
                                    </Box>
                                    <Box className="footer-icon">
                                        <FaTwitter />
                                    </Box>
                                    <Box className="footer-icon">
                                        <FaInstagram />
                                    </Box>
                                    <Box className="footer-icon">
                                        <FaYoutube />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant='button' sx={{ fontSize: 25 }}>
                            Location
                        </Typography>
                        <Typography sx={{ my: 3 }}>
                            Flat B4, House 02/A, Road 1, Niketon, Gulshan 1, Dhaka - 1212 <br /> <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos unde aut dicta dignissimos illum porro aliquam ullam asperiores reiciendis. Iure alias asperiores magni.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography variant='button' sx={{ fontSize: 25 }}>
                                        Products
                                    </Typography>
                                    <ul style={{ marginTop: '24px' }}>
                                        <li>
                                            <Typography variant='button'>Bike</Typography></li>
                                        <li>
                                            <Typography variant='button'>eBike</Typography></li>
                                        <li>
                                            <Typography variant='button'>Car</Typography></li>
                                        <li>
                                            <Typography variant='button'>Rent</Typography></li>
                                        <li>
                                            <Typography variant='button'>iOT</Typography></li>
                                    </ul>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography variant='button' sx={{ fontSize: 25 }}>
                                        MEMBERSHIP
                                    </Typography>
                                    <ul style={{ marginTop: '24px' }}>
                                        <li><Typography variant='button'>Student Discount</Typography></li>
                                        <li><Typography variant='button'>Term Membership</Typography></li>
                                        <li><Typography variant='button'>Month-to-Month</Typography></li>
                                    </ul>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography variant='overline'>
                    © 2022 OTOride all right reserved
                </Typography>
            </Container>
        </Box>
    );
return null;
};

export default Footer;