var axios = require("axios")
var db = require("../models")

function APIController(app){
    app.get("/api/stocks",function(req, res){
        axios.get("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en", {
            headers:{
                "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key":"1475582a3cmsh485d149c4764705p1368b2jsn536464323391"
            }
        }).then(function(response){
            res.json(response.data)
        })
    })

    app.post("/api/stocks",function(req, res){
        var saveStockInfo = req.body
        db.StockHistory.create(saveStockInfo).then(function(response){
            res.json(response)
        })
    })
}

module.exports = APIController