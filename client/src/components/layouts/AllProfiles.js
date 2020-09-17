import React, { Component } from "react";
import axios from "axios";

import Card from "./Card";
import "../../App.css";

class AllProfiles extends Component {
   state = { users: [] };

   componentDidMount = async () => {
      try {
         let admin = {
            username: "admin@gmail.com",
            password: "admin",
         };

         let users = await axios.post("/api/v1/admin/all-profiles", admin);
         let allUsers = users.data.data;
         // console.log("All Users", allUsers);

         this.setState({ users: allUsers.users });
         // console.log("State", this.state.users);
      } catch (err) {
         console.log("Error in login", err);
      }
   };

   render() {
      const { users } = this.state;
      console.log("users", users);

      return (
         <div className="card-container">
            {users.map((user) => (
               <Card user={user} key={user.email} />
            ))}
         </div>
      );
   }
}

export default AllProfiles;
