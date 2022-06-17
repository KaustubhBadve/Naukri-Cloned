import React from 'react'
import style from "./empnav.module.css"

const Empproduct = ({isproduct,hideall}) => {
  return (
    <div className={isproduct?style.showproduct:style.hidediv} onMouseLeave={hideall}>
            <p> Products On Offer (Buy Online)</p>
            <p> Resume Database Access (RESDEX)</p>
            <p> Job Posting</p>
            <p> Recruitment Management System</p>
            <p> Refferal Solutions</p>
            <p> Branding Solutions</p>
        </div>
  )
}

export default Empproduct