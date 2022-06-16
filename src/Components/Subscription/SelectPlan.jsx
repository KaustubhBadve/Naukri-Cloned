import React from 'react'
import style from './Subscription.module.css'


const SelectPlan = () => {
  return (
    <div>

<div className={style.headingSelectplan}>Select Plan</div>
    <p className={style.addinfopara}>Premium Membership Plan has 3 products - Resume Display, Jobs on Mail and SMS and Recruiter Connection whereas Basic Membership Plan has only 1 product - Resume Display.
    We recommend Premium Membership Plan as a holistic solution for you to move faster in your jobsearch journey. Recruitment on Naukri works in following ways:</p>

<p>a. <b>Resume Display</b> ensures that your profile ranks higher in search results when recruiters search for candidates like you.</p>
 <p>b. <b>Jobs on Mail and SMS</b>  ensures that you get most relevant jobs and apply within 30 minutes, thereby giving you an edge over other applicants.</p>  
   <p>c. <b>Recruiter Connection</b> helps you contact and share your profile directly with active recruiters.</p>
    </div>
  )
}

export default SelectPlan