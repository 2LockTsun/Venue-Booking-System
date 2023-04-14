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
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'yellow',
                        height: '45em'
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: 'red',
                            width: '30em',
                            height: '10em',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        Hi
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
