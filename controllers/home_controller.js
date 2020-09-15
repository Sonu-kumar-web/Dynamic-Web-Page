module.exports.home = (req, res) => {
   return res.render("home", {
      title: "it is Home page",
   });
};
