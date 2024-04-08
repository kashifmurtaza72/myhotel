const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body


app.get("/", function (req, res) {
 res.send("welcome to our Hotel");
});


const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");


app.use("/menu", menuRoutes);
app.use("/person", personRoutes);


app.listen(3000, () => console.log("Server is listening on port 3000"));