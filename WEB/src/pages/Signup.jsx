import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import Joi from "joi";

import BaseContainer from "../components/Login/BaseContainer";
import SubmitButton from "../components/Login/SubmitButton";
import InputField from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import {
  isApiLoading
} from "../store/auth";

import { SET_DAILOGBOX_STATE } from "../store/app";
import func from "../utils/functions";
import { apiCall, endpoints } from "../config/api";

export default function SignUp() {

  const dispatch = useDispatch();

  const isLoading = useSelector(isApiLoading);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log(data)
      const email = data.get("email");
      const username = data.get("username");
      const password = data.get("password");
      const repassword = data.get("repassword");

      if (password != repassword) {
        throw new Error("Password Mismatch")
      }

      /* API CALL */
      await apiCall({
        endpoint: endpoints.REGISTER,
        data: {
          email,
          password,
          repassword,
          username,
        }, dispatch
      });

    } catch (error) {
      dispatch(SET_DAILOGBOX_STATE(func.setErrorAlert(error)));
    }
  };

  return (
    <BaseContainer title="Sign Up">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <InputField
          validate={Joi.string()
            .required({ tlds: { allow: false } })
            .min(5)}
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
        />
        <InputField
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          validate={Joi.string()
            .email({ tlds: { allow: false } })
            .required()}
        />
        <InputField
          validate={Joi.string()
            .required({ tlds: { allow: false } })
            .min(5)}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <InputField
          validate={Joi.string()
            .required({ tlds: { allow: false } })
            .min(5)}
          name="repassword"
          label="RePassword"
          type="password"
          id="Repassword"
          autoComplete="current-password"
        />
        <SubmitButton title={"Sign Up"} isLoading={isLoading} />
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/">Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </Box>
    </BaseContainer>
  );
}
