const User = require("../../../models/User");
const jwt = require("jsonwebtoken");

const Keys = require("../../../config/keys");

module.exports.Signup = async (req, res) => {
   //    console.log(req.body);

   try {
      if (req.body.password !== req.body.confirmPassword) {
         return res.status(400).json({
            message: "please enter same password",
         });
      }

      let findUser = await User.findOne({ email: req.body.email });

      if (findUser) {
         return res
            .status(400)
            .json({ msg: "This email id  is already registered" });
      }

      const newUser = await User.create({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password,
      });

      return res.status(200).json(newUser);
   } catch (err) {
      return res.status(500).json({ msg: "Internal server error" });
   }
};

// To Login user
module.exports.Login = async (req, res) => {
   console.log("Body", req.body);
   try {
      let user = await User.findOne({ email: req.body.email });
      if (!user || user.password !== req.body.password) {
         return res.status(422).json({ msg: "Invalid Username/Password" });
      }

      return res.status(200).json({
         msg: "Sign-in successful",
         data: {
            token: jwt.sign(user.toJSON(), Keys.secretOrKey, {
               expiresIn: "4000000000",
            }),
         },
      });
   } catch (err) {
      console.log("Error", err);
      return res.status(500).json({ msg: "Internal Server error" });
   }
};
