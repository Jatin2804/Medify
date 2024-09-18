import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Slots from "./Slots";
import { useLocation } from "react-router-dom";

export default function HospitalCard({
  hospitalName,
  address,
  city,
  state,
  country,
  zip,
  phone,
  rating,
  hospitalOwnership,
  hospitalType,
  date,
  time,
  handleDelete
}) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();
  const [bookingPage, setBookingPage] = useState(false);

  const data = {
    hospitalName,
    address,
    city,
    state,
    country,
    zip,
    phone,
    rating,
    hospitalOwnership,
    hospitalType,
  };

  // UseEffect that listens for changes in the location pathname
  useEffect(() => {
    // Check if the pathname includes "/booking"
    if (location.pathname.includes("/booking")) {
      setBookingPage(true);
    } else {
      setBookingPage(false);
    }
  }, [location.pathname]); // Trigger when the pathname changes

  return (
    <Card sx={{ width: "100%", marginY: "10px", maxHeight: "fit-content" }}>
      <Grid container>
        <Grid size={{ xs: 3, md: 3 }}>
          <CardMedia
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: {
                xs: "50px",
                sm: "100px",
                md: "200px",
              },
              width: {
                xs: "50px",
                sm: "100px",
                md: "200px",
              },
              backgroundColor: "#8CCFFF",
              borderRadius: "50%",
              marginY: 5,
            }}
          >
            <img src="./images/hospital.png" height="60%" alt="hospital" />
          </CardMedia>
        </Grid>

        <Grid size={{ xs: 9, md: 5 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "100%",
            }}
          >
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {hospitalOwnership}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary.main"
            >
              {hospitalName}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {hospitalType}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {`${address}, ${city}, ${state}, ${country}, ${zip}`}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {phone}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <Box
                sx={{
                  bgcolor: "green",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  width: "50px",
                  margin: "10px",
                }}
              >
                <ThumbUpIcon fontSize="small" />
                {rating === "Not Available" ? ` ` : rating}
              </Box>
            </Typography>
          </CardContent>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          {!bookingPage ? (
            <CardActions
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography variant="body2">Check Availability</Typography>
              <Button
                onClick={() => setBookingOpen((prev) => !prev)}
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  borderRadius: "10px",
                  margin: "10px",
                }}
                size="large"
              >
                {bookingOpen ? `Hide Slots` : `Check Slots`}
              </Button>
            </CardActions>
          ) : (
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                height: "100%",
                flexWrap:"wrap"
              }}
            >
             
              <Button
               variant="outlined"
                sx={{
                  color: "primary.main",
                  borderRadius: "10px",
                  margin: "10px",
                }}
                size="large"
              >
                {date}
              </Button>
              <Button
                variant="outlined"
                sx={{
                 color:"primary.main",
                  borderRadius: "10px",
                  margin: "10px",
                }}
                size="large"
              >
              {time}
              </Button>
              <Button
                variant="contained"
                sx={{
                 color:"white",
                 bgcolor:"red",
                  borderRadius: "10px",
                  margin: "10px",
                }}
                size="large"
                onClick={()=>handleDelete(hospitalName)}
              >
              Cancel
              </Button>
            </CardActions>
          )}
        </Grid>
      </Grid>

      {bookingOpen && (
        <Grid container>
          <Slots data={data} />
        </Grid>
      )}
    </Card>
  );
}
