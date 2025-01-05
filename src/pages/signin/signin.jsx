import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./signin.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Google from "../../assets/google.png";






const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn() {
  const history = useHistory();

  const [signInObject, setSignObject] = useState({
    email: "",
    password: "",
  });
  const [regexObj, setRgexObj] = useState({
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",
  });



  const takeEmail = (event) => {
    setSignObject((prevObj) => ({ ...prevObj, email: event.target.value }));
  };

  const takePassword = (event) => {
    setSignObject((prevObj) => ({ ...prevObj, password: event.target.value }));
  };

  const submit = () => {
    let emailStatus = emailRegex.test(signInObject.email);
    let passwordStatus = passwordRegex.test(signInObject.password);

    if (emailStatus === false) {
      setRgexObj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "enter correct eamil",
      }));
    } else if (emailStatus === true) {
      setRgexObj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    }

    if (passwordStatus === false) {
      setRgexObj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "enter correct passwrod",
      }));
    } else if (passwordStatus === true) {
      setRgexObj((prevState) => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }
    if (emailStatus === true && passwordStatus === true) {
      fetch(`http://localhost:3000/users?email=${signInObject.email}&password=${signInObject.password}`)
        .then(data => {
          console.log(data, "data");
          if (data) {
            history.push("/dashboard")
            console.log("Login successful!", data[0]);
          } else {
            console.log("Invalid credentials.");
          }
        });
     
    }
  };
  return (
    <div class="parentall">
      <div class="firstmaincon">
        <div class="google">
          <img class="googleimg" src={Google} style={{ width: "25%" }} />
        </div>
        <div class="sign_in">sign in</div>
        <div class="useuracc">
          <h4>Use your Google Account</h4>
        </div>

        <div class="email_textfcon">
          <TextField
            id="outlined-basic"
            onChange={takeEmail}
            helperText={regexObj.emailHelper}
            error={regexObj.emailBorder}
            label="Email or Phone"
            variant="outlined"
            size="small"
            fullWidth
          />
        </div>
        <div class="forget">
          <Button> Forgot email?</Button>
        </div>
        <div class="email_textfcon">
          <TextField
            id="outlined-basic"
            error={regexObj.passwordBorder}
            onChange={takePassword}
            helperText={regexObj.passwordHelper}
            label="Passward"
            variant="outlined"
            size="small"
            fullWidth
          />
        </div>
        <div class="ntyrCmptr">
          <p>Not your computer? Use Guest mode to sign in privately.</p>
        </div>
        <Button
          style={{ positon: "relative", right: "7.5rem", bottom: "9px" }}
          variant="text"
        >
          Learn More
        </Button>

        <div class="nextbtnCon">
          <Button variant="text">create account</Button>
          <Button variant="contained" onClick={submit}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
