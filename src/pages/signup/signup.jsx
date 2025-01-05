import React, { useState } from "react";
import "./signup.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Google from "../../assets/google.png";
import {Checkbox, FormControlLabel} from "@mui/material";
import { useHistory } from "react-router-dom";


const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const UseremailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwardRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const confirmRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function SignUp() {
    const history = useHistory();
  const [signUpObject, setSignUpObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    service: "advance",
  });
  const [regexObj, setRegexObj] = useState({
    fnameBorder: false,
    fnameHelper: " ",
    lnameBorder: false,
    lnameHelper: " ",
    useremailBorder: false,
    useremailHelper: " ",
    passwardBorder: false,
    passwardHelper: "",
    confirmBorder: false,
    confirmHelper: " ",
  });
  const takefname = (event) => {
    setSignUpObject((prevObj) => ({...prevObj, firstName: event.target.value}));
  };
  const takelname = (event) => {
    setSignUpObject((prevObj) => ({...prevObj, lastName: event.target.value}));
  };
  const takeuseremail = (event) => {
    setSignUpObject((prevObj) => ({...prevObj, email: event.target.value}));
  };
  const takePassword = (event) => {
    setSignUpObject((prevObj) => ({...prevObj, password: event.target.value}));
  };
  const takeconfirm = (event) => {
    setSignUpObject((prevObj) => ({...prevObj, password: event.target.value}));
  };

  const submit = () => {
    let fnameStatus = fnameRegex.test(signUpObject.firstName);
    let lnameStatus = lnameRegex.test(signUpObject.lastName);
    let useremailStatus = UseremailRegex.test(signUpObject.email);
    let passwardStatus = passwardRegex.test(signUpObject.password);
    let confirmStatus = confirmRegex.test(signUpObject.password);
    if (fnameStatus === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        fnameBorder: true,
        fnameHelper: "Enter correct name",
      }));
    } else if (fnameStatus === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        fnameBorder: false,
        fnameHelper: "",
      }));
    }
    if (lnameStatus === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        lnameBorder: true,
        lnameHelper: "Enter correct last name",
      }));
    } else if (lnameStatus === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        lnameBorder: false,
        lnameHelper: "",
      }));
    }
    if (useremailStatus === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        usernameBorder: true,
        usernameHelper: "Enter correct email",
      }));
    } else if (useremailStatus === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        useremailBorder: false,
        useremailHelper: "",
      }));
    }
    if (passwardStatus === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        passwardBorder: true,
        passwardHelper: "Enter correct password",
      }));
    } else if (passwardStatus === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        passwardBorder: false,
        passwardHelper: "",
      }));
    }
    if (confirmStatus === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        confirmBorder: true,
        confirmHelper: " Enter confirm passward",
      }));
    } else if (confirmStatus === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        confirmBorder: false,
        confirmHelper: "",
      }));
    }
    if (
      fnameStatus === true &&
      lnameStatus === true &&
      useremailStatus === true &&
      passwardStatus === true &&
      confirmStatus === true
    ) {
      fetch(`http://localhost:3000/users?firstName=${signUpObject.firstName}&lastname=${signUpObject.lastName}&email=${signUpObject.email}&password=${signUpObject.password}`)
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
    <div class="container">
      <div class="box_cont">
        <div class="logo">
          <img class="logoimg" src={Google} />
        </div>
        <div class="googletextacc">
          <h2> Create your Google Account</h2>
        </div>
        <div class="textfname">
          <TextField
            id="outlined-basic"
            onChange={takefname}
            helperText={regexObj.fnameHelper}
            error={regexObj.fnameBorder}
            label="First name"
            variant="outlined"
            size="small"
          />
          <div class="textfname">
            <TextField
              id="outlined-basic"
              onChange={takelname}
              helperText={regexObj.lnameHelper}
              error={regexObj.lnameBorder}
              label="Last name"
              variant="outlined"
              size="small"
            />
          </div>
        </div>
        <div class="user">
          <TextField
            id="outlined-basic"
            onChange={takeuseremail}
            helperText={regexObj.useremailHelper}
            error={regexObj.useremailBorder}
            label="Useremail"
            variant="outlined"
            size="small"
            fullWidth
            helperText="You can use letter,number & peridos"
          />
        </div>

        <div class="usecurremail">
          <Button>Use my current email address instead</Button>
        </div>
        <div class="textfieldname">
          <TextField
            id="outlined-basic"
            onChange={takePassword}
            helperText={regexObj.passwardHelper}
            error={regexObj.passwardBorder}
            label="Passward"
            variant="outlined"
            size="small"
          />
          <div class="textfieldname">
            <TextField
              id="outlined-basic"
              onChange={takeconfirm}
              helperText={regexObj.confirmHelper}
              error={regexObj.confirmBorder}
              label="Confirm"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
        </div>
        <div>
          {" "}
          <FormControlLabel
            control={<Checkbox />}
            label="Show password"
            style={{float: "left"}}
          />
        </div>
        <div class="btntextcon">
          <Button variant="text">Sign in instead</Button>
          <Button variant="contained" onClick={submit}>
            Next
          </Button>
        </div>
      </div>
      <div class="accountimg">
        <img
          class="imgacc"
          src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
        />
        <center class="para">
          {" "}
          One account. All of Google working for you.{" "}
        </center>
      </div>
    </div>
  );
}

export default SignUp;
