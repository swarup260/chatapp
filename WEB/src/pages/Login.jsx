import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Joi from "joi"
import { useState } from "react";

import BaseContainer from "../components/Login/BaseContainer";
import { useDispatch } from "react-redux";
import { login } from "../store/auth";


export default function Login() {

  const [emailError, setEmailError] = useState({ isError: false, errorMessage: '' })
  const [passwordError, setPasswordError] = useState({ isError: false, errorMessage: '' })

  const dispatch = useDispatch()


  const handleSubmit = async (event) => {
    try {

      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get("email")
      const password = data.get("password")

      try {
        const schema = Joi.string().email({ tlds: { allow: false } }).required();
        await schema.validateAsync(email);
      } catch (error) {
        setEmailError({ isError: true, errorMessage: error.message })
        return
      }

      try {
        const schema = Joi.string().required({ tlds: { allow: false } }).min(5);
        await schema.validateAsync(password);
      } catch (error) {
        setPasswordError({ isError: true, errorMessage: error.message })
        return
      }

      dispatch(login({ email, password }))
    } catch (error) {
      console.log({ error })
    }
  };

  return (
    <BaseContainer title="Sign In">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item>
            <Link to="/sign-up">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </BaseContainer>
  );
}
