import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Big from "./pages/Big/Big";
import Lib from "./pages/Lib/Lib";
import Small from "./pages/Small/Small";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/small">
          <Small />
        </Route>
        <Route exact path="/big">
          <Big />
        </Route>
        <Route exact path="/lib">
          <Lib />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
