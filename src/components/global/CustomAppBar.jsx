import { AppBar, Toolbar, Button, Grid } from '@mui/material';

// * Custom AppBar for the application

export default function CustomAppBar() {
  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        flexDirection: 'row'
      }}
    >
      <Toolbar sx={{ width: '100vw' }}>
        <Grid container columns={10}>
          <Grid item xs={1}>
            <Button href="/" variant="home">
              Home
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button href="/dashboard" variant="dashboard">
              Dashboard
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Button href="/login" onClick={() => {}} variant="logout">
            Logout
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
