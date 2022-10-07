import axios from "axios";

export default axios.create({
    baseURL: "https://wifinances-alk.herokuapp.com/api/v1/transactions",
});