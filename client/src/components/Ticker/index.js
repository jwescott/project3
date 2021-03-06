import React, { Component } from "react";
import API from "../../utils/API";



export default class Ticker extends Component {
    state = {
        results: [],
        search: ""
    }
    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }
    handleFormSubmit = () => {
        var ticker = this.state.search
        API.getStock(ticker).then((response) => {
            console.log(response)
            this.setState({
                results: response.data.quoteResponse.result
            })
        })
    }

    handFormSave = (newStock) => {
        API.SaveStock(newStock).then((response) => {
            console.log(response)
           
        })
    }
    render() {
        return (
            <div>

                <input name="search" value={this.state.search} onChange={this.handleInputChange} /> <button onClick={this.handleFormSubmit}>Search</button>

                <div>
                    <table className="table">
                    {
                        this.state.results.map(stock => {
                            return (  <div>

                                {stock.regularMarketPrice}
                                <br />

                                {stock.regularMarketChange}
                                <br />

                                {stock.regularMarketChangePercent}
                                <br />

                                {stock.longName}
                                <br />

                                {stock.symbol}
                               <br/>
                               <button onClick={()=>{this.handFormSave({
                                   stockName:stock.longName,
                                   time:"",
                                   price: stock.regularMarketPrice,
                                   userID: sessionStorage.getItem("user")
                               })}}>Save</button>

                            </div>
                            )
                        })
                    }
                    </table>
                </div>
            </div>
            // <Footer />

        )
    }
}