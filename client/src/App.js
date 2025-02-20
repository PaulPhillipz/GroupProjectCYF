import React, { Component } from "react";
import Heading from "./Heading";
import "./App.css";
import NameForm from "./form";
import Button from "./Button";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Heading />
          </header>
          <NameForm />
        </div>
      </Router>
    );
  }
}

export default App;
