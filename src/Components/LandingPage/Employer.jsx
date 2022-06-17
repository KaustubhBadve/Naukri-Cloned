import React from 'react'
import style from "./landingnav.module.css"

const Employer = ({isemployer,changealltohide}) => {
  return (
    <div className={isemployer?style.showemployer:style.hideemployer} onMouseLeave={changealltohide}>
        
        <div className={style.lsubdiv1}>
            
            <p className={style.lp}>Buy Online</p>
            <p className={style.lp}>Our hiring solutions</p>
            <p className={style.lp}>Employer Login</p>
            
            
        </div>
    
    </div>
  )
}

export default Employer