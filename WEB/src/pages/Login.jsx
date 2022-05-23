import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

import BaseContainer from "../components/Login/BaseContainer";
import SubmitButton from "../components/Login/SubmitButton";
import InputField from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import {
  isApiLoading, RESET_USER,
} from "../store/app";
import { SET_DAILOGBOX_STATE } from "../store/app";
import func from "../utils/functions";
import { apiCall, endpoints } from "../config/api";
import { useEffect } from "react";
import { RESET_AUTH } from "../store/auth";

export default function Login() {
  const isLoading = useSelector(isApiLoading);
  const dispatch = useDispatch();
  let navigate = useNavigate();


  /* reset user */
  useEffect(() => {
    dispatch(RESET_AUTH())
    dispatch(RESET_USER())
  },[])

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get("email");
      const password = data.get("password");

      /* API CALL */

      await apiCall({
        endpoint: endpoints.LOGIN,
        data: { email, password },
        dispatch,
        navigate
      });


    } catch (error) {
      dispatch(SET_DAILOGBOX_STATE(func.setErrorAlert(error)));
    }
  };

  return (
    <BaseContainer title="Sign In">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <SubmitButton title={"Sign In"} isLoading={isLoading} />
        <Grid container>
          <Grid item>
            <Link to="/sign-up">{"Don't have an account? Sign Up"}</Link>
          </Grid>
        </Grid>
      </Box>
    </BaseContainer>
  );
}
