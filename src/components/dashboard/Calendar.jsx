'use client';
import { Box } from '@mui/material';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export default function Calendar() {
    return (
        <Box flex="1 1 100%" ml="15px">
            <FullCalendar
                height="75vh"
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                }}
                events={[
                    { title: 'Event 1', date: '2023-04-01' },
                    { title: 'Event 2', date: '2023-04-01' }
                ]}
            />
        </Box>
    );
}