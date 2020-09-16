import React, { Fragment } from "react";
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Admin from "./components/auth/Admin";

import "./App.css";

const App = () => (
   <Router>
      <Fragment>
         <Navbar />
         <Route exact path="/" component={Landing} />
         <section className="container">
            <Switch>
               <Route exact path="/register" component={Register} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/admin" component={Admin} />
            </Switch>
         </section>
      </Fragment>
   </Router>
);

export default App;
