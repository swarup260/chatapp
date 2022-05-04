import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import Joi from "joi";

import BaseContainer from "../components/Login/BaseContainer";
import InputField from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_IS_LOADING,
  SET_IS_LOGIN,
  SET_TOKEN,
  isApiLoading,
} from "../store/auth";

export default function SignUp() {

  const dispatch = useDispatch();

  const isLoading = useSelector(isApiLoading);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get("email");
      const username = data.get("username");
      const password = data.get("password");
      const repassword = data.get("repassword");

      /* API CALL */

      dispatch(SET_IS_LOADING(true));
      const result = await axios.post(endpoints.LOGIN, {
        email,
        password,
        repassword,
        username,
      });

      if (result.status != 200) {
        throw new Error("API ERROR");
      }

      if (!result.data.status) {
        throw new Error(result.data.message);
      }

      dispatch(SET_TOKEN(result.data.token));
      dispatch(SET_IS_LOGIN(true));
      dispatch(SET_IS_LOADING(false));
      SET_DAILOGBOX_STATE(func.setSuccessAlert(result.data.message));
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {!isLoading ? "Sign Up" : <CircularProgress color="secondary" />}
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
