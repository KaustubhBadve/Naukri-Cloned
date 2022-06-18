import React from "react";
import Footer from "../HomePageFooter/Footer";
// import WithSubnavigation from "../Recruter/RecNavbar";
import WithSubnavigation from '../HomePageNavbar/Navbar'
import styled from "./Topcompany.module.css";

const Topcompany = () => {
    let temp = [
        { a: "A" },
        { a: "B" },
        { a: "C" },
        { a: "D" },
        { a: "E" },
        { a: "F" },
        { a: "G" },
        { a: "H" },
        { a: "I" },
        { a: "J" },
        { a: "K" },
        { a: "L" },
        { a: "M" },
        { a: "N" },
        { a: "O" },
        { a: "P" },
        { a: "Q" },
        { a: "R" },
        { a: "S" },
        { a: "T" },
        { a: "U" },
        { a: "V" },
        { a: "W" },
        { a: "X" },
        { a: "Y" },
        { a: "Z" },
    ];
    // console.log(temp);,
  

    return (
        <>
        {/* <WithSubnavigation/> */}
        <WithSubnavigation/>
        <div className={styled.fullbody}>
        <div className={styled.forbodytop}>
            <div className={styled.fornavb}>
                <div>Browse Jobs by Companies</div>

                <div>

                    <input style={{padding:"2px", border:"1px solid #f0f0f0"}} placeholder="search for company" />
                    <button></button>
                </div>
            </div>
            <div>
                <div className={styled.forflex}>
                    <div className={styled.forflex1}>
                        <div className={styled.tap}>Top1000</div>
                        {temp.map((ten) => {
                            return <div className={styled.tap}>{ten.a}</div>;
                        })}
                    </div>
                </div>
            </div>
            <div className={styled.searchliast} >
                <div>
                <li>24/7 Customer Jobs </li>
                <li>3D PLM Software Jobs </li>
                <li>3i Infotech Jobs </li>
                <li>AAPC India Hotel Management </li>
                <li>ACT Television Jobs </li>
                <li>ADP Jobs AIG Analytics & Services Jobs </li>
                <li>ANG INDUSTRIES Jobs </li>
                <li>ANI Technologies Jobs</li>
                <li> ANZ Support Services Jobs </li>
                <li>ARSTEG Solutions </li>
                <li>Pvt Ltd Jobs </li>
                <li>ASAP Info Systems </li>
                <li>Jobs ASM Technologies Jobs</li>
                <li> AT&T Jobs AVEVA Software Jobs </li>
                <li>AXA Technology Services Jobs AXIS IT & T Jobs</li>
                <li> Abbott Healthcare Jobs</li>
                <li> Accel Frontline Jobs</li>
                <li>24/7 Customer Jobs </li>
                <li>3D PLM Software Jobs </li>
                <li>3i Infotech Jobs </li>
                <li>AAPC India Hotel Management </li>
                <li>ACT Television Jobs </li>
                <li>ADP Jobs AIG Analytics & Services Jobs </li>
                <li>ANG INDUSTRIES Jobs </li>
                <li>ANI Technologies Jobs</li>
                <li> ANZ Support Services Jobs </li>
                <li>ARSTEG Solutions </li>
                <li>Pvt Ltd Jobs </li>
                <li>ASAP Info Systems </li>
                <li>Jobs ASM Technologies Jobs</li>
                <li> AT&T Jobs AVEVA Software Jobs </li>
                <li>AXA Technology Services Jobs AXIS IT & T Jobs</li>
                <li> Abbott Healthcare Jobs</li>
                <li> Accel Frontline Jobs</li>


                </div>
                <div>
                <li>Pvt Ltd Jobs </li>
                <li>ASAP Info Systems </li>
                <li>Jobs ASM Technologies Jobs</li>
                <li> AT&T Jobs AVEVA Software Jobs </li>
                <li>AXA Technology Services Jobs AXIS IT & T Jobs</li>
                <li> Abbott Healthcare Jobs</li>
                <li> Accel Frontline Jobs</li>
                <li>Eleme Petrochemicals Jobs </li>
               <li> Eli Research Jobs</li>
                 <li>Elico Health Care Job</li>
                <li>s Embassy of Saudi Arabia Jobs </li>
               <li> Emco Jobs Emcure Pharmaceutical Jobs</li>
               <li>  Emerson Information Jobs </li>
               <li> Emerson Innovation Jobs</li>
               <li> Jobs Enercon Jobs Enrich IT Services Jobs </li>
              <li>  Era Group Jobs Ericsson Jobs</li>
               <li>  Ernst & Young Jobs Escorts Jobs</li>
               <li>  Esolser Jobs</li>
               <li>Pvt Ltd Jobs </li>
                <li>ASAP Info Systems </li>
                <li>Jobs ASM Technologies Jobs</li>
                <li> AT&T Jobs AVEVA Software Jobs </li>
                <li>AXA Technology Services Jobs AXIS IT & T Jobs</li>
                <li> Abbott Healthcare Jobs</li>
                <li> Accel Frontline Jobs</li>
                <li>Eleme Petrochemicals Jobs </li>
               <li> Eli Research Jobs</li>
                 <li>Elico Health Care Job</li>
                <li>s Embassy of Saudi Arabia Jobs </li>
               <li> Emco Jobs Emcure Pharmaceutical Jobs</li>
               <li>  Emerson Information Jobs </li>
               <li> Emerson Innovation Jobs</li>
               <li> Jobs Enercon Jobs Enrich IT Services Jobs </li>
              <li>  Era Group Jobs Ericsson Jobs</li>
               <li>  Ernst & Young Jobs Escorts Jobs</li>
               <li>  Esolser Jobs</li>

               
                </div>
                <div>
                <li>ANG INDUSTRIES Jobs </li>
                <li>ANI Technologies Jobs</li>
                <li> ANZ Support Services Jobs </li>
                <li>ARSTEG Solutions </li>
                <li>Pvt Ltd Jobs </li>
                <li>ASAP Info Systems </li>
                <li>Jobs ASM Technologies Jobs</li>
                <li> AT&T Jobs AVEVA Software Jobs </li>
                <li>AXA Technology Services Jobs AXIS IT & T Jobs</li>
                <li> Abbott Healthcare Jobs</li>
                <li> Accel Frontline Jobs</li>
                <li>Eleme Petrochemicals Jobs </li>
               <li> Eli Research Jobs</li>
                 <li>Elico Health Care Job</li>
                <li>s Embassy of Saudi Arabia Jobs </li>
               <li> Emco Jobs Emcure Pharmaceutical Jobs</li>
               <li>  Emerson Information Jobs </li>
               <li> Emerson Innovation Jobs</li>
                <li> Jobs Enercon Jobs Enrich IT Services Jobs </li>
              <li>  Era Group Jobs Ericsson Jobs</li>   
              <li>Pvt Ltd Jobs </li>
                <li>ASAP Info Systems </li>
                <li>Jobs ASM Technologies Jobs</li>
                <li> AT&T Jobs AVEVA Software Jobs </li>
                <li>AXA Technology Services Jobs AXIS IT & T Jobs</li>
                <li> Abbott Healthcare Jobs</li>
                <li> Accel Frontline Jobs</li>
                <li>Eleme Petrochemicals Jobs </li>
               <li> Eli Research Jobs</li>
                 <li>Elico Health Care Job</li>
                <li>s Embassy of Saudi Arabia Jobs </li>
               <li> Emco Jobs Emcure Pharmaceutical Jobs</li>
               {/* <li>  Ernst & Young Jobs Escorts Jobs</li>  */}
               {/* <li>  Esolser Jobs</li> */}
                </div>
                <div>
                <li>24/7 Customer Jobs </li>
                <li>3D PLM Software Jobs </li>
                <li>3i Infotech Jobs </li>
                <li>AAPC India Hotel Management </li>
                <li>ACT Television Jobs </li>
                <li>ADP Jobs AIG Analytics & Services Jobs </li>
                <li>ANG INDUSTRIES Jobs </li>
                <li>ANI Technologies Jobs</li>
                <li> ANZ Support Services Jobs </li>
                <li>ARSTEG Solutions </li>
                <li>Pvt Ltd Jobs </li>
                <li>ASAP Info Systems </li>
                <li>Jobs ASM Technologies Jobs</li>
                <li> AT&T Jobs AVEVA Software Jobs </li>
                <li>AXA Technology Services Jobs AXIS IT & T Jobs</li>
                <li> Abbott Healthcare Jobs</li>
                <li>24/7 Customer Jobs </li>
                <li>3D PLM Software Jobs </li>
                <li>3i Infotech Jobs </li>
                <li>AAPC India Hotel Management </li>
                <li>ACT Television Jobs </li>
                <li>ADP Jobs AIG Analytics & Services Jobs </li>
                <li>ANG INDUSTRIES Jobs </li>
                <li>ANI Technologies Jobs</li>
                <li> ANZ Support Services Jobs </li>
                <li>ARSTEG Solutions </li>
                <li>Pvt Ltd Jobs </li>
                <li>ASAP Info Systems </li>
                <li>Jobs ASM Technologies Jobs</li>
                <li> AT&T Jobs AVEVA Software Jobs </li>
                <li>AXA Technology Services Jobs AXIS IT & T Jobs</li>
                <li> Abbott Healthcare Jobs</li>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
</>
    );
};

export default Topcompany;
