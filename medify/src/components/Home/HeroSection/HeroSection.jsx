import React from "react";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../styles.css"

const HeroSection = () => {
  return (
    <Grid className="herosection" container sx={{ height: "fit-content"  }}>
      <Grid size={{ md: 5, xs: 12 }} sx={{ height: "100%" }}>
        <Box
          sx={{
           width:"80%",
           marginX:"10%",
           marginTop:"10%",
          }}
        >
          <Box>
            <img
              src="./tag_hero.png"
              height="100%"
              width="100%"
              alt="Loading..."
            />
          </Box>
          <Box sx={{ my: 2 , display:{xs:"flex",md:"block"},justifyContent:"center"}}>
          <Button variant="contained" sx={{ color: "white", my: 2 , display:{xs:"flex",md:"block"},justifyContent:"center"}}>
            Find Centers
          </Button>
          </Box>
          
        </Box>
      </Grid>

      <Grid size={{ md: 5, xs: 12 }} >
        <Box sx={{ width:"100%",height:"100%"}}>
        <img
          src="./hero_image.png"
          height="100%"
          width="100%"
          alt="Loading ...."
        />
        </Box>
       
      </Grid>
    </Grid>
  );
};

export default HeroSection;
