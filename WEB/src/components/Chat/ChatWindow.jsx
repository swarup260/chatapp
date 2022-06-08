import { Container } from "@mui/material";
import BaseModal from "./Modal/BaseModal"
import VerticalTabs from "./VerticalTabs";

export default function ChatWindow() {
    return (
        <Container maxWidth="m">
            <BaseModal />
            <VerticalTabs/>
        </Container>
    )
}