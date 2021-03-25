import axios from "axios";

// Starting points
const EURECA_AS = "http://eureca.lsd.ufcg.edu.br:8080/";
const ALUMNI_AS = "http://eureca.lsd.ufcg.edu.br:8082";

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
