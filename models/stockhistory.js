const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockHistorySchema = new Schema({
  stockName: { type: String},
  time: { type: String },
  price: { type: String },
  userId: { type: String  }
  
});

const StockHistory = mongoose.model("StockHistory", StockHistorySchema);

module.exports = StockHistory;
