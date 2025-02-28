import axios from "axios";

export const fetching = axios.create({
  baseURL: "http://localhost:8000",
});
