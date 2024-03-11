const express = require("express");
const app = express(); // express package 
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body

const passport = require("./auth");



const PORT = process.env.PORT || 3000;

//Middleware
const logRequest = (req, res, next) => {
    console.log(`${new Date().toLocaleString()} Request Made to: ${req.originalUrl}`);
    next(); //move on to the next phase
  }
// it will be applied on all routes
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', { session: false });

app.get("/", function (req, res) {
 res.send("welcome to our Hotel");
});


const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");  


app.use("/menu", menuRoutes);
app.use("/person", localAuthMiddleware,  personRoutes);


//app.listen(3000, () => console.log("Server is listening on port 3000"));
app.listen(PORT, () => console.log("Server is listening on port 3000"));

