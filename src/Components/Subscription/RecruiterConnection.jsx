import React from 'react'
import style from './Subscription.module.css'


const RequirterConnection = () => {
  return (
    <div className={style.Resumemain}>
    <div>

    <div>
        <div className={style.Resumesub1}>
            <span className={style.ticksymbol}><i class="fa-solid fa-circle-check"></i></span>
            <div>Direct conversation with recruiters</div>
        </div>
        <div className={style.resumesub2}>Send your profile with a <b>personalized message</b>to get noticed by recruiters. Also, follow-up on your job applications.</div>
    </div>
    
    <div>
        <div className={style.Resumesub1}>
            <span className={style.ticksymbol}><i class="fa-solid fa-circle-check"></i></span>
            <div>Get Recruiter Recommendations</div>
        </div>
        <div className={style.resumesub2}>You get <b>exclusive access</b>  to recruiters having confidential jobs through recommendation mails.</div>
    </div>

    </div>

    <div><img src="https://static.naukimg.com/s/7/123/i/howItWorksRC.7082ab5e.png" alt="" /></div>
    </div>
  )
}

export default RequirterConnection