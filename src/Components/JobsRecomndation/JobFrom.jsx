import { useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import style from "../JobsRecomndation/jobs.module.css";
import Cources from "./Cources";
import JobsMatch from "./jobsMatch";
const JobFrom = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div className={style.courceform}>
      <div className={style.jobForm}>
        <div className={style.jobForm_heading}>
          <p className={style.jobForm_hed_name}>
            Get jobs matching your criteria by adding below preferences
          </p>
          <img
            className={style.jobForm_img}
            src="https://static.naukimg.com/s/7/105/i/pref-widget.a183249f.png"
          />
        </div>

        <p className={style.getjobFormtoggle}>
          <JobsMatch />
          <span className={style.getjobFormtoggle_span}>
            Add Your Preferred Job Role
          </span>
        </p>

        <div className={style.getjobLocationwork}>
          <p>Your Preferred Work Location</p>
          <span>remote</span> <span>Mumbai</span> <span>Pune</span>
        </div>
        <p className={style.getjobFormtoggle}>
          <JobsMatch />
          <span className={style.getjobFormtoggle_span}>
            Add Your Preferred Salary
          </span>
        </p>
      </div>
      <div className={style.crc}>
        <Cources />
      </div>
    </div>
  );
};

export default JobFrom;
