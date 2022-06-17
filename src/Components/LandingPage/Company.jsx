import React from 'react'
import style from "./landingnav.module.css"

const Company = ({iscompany,changealltohide}) => {
  return (
    <div className={iscompany?style.showcompany:style.hidecompany} onMouseLeave={changealltohide}>
            <div className={style.lsubdiv1}>
                <p className={style.lbold}>Explore Categories</p>
                <p className={style.lp}>Unicorn</p>
                <p className={style.lp}>MNCs</p>
                <p className={style.lp}>Startup</p>
                <p className={style.lp}>Product based</p>
                <p className={style.lp}>Internet</p>
                
            </div>
            <div className={style.lsubdiv}>
                <p className={style.lbold}>Explore Collections</p>
                <p className={style.lp}>Top Companies</p>
                <p className={style.lp}>Fintech Companies</p>
                <p className={style.lp}>Edtech Companies</p>
                <p className={style.lp}>Featured Companies</p>
                <p className={style.lp}>Sponsored Companies</p>
               
            </div>
            <div className={style.lsubdiv}>
                <p className={style.lbold}>Research Companies</p>
                <p className={style.lp}>Interview Questions</p>
                <p className={style.lp}>Company Salaries</p>
                <p className={style.lp}>About Companies</p>
                <p className={style.lp}>Company reviews</p>
                
            </div>
            
        </div>
  )
}

export default Company