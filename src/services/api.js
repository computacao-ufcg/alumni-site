import axios from "axios";

// Starting points
const EURECA_AS = "http://localhost:8080/as";
const ALUMNI_AS = "http://localhost:8082/alumni";

// for Eureca Authentication Service
const api_EAS = axios.create({
  baseURL: EURECA_AS,
  headers: {
    "Content-Type": "application/json",
  },
});

// for Alumnus Service API
const api_AS = axios.create({
  baseURL: ALUMNI_AS,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api_EAS, api_AS };
