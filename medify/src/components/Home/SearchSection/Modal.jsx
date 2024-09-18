import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ booking, isOpen, handleClose ,confirm}) {
//   React.useEffect(() => {
//     console.log("Modal state changed:", isOpen);
//   }, [isOpen]);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Booking Details
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {booking
            ? `You have booked an appointment on ${booking.date} at ${booking.time}.`
            : "No booking information available."}
        </Typography>
        <Button variant="contained" bgcolor="primarry.main" onClick={confirm} sx={{margin:5}} >Confirm Booking</Button>
      </Box>
    </Modal>
  );
}
