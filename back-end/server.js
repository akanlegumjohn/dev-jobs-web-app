const express = require("express");

const dotenv = require("dotenv");
const colors = require("colors");

const connectDB = require("./db");

const app = express();
const port = process.env.PORT | 3000;

dotenv.config({ path: "../.env" });

connectDB();

// Middleware to parse incoming JSON data in the request body
app.use(express.json());

// Middleware to parse incoming URL-encoded data in the request body
app.use(express.urlencoded({ extended: false }));

// Set up a route for the "/api/devjobs" endpoint using the "devJobsRoutes"
app.use("/api/devjobs", require("./devJobsRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow);
});
