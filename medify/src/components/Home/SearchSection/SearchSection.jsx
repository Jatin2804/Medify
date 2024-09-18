import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, useLocation,useNavigate} from "react-router-dom";
import SearchResult from "./SearchResult";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import {useData} from "../../../context";
import "../styles.css";

const defaultstates = ["California", "Texas", "New York", "Florida", "Illinois"];
const defaultcities = ["Los Angeles", "Houston", "Chicago", "Miami", "Austin"];

const SearchSection = () => {
  const location = useLocation(); 
  const navigate = useNavigate();

  const {searchResult,setSearchResult} = useData();
  const [states, setStates] = useState(defaultstates);
  const [selectedState, setSelectedState] = useState(null);
  const [cities, setCities] = useState(defaultcities);
  const [selectedCity, setSelectedCity] = useState(null);

  const Icon = location.pathname === "/" ? SearchIcon : LocationOnIcon;

  const handleSearch = async () => {
    if(location.pathname==="/")navigate("./search")
   
    console.log("Selected State:", selectedState, "|| Selected City:", selectedCity);
    
    let cityToSearch = selectedCity === "All"|| selectedCity === null ? " " : selectedCity;
    
    const response = await axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${cityToSearch}`);
    console.log("SearchResults:", response.data);
    setSearchResult(response.data);

    if(location.pathname==="/")
    navigate("/search");
  };
  

  useEffect(() => {
    const stateAPICall = async() =>{
      const response =await axios.get("https://meddata-backend.onrender.com/states");
      console.log("States:",response.data);
      setStates(response.data);
    }
    stateAPICall();
  }, [])

  useEffect(() => {
    if (selectedState) {  
      const citiesAPICall = async () => {
        const response = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`);
        console.log("Cities:", response.data);
  
        // Prepend "All" to the array of cities
        setCities(["All", ...response.data]);
      };
      citiesAPICall();
    }
  }, [selectedState]);
  
  
  

  return (
    <>
      <Box
        className="search-component"
        sx={{
          width: "80%",
          height: "fit-content",
          marginX: "auto",
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          borderRadius: "20px",
          boxShadow: 3,
        }}
      >
        <Grid container className="searchSection" spacing={3} sx={{ width: "80%", margin: "5%" }}>
          <Grid size={{ md: 5, sm: 6, xs: 12 }} className="search" sx={{ display: "flex" }}>
            <Autocomplete
              disablePortal
              options={states}
              onChange={(event, newValue) => setSelectedState(newValue)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="State" InputProps={{ ...params.InputProps, startAdornment: <IconButton><Icon /></IconButton> }} />
              )}
            />
          </Grid>

          <Grid size={{ md: 5, sm: 6, xs: 12 }} className="search" sx={{ display: "flex" }}>
            <Autocomplete
              disablePortal
              options={cities}
              onChange={(event, newValue) => setSelectedCity(newValue)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="City" InputProps={{ ...params.InputProps, startAdornment: <IconButton><Icon /></IconButton> }} />
              )}
            />
          </Grid>

          <Grid size={{ md: 2, xs: 12 }} sx={{ display: "flex", justifyContent: "center" }}>
            {/* <Link to="/search"> */}
              <Button variant="contained" onClick={handleSearch} sx={{width:"100px"}}>Search</Button>
            {/* </Link> */}
          </Grid>
        </Grid>

        {location.pathname === "/" ? (
          <Box
            sx={{
              width: "80%",
              maxHeight: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.5rem",
                  lg: "2rem",
                },
                textAlign: "center",
              }}
            >
              You May Be Looking For
            </Typography>
            <Grid container spacing={3} sx={{margin:"5%",}}>
          <Grid size={{ xs:6,sm:4,md:2.4 }} sx={{ display: "flex", justifyContent: "center" }}>
            <img src="/images/card_service.png" width="120px" height="100px" alt="Loading" />
          </Grid>
          <Grid size={{  xs:6,sm:4,md:2.4 }} sx={{ display: "flex", justifyContent: "center" }}>
            <img src="/images/card_service (1).png" width="120px" height="100px" alt="Loading" />
          </Grid>
          <Grid size={{  xs:6,sm:4,md:2.4 }} sx={{ display: "flex", justifyContent: "center" }}>
            <img src="/images/card_service (2).png" width="120px" height="100px" alt="Loading" />
          </Grid>
          <Grid size={{  xs:6,sm:6,md:2.4 }} sx={{ display: "flex", justifyContent: "center" }}>
            <img src="/images/card_service (3).png" width="120px" height="100px" alt="Loading" />
          </Grid>
          <Grid size={{  xs:12,sm:2,md:2.4 }} sx={{ display: "flex", justifyContent: "center" }}>
            <img src="/images/card_service (4).png" width="120px" height="100px" alt="Loading" />
          </Grid>
        </Grid>
          </Box>
        ) : null}
      </Box>

      {location.pathname === "/" ? null : <SearchResult data={searchResult} State={selectedState} City={selectedCity}/>}
    </>
  );
};

export default SearchSection;
