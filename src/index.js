require("dotenv").config();
const express = require("express");

// const router = require("./routes/router");

const app = express();

app.use(express.json());

require("./connectDB");

const jobRouter = require("./routes/jobRouter");

app.get("/", (req, res) => {
  res.send("HOME");
});
app.use("/api/jobs", jobRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server Running on " + process.env.SERVER_PORT);
});
