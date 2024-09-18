import React from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <Box
      className="headerSection"
      sx={{ backgroundColor: "#2AA7FF", color: "white", height: "50px",
        display:{xs:"none",md:"flex"},justifyContent:"center",alignItems:"center"
       }}
    >
      <Typography variant="body1" mx={2}>
      The health and well-being of our patients and their health care team will
      always be our priority, so we follow the best practices for cleanliness.
      </Typography>
      
    </Box>
  );
};

export default Header;
