import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import Joi from "joi";

import { isApiLoading, SET_DAILOGBOX_STATE, userData } from "../../../store/app";
import InputField from "../../InputField";
import SubmitButton from "../../Login/SubmitButton";
import functions from "../../../utils/functions";


export default function CreateRoom() {
  const isLoading = useSelector(isApiLoading);
  const user = useSelector(userData)
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget)
      const room = data.get("newRoom")
      if (room == "") return false

      dispatch(SET_ROOM(room))
      dispatch(SET_IS_MODAL_OPEN(false))
      dispatch(SET_ACTIVE_ROOM(room))

    } catch (error) {
      dispatch(SET_DAILOGBOX_STATE(functions.setErrorAlert(error)))
    }
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
