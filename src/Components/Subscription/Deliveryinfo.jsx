import React from "react";
import style from './Subscription.module.css'


const Deliveryinfo = () => {
  return (
    <div>
      <div className={style.headingSelectplan}>Delivery Information</div>


      <p className={style.addinfopara}>
        <b>Resume Display:</b>  After you make the payment, you will receive a mail from us within 24 hours to send us your latest resume. The service will be processed within 4 working days after we receive your updated resume. In case we do not receive a response in 7 days, we will use your last updated Naukri resume. <br />
        Once the service is processed, you will receive an email to review and approve your new profile to activate your service. Service will be deemed approved if a user fails to review the profile for 7 days.
Post approval, your profile will be marked as ‘Featured’ in Naukri Recruiter Database and we will refresh your profile automatically every week to give your profile a boost.
      </p>

      <p>
      <b>Jobs on Mail and SMS:</b>  After you make the payment, you will receive a mail from us within 24 hours to send us your latest resume. A Naukri Expert will give you a call and discuss your job <br />
      requirements in detail. Post the discussion, you will start getting handpicked jobs on Email and SMS on every Tuesday and Friday. <br />
      These services will be processed within 4 working days after we receive your updated resume.
In case we do not receive the same within 7 days, we will use your last updated resume on Naukri for processing your service. You will receive 1 call from Naukri Expert within 4 working days after you purchase Jobs4U service. We will initiate 3 calling attempts to connect with you. In case No-response from your end post 3rd attempt, we will initiate the activation of J4U service & take it as deemed approved. Users are advised to connect to TFN- 18001025557 for any related information
      </p>

      <p>
      <b>Recruiter Connection:</b>  2 Recruiter Connection Credits will be added to your account every month. You can use these credits to send personalized message to recruiters (1 Message = 1 Credit). Credits are non-refundable with a validity of 6 months duration. <br />
      Please note that you cannot send a message again to the same recruiter for 30 days. Also, you get a one-time credit back if a recruiter does not view your message in 15 Days.
      </p>

    </div>
  );
};

export default Deliveryinfo;
