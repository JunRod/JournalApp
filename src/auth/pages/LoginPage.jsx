import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import Google from "@mui/icons-material/Google";
import Link from "@mui/material/Link/Link";
import Alert from "@mui/material/Alert/Alert";
import Button from "@mui/material/Button/Button";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleSingIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
};

const formValidation = {
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener mas de 6 letras",
  ],
};

export const LoginPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {
    formState,
    email,
    password,
    onInputChange,
    isFormValid,
    passwordValid,
    emailValid,
  } = useForm(formData, formValidation);

  const isAutheticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(startLoginWithEmailPassword(formState));
  };

  const onGoogleSingIn = () => {
    dispatch(startGoogleSingIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12}>
            <TextField
              sx={{ mb: 1 }}
              label="Correo"
              type="email"
              name="email"
              placeholder="correo@google.com"
              fullWidth
              onChange={onInputChange}
              value={email || ""}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            ></TextField>
            <TextField
              label="Contraseña"
              type="password"
              name="password"
              placeholder="Contraseña"
              fullWidth
              onChange={onInputChange}
              value={password || ""}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            ></TextField>
          </Grid>

          <Grid container display={!!errorMessage ? "" : "none"} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAutheticating}
                variant="contained"
                fullWidth
                type="submit"
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAutheticating}
                variant="contained"
                fullWidth
                onClick={onGoogleSingIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
