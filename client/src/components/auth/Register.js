import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../App.css";

export const Register = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      password2: "",
   });

   const { name, email, password, password2 } = formData;

   const onChange = (e) =>
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });

   const onSubmit = async (e) => {
      e.preventDefault();
      try {
         let newUser = {};
         if (password !== password2) {
            console.log("Password do not match");
         } else {
            //  console.log(formData);
            newUser = {
               name,
               email,
               password,
               password2,
            };
         }

         let user = await axios.post("api/v1/user/signup", newUser);

         console.log("Signup", user.data);
      } catch (err) {
         console.log("Error in Signup");
      }
   };

   return (
      <Fragment>
         <div className="Sign-up">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead">
               <i className="fas fa-user"></i> Create Your Account
            </p>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
               <div className="form-group">
                  <input
                     type="text"
                     placeholder="Name"
                     name="name"
                     value={name}
                     onChange={(e) => onChange(e)}
                     required
                  />
               </div>
               <div className="form-group">
                  <input
                     type="email"
                     placeholder="Email Address"
                     name="email"
                     value={email}
                     onChange={(e) => onChange(e)}
                     required
                  />
               </div>
               <div className="form-group">
                  <input
                     type="password"
                     placeholder="Password"
                     name="password"
                     minLength="6"
                     value={password}
                     onChange={(e) => onChange(e)}
                     required
                  />
               </div>
               <div className="form-group">
                  <input
                     type="password"
                     placeholder="Confirm Password"
                     name="password2"
                     minLength="6"
                     value={password2}
                     onChange={(e) => onChange(e)}
                     required
                  />
               </div>
               <input
                  type="submit"
                  className="btn btn-primary"
                  value="Register"
               />
            </form>
            <p className="my-1">
               Already have an account? <Link to="/login">Sign In</Link>
            </p>
         </div>
      </Fragment>
   );
};

export default Register;
