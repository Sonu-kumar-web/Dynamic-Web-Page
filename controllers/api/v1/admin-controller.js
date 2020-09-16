const User = require("../../../models/User");
const adminKeys = require("../../../config/keys");

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
      return res.status(200).json(users);
   } catch (err) {
      //   console.log("Admin", err);
      return res.status(200).json({ msg: "Internal Server Error" });
   }
};
