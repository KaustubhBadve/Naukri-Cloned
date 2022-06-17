import React, { useState } from "react";
import style from "./empbody.module.css";

const Empbody = ({ hideall }) => {
  const [issales, setissales] = useState(true);
  const [islr, setislr] = useState(false);
  let showlr = () => {
    setislr(true);
    setissales(false);
  };
  let showsales = () => {
    setislr(false);
    setissales(true);
  };
  return (
    <div className={style.empbody} onMouseEnter={hideall}>
      <div className={style.subbody1}>
        <div className={style.center}>
          <div className={style.subcenter}>
            <p className={style.blue}>NAUKRI HIRING SUITE FOR EMPLOYERS</p>
            <p className={style.large}>From Campus to Senior Level Hiring</p>
            <p className={style.med}>
              Bouquet of solutions to meet all your hiring needs
            </p>
          </div>
          <div className={style.body1flex}>
            <p>naukri</p>
            <p>iimjobs</p>
            <p>hirist</p>
            <p>Firstnaukri</p>
            <p>zwayam</p>
            <p>doselect</p>
            <span>eHire</span>
          </div>
          <button className={style.body1btn}>Know More</button>
          <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/01/27185345/English-Literature-Courses.jpg" />
        </div>
        <div>
          <div className={style.empform1}>
            <div className={style.body2flex}>
              <p
                onClick={showsales}
                className={issales ? style.withunderline : style.nounderline}
              >
                Sales Enquiry
              </p>
              <p
                onClick={showlr}
                className={islr ? style.withunderline : style.nounderline}
              >
                Login/Register
              </p>
            </div>
            <div className={issales ? style.sales : style.hide}>
              I am Looking for
              <div className={style.radiocarrier}>
                <input
                  type="radio"
                  id="rs"
                  name="fav"
                  value={"Recruitment Solutions"}
                />
                <label htmlFor="rs">Recruitment Solutions</label>
                <input
                  type="radio"
                  name="fav"
                  value={"Job Opportunities"}
                  id="jo"
                />
                <label htmlFor="jo">Job Opportunities</label>
              </div>
              <div className={style.empinpcarrier}>
                <input type="text" placeholder="Name" />
                <br />
                <input type="text" placeholder="Contact Number" />
                <br />
                <input type="text" placeholder="Company Name" />
                <br />
                <input type="text" placeholder="Designation Name" />
                <br />
                <input type="text" placeholder="Email ID" />
                <br />
                <input type="text" placeholder="City" />
              </div>
              <div className={style.robocarrier}>
                <input type="checkbox" />
                <p>I'm not a Robot</p>
                <img
                  src="https://www.google.com/recaptcha/about/images/reCAPTCHA-logo@2x.png"
                  alt=""
                />
              </div>
              <button className={style.callbackbtn}>Get a CallBack</button>
            </div>

            <div className={islr ? style.showlr : style.hide}>
              <div className={style.empinpcarrier}>
                <input type="text" placeholder="Registered Email" />
                <br />
                <input type="text" placeholder="Password" />
                <br />
              </div>
              <button className={style.callbackbtn}>Login</button>
              <br />
              <p className={style.blue}>Forgot Password?</p>
              <p className={style.xs}>
                Keep your account safe. <span>Learn How</span>
              </p>
              <div className={style.query}>
                <p className={style.xs}>
                  Have a Query? <span>Contact Us</span>
                </p>
                <span>Fraud Alert!</span>
              </div>
              <p className={style.xs}>Are you a new Client</p>
              <button className={style.regbtn}>Register Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.subbody2}>
        <div>
          <div className={style.sb2}>
            <p className={style.blue}>PRODUCTS & SERVICES</p>
            <p className={style.large}>Naukri is India’s No.1 Job Posting</p>
            <p className={style.large}>& Recruitment Platform</p>
          </div>
        </div>
        <div className={style.sb2mainflex}>
          <div className={style.sb2submain1}>
            <p className={style.jobposting}>
              Naukri Job Posting Services - Get Quality Applies
            </p>
            <p>
              Reach out to millions of jobseekers and hire quickly with our fast
              and easy job posting services.
            </p>
            <div className={style.sb2grid}>
              <div className={style.sb2flex}>
                <i class="fa-solid fa-stopwatch"></i>
                <p>2 Minutes to Post</p>
              </div>
              <div className={style.sb2flex}>
                <i class="fa-solid fa-address-book"></i>
                <p>Unlimited Applies</p>
              </div>
              <div className={style.sb2flex}>
                <i class="fa-solid fa-user-group"></i>
                <p>Attract Audience</p>
              </div>
              <div className={style.sb2flex}>
                <i class="fa-solid fa-calendar"></i>
                <p>30 Day Visibility</p>
              </div>
            </div>
            <button className={style.body1btn}>Know More</button>
          </div>

          <img
            src="https://www.goteso.com/assets/images/training/banner/best-online-it-training.png"
            alt=""
          />
          <img
            src="https://flow-online.co.uk/wp-content/uploads/2021/08/creating-online-courses.png"
            alt=""
          />
          <div className={style.sb2submain1}>
            <p className={style.jobposting}>
              Search Best Talent with Naukri’s Resume Database Access - Resdex
            </p>
            <p>
              Source candidates from Resdex − India’s largest Talent Pool and
              find the perfect talent for your organisation.
            </p>
            <div className={style.sb2grid}>
              <div className={style.sb2flex}>
              <i class="fa-solid fa-id-badge"></i>
                <p>Over 8.27 crore Jobseekers</p>
              </div>
              <div className={style.sb2flex}>
              <i class="fa-solid fa-magnifying-glass-location"></i>
                <p>Smart Talent Search</p>
              </div>
              <div className={style.sb2flex}>
              <i class="fa-solid fa-phone"></i>
                <p>Contact Directly</p>
              </div>
              <div className={style.sb2flex}>
              <i class="fa-solid fa-calendar-check"></i>
                <p>Verified Candidates</p>
              </div>
            </div>
            <button className={style.body1btn}>Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empbody;
