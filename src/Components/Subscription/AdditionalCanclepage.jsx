import React from "react";
import style from "./Subscription.module.css";
const AdditionalCanclepage = () => {
  return (
    <div>
      <div className={style.headingSelectplan}>Cancellation</div>

      <p className={style.addinfopara}>
        Premium Membership Plan has 3 products - Resume Display, Jobs on Mail
        and SMS and Recruiter Connection whereas Basic Membership Plan has only
        1 product - Resume Display. We recommend Premium Membership Plan as a
        holistic solution for you to move faster in your jobsearch journey.
        Recruitment on Naukri works in following ways:
        <br />
        Your current subscription will not be affected in any way.
      </p>
    </div>
  );
};

export default AdditionalCanclepage;
