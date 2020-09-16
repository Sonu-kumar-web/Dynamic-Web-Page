import React from "react";
import axios from "axios";

class Profile extends React.Component {
   state = { name: "", email: "" };

   componentDidMount() {
      let id = this.props.userid;
      //   console.log("Profile", id);
      axios
         .get(`api/v1/profile/${id}`)
         .then((res) => {
            this.setState({ name: res.data.name, email: res.data.email });
            // console.log("State", this.state);
         })
         .catch((err) => console.log("Error", err));
   }

   render() {
      const { name, email } = this.state;

      return (
         <section className="container">
            <div className="profile-top bg-primary p-2">
               <div className="profile-images">
                  <img className="round-img my-1" src="" alt="" />
               </div>

               <div className="profile-about bg-light p-2">
                  <h2 className="text-primary">{name}</h2>
                  <p>{email}</p>
               </div>
            </div>
         </section>
      );
   }
}

export default Profile;
