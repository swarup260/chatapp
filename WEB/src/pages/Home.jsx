import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputField from "../components/InputField";
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Joi from "joi";

export default function Home() {
  return (
    <>
      <Container maxWidth="m">
        <Box
          sx={{
            bgcolor: "#e3ebf1",
            height: "90vh",
            overflowY: "scroll",
          }}
        >
          <List>
          </List>
        </Box>
        <Box
          sx={{ bgcolor: "#cfe8fc", height: "10vh" }}
          component="form"
          onSubmit={() => {}}
          noValidate
          className="left-0 right-0 bottom-0"
        >
          <div className="flex justify-between">
            <InputField
              name="message"
              label="Message"
              type="message"
              id="message"
              size="small"
              sx={{ margin: "14px" }}
              validate={Joi.string().required()}
            />
            <Button
              variant="contained"
              color="success"
              size="small"
              sx={{ margin: "14px" }}
            >
              Send
            </Button>
          </div>
        </Box>
      </Container>
    </>
  );
}
