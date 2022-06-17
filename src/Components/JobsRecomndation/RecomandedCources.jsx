import React from "react";
import style from "../JobsRecomndation/jobs.module.css";
const RecomandedCources = () => {
  let RecomandedCrc = [
    {
      crcname:
        "E&ICT Academy IIT Roorkee - Advanced Certificate Program in Full Stack Software Development",
      info: "Become proficient in building end-to-end web applications handling all the areas of the tech-stack",
      info2:
        "Target emerging tech job roles as AWS Cloud Engineer, Cloud Devops Engineer, Data Analyst, Business.",
      img: "https://w10.naukri.com/mailers/2022/naukri-learning/feb/10feb/gll-120.jpg",
    },
    {
      crcname: "Master's Certification Program in Full Stack Web Development",
      info: "The Master's Certification Program in Full Stack Web Development is a 8-month long Job-Leading Progr...",
      info2:
        "This Masters program from Skill-Lync offers a guided online program consisting of courses that will ...",
      img: "https://w10.naukri.com/mailers/2022/naukri-learning/upload-01march/logox-slider-skill-lync.png",
    },
  ];

  return (
    <div>
      <div>
        <img
          src="https://static.naukimg.com/s/7/105/i/naukri-learning_1.2e49db3a.png"
          alt="cor"
        />
      </div>
      <p className={style.cource_hed_name} size="md">
        Recommended courses for you
      </p>
      <p className={style.recmdisc}>
        Suggested Certifications to help you Earn Higher Salary, Better Jobs
      </p>
      {RecomandedCrc.map((rcm) => (
        <div>
          <div className={style.recmndcrcmap}>
            <div className={style.recinfocrc}>
              <p className={style.Cource_name_info}>{rcm.crcname}</p>
              <span className={style.star}>
                <span style={{width:"70px"}}>00000000</span>
              </span>
            </div>

            <img className={style.courceprodimg} src={rcm.img} />
          </div>

          <li className={style.li_cource_rcm}>{rcm.info}</li>
          <li className={style.li_cource_rcm}>{rcm.info2}</li>

          <hr className={style.hr_line}></hr>
        </div>
      ))}

      <div className={style.cource_char}>
        <span className={style.charge}>*May include Paid Services</span>{" "}
        <span className={style.Viewallcource_plan}>View all</span>
      </div>
    </div>
  );
};

export default RecomandedCources;
