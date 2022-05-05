import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import Joi from "joi";

import BaseContainer from "../components/Login/BaseContainer";
import InputField from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import {
  isApiLoading,
} from "../store/auth";
import { SET_DAILOGBOX_STATE } from "../store/app";
import func from "../utils/functions";
import { apiCall,endpoints } from "../config/api";

export default function Login() {
  const isLoading = useSelector(isApiLoading);

  const dispatch = useDispatch();

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
        dispatch
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          loading="true"
        >
          {!isLoading ? "Sign In" : <CircularProgress color="secondary" />}
        </Button>
        <Grid container>
          <Grid item>
            <Link to="/sign-up">{"Don't have an account? Sign Up"}</Link>
          </Grid>
        </Grid>
      </Box>
    </BaseContainer>
  );
}
