import React, { Component } from "react";
import API from "../utils/API";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            confirmPassword: '',
            redirectTo: null
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
        handleSubmit = (event) => {
            console.log("name:",this.state.name)
            console.log("email:",this.state.email)
            console.log("username:",this.state.username)
            console.log("password:",this.state.password)
            API.signUp(this.state).then(data => {
              console.log(data)
             sessionStorage.setItem("user", data.data.name)
              window.location.href= "/"
            })
          }
        
        
    render() {
        // if (this.state.redirectTo) {
        //     return <Redirect to={{ pathname: this.state.redirectTo }} />
        // }
        return (<div className="login">
                                <h1>Login</h1>
                                
                                <label htmlFor="username">Username: </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                /><br/><br/>
                                <label htmlFor="password">Password: </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                /><br/><br/>
                               
                                {/* <Link to="/">Login</Link> */}
                                <button onClick={this.handleSubmit}>Login</button>
                        
        </div>
        )
    }
    
    

}

export default Signup;