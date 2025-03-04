const express = require("express");
const bodyParser = require("express");
const Lead = require("./models/leadModel.js");
const cors = require("cors");
const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*", // List of allowed domains
  credentials: true, // Allow cookies to be sent and received
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  // "Content-Type": "application/json"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/contactUs", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      city: req.body.city,
      message: req.body.message,
      date: new Date(),
    };
    // console.log(data);
    if (!req.body.name || !req.body.email || !req.body.phoneNo) {
      return res.json({
        message: "kindly enter name, email and phone number",
      });
    }
    // console.log(data);
    const newLead = await Lead.create({
      name: data.name,
      email: data.email,
      phoneNo: data.phoneNo,
      city: data.city,
      message: data.message,
      date: data.date,
    });
    return res.json({ message: "submitted successfully" });
  } catch (err) {
    return res.json({ message: "submission failed" });
  }
});

app.get("/getLeads", async (req, res) => {
  const leads = await Lead.find();
  // console.log(leads);
  return res.json({
    leads,
  });
});
module.exports = app;
