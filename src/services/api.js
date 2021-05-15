import axios from "axios";

// Starting points
const EURECA_AS = "http://150.165.15.71:8080/as";
const ALUMNI_AS = "http://150.165.15.71:8082/eureca";

// for Eureca Authentication Service
const api_EAS = axios.create({
  baseURL: EURECA_AS,
  headers: {
    "Content-type": "application/json",
  },
});

// for Alumnus Service API
const api_AS = axios.create({
  baseURL: ALUMNI_AS,
  headers: {
    "Content-type": "application/json",
  },
});

export { api_EAS, api_AS };
