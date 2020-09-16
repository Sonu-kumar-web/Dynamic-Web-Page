import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import axios from "axios";
import Profile from "../layouts/profile";

class Login extends React.Component {
   state = { email: "", password: "", token: "", isLoggedIn: false };

   onSubmit = async (e) => {
      e.preventDefault();

      // console.log("State", this.state);

      let userData = {
         email: this.state.email,
         password: this.state.password,
      };

      try {
         let data = await axios.post("api/v1/user/login", userData);

         const { token } = data.data.data;
         console.log("Token", token);

         // Save token in local storage
         localStorage.setItem("jwtToken", token);

         if (data) {
            this.setState({ isLoggedIn: true });
         }
      } catch (err) {
         console.log("Error In login ", err);
      }
   };

   render() {
      const { email, password, isLoggedIn } = this.state;
      return (
         <div>
            {isLoggedIn ? (
               <Profile />
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
