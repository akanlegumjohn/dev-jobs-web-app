import axios from "axios";
import { useEffect, useState } from "react";

import Filter from "./Filter";

import image from "../assets/logos/pod.svg";

export const Home = () => {
  const [jobsData, setJobsData] = useState(null);
  const [visibleJobs, setVisibleJobs] = useState(12);
  const [jobStartingIndx, setJobStartingIndx] = useState(0);

  const API_URI = "http://localhost:4000/api/devjobs";

  useEffect(() => {
    const devJobData = async () => {
      try {
        const response = await axios.get(API_URI);
        setJobsData(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    devJobData();
  }, []);

  const handleLoadMore = () => {
    setVisibleJobs((prevVisibleItems) => prevVisibleItems + 12);
    setJobStartingIndx((prevJobStartingIndx) => prevJobStartingIndx + 12);
  };
  const handleGoBack = () => {
    setVisibleJobs((prevVisibleItems) => prevVisibleItems - 12);
    setJobStartingIndx((prevJobStartingIndx) => prevJobStartingIndx - 12);
  };

  const data = jobsData?.data || [];
  let jobsTotalLength = data.length;
  return (
    <section className="relative z-10 -mt-10 mx-28">
      <Filter />
      <section className="grid py-16 lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-14">
        {data.slice(jobStartingIndx, visibleJobs).map((job) => {
          const logoBackground = job.logoBackground;
          console.log("." + job.logo);
          return (
            <div
              key={"." + job.id}
              className="relative flex flex-col gap-2 p-10 bg-white shadow-lg rounded-xl w-350 h-228"
            >
              <div
                style={{ backgroundColor: logoBackground }}
                className="  p-3 absolute -top-6  bg-hsl(36, 87%, 49%)  rounded-xl"
              >
                <img
                  className="w-6 h-6 rounded-sm "
                  src={image}
                  alt={` The logo of ${job.company}`}
                />
              </div>
              <div className="flex gap-1 ">
                <p className="text-base font-normal leading-5 text-myDarkGrayColor">
                  {job.postedAt}
                </p>{" "}
                <p className="text-base font-extrabold leading-5 text-myDarkGrayColor">
                  .
                </p>
                <p className="text-base font-normal leading-5 text-myDarkGrayColor">
                  {job.contract}
                </p>
              </div>
              <p className="text-lg font-bold leading-6 text-myVeryDarkBlueColor">
                {job.position}
              </p>
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
            <button
              className="px-4 py-2 text-sm text-white rounded-sm bg-myVioletColor hover:bg-myLightVioletColor hover:px-5 hover:py-3"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          ) : (
            <button
              className="px-4 py-2 text-sm text-white rounded-sm bg-myVioletColor hover:bg-myLightVioletColor hover:px-5 hover:py-3"
              onClick={handleGoBack}
            >
              Go Back
            </button>
          )}
        </div>
      )}
    </section>
  );
};
