import { Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import React from 'react';



const fakeData = [
    {
        id: 'item1',
        title: 'ALL-in-One Multiple veichle solution',
        description: "We’ll help you to integrate any vehicle type to OTORide platform. It may be kickn scooter, Any other type of scooters, ",
        img: 'https://i.ibb.co/CbRdgpn/frame.png'
    },
    {
        id: 'item2',
        title: 'Advanced Feature & Technology ',
        description: "We’ll help you to integrate any vehicle type to OTORide platform. It may be kickn scooter, Any other type of scooters, ",
        img: 'https://i.ibb.co/kMrTC6v/frame2.png'
    },
    {
        id: 'item3',
        title: 'Fully Customizable Software ',
        description: "We’ll help you to integrate any vehicle type to OTORide platform. It may be kickn scooter, Any other type of scooters, ",
        img: 'https://i.ibb.co/BGMh2D2/frame3.png'
    },
    {
        id: 'item4',
        title: 'Greate User Experience ',
        description: "We’ll help you to integrate any vehicle type to OTORide platform. It may be kickn scooter, Any other type of scooters, ",
        img: 'https://i.ibb.co/ZB74B97/frame4.png'
    },
    

]

const WhyUs = () => {

  return <div>
      <Container >
          <Typography sx={{ml:10}} variant="h4">
            Why OTORide
          </Typography>
         <Container>
         <Box sx={{ display: 'flex',mt:4,ml:10,flexWrap: 'wrap',mb:10 }}>
         {
              fakeData.map((data) => (
                <Card sx={{ maxWidth: 210,mr:3,borderRadius: 4,mt:3 }}>
                 <Box sx={{p:1,ml:2,mt:3}}  className={`frame-img ${data.id}` }>
                 <img  src={data.img} />
               </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   {data.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  
                </CardActions>
              </Card>
              ))
          }
         </Box>
         </Container>
       
        
      </Container>
  </div>;
};

export default WhyUs;
