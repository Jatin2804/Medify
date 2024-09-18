import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useData } from "../../../context";
import Modal from "./Modal";

const getLabelForDate = (date, index) => {
  if (index === 0) return "Today";
  if (index === 1) return "Tomorrow";
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
};

const getNextDays = (numDays) => {
  const today = new Date();
  return Array.from({ length: numDays }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  });
};

export default function Slots({ data }) {
  const { bookings, setBookings } = useData();
  const [newBooking, setNewBooking] = useState(null);
  const [value, setValue] = useState("Today");
  const [modal, setModal] = useState(false);
  const dates = getNextDays(15);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (selectedTime) => {
    const booking = {
      ...data,
      date: value,
      time: selectedTime,
    };

    setNewBooking(booking);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleSubmit=()=>{
    if (newBooking) {
      const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem("Bookings", JSON.stringify(updatedBookings));
    handleClose();
    }
  }
  useEffect(() => {
    if (newBooking) {
     console.log("newBooking:",newBooking)
     console.log("Bookings:",bookings)
    }
  }, [newBooking, bookings]);

  return (
    <Box>
      <Box sx={{ width: "100%", overflowX: "auto" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          {dates.map((date, index) => (
            <Tab
              key={index}
              value={getLabelForDate(date, index)}
              label={<Box>{getLabelForDate(date, index)}</Box>}
            />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", margin: "10px" }}>
        <Box sx={{ display: "flex", margin: "10px", height: "fit-content" }}>
          <Box sx={{ margin: "15px" }}>Morning</Box>
          <Button variant="outlined" onClick={() => handleClick("11:30 AM")}>
            11:30 AM
          </Button>
        </Box>

        <Box sx={{ display: "flex", margin: "10px", height: "fit-content" }}>
          <Box sx={{ margin: "15px" }}>Afternoon</Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              maxWidth: "250px"
            }}
          >
            <Button variant="outlined" onClick={() => handleClick("12:00 PM")}>
              12:00 PM
            </Button>
            <Button variant="outlined" onClick={() => handleClick("12:30 PM")}>
              12:30 PM
            </Button>
            <Button variant="outlined" onClick={() => handleClick("1:30 PM")}>
              1:30 PM
            </Button>
            <Button variant="outlined" onClick={() => handleClick("2:30 PM")}>
              2:30 PM
            </Button>
            <Button variant="outlined" onClick={() => handleClick("3:00 PM")}>
              3:00 PM
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", margin: "10px", height: "fit-content" }}>
          <Box sx={{ margin: "15px" }}>Evening</Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              maxWidth: "250px",
            }}
          >
            <Button variant="outlined" onClick={() => handleClick("6:00 PM")}>
              6:00 PM
            </Button>
            <Button variant="outlined" onClick={() => handleClick("6:30 PM")}>
              6:30 PM
            </Button>
            <Button variant="outlined" onClick={() => handleClick("7:00 PM")}>
              7:00 PM
            </Button>
            <Button variant="outlined" onClick={() => handleClick("7:30 PM")}>
              7:30 PM
            </Button>
          </Box>
        </Box>
      </Box>

      <Modal booking={newBooking} isOpen={modal} handleClose={handleClose} confirm={handleSubmit}/>
    </Box>
  );
}
