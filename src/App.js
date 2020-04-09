import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Big from "./pages/Big/Big";
import Small from "./pages/Small/Small";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/small'>
          <Small />
        </Route>
        <Route exact path='/big'>
          <Big />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
