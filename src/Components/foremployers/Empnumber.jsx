import React from 'react'
import style from "./empnav.module.css"

const Empnumber = ({isnumber,hideall}) => {
  return (
    <div className={isnumber?style.shownumber:style.hidediv} onMouseLeave={hideall}>

            <p className={style.numlarge}>For Sales Enquiry</p>
            <p className={style.nummed}>India:</p>
            <p className={style.numgray}>Toll Free: 1800 - 102 -2558 (9:30 AM to 6:30PM)</p>
            <p  className={style.numgray}>+91 - 9818882211</p>
            <p className={style.numsmall}>sales@naukri.com</p>
            <p className={style.nummed}>USA:</p>
            <p className={style.numgray}>Toll Free: +1 866 557 3340</p>
            <p className={style.numsmall}>usa@naukri.com</p>
            <p className={style.nummed}>Europe/UK:</p>
            <p className={style.numgray}>Toll Free: +44 808 120 2323</p>
            <p className={style.numsmall}>europe@naukri.com</p>
            <p className={style.nummed}>Middle East/Africa & South East Asia:</p>
            <p className={style.numgray}>Mobile: +91 - 98183 17555</p>
            <p className={style.numsmall}>middleeast@naukri.com</p>
            <p className={style.nummed}>Recruiter Helpline</p>
            <p className={style.numgray}>Toll Free No. 1800-102-5558 (10 AM to 6 PM, Mon - Sat)</p>

        </div>
  )
}

export default Empnumber