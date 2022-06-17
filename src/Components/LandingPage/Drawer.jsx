import React from "react";
import { Link } from "react-router-dom";
import style from "./drawer.module.css";

const Drawer = ({ changeflagtofalse }) => {
  
  return (
    <div className={style.dcont}>
      <div className={style.drawermain}>
        <div onClick={changeflagtofalse} className={style.close}>X</div>
        <div className={style.dlog1}>
          <p className={style.dlogin}>Login</p>
         <Link to="/register"> <p className={`${style.blue1} ${style.pointer}`}>Register for Free</p></Link>
        </div>
        <p>Email Id / Username</p>
        <input className={style.dinp}
          type="text"
          placeholder="Enter your active Email ID / Username"
        />
        <p>Password</p>
        <input className={style.dinp} type="password" placeholder="Enter your password" />
        <div className={style.fgtp}>
          <p className={style.pointer}>Forgot Password?</p>
        </div>
        <Link to="/login"><button className={style.dlogbtn}>Login</button></Link>
        <div className={style.txtcen}>
        <p className={style.pointer}>Use OTP to Login</p>
        </div>
        
        <div className={style.line}>
          <hr />
          <p>or</p>
          <hr />
        </div>
        <div className={`${style.dsign} ${style.pointer}`}>
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt=""
          />
          <p>Sign in with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
