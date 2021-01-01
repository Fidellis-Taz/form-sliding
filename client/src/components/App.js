import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Notfound from "./Notfound/Notfound";
import Home from "./Home/Home";
import Header from "./Header/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />

          <Route component={Notfound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
