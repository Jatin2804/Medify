import { Box } from '@mui/material';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const CardsSection = () => {
  const data = [
{src:"./images/Group 10.jpg"},
{src:"./images/Group 11.jpg"},
{src:"./images/Group 12.jpg"},
{src:"./images/Group 10.jpg"},
{src:"./images/Group 11.jpg"},
{src:"./images/Group 12.jpg"},
{src:"./images/Group 10.jpg"},
{src:"./images/Group 11.jpg"},
{src:"./images/Group 12.jpg"},
{src:"./images/Group 10.jpg"},
{src:"./images/Group 11.jpg"},
{src:"./images/Group 12.jpg"},

  ]
  return (

    <Box sx={{display:"flex",justifyContent:"space-evenly",bgcolor:"white",paddingY:"50px",paddingTop:"150px"}}>
    <Swiper
    slidesPerView={3}
    spaceBetween={30}
    navigation={true}
    modules={[Navigation]}
    className="mySwiper"
    breakpoints={{
      400: { slidesPerView: 2, spaceBetween: 20 },
      640: { slidesPerView: 2, spaceBetween: 20 },
      800: { slidesPerView: 3, spaceBetween: 40 },
    }}
  >
    {data.length > 0 ? (
      data.map((item) => (
        <SwiperSlide key={item.id}>
           <img src={item.src} height="100%" width="100%" alt="Loading..." />
        </SwiperSlide>
      ))
    ) : (
      <p>No data available😢</p> // Show a message if there's no data
    )}
  </Swiper>
  </Box>
  );
}

export default CardsSection;

