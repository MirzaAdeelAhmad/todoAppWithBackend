const express = require("express");
const moongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const bcrypt = require("bcrypt");
const colors = require("colors");
const ConnectToDatabase = require("./config/db");

// REST OBJECT
const app = express();

// DOTENV
dotenv.config();

// CONNECT TO DATABASE
ConnectToDatabase();

// PORT
const PORT = process.env.PORT || 8080;

// MIDDLE WARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// ROUTES
app.use("/api/v1/auth", require("./routes/UserRoutes"));

// LISTEN
app.listen(PORT, () => {
  // console.log("server is running".bgGreen.white);
  // console.log(`Your server is runing on port http://localhost:${PORT} `);
  console.log(
    `Your Server is Running Successfully on http://localhost:${PORT}`.bgGreen
      .white
  );
});
