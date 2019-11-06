import React from "react";

import routes from "./globals/routes";

import "./index.css";

// routing components
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import PageProgress from "react-page-progress";

import Navbar from "./components/Navbar/index";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <PageProgress color={"skyblue"} height={5} />
        <Navbar />
        <Switch>
          {routes &&
            routes.map(route => {
              return (
                <Route
                  key={route.path}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
