import { Drawer, Button } from "@mui/material"

export default function Page() {
    return <main>
        <Button onClick={toggleDrawer('left', true)}>Left</Button>
        <Drawer
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          
        </Drawer>
    </main>
}