import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Joi from "joi";

import InputField from "../InputField";

export default function ChataForm() {
  return (
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
  );
}
