import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { isApiLoading } from "../../../store/app";
import InputField from "../../InputField";
import SubmitButton from "../../Login/SubmitButton";
import Joi from "joi";

export default function CreateRoom() {
  const isLoading = useSelector(isApiLoading);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    try {
      const data = new FormData(event.currentTarget);
      const roomName = data.get("newRoom");
      if (roomName == "") {
        return false;
      }
    } catch (error) {}
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column" }}
      component="form"
      onSubmit={handleSubmit}
    >
      <InputField
        label="Create New Room"
        name="newRoom"
        validate={Joi.string()
          .required({ tlds: { allow: false } })
          .min(5)}
      />
      <SubmitButton title={"Create"} isLoading={isLoading} />
    </Box>
  );
}
