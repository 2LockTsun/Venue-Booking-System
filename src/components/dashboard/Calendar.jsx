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

async function fetchBookings() {
  const bookings = await fetch(`http://localhost:3000/api/booking`)
    .then((res) => res.json())
    .then((data) => data.bookings);
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

export default function Calendar() {
  const [bookings, setBookings] = useState([]);
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

  useEffect(() => {
    fetchBookings().then((bookings) => setBookings(bookings));
  }, []);

  const events = bookings.map((booking) => {
    return {
      title: `${booking.roomCode} - ${booking.bookingPeriod} | ${booking.staffInitial}`,
      date: dayjs(booking.bookingDate).format('YYYY-MM-DD'),
      allDay: true,
      id: booking.id
    };
  });

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
