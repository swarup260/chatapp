import { AppBar } from "@mui/material";
import Typography from '@mui/material/Typography'

export default function AppHeader() {
    return (
        <AppBar position="static">
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 5, p: 1, display: { xs: 'none', md: 'flex' } }}
            >
                CHAT APP
            </Typography>
        </AppBar>)
}