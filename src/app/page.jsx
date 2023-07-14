'use client';
import { useEffect, useState } from 'react';
import { Box, TextField, Toolbar, Button } from '@mui/material';
import CustomAppBar from '@/components/global/CustomAppBar';

export default function Main() {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        console.log(login);
    }, [login]);

    return login ? (
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
                        <Box sx={{ fontSize: 30 }}>Welcome to this website</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    ) : (
        <Box>
            <CustomAppBar />
            <Box>
                <Toolbar />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Box padding="2em">
                        <TextField
                            id="username"
                            label="Username"
                            variant="standard"
                        />
                    </Box>
                    <Box padding="2em">
                        <TextField
                            id="password"
                            label="Password"
                            variant="standard"
                            type="password"
                        />
                    </Box>
                    <Box padding="2em">
                        <Button onClick={() => setLogin(!login)}>Login</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
