import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imageData } from "../components/images";
import Filter from "../components/Filter";
import MySkeleton from "../components/Skeleton";
import Button from "../components/Button";
import Loading from "../components/Loading";

export const Home = () => {
  const [jobsData, setJobsData] = useState(null);
  const [visibleJobs, setVisibleJobs] = useState(12);
  const [jobStartingIndx, setJobStartingIndx] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const API_URI = "http://localhost:4000/api/devjobs";

  useEffect(() => {
    // Fetch job data from API
    const devJobData = async () => {
      try {
        const response = await axios.get(API_URI);
        setJobsData(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    devJobData();

    // Set loading state and clear timeout on component unmount
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      return clearTimeout(delay);
    };
  }, []);

  const handleLoadMore = () => {
    // Increase the number of visible jobs and starting index
    setVisibleJobs((prevVisibleItems) => prevVisibleItems + 12);
    setJobStartingIndx((prevJobStartingIndx) => prevJobStartingIndx + 12);
  };
  const handleGoBack = () => {
    // Decrease the number of visible jobs and starting index
    setVisibleJobs((prevVisibleItems) => prevVisibleItems - 12);
    setJobStartingIndx((prevJobStartingIndx) => prevJobStartingIndx - 12);
  };

  const data = jobsData?.data || [];
  let jobsTotalLength = data.length;
  if (!jobsData) {
    return <Loading />;
  }
  return (
    <section className="relative z-10 -mt-10 mx-28">
      <Filter />
      <section className="grid py-16 lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-14">
        {data.slice(jobStartingIndx, visibleJobs).map((job, jobIdx) => {
          const logoBackground = job.logoBackground;
          return isLoading ? (
            // Skeleton component for loading state
            <MySkeleton key={jobIdx} />
          ) : (
            <div
              key={jobIdx}
              className="relative flex flex-col gap-2 p-10 bg-white shadow-lg rounded-xl w-350 h-228"
            >
              <div
                style={{ backgroundColor: logoBackground }}
                className="absolute p-3 -top-6 rounded-xl"
              >
                {" "}
                {/* Render the logo image */}
                {imageData.map((image, imgIndx) => {
                  if (jobIdx === imgIndx) {
                    return (
                      <img
                        key={imgIndx}
                        className="object-contain w-6 h-6 rounded-sm "
                        src={image}
                        alt={` The logo of ${job.company}`}
                      />
                    );
                  }
                })}
              </div>
              <div className="flex gap-1 font-normal leading-5 text-myDarkGrayColor">
                <p>{job.postedAt}</p> <p>.</p>
                <p>{job.contract}</p>
              </div>
              <Link to={`/job/${job.id}`}>
                <p className="text-lg font-bold leading-6 text-myVeryDarkBlueColor">
                  {job.position}
                </p>
              </Link>

              <p className="text-base font-medium leading-5 text-myDarkGrayColor ">
                {job.company}
              </p>
              <p className="pt-8 font-semibold leading-5 text-myVioletColor">
                {job.location}
              </p>
            </div>
          );
        })}
      </section>

      {jobsData && (
        <div className="flex items-center justify-center pb-10">
          {visibleJobs < jobsTotalLength ? (
            <Button handleClick={handleLoadMore} content={"Load More"} />
          ) : (
            <Button handleClick={handleGoBack} content={"Go Back"} />
          )}
        </div>
      )}
    </section>
  );
};
