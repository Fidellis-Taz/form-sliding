import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Notfound from "./Notfound/Notfound";
import Home from "./Home/Home";
import AdminDashboard from "./Admin/AdminDashboard";
import UserDashboard from "./User/UserDashboard";
import AdminRoute from "./ProtectedRoutes/AdminRoute";
import UserRoute from "./ProtectedRoutes/UserRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <UserRoute exact path="/user/dashboard" component={UserDashboard} />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <Route component={Notfound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
