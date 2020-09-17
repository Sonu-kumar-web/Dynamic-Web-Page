import React, { Component } from "react";
import Profile from "./profile";

import "../../App.css";
import faker from "faker";
import { Link } from "react-router-dom";

class Card extends Component {
   render() {
      const { name, email, _id } = this.props.user;
      console.log("Card", this.props.user._id);

      return (
         <div>
            <Link to={{ pathname: "/profile", id: { _id } }}>
               <div className="card">
                  <div className="card-img">
                     <img src={faker.image.avatar()} />
                  </div>
                  <div className="card-detail">
                     <div className="details">
                        <h1>{name}</h1>
                        <h1>{email}</h1>
                     </div>
                  </div>
               </div>
            </Link>
         </div>
      );
   }
}

export default Card;

{
   /* <div className="card" onClick={() => this.onClick()}>
               <div className="card-img">
                  <img src={faker.image.avatar()} />
               </div>
               <div className="card-detail">
                  <div className="details">
                     <h1>{name}</h1>
                     <h1>{email}</h1>
                  </div>
               </div>
            </div>
             */
}
