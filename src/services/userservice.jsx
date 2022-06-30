import axios from "axios";

export const signup = (login) => {
  let response = axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
    login
  );
  return response;
};

export const signin = (signin) => {
  let response = axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
    signin
  );
  return response;
};
