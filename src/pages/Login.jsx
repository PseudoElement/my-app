import React from "react";
import { Button, TextField } from "@mui/material";
import { string } from "yup";
import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
export function Login() {
  const { authorize } = useAuth();

  const [validation, setValidation] = React.useState({
    isValidLogin: true,
    isValidPassword: true,
  });
  const [firstRender, setFirstRender] = React.useState(true);
  const loginRef = React.useRef();
  const passwordRef = React.useRef();

  function handleForm() {
    setValidation({
      isValidLogin: string()
        .required()
        .min(5)
        .max(15)
        .isValidSync(loginRef.current.value),
      isValidPassword: string()
        .required()
        .min(8)
        .max(16)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
        .isValidSync(passwordRef.current.value),
    });
  }
  React.useEffect(() => {
    if(firstRender) return;
    if (validation.isValidLogin && validation.isValidPassword) {
      authorize();
    }
  }, [validation]);

  React.useEffect(()=>{
    setFirstRender(false);
  }, [])
  return (
    <div className="login">
      <h1>Login page</h1>
      <form className="login-form">
        <TextField
          helperText={!validation.isValidLogin ? "Invalid login." : null}
          error={!validation.isValidLogin}
          inputRef={loginRef}
          style={{ maxWidth: 300 }}
          margin="dense"
          id="loginInput"
          label="Login"
          variant="filled"
        />
        <TextField
          error={!validation.isValidPassword}
          helperText={!validation.isValidPassword ? "Invalid password" : null}
          inputRef={passwordRef}
          style={{ maxWidth: 300 }}
          margin="dense"
          id="passwordInput"
          label="Password"
          variant="filled"
          type={"text"}
        />
        <Button onClick={handleForm} style={{ margin: 10 }} variant="contained">
          Log in
        </Button>
      </form>
    </div>
  );
}
