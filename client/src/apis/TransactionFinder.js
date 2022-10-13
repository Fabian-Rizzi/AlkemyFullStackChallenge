import axios from "axios";

export default axios.create({
    // local url:
    // baseURL: "http://localhost:3000/api/v1/transactions",
    
    // url for deployment:
    baseURL: "https://wifinances-alk.herokuapp.com/api/v1/transactions",
});