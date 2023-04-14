'use client'
import {
    Box,
    Button,
    Toolbar,
    TextField,
} from "@mui/material"

import CustomAppBar from "@/components/CustomAppBar"

export default function Page() {
    return <Box>
        <CustomAppBar />
        <Box>
            <Toolbar />
            <Box sx={{
                    display:'flex',
                    flexDirection: 'column',
                    justifyContent:'center',
                    alignItems:'center',
                    
                }}
            >
                <Box padding='2em'><TextField id='username' label='Username' variant='standard' /></Box>
                <Box padding='2em'><TextField id='password' label='Password' variant='standard' type='password' /></Box>
                <Box padding='2em'><Button onClick={null}>Login</Button></Box>
            </Box>
        </Box>
    </Box>
}