import React from "react";
import { Link } from "react-router-dom";

export const Admin = () => {
   return (
      <section className="container Sign-up">
         <h1 className="large text-primary">Admin Login</h1>
         <p className="lead">
            <i className="fas fa-user"></i> Sign into Admin Account
         </p>
         <form className="form" action="dashboard.html">
            <div class="form-group">
               <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
               />
            </div>
            <div className="form-group">
               <input type="password" placeholder="Password" name="password" />
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
         </form>
      </section>
   );
};

export default Admin;
