import axios from "axios";

export default {
  getStock:function(Ticker){
    return axios.get("/api/stocks/"+Ticker)
  }
 



};
