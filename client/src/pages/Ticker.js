import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";


export default class Ticker extends Component {
    state = {
        results:[],
        search:""
    }
    handleInputChange = (event)=>{
        const{name,value} = event.target
        this.setState({
            [name]:value
        })

    }
    handleFormSubmit = ()=>{
        var ticker = this.state.search
          API.getStock(ticker).then((response)=>{
              console.log(response)
              this.setState({
                  results:response.data.quoteResponse.result
              })
          })
    }
    render(){
        return (
            <Container >
            <div>
                
                <input  name="search" value={this.state.search} onChange={this.handleInputChange}   /> <button   onClick={this.handleFormSubmit}>Search</button>

                <div>
                   {
                       this.state.results.map(stock=>{
                      return ( <Card>  <div>

                            {stock.regularMarketPrice}
                                <br/>
 
                               { stock.regularMarketChange}
                               <br/>

                                {stock.regularMarketChangePercent}
                                <br/>

                                {stock.longName}
                                <br/>

                                {stock.symbol}
                            

                           </div> 
                           </Card> )
                       })
                   }
                </div>
            </div>
            <Footer />

            </Container>
        )
    }
}
