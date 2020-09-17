import React from "react";
import axios from "axios";
import faker from "faker";
import Quote from "inspirational-quotes";

class Profile extends React.Component {
   state = { name: "", email: "" };

   componentDidMount() {
      let id;
      // console.log("card", this.props.location.id);

      if (this.props.value == "profile") {
         id = this.props.userid;
      } else {
         id = this.props.location.id._id;
      }

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
                  <div className="image-div">
                     <img
                        className="round-img my-1"
                        src={faker.image.avatar()}
                        alt=""
                     />
                     <img
                        className="round-img my-1"
                        src={faker.image.avatar()}
                        alt=""
                     />
                  </div>
                  <div className="image-div">
                     <img
                        className="round-img my-1"
                        src={faker.image.avatar()}
                        alt=""
                     />
                     <img
                        className="round-img my-1"
                        src={faker.image.avatar()}
                        alt=""
                     />
                  </div>
               </div>

               <div className="profile-about bg-light p-2">
                  <h1 className="welcome">Welcome to Resolute AI</h1>
                  <h2 className="text-primary">
                     <h1>{name}</h1>
                  </h2>
                  <h3>{email}</h3>
                  <p>{Quote.getRandomQuote()}</p>
               </div>
            </div>
         </section>
      );
   }
}

export default Profile;
