import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Footer from "../HomePageFooter/Footer";
import Empbody from "./empbody";
import style from "./empnav.module.css"
import Empnumber from "./Empnumber";
import Empproduct from "./Empproduct";

const Empnav = () => {
    const [isproduct, setisproduct] = useState(false)
    const [isnumber, setisnumber] = useState(false)
    let navigate = useNavigate()
    let showprod=()=>{
        setisproduct(true)
        setisnumber(false)
    }
    let shownumber=()=>{
        setisnumber(true)
        setisproduct(false)
    }
    let hideall=()=>{
        setisnumber(false)
        setisproduct(false)
    }

    let navigatetohome = (event)=>{
        event.preventDefault();
        navigate("/",{replace:true})
    }
  return (
    <div>
        
        <div className={style.empnav}>
            <div className={style.subempnav1}>
                <img
                    src="https://m.economictimes.com/thumb/msid-68302566,width-1200,height-900,resizemode-4,imgsize-45453/untitled-7.jpg"
                    alt=""
                    onClick={navigatetohome}
                />
                <p onMouseEnter={hideall}>Home</p>
                <div className={style.subnav1} onMouseEnter={showprod}>
                    <p>Products</p>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <div className={style.mediahide}>
                <div>
                <p className={style.makesmall}>India Sales Toll Free (9:30 AM to 6:30PM)</p>
                </div>
                <div className={style.subempnav1}>

                    <div>
                        
                        <div className={style.subnav1} onMouseEnter={shownumber}>
                            <i class="fa-solid fa-phone"></i>
                            <p>1800-102-2558</p>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                    <div  className={style.subnav2} onMouseEnter={hideall}>
                    <i class="fa-solid fa-cart-arrow-down"></i>
                        <p>Cart</p>
                        <i class="fa-solid fa-angle-down"></i>

                    </div>
                    <div className={style.subnav3}>
                        <p>Job Seeker</p>
                        <i class="fa-solid fa-share-from-square"></i>
                    </div>
                </div>
            </div>
        </div>
        <Empproduct isproduct={isproduct} hideall={hideall}/>

        <Empnumber isnumber={isnumber} hideall={hideall}/>
        <Empbody hideall={hideall}/>
        <Footer/>

   </div>
  );
};

export default Empnav;
