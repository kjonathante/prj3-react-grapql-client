import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Books from "./components/Books";
import CreateBook from "./components/CreateBook";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/create" component={CreateBook} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
