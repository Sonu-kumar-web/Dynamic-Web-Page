const User = require("../../../models/User");

module.exports.userProfile = async (req, res) => {
   console.log("req.user.id", req.params.id);
   try {
      let error = {};
      let user = await User.findById(req.params.id);

      if (!user) {
         error.noProfile = "There is no profile";
         return res.status(200).json(error);
      }

      return res.status(200).json(user);
   } catch (err) {
      return res.status(404).json(error);
   }
};
