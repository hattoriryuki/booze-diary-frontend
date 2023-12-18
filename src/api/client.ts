import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const options = {
  ignoreHeaders: true,
};

export const client = applyCaseMiddleware(
  axios.create({
    baseURL: "http://localhost:3001/api/v1",
  }),
  options
);
