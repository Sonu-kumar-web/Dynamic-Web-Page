import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AllProfiles from "../layouts/AllProfiles";
class Admin extends React.Component {
   state = { username: "", password: "", users: [], isLoggedIn: false };

   componentDidMount() {
      let token = localStorage.getItem("jwtToken");
      if (token) {
         this.setState({ isLoggedIn: true });
      }
   }

   onSubmit = async (e) => {
      e.preventDefault();

      try {
         let admin = {
            username: this.state.username,
            password: this.state.password,
         };
         console.log("State", this.state.users);

         let users = await axios.post("/api/v1/admin/all-profiles", admin);
         let allUsers = users.data.data;
         // console.log("All Users", allUsers);

         const { token } = allUsers;
         console.log("All Users", token);

         localStorage.setItem("jwtToken", token);

         this.setState({ users: allUsers.users, isLoggedIn: true });
         // console.log("State", this.state.users);
      } catch (err) {
         console.log("Error in login", err);
      }
   };

   render() {
      const { username, password, users, isLoggedIn } = this.state;

      return (
         <div>
            {isLoggedIn ? (
               <AllProfiles users={users} />
            ) : (
               <section className="container Sign-up">
                  <h1 className="large text-primary">Admin Login</h1>
                  <p className="lead">
                     <i className="fas fa-user"></i> Sign into Admin Account
                  </p>
                  <form className="form" onSubmit={(e) => this.onSubmit(e)}>
                     <div className="form-group">
                        <input
                           type="email"
                           placeholder="Email Address"
                           name="email"
                           value={username}
                           onChange={(e) =>
                              this.setState({ username: e.target.value })
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
               </section>
            )}
         </div>
      );
   }
}

export default Admin;
