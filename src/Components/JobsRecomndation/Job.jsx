import { Heading, Image } from "@chakra-ui/react";
import React from "react";
import JobRecomandation from "./JobRecomandation";
import style from "../JobsRecomndation/jobs.module.css";
import JobFrom from "./JobFrom";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import WithSubnavigation from "../Recruter/RecNavbar";
import WithSubnavigation from '../HomePageNavbar/Navbar'
import Footer from "../HomePageFooter/Footer";
const Job = () => {
  const { applyjob } = useSelector((state) => state.job);
  const navigate = useNavigate();

  return (
    <div>
      {/* header */}
      <WithSubnavigation />
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
          <Link to="/applyjobsuccessfull">
            <button className={style.apply_btn}>
              {applyjob.length === 0 ? "Apply" : `Apply ${applyjob.length} job`}
            </button>
          </Link>
        </span>
      </div>

      <div className={style.jdinfor_withform}>
        <JobRecomandation />
        <JobFrom />
      </div>

      <div className={style.jobfooter}>
        <Footer />
      </div>
    </div>
  );
};

export default Job;
