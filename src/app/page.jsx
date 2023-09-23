'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Grid, Toolbar, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import CustomAppBar from '@/components/global/CustomAppBar';
import BookingInfoModal from '../components/global/BookingInfoModal';

async function fetchBookings(userId) {
  const bookings = await fetch(
    `http://localhost:3000/api/booking?userId=${userId}`
  )
    .then((res) => res.json())
    .then((data) =>
      data.bookings.map((booking) => {
        return {
          id: booking.id,
          venue: booking.Venue.roomName,
          staff: booking.Staff.name,
          date: new Date(booking.bookingDate).toLocaleDateString(),
          period: booking.bookingPeriod,
          purpose: booking.purpose
        };
      })
    );
  return bookings;
}

async function fetchBooking(bookingId) {
  const booking = await fetch(
    `http://localhost:3000/api/booking?bookingId=${bookingId}`
  )
    .then((res) => res.json())
    .then((data) => data.booking);
  return booking;
}

// Home page for displaying all bookings of the related staff with a list

export default function Main() {
  // Check if the user is logged in, and redirect it to login page if not
  const router = useRouter();
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('session'));
    if (!session) return router.push('/login');
    fetchBookings(session.id).then((bookings) => setBookings(bookings));
  }, []);

  // State variables for this list as named
  const [bookings, setBookings] = useState([]);
  const [bookingInfoModalOpen, setBookingInfoModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState();
  const [selectionModel, setSelectionModel] = useState();

  // useEffect to update the state variable when the selectionModel prop changes
  useEffect(() => {
    if (selectionModel) {
      fetchBooking(selectionModel).then((booking) => {
        setSelectedBooking(booking);
      });
    }
  }, [selectionModel]);

  // The columns of the list
  const columns = [
    { field: 'venue', headerName: 'Venue', width: 150 },
    { field: 'staff', headerName: 'Teacher', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'period', headerName: 'Period', width: 150 },
    { field: 'purpose', headerName: 'Purpose', width: 300 }
  ];

  // The actual layout of the page
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CustomAppBar />
      <Toolbar />
      <Box
        component="main"
        sx={{
          display: 'flex',
          height: '90vh',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Toolbar />
        <Grid container columns={12}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h5"
              textAlign="center"
              sx={{ padding: '1em' }}
            >
              List of your bookings
            </Typography>
          </Grid>
        </Grid>
        <BookingInfoModal
          open={bookingInfoModalOpen}
          onClose={() => setBookingInfoModalOpen(false)}
          booking={selectedBooking}
        />
        <DataGrid
          onRowSelectionModelChange={(model) => {
            setSelectionModel(model[0]);
            setBookingInfoModalOpen(true);
          }}
          slots={{
            noRowsOverlay: () => (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Typography variant="h6">You have no bookings!</Typography>
              </Box>
            )
          }}
          sx={{
            height: '45vh',
            width: '75vw'
          }}
          rows={bookings}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
