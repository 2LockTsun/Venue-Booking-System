'use client';
import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import CreateBookingModal from '../global/CreateBookingModal';
import BookingInfoModal from '../global/BookingInfoModal';

async function fetchBooking(bookingId) {
  const booking = await fetch(
    `http://localhost:3000/api/booking?bookingId=${bookingId}`
  )
    .then((res) => res.json())
    .then((data) => data.booking);
  return booking;
}

export default function Overview({ bookings, venues, staffInitial }) {
  const [createBookingModalOpen, setCreateBookingModalOpen] = useState(false);
  const [bookingInfoModalOpen, setBookingInfoModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState();
  const [selectionModel, setSelectionModel] = useState();

  useEffect(() => {
    if (selectionModel) {
      fetchBooking(selectionModel).then((booking) => {
        setSelectedBooking(booking);
      });
    }
  }, [selectionModel]);

  const columns = [
    { field: 'venue', headerName: 'Venue', width: 150 },
    { field: 'staff', headerName: 'Teacher', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'period', headerName: 'Period', width: 150 },
    { field: 'purpose', headerName: 'Purpose', width: 300 }
  ];

  return (
    <Box flex="1 1 100%" sx={{ flexDirection: 'column' }}>
      <Typography
        component="h1"
        variant="h4"
        sx={{ padding: '1rem', marginTop: '-1.5em' }}
      >
        Overview of all bookings
      </Typography>
      <Box
        display="flex"
        sx={{ flexDirection: 'row', justifyContent: 'flex-end' }}
      >
        <Button
          variant="outlined"
          sx={{ margin: '1rem' }}
          onClick={() => setCreateBookingModalOpen(true)}
        >
          Create New Booking
        </Button>
      </Box>
      <BookingInfoModal
        open={bookingInfoModalOpen}
        onClose={() => setBookingInfoModalOpen(false)}
        booking={selectedBooking}
      />
      <CreateBookingModal
        open={createBookingModalOpen}
        onClose={() => setCreateBookingModalOpen(false)}
        staffInitial={staffInitial}
        venues={venues}
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
        sx={{ height: '75vh' }}
        rows={bookings}
        columns={columns}
      />
    </Box>
  );
}
