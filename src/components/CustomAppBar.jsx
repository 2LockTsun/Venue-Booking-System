import { AppBar, Toolbar, Button } from '@mui/material';

export default function CustomAppBar() {
    return <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, flexDirection: 'row' }}>
        <Toolbar>
            <Button href='/' variant='home'>Home</Button>
            <Button href='/dashboard' variant='dashboard'>Dashboard</Button>
        </Toolbar>
    </AppBar>
}