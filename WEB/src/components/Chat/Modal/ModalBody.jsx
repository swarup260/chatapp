import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";

export default function ModalBody() {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    return (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                JOIN ROOM
            </Typography>
            <CreateRoom />
            <Divider sx={{ mt: 2 }}>OR</Divider>
            <JoinRoom />
        </Box>
    )
}