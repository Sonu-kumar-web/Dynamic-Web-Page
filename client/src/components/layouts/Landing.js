import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
   return (
      <section className="landing">
         <div className="dark-overlay">
            <div className="landing-inner">
               <h1 className="x-large">Welcome to Resolute AI</h1>

               <div className="buttons">
                  <Link to="/admin" className="btn btn-primary">
                     Admin Login
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Landing;
