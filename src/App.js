import React from "react";

import routes from "./globals/routes";

import "./index.css";

// routing components
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import PageProgress from "react-page-progress";

import RegisterationPage from "modules/Register";
import LoginPage from "modules/Login";
import NotFound from "modules/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <PageProgress color={"skyblue"} height={5} />
        <Switch>
          {routes &&
            routes.length > 0 &&
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
          <Route
            exact
            path="/register"
            component={RegisterationPage}
          />
          <Route
            exact
            path="/login"
            component={LoginPage}
          />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
