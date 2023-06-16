const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
const colors = require("colors");

const connectDB = require("./db");

const app = express();

dotenv.config({ path: "./.env" });
const port = process.env.PORT;

connectDB();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse incoming JSON data in the request body
app.use(express.json());

// Middleware to parse incoming URL-encoded data in the request body
app.use(express.urlencoded({ extended: false }));

// Set up a route for the "/api/devjobs" endpoint using the "devJobsRoutes"
app.use("/api/devjobs", require("./devJobsRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow);
});
