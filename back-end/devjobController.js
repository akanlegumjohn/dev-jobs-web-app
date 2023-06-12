// This contains the logic to handle each route

// This is used to handle the promise due to the database request
const asyncHandler = require("express-async-handler");
const Jobs = require("./devjobModel"); // Assuming you have a DevJob model defined

const getAllDevjobs = asyncHandler(async (req, res) => {
  const devJobs = await Jobs.find(); // Fetch all dev jobs from the database

  res.status(200).json({
    success: true,
    data: devJobs,
  });
});

module.exports = { getAllDevjobs };
