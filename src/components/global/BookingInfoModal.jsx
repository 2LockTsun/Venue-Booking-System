import { useEffect, useState } from 'react';
import { Modal, Box, Typography, Button, Grid } from '@mui/material';

// * BookingInfoModal component for displaying booking details

export default function BookingInfoModal({ open, onClose, booking }) {
  // * State variables and its initial state for the booking to display as named
  const [bookingInfo, setBookingInfo] = useState({
    id: 'N/A',
    Venue: { roomName: 'N/A' },
    Staff: { name: 'N/A' },
    bookingDate: 'N/A',
    bookingPeriod: 'N/A',
    purpose: 'N/A'
  });

  // * useEffect to update the state variable when the booking prop changes
  useEffect(() => {
    if (!booking) return;
    setBookingInfo(booking);
  }, [booking]);

  // * The actual layout of the modal
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        sx={{
          width: '40em',
          borderRadius: '1.5em',
          bgcolor: 'white',
          padding: '2em',
          flexDirection: 'column'
        }}
      >
        <Typography component="h1" variant="h4" marginBottom="0.5em">
          Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h5">
              Venue
            </Typography>
            <Typography component="h2" variant="subtitle1">
              {bookingInfo.Venue.roomName}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h5">
              Staff
            </Typography>
            <Typography component="h2" variant="subtitle1">
              {bookingInfo.Staff.name}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h5">
              Date
            </Typography>
            <Typography component="h2" variant="subtitle1">
              {new Date(bookingInfo.bookingDate).toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h5">
              Period
            </Typography>
            <Typography component="h2" variant="subtitle1">
              {bookingInfo.bookingPeriod}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h5">
              Purpose
            </Typography>
            <Typography component="h2" variant="subtitle1">
              {bookingInfo.purpose}
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          <Button
            variant="contained"
            color="error"
            sx={{ margin: '1em' }}
            onClick={() => {
              // * Delete the booking from the database
              fetch(`http://localhost:3000/api/booking/${bookingInfo.id}`, {
                method: 'DELETE'
              }).then((res) => {
                if (res.status == 200) onClose();
                else alert('Error deleting booking');
              });
            }}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ margin: '1em' }}
            onClick={onClose}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
