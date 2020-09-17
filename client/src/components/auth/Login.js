import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import axios from "axios";
import Profile from "../layouts/profile";

class Login extends React.Component {
   state = { email: "", password: "", token: "", isLoggedIn: false, id: "" };

   onSubmit = async (e) => {
      e.preventDefault();

      // console.log("State", this.state);

      let userData = {
         email: this.state.email,
         password: this.state.password,
      };

      try {
         let data = await axios.post("api/v1/user/login", userData);

         const { token, userId } = data.data.data;
         // console.log("Token", data.data);

         // Save token in local storage
         localStorage.setItem("jwtToken", token);

         if (token) {
            //Apply to every request
            axios.defaults.headers.common["Authorization"] = token;
         } else {
            //Delete the auth header if no token
            delete axios.defaults.headers.common["Authorization"];
         }

         if (data) {
            this.setState({ isLoggedIn: true, id: userId });
         }
      } catch (err) {
         console.log("Error In login ", err);
      }
   };

   render() {
      const { email, password, isLoggedIn, id } = this.state;
      // console.log("Login", id);
      return (
         <div>
            {isLoggedIn ? (
               <Profile userid={id} loggedInValue={isLoggedIn} />
            ) : (
               <section className="container Sign-up">
                  <h1 className="large text-primary">Sign In</h1>
                  <p className="lead">
                     <i className="fas fa-user"></i> Sign into Your Account
                  </p>
                  <form className="form" onSubmit={(e) => this.onSubmit(e)}>
                     <div className="form-group">
                        <input
                           type="email"
                           placeholder="Email Address"
                           name="email"
                           value={email}
                           onChange={(e) =>
                              this.setState({ email: e.target.value })
                           }
                           required
                        />
                     </div>
                     <div className="form-group">
                        <input
                           type="password"
                           placeholder="Password"
                           name="password"
                           value={password}
                           onChange={(e) =>
                              this.setState({ password: e.target.value })
                           }
                           required
                        />
                     </div>
                     <input
                        type="submit"
                        className="btn btn-primary"
                        value="Login"
                     />
                  </form>
                  <p className="my-1">
                     Don't have an account? <Link to="/register">Sign Up</Link>
                  </p>
               </section>
            )}
         </div>
      );
   }
}

export default Login;
