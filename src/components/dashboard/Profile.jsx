'use client';
import { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

export default function Profile({ staff }) {
  const [password, setPassword] = useState(staff.password);
  return (
    <Box flex="1 1 100%">
      <Typography
        component="h1"
        variant="h4"
        sx={{ padding: '1rem', marginTop: '-1.5em' }}
      >
        Profiles
      </Typography>
      <Grid container spacing={3} columns={12}>
        <Grid item xs={4}>
          <Typography component="h2" variant="h5">
            Name
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle1">{staff.name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography component="h2" variant="h5">
            Email
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle1">{staff.email}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography component="h2" variant="h5">
            Password
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="password"
            variant="standard"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => {
              fetch(`/api/staff?id=${staff.id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  password: password
                })
              }).then((res) => {
                if (res.status === 200) {
                  alert('Password updated!');
                } else {
                  alert('Password update failed!');
                }
              });
            }}
          >
            Update
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography component="h2" variant="h5">
            Staff Initial
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle1">{staff.staffInitial}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
