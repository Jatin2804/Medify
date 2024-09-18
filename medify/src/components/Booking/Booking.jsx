import { Box } from '@mui/material';
import React from 'react';
import HospitalCard from "../Home/SearchSection/HospitalCard";
import Typography from '@mui/material/Typography';
import { useData } from "../../context";
import { Link } from 'react-router-dom';

const Bookings = () => {
    const { bookings, setBookings } = useData();
    console.log("Bookings from boking page",bookings);

    const handleDelete = (data) =>{
        setBookings((prev)=> prev = bookings.filter((item)=> item.hospitalName !== data));
    }

    React.useEffect(() => {
      const storedBookings = JSON.parse(localStorage.getItem("Bookings")) || [];
      setBookings(storedBookings);  // Set the state with data from local storage
    }, []);
    

  return (
    <Box container sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
         <Box sx={{width:"100%"}}>
        {bookings.length?(
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
             Your Bookings
            </Typography>
            {bookings.map((item, index) => {
  return (
    <Box key={index}>  {/* Use index if no unique identifier like "Provider ID" */}
      <HospitalCard
        hospitalName={item.hospitalName} 
        address={item.address} 
        city={item.city} 
        state={item.state} 
        country={item.country} 
        zip={item.zip} 
        phone={item.phone}
        rating={item.rating}
        hospitalOwnership={item.hospitalOwnership}
        hospitalType={item.hospitalType}
        date={item.date}        
        time={item.time}       
        handleDelete={handleDelete} 
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
                No Bookings <Link to="/search" color="lightblue"> Check hospitals</Link>
                </Typography>
                
            </Box>
        )}
       
    </Box>
   
    </Box>
   
  );
};

export default Bookings;
