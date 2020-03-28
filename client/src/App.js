import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Ticker from "./pages/Ticker"
import './App.css'
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Ticker} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
          <Route path="/login" exact component={Login} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
