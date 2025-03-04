const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

// console.log(process.env.PORT);

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`);
});
