import { Box } from "@mui/material";
import React from "react";
import DoctorsCard from "./DoctorsCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Navigation } from "swiper/modules";

const CardsSection = () => {
  const doctors = [
    {
      name: "Ahmad Khan",
      specialist: "Neurologist",
      src: "./images/Doctor1.png",
      nationality: "Indian",
      gender: "Male",
    },
    {
      name: "Heena Sachdeva",
      specialist: "Orthopadics",
      src: "./images/Doctor2.png",
      nationality: "American",
      gender: "Female",
    },
    {
      name: "Ankur Sharma",
      specialist: "Dentist",
      src: "./images/Doctor3.png",
      nationality: "British",
      gender: "Male",
    },
    {
      name: "Emily Watson",
      specialist: "Pediatrics",
      src: "./images/Doctor4.png",
      nationality: "American",
      gender: "Female",
    },
    {
      name: "James Anderson",
      specialist: "Cardiologist",
      src: "./images/Doctor5.png",
      nationality: "British",
      gender: "Male",
    },
    {
      name: "Rajesh Patel",
      specialist: "Dermatologist",
      src: "./images/Doctor6.png",
      nationality: "Indian",
      gender: "Male",
    },
    {
      name: "Henry Clarke",
      specialist: "Oncologist",
      src: "./images/Doctor7.png",
      nationality: "British",
      gender: "Male",
    },
    {
      name: "Kunal Mehta",
      specialist: "Psychiatrist",
      src: "./images/Doctor8.png",
      nationality: "Indian",
      gender: "Male",
    },
    {
      name: "Olivia Smith",
      specialist: "Gynecologist",
      src: "./images/Doctor9.png",
      nationality: "British",
      gender: "Female",
    },
    {
      name: "Richard Johnson",
      specialist: "Radiologist",
      src: "./images/Doctor10.png",
      nationality: "American",
      gender: "Male",
    },
    {
      name: "William Brown",
      specialist: "Surgeon",
      src: "./images/Doctor11.png",
      nationality: "American",
      gender: "Male",
    },
    {
      name: "Sophia Turner",
      specialist: "Endocrinologist",
      src: "./images/Doctor12.png",
      nationality: "British",
      gender: "Female",
    },
    {
      name: "George Wright",
      specialist: "Pathologist",
      src: "./images/Doctor13.png",
      nationality: "British",
      gender: "Male",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingY: "50px",
        bgcolor:"white"
      }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile Portrait
          480: { slidesPerView: 1, spaceBetween: 20 }, // Mobile Landscape
          640: { slidesPerView: 1, spaceBetween: 20 }, // Small Tablets
          800: { slidesPerView: 2, spaceBetween: 20 }, // Large Tablets
          1024: { slidesPerView: 2, spaceBetween: 30 }, // Desktops
          1200: { slidesPerView: 3, spaceBetween: 30 }, // Desktops
        }}
      >
        {doctors.length > 0 ? (
          doctors.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingY: "10px",
                }}
              >
                <DoctorsCard
                  imageSrc={item.src}
                  name={item.name}
                  specialist={item.specialist}
                />
              </Box>
            </SwiperSlide>
          ))
        ) : (
          <p>No data available 😢</p>
        )}
      </Swiper>
    </Box>
  );
};

export default CardsSection;
