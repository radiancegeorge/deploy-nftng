import axios from "axios";

export default axios.create({
  baseURL: "https://mytopship-staging.herokuapp.com/api",
});
