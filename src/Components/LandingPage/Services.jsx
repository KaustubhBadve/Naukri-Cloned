import React from 'react'
import style from "./landingnav.module.css"
const Services = ({isservices,changealltohide}) => {
  return (
    <div className={isservices?style.showservices:style.hideservices} onMouseLeave={changealltohide}>
            <div className={style.lsubdiv1}>
                <p className={style.lbold}>Resume Writing</p>
                <p className={style.lp}>Text Resume</p>
                <p className={style.lp}>Virtual Resume</p>
                <p className={style.lp}>Resume Critique</p>
                <p className={style.lbold}>Find Jobs</p>
                <p className={style.lp}>Jobs4u</p>
                <p className={style.lp}>Priority applicant</p>
                
            </div>
            <div className={style.lsubdiv}>
                <p className={style.lbold}>Get recruiter's attention</p>
                <p className={style.lp}>Resume display</p>
                <p className={style.lp}>Recruiter connection</p>
                <p className={style.lp}>Job Search booster</p>
                <p className={style.lbold}>Monthly Subscription</p>
                <p className={style.lp}>Basic & premium plans</p>
               
            </div>
            <div className={style.lsubdiv}>
                <p className={style.lbold}>Learn & upskill</p>
                <p className={style.lp}>Data Science courses</p>
                <p className={style.lp}>Technology courses</p>
                <p className={style.lp}>Management courses</p>
                <p className={style.lp}>Finance courses</p>
                <p className={style.lp}>Design courses</p>
                <p className={style.lp}>Healthcare corses</p>
                <p className={style.lp}>Degree programs</p>
                
                
            </div>
            
        </div>
  )
}

export default Services