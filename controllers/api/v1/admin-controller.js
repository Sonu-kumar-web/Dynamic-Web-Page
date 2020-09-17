const User = require("../../../models/User");
const adminKeys = require("../../../config/keys");

const jwt = require("jsonwebtoken");

module.exports.allProfiles = async (req, res) => {
   try {
      if (
         req.body.username !== adminKeys.admin.username ||
         req.body.password !== adminKeys.admin.password
      ) {
         return res.status(404).json({ msg: "Wrong username/password" });
      }

      let users = await User.find();
      if (!users) {
         return res.status(200).json({ msg: "No user available" });
      }
      // return res.status(200).json(users);

      let admin = {
         username: req.body.username,
         password: req.body.password,
      };

      return res.status(200).json({
         msg: "Sign-in successful",
         data: {
            users: users,
            token: jwt.sign(admin, "Admin", {
               expiresIn: "4000000000",
            }),
         },
      });
   } catch (err) {
      console.log("Admin", err);
      return res.status(200).json({ msg: "Internal Server Error" });
   }
};
