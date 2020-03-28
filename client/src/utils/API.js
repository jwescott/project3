import axios from "axios";



export default {
  getStock: function (Ticker) {
    return axios.get("/api/stocks/" + Ticker)
  },

  signUp: function (userData) {
    return axios.post("/register", userData)
  },
  signIn: function (userData) {
    return axios.post("/login", userData)
  },
  getUser: function () {
    return axios.get("/user")
  },
  Logout: function () {
    return axios.get("/logout")
  },
  SaveStock: function (userData) {
    return axios.post("/api/stocks", userData)
  }
}






