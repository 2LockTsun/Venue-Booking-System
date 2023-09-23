'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  CssBaseline
} from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

import CustomAppBar from '@/components/global/CustomAppBar';
import Overview from '@/components/dashboard/Overview';
import Profile from '@/components/dashboard/Profile';
import Calendar from '@/components/dashboard/Calendar';

// * Helper functions for the page to fetch all bookings
async function fetchBookings() {
  const bookings = await fetch(`http://localhost:3000/api/booking`)
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

// * Helper functions for the page to fetch all venues
async function fetchVenues() {
  const venues = await fetch(`http://localhost:3000/api/venue`)
    .then((res) => res.json())
    .then((data) => data.venues);
  return venues;
}

// * Dashboard page for displaying all bookings of the related staff with a list and a calendar
// * Also contains a profile page for the staff to view and edit their profile

export default function Dashboard() {
  // * State variables for this page as named
  const router = useRouter();
  const [session, setSession] = useState();
  const [screen, setScreen] = useState(0);
  const [bookings, setBookings] = useState([]);
  const [venues, setVenues] = useState([]);

  // * Check if the user is logged in, and redirect it to login page if not
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('session'));
    if (!user) router.push('/login');
    setSession(user);

    // * Fetch all bookings and venues from the database
    fetchBookings().then((bookings) => setBookings(bookings));
    fetchVenues().then((venues) => setVenues(venues));
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar />
      <Drawer
        variant="permanent"
        sx={{
          width: '15em',
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: '15em',
            boxSizing: 'border-box'
          }
        }}
      >
        <Toolbar />
        <List>
          {[
            { text: 'Overview', icon: <HouseIcon /> },
            { text: 'Calendar', icon: <CalendarMonthIcon /> },
            { text: 'Profile', icon: <PersonIcon /> }
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => setScreen(index)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          flexDirection: 'column',
          padding: '5em',
          marginLeft: '-4em'
        }}
      >
        <Toolbar />
        {
          [
            <Overview
              bookings={bookings}
              venues={venues}
              staffInitial={session?.staffInitial}
            />,
            <Calendar bookings={bookings} venues={venues} />,
            <Profile staff={session} />
          ][screen]
        }
      </Box>
    </Box>
  );
}
