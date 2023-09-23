'use client';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import dayjs from 'dayjs';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import BookingInfoModal from '../global/BookingInfoModal';

// Helper functions for fetching bookings from the database
async function fetchBookings() {
  const bookings = await fetch(`http://localhost:3000/api/booking`)
    .then((res) => res.json())
    .then((data) => data.bookings);
  return bookings;
}

// Helper functions for fetching booking by id
async function fetchBooking(bookingId) {
  const booking = await fetch(
    `http://localhost:3000/api/booking?bookingId=${bookingId}`
  )
    .then((res) => res.json())
    .then((data) => data.booking);
  return booking;
}

// Calendar component for displaying all bookings with a calendar

export default function Calendar() {
  // State variables for the calendar as named
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

  // useEffect to update the state variable as the page loaded
  useEffect(() => {
    fetchBookings().then((bookings) => setBookings(bookings));
  }, []);

  // Helper function to convert bookings fetched from api to events on calendar
  const events = bookings.map((booking) => {
    return {
      title: `${booking.roomCode} - ${booking.bookingPeriod} | ${booking.staffInitial}`,
      date: dayjs(booking.bookingDate).format('YYYY-MM-DD'),
      allDay: true,
      id: booking.id
    };
  });

  // The actual layout of the page
  return (
    <Box flex="1 1 100%">
      <BookingInfoModal
        open={bookingInfoModalOpen}
        onClose={() => setBookingInfoModalOpen(false)}
        booking={selectedBooking}
      />
      <FullCalendar
        height="75vh"
        plugins={[dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
        }}
        events={events}
        eventClick={(info) => {
          setSelectionModel(info.event.id);
          setBookingInfoModalOpen(true);
        }}
      />
    </Box>
  );
}
