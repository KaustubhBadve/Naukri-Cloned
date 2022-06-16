import React, { useState } from 'react'
import Deliveryinfo from './Deliveryinfo'
import AdditionalCanclepage from './AdditionalCanclepage'

import JobsOnMail from './JobsOnMail'
import RequirterConnection from './RecruiterConnection'
import Resumedisplay from './Resumedisplay'
import SelectPlan from './SelectPlan'
import style from './Subscription.module.css'
import Swapbox1 from './Swapbox1'
import Swapbox2 from './Swapbox2'
import WithSubnavigation from '../HomePageNavbar/Navbar'
import Footer from '../HomePageFooter/Footer'


const Subscription = () => {
  const [flag, setflag] = useState(false)
  const [resume, setresume] = useState(false)
  const [JobsonMail, setJobsonMail] = useState(false)
  const [RecruiterConn, setRecruiterConn] = useState(false)
  const [selectPlan, setselectPlan] = useState(false)
  const [delivery, setdelivery] = useState(false)
  const [Cancelation, setCancelation] = useState(false)

  const HandleResume=()=>{
    setresume(true)
    setRecruiterConn(false)
    setJobsonMail(false)
  }

  const HandleJobsonMail=()=>{
    setJobsonMail(true)
    setresume(false)
    setRecruiterConn(false)
  }

  const HandleRecruiterConnect=()=>{
    setRecruiterConn(true)
    setresume(false)
    setJobsonMail(false)
  }
  
  const HandleSelectPlan=()=>{
     setselectPlan(true)
     setdelivery(false)
     setCancelation(false)
  }

  const HandleDelivery=()=>{
    setselectPlan(false)
    setdelivery(true)
    setCancelation(false)
  }

  const HandleCancelation=()=>{
    setselectPlan(false)
    setdelivery(false)
    setCancelation(true)
  }

  return (
    <div>
     {/* <Stickynavbar/> */}
     {/* Top Offer Section */}

      <div><WithSubnavigation/></div>
      <div className={style.topofferyellow}>
        <p>Flat <b>20% OFF</b>  on All Services</p>
        <p>Promo code FightCorona20, Valid till 30-Jun-2022</p>
      </div>

    {/* Bluw Backgroung */}

      <div className={style.blueback}>
        <p className={style.bigger}>Get a comprehensive Job Search Pack for 1 month</p>
        <p className={style.bigger1}>Become a Featured Candidate by Highlighting yourself in Naukari database <br /> and get early access to jobs to increase your chances of getting a call</p>
        <div>
        
        <div className={style.data}>
        <div className={style.swapboxmain}>
         <p className={style.A}>Subscription for 1 month:</p> 
        <div className={style.border}>
            <div onClick={()=>setflag(true)} className={flag ? style.highlight : ""}>Basic Plan</div>
            <div onClick={()=>setflag(false)} className={!flag ? style.highlight : ""}>Premium Plan</div>
        </div>
        {flag ? <Swapbox1/> : <Swapbox2/>}
    </div>
    </div>
        </div>
      </div>

     {/* Table */}


     <div className={style.table}>
      <table>
        <thead>
          <th className={style.benefits}>Benefits of Paid Services</th>
          <th>Free</th>
          <th className={style.tdgreen}>Basic</th>
          <th className={style.tdvoilet}>Premium</th>
        </thead>

        <tbody>
          <tr>
            <td className={style.benefitTd}>
            Free Profile competes with 7 Crore profiles while Paid Profile competes with 50,000 profiles only
            </td>
            <td><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdgreen}><span><i class="fa-regular fa-circle-check"></i></span></td>
            <td className={style.tdvoilet}><span><i class="fa-regular fa-circle-check"></i></span></td>
          </tr>

          <tr>
            <td className={style.benefitTd}>
            Rank Higher in Search results – Automatic refresh boost for paid profiles
            </td>
            <td><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdgreen}><span><i class="fa-regular fa-circle-check"></i></span></td>
            <td className={style.tdvoilet}><span><i class="fa-regular fa-circle-check"></i></span></td>
          </tr>

          <tr>
            <td className={style.benefitTd}>
            3 times Higher Profile Performance (Search Appearance and Recruiter Actions)
            </td>
            <td><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdgreen}><span><i class="fa-regular fa-circle-check"></i></span></td>
            <td className={style.tdvoilet}><span><i class="fa-regular fa-circle-check"></i></span></td>
          </tr>

          <tr>
            <td className={style.benefitTd}>
            Highlighted Profile in Naukri Database
            </td>
            <td><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdgreen}><span><i class="fa-regular fa-circle-check"></i></span></td>
            <td className={style.tdvoilet}><span><i class="fa-regular fa-circle-check"></i></span></td>
          </tr>

          <tr>
            <td className={style.benefitTd}>
            Get Priority Access to jobs – within 30 mins of being posted
            </td>
            <td><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdgreen}><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdvoilet}><span><i class="fa-regular fa-circle-check"></i></span></td>
          </tr>

          <tr>
            <td className={style.benefitTd}>
            Receive profile based jobs on SMS - Max 3 per day
            </td>
            <td><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdgreen}><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdvoilet}><span><i class="fa-regular fa-circle-check"></i></span></td>
          </tr>

          <tr>
            <td className={style.benefitTd}>
            Expand job search to openings posted on company websites
            </td>
            <td><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdgreen}><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdvoilet}><span><i class="fa-regular fa-circle-check"></i></span></td>
          </tr>

          <tr>
            <td className={style.benefitTd}>
            Send Direct Message to any recruiter on Naukri
            </td>
            <td><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdgreen}><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdvoilet}><span><i class="fa-regular fa-circle-check"></i></span></td>
          </tr>

          <tr>
            <td className={style.benefitTd}>
            Guaranteed Jobs / Interview Calls
            </td>
            <td><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdgreen}><span><i class="fa-regular fa-circle-xmark"></i></span></td>
            <td className={style.tdvoilet}><span><i class="fa-regular fa-circle-xmark"></i></span></td>
          </tr>
        </tbody>
      </table>
     </div>

     <div className={style.serviceincluded}>
      <h1>Services included in Basic & Premium Plans</h1>

      <div className={style.switchService}> 
        <div className={resume ? style.click : ""}  onClick={HandleResume}>Resume Display <p>(Basic & Premium)</p> </div>
        <div className={JobsonMail ? style.click1 : ""}  onClick={HandleJobsonMail}>Jobs on Mail and SMS <p>(Premium Only)</p> </div>
        <div className={RecruiterConn ? style.click2 : ""}  onClick={HandleRecruiterConnect}>Recruiter Connection <p>(Premium Only)</p> </div>
      </div>

      {resume ? <Resumedisplay/> : JobsonMail ? <JobsOnMail/> : <RequirterConnection/>}
     </div>


     <div className={style.AdditionalInfo}>
      <h1>Additional Information</h1>

      <div className={style.additinalinfomain}>
        <div className={style.additinalinfo1}>
        <div onClick={HandleSelectPlan} className={selectPlan ? style.Addinfo1Click  : style.Addinfo1 }>
          <span><img src="https://static.naukimg.com/s/7/123/i/membership.7d03cf89.png" alt="" /></span>
          <div>Select Plan</div>
        </div>
        <div onClick={HandleDelivery} className={delivery ? style.Addinfo1Click  : style.Addinfo1 }>
          <span><img src="https://static.naukimg.com/s/7/123/i/serviceActivation.a9a79f31.png" alt="" /></span>
          <div>Delivery <br /> Information</div>
        </div>
        <div onClick={HandleCancelation} className={Cancelation ? style.Addinfo1Click  : style.Addinfo1 }>
          <span><img src="https://static.naukimg.com/s/7/123/i/cancelPolicy.9c62d496.png" alt="" /></span>
          <div>Cancellation</div>
        </div>
        </div>



        <div className={style.Selectplan}>
        {selectPlan ? <SelectPlan/> :Cancelation ? <AdditionalCanclepage/>  :  <Deliveryinfo/>}
        </div>
      </div>
     
      </div>

      <Footer/>
    </div>
  )
}

export default Subscription