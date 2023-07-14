'use client';
import { Box } from '@mui/material';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export default function Calendar() {
    var bookings;
    fetch(`http://localhost:3000/api/booking`)
        .then((res) => res.json())
        .then((data) => (bookings = data.message));
    // .then((list) =>
    //     list.forEach((element) => ({
    //         title: element.roomCode,
    //         date: element.bookingDate.split('T')[0]
    //     }))
    // );
    console.log(bookings);

    // this file is tested extensively as a unit.
    return (
        <Box flex="1 1 100%" ml="15px">
            <FullCalendar
                height="75vh"
                plugins={[
                    dayGridPlugin,
                    interactionPlugin,
                    timeGridPlugin,
                    listPlugin
                ]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                events={null}
            />
        </Box>
    );
}
