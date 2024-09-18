import { Box } from '@mui/material';
import React from 'react';
import HospitalCard from "./HospitalCard";
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

const SearchResult = ({ data,State, City }) => {
  return (
    <Grid container sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
         <Grid  size={{ xs: 12, lg: 9 }} sx={{width:"100%"}}>
        {data.length?(
          <Box>
             <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.5rem",
                  lg: "2rem",
                },
                textAlign: "center",
                margin:"20px"
              }}
            >
              {data.length} medical centers available in {City === "All"|| City == null ? `${State}` : `${City}`}
            </Typography>
          {data.map((item) => {
          return (
            <Box key={item["Provider ID"]}>
              <HospitalCard 
                hospitalName={item["Hospital Name"]} 
                address={item.Address} 
                city={item.City} 
                state={item.State} 
                country={item["Country Name"]}
                zip={item["ZIP Code"]} 
                phone={item["Phone Number"]}
                rating={item["Hospital overall rating"]}
                hospitalOwnership={item["Hospital Ownership"]}
                hospitalType={item["Hospital Type"]}
                // Add more props to pass necessary data to the HospitalCard component
              />
            </Box>
          );
        })}
          </Box>
        ):(
            <Box sx={{display:"flex",justifyContent:"center",margin:"100px"}}>
                <Typography variant="h2" sx={{ fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.5rem",
                  lg: "2rem",
                },}}>
                Select State to search for Hospitals
                </Typography>
                
            </Box>
        )}
       
    </Grid>
    <Grid  size={{ xs: 12, md: 2.5 }} sx={{width:"200px",height:"200px",margin:"20px",display:"flex",justifyContent:"center"}}>
        <Box>
        <img src="./images/add.png" width="100%" height="100%" alt="Loading.." />
        </Box>
    </Grid>
    </Grid>
   
  );
};

export default SearchResult;
