const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required."],
  },
  email: {
    type: String,
    required: [true, "email is required."],
  },
  phoneNo: {
    type: Number,
    required: [true, "phone no is required."],
  },
  city: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
});

const Lead = mongoose.model("lead", leadSchema);

module.exports = Lead;
