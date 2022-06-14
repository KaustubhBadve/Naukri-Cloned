import { Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import JobsMatch from "../JobsRecomndation/jobsMatch";
import JobRecomandation from "./JobRecomandation";
import style from "../JobsRecomndation/jobs.module.css";
const Job = () => {
  return (
    <div>
      {/* header */}
      <div className={style.head_body}>
        <div className={style.header_image}>
          <Image
            className={style.img}
            src="https://static.naukimg.com/s/7/105/i/reco-job.ca42ec57.png"
          />
          <Heading size="md">Recommended Jobs for You</Heading>
        </div>

        <span className={style.header_info}>
          <Heading size="xs" className={style.name}>
            You can select upto 5 jobs to apply
          </Heading>

          <button className={style.apply_btn} type="button" disabled>
            Apply
          </button>
        </span>
      </div>

      <div>
      
        <JobRecomandation />
        <JobsMatch />
      </div>
    </div>
  );
};

export default Job;
