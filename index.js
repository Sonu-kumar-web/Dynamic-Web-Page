const express = require("express");
const app = express();
const port = 5000;

const db = require("./config/mongoose");

app.listen(port, (err) => {
   if (err) {
      console.log(`Error in running the server: ${err}`);
   }
   console.log(`Server is running on port: ${port}`);
});
