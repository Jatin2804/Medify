import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import SearchSection from "./SearchSection/SearchSection";
import CardsSection from "./CardsSection/CardsSection";
import SpecialisedSection from "./SpecialisedSection/SpecialisedSection";
import MedicalSpecialist from "./MedicalSpecialist/MedicalSpecialist";
import CareSection from "./CareSection/CareSection";
import NewsSection from "./NewsSection/NewsSection";
import AboutSection from "./AboutSection/AboutSection";
import QNASection from "./QNASection/QNASection";
import { Box } from "@mui/material";

import "./styles.css";

const Home = () => {
  
  return (
    <Box>
      <Box className="hero-section">
        <HeroSection />
      </Box>
      
        <Box className="search-section">
          <SearchSection />
        </Box>

        <Box className="add-cards" >
          <CardsSection />
        </Box>

        <Box className="specialised-section" sx={{padding:"20px"}}>
          <SpecialisedSection />
        </Box>

        <Box className="medical-specialist-section">
          <MedicalSpecialist />
        </Box>

        <Box className="care-section">
          <CareSection />
        </Box>

        <Box className="news-section">
          <NewsSection />
        </Box>

        <Box className="about-section">
          <AboutSection />
        </Box>

        <Box className="qna-section">
          <QNASection />
        </Box>
      </Box>
    
  );
};

export default Home;
