import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function InputField(props) {
  const validation = props.validate;

  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputHandler = async (e) => {
    try {
      await validation.validateAsync(e.target.value);
      setError(false);
      setErrorMessage("");
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
  };

  return (
    <TextField
      error={isError}
      helperText={errorMessage}
      margin="normal"
      required
      fullWidth
      autoFocus
      {...props}
      onKeyUp={inputHandler}
    />
  );
}
