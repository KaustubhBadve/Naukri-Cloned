import React from 'react'
import style from "./landingnav.module.css"

const Resources = ({isresources,changealltohide}) => {
  return (
    <div className={isresources?style.showresources:style.hideresources} onMouseLeave={changealltohide}>
    <div className={style.lsubdiv1}>
        <p className={style.lbold}>Free resume resources</p>
        <p className={style.lp}>Resume maker for freshers</p>
        <p className={style.lp}>Resume quality score</p>
        <p className={style.lp}>Resume samples</p>
        <p className={style.lp}>Job letter samples</p>
        
    </div>
    <div className={style.lsubdiv}>
        <p className={style.lbold}>More Resources</p>
        <p className={style.lp}>How to use Naukri</p>
        <p className={style.lp}>Naukri blog</p>
        <p className={style.lp}>FAQs</p>
        <p className={style.lp}>Take home salary calculator</p>
        <p className={style.lp}>Naukri labs <span>(beta)</span></p>
    </div>
   
    
</div>
  )
}

export default Resources