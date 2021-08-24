import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

import { alpha, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";

const LoginPage = (props) => {
  const BootstrapInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },

    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.common.white,
      border: "1px solid #ced4da",
      fontSize: 16,
      width: "auto",
      padding: "10px 12px",
      marginBottom: "10px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

  const context = useContext(AuthContext);

  const login = () => {
    const username = Math.random().toString(36).substring(7);
    context.authenticate(username, "secret");
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  return context.isAuthenticated ? (
    <Redirect to={from} />
  ) : (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      {/* Login web form  */}
      <form noValidate autoComplete="off">
        <FormControl>
          <InputLabel shrink>Login</InputLabel>
          <BootstrapInput
            defaultValue=""
            id="userNameinput"
            placeholder="Input Username"
          />
          <br></br>
          <BootstrapInput
            defaultValue=""
            id="passwordInput"
            placeholder="Input Password"
          />
        </FormControl>
        <br></br>
        <Button onClick={login} variant="contained" color="primary">
          Primary
        </Button>
      </form>
    </>
  );
};

export default LoginPage;
