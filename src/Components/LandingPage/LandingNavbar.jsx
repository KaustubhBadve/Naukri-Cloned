import {useNavigate} from "react-router-dom"
import React, { useState } from 'react'
import Company from './Company'
import Drawer from './Drawer'

import Employer from './Employer'
import Job from './Job'
import LandingBody from './LandingBody'
import style from "./landingnav.module.css"
import Resources from './Resources'
import Services from './Services'
import Footer from "../HomePageFooter/Footer"

const LandingNavbar = () => {
    const [isjob, setisjob] = useState(false)
    const [iscompany, setiscompany] = useState(false)
    const [isservices, setisservices] = useState(false)
    const [isresources, setisresources] = useState(false)
    const [isemployer, setisemployer] = useState(false)
    const [isflag, setisflag] = useState(false)
    let navigate = useNavigate()

    let changeflagtotrue=()=>{
        setisflag(true)
    }
    let changeflagtofalse=()=>{
        setisflag(false)
    }

    let changealltohide=()=>{
        setisjob(false)
        setiscompany(false)
        setisservices(false)
        setisresources(false)
        setisemployer(false)
    }

    let changejobtodisplay=()=>{
        setisjob(true)
        setiscompany(false)
        setisservices(false)
        setisresources(false)
    }
    
    let changecompanytodisplay=()=>{
        setiscompany(true)
        setisservices(false)
        setisresources(false)
        setisjob(false)
    }
   

    let changeservicestodisplay=()=>{
        setisservices(true)
        setiscompany(false)
        setisresources(false)
        setisjob(false)
    }
   
    let changeresourcestodisplay=()=>{
        setisresources(true)
        setisservices(false)
        setiscompany(false)
        setisjob(false)
    }
    let changeemployertodisplay=()=>{
        setisresources(false)
        setisservices(false)
        setiscompany(false)
        setisjob(false)
        setisemployer(true)
    }
    let navigatetoemployer = (event)=>{
        event.preventDefault();
        navigate("/employer",{replace:false})

    }
    let navigatetohome = (event)=>{
        event.preventDefault();
        navigate("/",{replace:true})
    }
    let navigatetoregister=(event)=>{
        event.preventDefault();
        navigate("/register")
    }

  return (
    <div>
    {isflag?<Drawer changeflagtofalse={changeflagtofalse}/>:""}
    <div className={isflag?style.blur:""}>
        

    <div className={style.lnavbar}>
        
        <div className={style.lnav1}>
            <img className={style.logo} src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" onMouseEnter={changealltohide} onClick={navigatetohome}/>
            <div className={style.sublnav1}>
                <p onMouseEnter={changejobtodisplay} className={style.lphover}>Jobs</p>
                <p onMouseEnter={changecompanytodisplay} className={style.lphover}>Companies</p>
                <p onMouseEnter={changeservicestodisplay} className={style.lphover}>Services</p>
                <p onMouseEnter={changeresourcestodisplay} className={style.lphover}>Resources</p>
            </div>
        </div>
        <div className={style.sublnav2}  onMouseEnter={changealltohide}>
            <div className={style.btncarrier} onMouseEnter={changealltohide}>
                <button className={style.loginbutton} onClick={changeflagtotrue} >Login</button>
              
                <button className={style.registerbutton} onClick={navigatetoregister}>Register</button>
            </div>
            <div className={style.lphover} onMouseEnter={changeemployertodisplay} onClick={navigatetoemployer}>
               For employers
               <i class="fa-solid fa-angle-down"></i>
            </div>
        </div>

    </div>

        <Job isjob={isjob} changealltohide={changealltohide}/>
        <Company iscompany={iscompany}  changealltohide={changealltohide}/>
        <Services isservices={isservices}  changealltohide={changealltohide}/>
        <Resources isresources={isresources}  changealltohide={changealltohide}/>
        <Employer isemployer={isemployer}   changealltohide={changealltohide}/>
        <LandingBody   changealltohide={changealltohide}/>
        
    </div>
     <Footer/>
    </div>
  )
}

export default LandingNavbar