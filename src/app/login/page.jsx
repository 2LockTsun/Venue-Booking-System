'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  CssBaseline
} from '@mui/material';

export default function Login() {
  localStorage.setItem('session', null);
  const router = useRouter();
  const [error, setError] = useState(false);
  const [reason, setReason] = useState('');

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
