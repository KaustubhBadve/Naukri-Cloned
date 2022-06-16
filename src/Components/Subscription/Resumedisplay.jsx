import React from 'react'
import style from './Subscription.module.css'


const Resumedisplay = () => {
  return (
    <div className={style.Resumemain}>
    <div>

    <div>
        <div className={style.Resumesub1}>
            <span className={style.ticksymbol}><i class="fa-solid fa-circle-check"></i></span>
            <div>Rank Higher in Recruiter Searches</div>
        </div>
        <div className={style.resumesub2}>Your profile will be given an <b>automatic boost</b>  when recruiters search CVs in Naukri database.</div>
    </div>
    
    <div>
        <div className={style.Resumesub1}>
            <span className={style.ticksymbol}><i class="fa-solid fa-circle-check"></i></span>
            <div>More Recruiter Actions on your profile </div>
        </div>
        <div className={style.resumesub2}>Paid profile gets <b>3 times</b>  more recruiter actions. (Recruiter Mails / Profile Views /CV Downloads).</div>
    </div>

    <div>
        <div className={style.Resumesub1}>
            <span className={style.ticksymbol}><i class="fa-solid fa-circle-check"></i></span>
            <div>Get a Featured profile</div>
        </div>
        <div className={style.resumesub2}>Highlighting your profile gives you an edge over your peers and reduces your competition by <b>99.8%</b> .</div>
    </div>
    </div>

    <div><img src="https://static.naukimg.com/s/7/123/i/howItWorksRD.bf460916.png" alt="" /></div>
    </div>
  )
}

export default Resumedisplay