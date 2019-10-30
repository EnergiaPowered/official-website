import React from "react";
import Navbar from "./components/Navbar";

import "./index.css";

// routing components
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// pages
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* add other routes here */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
