import React from 'react'
import style from "./landingnav.module.css"

const Job = ({isjob,changealltohide}) => {
  return (
    <div className={isjob?style.showjob:style.hidejob} onMouseLeave={changealltohide}>
            <div className={style.lsubdiv1}>
                <p className={style.lbold}>Popular Categories</p>
                <p className={style.lp}>IT Jobs</p>
                <p className={style.lp}>Sales Jobs</p>
                <p className={style.lp}>Marketing Jobs</p>
                <p className={style.lp}>Data Science Jobs</p>
                <p className={style.lp}>HR Jobs</p>
                <p className={style.lp}>Engineering Jobs</p>
            </div>
            <div className={style.lsubdiv}>
                <p className={style.lbold}>Jobs in Demand</p>
                <p className={style.lp}>Fresher Jobs</p>
                <p className={style.lp}>MNC Jobs</p>
                <p className={style.lp}>Remote Jobs</p>
                <p className={style.lp}>Work from home Jobs</p>
                <p className={style.lp}>Walk-In Jobs</p>
                <p className={style.lp}>Part-time Jobs</p>
            </div>
            <div className={style.lsubdiv}>
                <p className={style.lbold}>Explore More Jobs</p>
                <p className={style.lp}>Jobs by Category</p>
                <p className={style.lp}>Jobs by Skills</p>
                <p className={style.lp}>Jobs by Location</p>
                <p className={style.lp}>Jobs by designation</p>
                <p className={style.lp}>Create free Job Alerts </p>
                
            </div>
            <div className={style.lsubdiv}>
                <p className={style.lbold}>Jobs by Location</p>
                <p className={style.lp}>Jobs in Delhi</p>
                <p className={style.lp}>Jobs in Mumbai</p>
                <p className={style.lp}>Jobs in Bangalore</p>
                <p className={style.lp}>Jobs in Hyderabad</p>
                <p className={style.lp}>Jobs in Chennai</p>
                <p className={style.lp}>Jobs in Pune</p>
            </div>
        </div>
  )
}

export default Job