const mongoose = require("mongoose");
// Defining the MongoDB connection URL
//const url = "mongodb://localhost:27017";
const mongoURL = "mongodb://0.0.0.0:27017/myhotel"; // replace mydatabase with your database name


mongoose.connect(mongoURL, {
  //userNewUrlParser : true, //
  //useUnifiedTopology : true
});


// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;


// Define event listeners for the database connection
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});


db.on("error", (err) => {
  console.log("Mongodb Connection error", err);
});


db.on("disconnected", () => {
  console.log("Mongodb Disconnected");
});


// Export the database connection
module.exports = db;