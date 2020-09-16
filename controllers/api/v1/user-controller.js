const User = require("../../../models/User");

module.exports.Signup = async (req, res) => {
   //    console.log(req.body);

   try {
      if (req.body.password !== req.body.confirmPassword) {
         return res.status(400).json({
            message: "please enter same password",
         });
      }

      const findUser = await User.findOne({ email: req.body.email });

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
      return res.status(400).json({ msg: "Internal server error" });
   }
};
