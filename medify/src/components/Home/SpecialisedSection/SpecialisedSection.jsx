import { Box, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import "../styles.css"

const SearchSection = () => {
  return (
    <Box className="search-component"
      sx={{
        width: "90%",
        height: "fit-content",
        marginX: "auto",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxHeigh:"fit-content",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <Typography variant="h2"
        sx={{
          fontSize: {
            xs: "1rem", // Extra small devices
            sm: "1.5rem",   // Small devices
            md: "2rem", // Medium devices
            lg: "2.5rem",   // Large devices
          },
          textAlign: "center", // Optional, center align for all sizes
        }}
        >Find By Specialisation</Typography>
        <Grid container spacing={3} sx={{margin:"5%",boxShadow:3,padding:"20px"}}>
          <Grid size={{ xs:6,sm:4,md:3,}} sx={{borderRadius:"10px"}}>
            <img src="/images/search1.jpg" width="100px" height="120px" alt="Loading" />
          </Grid>
          <Grid size={{  xs:6,sm:4,md:3 }} sx={{borderRadius:"10px"}}>
            <img src="/images/search2.jpg" width="100px" height="120px" alt="Loading" />
          </Grid>
          <Grid size={{  xs:6,sm:4,md:3}} sx={{borderRadius:"10px"}}>
            <img src="/images/search3.jpg"  width="100px" height="120px" alt="Loading" />
          </Grid>
          <Grid size={{ xs:6,sm:4,md:3}} sx={{borderRadius:"10px"}}>
            <img src="/images/search4.jpg"  width="100px" height="120px" alt="Loading" />
          </Grid>
          <Grid size={{  xs:6,sm:4,md:3 }} sx={{borderRadius:"10px"}}>
            <img src="/images/search5.jpg"  width="100px" height="120px" alt="Loading" />
          </Grid>
          <Grid size={{  xs:6,sm:4,md:3 }} sx={{borderRadius:"10px"}}>
            <img src="/images/search6.jpg"  width="100px" height="120px" alt="Loading" />
          </Grid>
          <Grid size={{  xs:6,sm:4,md:3 }} sx={{borderRadius:"10px"}}>
            <img src="/images/search7.jpg"  width="100px" height="120px" alt="Loading" />
          </Grid>
          <Grid size={{  xs:6,sm:4,md:3 }} sx={{borderRadius:"10px"}}>
            <img src="/images/search8.jpg"  width="100px" height="120px" alt="Loading" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SearchSection;
