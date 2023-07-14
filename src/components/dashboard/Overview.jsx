'use client';
import { Box } from '@mui/material';

export default function Overview() {
    return (
        <Box display="flex" sx={{ flexDirection: 'column' }}>
            <Box>Overview</Box>
            <Box>Here is the content</Box>
            <Box display="flex" sx={{ flexDirection: 'row' }}>
                <Box>1</Box>
                <Box>2</Box>
            </Box>
        </Box>
    );
}
