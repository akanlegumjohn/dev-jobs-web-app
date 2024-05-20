import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

import JobDetailsHeader from "../components/JobDetailsHeader";
import JobDetailsBody from "../components/JobDetailsBody";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { imageData } from "../../images";

const JobDetails = ({ isDarkMode, toggleDarkMode }) => {
  // Id to use for the dynamic routing of a job item
  const { id } = useParams();
  const [jobsData, setJobsData] = useState(null);

  useEffect(() => {
    // Fetch job data from API when the id changes
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get("/data.json");
        setJobsData(response?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobDetails();
  }, [id]);

  const jobData = jobsData?.data || [];

  // Find the job data and the image that match the provided ID
  const job = jobData.find((jobItem) => jobItem.id === Number(id));

  // If job data is still being fetched, display the loading component
  if (!jobsData) {
    return <Loading />;
  }
  // Destructure the job data for easier access
  const {
    company,
    website,
    position,
    role,
    postedAt,
    location,
    apply,
    contract,
    description,
    requirements,
  } = job;
  const image = imageData.find((im) => im.id === job.id);

  return (
    <main className={`${isDarkMode ? " bg-myMidnightColor" : " bg-gray-100"}`}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <section
        className={`relative z-50 flex flex-col items-center justify-center gap-5  md:gap-20`}
      >
        <div className="grid gap-5 mx-4 lg:mx-64 md:mx-12">
          <JobDetailsHeader
            logoBackground={job.logoBackground}
            image={image}
            company={company}
            website={website}
            isDarkMode={isDarkMode}
          />
          <JobDetailsBody
            company={company}
            postedAt={postedAt}
            contract={contract}
            position={position}
            location={location}
            apply={apply}
            description={description}
            requirementsContent={requirements.content}
            requirementsItems={requirements.items}
            roleContent={role.content}
            roleItems={role.items}
            isDarkMode={isDarkMode}
          />
        </div>

        <div
          className={`flex items-center w-full py-6 my-6  justify-center md:justify-between lg:px-64 md:px-12 ${
            isDarkMode ? " bg-myVeryDarkBlueColor" : " bg-white"
          }`}
        >
          <div className="flex-col hidden gap-2 md:flex">
            <p
              className={` text-lg font-bold leading-6 text-myVeryDarkBlueColor${
                isDarkMode ? " text-white" : " text-black"
              }`}
            >
              {position}
            </p>
            <p className={`font-normal leading-4 text-myDarkGrayColor`}>
              So Digital Inc.
            </p>
          </div>
          <div>
            <Link to={apply}>
              <button className="w-full px-24 py-3 text-sm font-normal text-white rounded-md bg-myVioletColor hover:bg-myLightVioletColor md:ml-0 md:px-4">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
JobDetails.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default JobDetails;
