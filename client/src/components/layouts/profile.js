import React from "react";

class Profile extends React.Component {
   render() {
      return (
         <section class="container">
            <div class="profile-top bg-primary p-2">
               <div className="profile-images">
                  <img className="round-img my-1" src="" alt="" />
               </div>

               <div className="profile-about bg-light p-2">
                  <h2 className="text-primary">John's Bio</h2>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Sed doloremque nesciunt, repellendus nostrum deleniti
                     recusandae nobis neque modi perspiciatis similique?
                  </p>
               </div>
            </div>
         </section>
      );
   }
}

export default Profile;
