import axios from "axios";

const ax = axios.create({
  baseURL: "https://api.hatchways.io/assessment/students",
});

export default ax;
