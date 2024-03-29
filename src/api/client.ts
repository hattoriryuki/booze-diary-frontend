import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";
import Cookies from "js-cookie";

const options = {
  ignoreHeaders: true,
};

export const headers = {
  "access-token": Cookies.get("_access_token"),
  client: Cookies.get("_client"),
  uid: Cookies.get("_uid"),
};

export const client = applyCaseMiddleware(
  axios.create({
    baseURL: process.env.REACT_APP_CLIENT,
  }),
  options
);
