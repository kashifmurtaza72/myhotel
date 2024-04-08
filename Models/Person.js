const mongoose = require("mongoose");


// Define the Person schema
const personSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  age: {
    type: "number",
  },
  work: {
    type: "string",
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  address: {
    type: "string",
  },
  salary: {
    type: "number",
    required: true,
  },
});


// Create Person model
const Person = mongoose.model("Person", personSchema);
module.exports = Person;