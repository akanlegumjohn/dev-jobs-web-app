import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { imageData } from "../components/images";
import JobDetailsHeader from "../components/JobDetailsHeader";
import JobDetailsBody from "../components/JobDetailsBody";
import Button from "../components/Button";
import Loading from "../components/Loading";

const JobDetails = () => {
  const API_URI = "http://localhost:4000/api/devjobs";

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
    <section className="relative z-50 flex flex-col justify-center gap-5 -m-8 ">
      <div className="grid gap-5 mx-72 ">
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

      <div className="flex items-center justify-between py-4 mt-6 mb-2 bg-white px-72">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold leading-6 text-myVeryDarkBlueColor">
            {position}
          </p>
          <p className="font-normal leading-4 text-myDarkGrayColor">
            So Digital Inc.
          </p>
        </div>
        <div>
          <Link to={apply}>
            <Button content={"Apply Now"} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
