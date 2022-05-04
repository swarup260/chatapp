import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Joi from "joi"
import { useState } from "react";

import BaseContainer from "../components/Login/BaseContainer";
import { useDispatch } from "react-redux";
import { register } from "../store/auth";

export default function SignUp() {

  const [emailError, setEmailError] = useState({ isError: false, errorMessage: '' })
  const [usernameError, setUsernameError] = useState({ isError: false, errorMessage: '' })
  const [passwordError, setPasswordError] = useState({ isError: false, errorMessage: '' })
  const [repasswordError, setRepasswordError] = useState({ isError: false, errorMessage: '' })


  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get("email")
      const username = data.get("username")
      const password = data.get("password")
      const repassword = data.get("repassword")


      try {
        const schema = Joi.string().email({ tlds: { allow: false } }).required();
        await schema.validateAsync(email);
      } catch (error) {
        setEmailError({ isError: true, errorMessage: error.message })
        return
      }


      try {
        const schema = Joi.string().required({ tlds: { allow: false } }).min(5);
        await schema.validateAsync(username);
      } catch (error) {
        setUsernameError({ isError: true, errorMessage: error.message })
        return
      }

      try {
        const schema = Joi.string().required({ tlds: { allow: false } }).min(5);
        await schema.validateAsync(password);
      } catch (error) {
        setPasswordError({ isError: true, errorMessage: error.message })
        return
      }

      try {
        const schema = Joi.string().required({ tlds: { allow: false } }).min(5);
        await schema.validateAsync(repassword);
      } catch (error) {
        setRepasswordError({ isError: true, errorMessage: error.message })
        return
      }


      dispatch(register({ email, username, password, repassword }))
    } catch (error) {
      console.log({ error })
    }
  };

  return (
    <BaseContainer title="Sign Up">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          error={usernameError.isError}
          helperText={usernameError.errorMessage}
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          error={emailError.isError}
          helperText={emailError.errorMessage}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          error={passwordError.isError}
          helperText={passwordError.errorMessage}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <TextField
          error={repasswordError.isError}
          helperText={repasswordError.errorMessage}
          margin="normal"
          required
          fullWidth
          name="repassword"
          label="RePassword"
          type="password"
          id="Repassword"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/">Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </Box>
    </BaseContainer>
  );
}
