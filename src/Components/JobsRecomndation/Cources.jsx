import { Heading } from "@chakra-ui/react";
import React from "react";
import style from "../JobsRecomndation/jobs.module.css";

const Cources = () => {
  return (
    <div>
      <div>
        <img
          src="https://static.naukimg.com/s/7/105/i/naukri-learning_1.2e49db3a.png"
          alt="cor"
        />
      </div>
      <p className={style.cource_hed_name} size="md">
        Recommended skills for you
      </p>
      <p className={style.Cource_name_info}>Frontend Development</p>
      <li className={style.li_cource}>3650+ courses from top platforms</li>

      <hr className={style.hr_line}></hr>
      <p className={style.Cource_name_info}>Backend Development</p>
      <li className={style.li_cource}>3640+ free courses and certifications</li>
      <hr className={style.hr_line}></hr>

      <div className={style.cource_char}>
        <span className={style.charge}>*May include Paid Services</span>{" "}
        <span className={style.Viewallcource_plan}>View all</span>
      </div>
    </div>
  );
};

export default Cources;
