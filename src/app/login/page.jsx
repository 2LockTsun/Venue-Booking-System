'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  CssBaseline
} from '@mui/material';

// Login page for logging in to the application

export default function Login() {
  // Clear the session when the page is loaded
  useEffect(() => {
    localStorage.setItem('session', null);
  }, []);

  // State variables for this page as named
  const router = useRouter();
  const [error, setError] = useState(false);
  const [reason, setReason] = useState('');

  // The actual page content
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        <Typography paddingBottom="1em" component="h1" variant="h3">
          CPU Venue Booking System
        </Typography>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={(e) => {
            setError(false);
            setReason('');
            e.preventDefault();
            const data = new FormData(e.currentTarget);

            // Send a POST request to the api to log in
            fetch('/api/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: data.get('email'),
                password: data.get('password')
              })
            }).then((res) => {
              if (res.status === 200) {
                return res.json().then((data) => {
                  localStorage.setItem('session', JSON.stringify(data.user));
                  router.push('/');
                });
              } else if (res.status === 400) {
                setReason('Credentials cannot be empty!');
              } else if (res.status === 401) {
                setReason('Invalid credentials!');
              } else {
                setReason('Unknown error!');
              }
              setError(true);
            });
          }}
        >
          <TextField
            margin="normal"
            id="email"
            label="email"
            name="email"
            required
            fullWidth
            autoFocus
            helperText={reason}
            error={error}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            helperText={reason}
            error={error}
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log in
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
