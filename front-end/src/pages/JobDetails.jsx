import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { imageData } from "../components/images";
import JobDetailsHeader from "../components/JobDetailsHeader";
import JobDetailsBody from "../components/JobDetailsBody";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
const JobDetails = () => {
  const API_URI = "http://localhost:8000/api/devjobs";

  // Id to use for the dynamic routing of a job item
  const { id } = useParams();
  const [jobsData, setJobsData] = useState(null);

  useEffect(() => {
    // Fetch job data from API when the id changes
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(API_URI);
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
  const image = imageData.find((im, index) => index === Number(id));

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
  return (
    <>
      <Navbar />
      <section className="relative z-50 flex flex-col items-center justify-center gap-5 md:-m-8 ">
        <div className="grid gap-5 mx-4 md:mx-72">
          <JobDetailsHeader
            logoBackground={job.logoBackground}
            image={image}
            company={company}
            website={website}
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
          />
        </div>

        <div className="flex items-center w-full py-6 my-6 bg-white md:px-72">
          <div className="flex-col hidden gap-2 sm:flex">
            <p className="text-lg font-bold leading-6 text-myVeryDarkBlueColor">
              {position}
            </p>
            <p className="font-normal leading-4 text-myDarkGrayColor">
              So Digital Inc.
            </p>
          </div>
          <div>
            <Link to={apply}>
              <button className="w-full py-2 mx-12 text-sm font-semibold leading-6 tracking-wider text-white rounded-sm px-36 bg-myVioletColor hover:bg-myLightVioletColor">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetails;
