'use client';
import { Box, Container, Toolbar } from '@mui/material';
import CustomAppBar from '@/components/CustomAppBar';

export default function Main() {
    return (
        <Box>
            <CustomAppBar />
            <Box>
                <Toolbar />
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '45em'
                    }}
                >
                    <Box
                        display="flex"
                        sx={{
                            width: '30em',
                            height: '10em',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Box sx={{ fontSize: 30 }}>
                            Welcome To Venue Booking System
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
