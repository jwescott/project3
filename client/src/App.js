import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Ticker from "./components/Ticker"
import './App.css'
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Ticker} />
          {/* <Route exact path="/Home" component={Ticker} /> */}
          <Route exact path="/Signup" component={Signup} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Logout" exact component={Logout} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
