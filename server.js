const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");
const mongoose = require("mongoose");
const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: ["https://email-service-v0e2.onrender.com"],
  methods: ["POST", "GET"],
  credentials: true
};

app.use(cors(corsOptions)); // Use corsOptions here

app.use(express.json());

// Signup and login
app.use("/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
