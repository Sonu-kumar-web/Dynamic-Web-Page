const express = require("express");
const app = express();
const port = 8000;

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

// Extract our style and script tag from sub-pages and put it into head of layout page
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Give access or set path for static files
app.use(express.static("./assets"));

// Use express router
app.use("/", require("./routes/index"));

// Setup view engine
app.set("view engine", "ejs");
app.set("views", "./views");

const db = require("./config/mongoose");

app.listen(port, (err) => {
   if (err) {
      console.log(`Error in running the server: ${err}`);
   }
   console.log(`Server is running on port: ${port}`);
});
