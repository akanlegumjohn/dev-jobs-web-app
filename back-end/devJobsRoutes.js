// This is where all the available endpoints and routes going to be used in the application are defined
const express = require("express");
const { getAllDevjobs } = require("./devjobController");

const router = express.Router();

router.get("/", getAllDevjobs);
module.exports = router;
