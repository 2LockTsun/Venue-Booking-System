'use client';
import React from 'react';
import { redirect } from 'next/navigation';
import {
    Box,
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Container
} from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

import CustomAppBar from '@/components/CustomAppBar';
import Overview from '@/components/dashboard/Overview';
import Profile from '@/components/dashboard/Profile';
import Settings from '@/components/dashboard/Settings';
import Calendar from '@/components/dashboard/Calendar';

export default function Page() {
    const [login, setLogin] = React.useState(true);
    if (!login) return redirect('/login');

    const [state, setState] = React.useState(0);

    return (
        <Box sx={{ display: 'flex' }}>
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
                <Box>
                    <List>
                        {[
                            { text: 'Overview', icon: <HouseIcon /> },
                            { text: 'Calendar', icon: <CalendarMonthIcon /> },
                            { text: 'Profile', icon: <PersonIcon /> },
                            { text: 'Settings', icon: <SettingsIcon /> }
                        ].map((item, index) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton onClick={() => setState(index)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Container fixed sx={{ flexGrow: 1, p: 2 }}>
                <Toolbar />
                {[<Overview />, <Calendar />, <Profile />, <Settings />][state]}
            </Container>
        </Box>
    );
}
