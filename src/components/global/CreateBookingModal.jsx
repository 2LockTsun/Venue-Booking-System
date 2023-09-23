import { useState } from 'react';
import dayjs from 'dayjs';
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// * Helper functions for the DatePicker
const today = dayjs();
const oneMonthFromToday = today.add(1, 'month');
const isSunday = (date) => {
  return date.day() === 0;
};

// * CreateBookingModal component for creating new bookings

export default function CreateBookingModal({
  open,
  onClose,
  staffInitial,
  venues
}) {
  // * State variables for the form as named
  const [venue, setVenue] = useState(``);
  const [period, setPeriod] = useState(``);
  const [reason, setReason] = useState('');
  const [error, setError] = useState(false);
  const [date, setDate] = useState(today);

  // * THe actual layout of the modal
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        component="form"
        noValidate
        onSubmit={(event) => {
          setError(false);
          setReason('');
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const bookingDate = date.hour(0).minute(0).second(0).millisecond(0);

          fetch('/api/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              staffInitial: staffInitial,
              roomCode: data.get('venue'),
              bookingDate: bookingDate.toDate(),
              bookingPeriod: data.get('period'),
              purpose: data.get('reason')
            })
          }).then((res) => {
            if (res.status === 200) {
              onClose();
            } else if (res.status === 400) {
              setReason('Input cannot be empty!');
            } else if (res.status === 403) {
              setReason(
                'You are not authorized to create more than 4 bookings!'
              );
            } else if (res.status === 409) {
              setReason('Booking already exists!');
            } else {
              setReason('Unknown error!');
            }
            setError(true);
          });
        }}
        sx={{
          width: '40em',
          borderRadius: '1.5em',
          bgcolor: 'white',
          padding: '2em',
          flexDirection: 'column'
        }}
      >
        <Typography component="h1" variant="h4" marginBottom="0.5em">
          Create New Booking
        </Typography>
        <FormControl fullWidth required margin="normal" error={error}>
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select
            id="venue"
            name="venue"
            label="Venue"
            labelId="venue-label"
            value={venue}
            onChange={(event) => setVenue(event.target.value)}
          >
            <MenuItem value={``}>None</MenuItem>
            {
              // * Dynamically display the venues
              venues.map((venue, index) => (
                <MenuItem key={`menuItem${index}`} value={venue.roomCode}>
                  {venue.roomName}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            sx={{ marginTop: '0.5em' }}
            minDate={today}
            maxDate={oneMonthFromToday}
            shouldDisableDate={isSunday}
            value={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </LocalizationProvider>
        <FormControl fullWidth required margin="normal" error={error}>
          <InputLabel id="period-label">Period</InputLabel>
          <Select
            id="period"
            name="period"
            label="Period"
            labelId="period-label"
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
          >
            <MenuItem value={``}>None</MenuItem>
            {[
              '1st Period',
              '2nd Period',
              '3rd Period',
              '4th Period',
              '5th Period',
              '6th Period',
              'Lunch',
              '7th Period',
              '8th Period',
              '9th Period',
              'After School'
            ].map((period) => (
              <MenuItem key={`menuItem${period}`} value={period}>
                {period}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          required
          variant="standard"
          margin="normal"
          id="reason"
          name="reason"
          label="Reason"
          helperText={reason}
          error={error}
        />
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
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ margin: '1em' }}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
