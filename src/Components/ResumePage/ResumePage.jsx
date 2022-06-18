import React from "react";
import styled from "./ResumePage.module.css";
import WithSubnavigation from '../HomePageNavbar/Navbar'
import Footer from "../HomePageFooter/Footer";
const ResumePage = () => {
  return (
    <>
    <WithSubnavigation/>
      <div className={styled.body}>

        <section className={styled.promoMessage}>
          Flat <span className={styled.bolder}>30% OFF</span> on All Services
          <p className={styled.promoCode}>
            Promo code NAUK30, Valid till 20-Jun-2022
          </p>
        </section>
        <div className={styled.bodyresume}>
          <div className={styled.bodyresume1}>   </div>
          <div className={styled.bodyresume1forcolor}>   </div>
          <div className={styled.bgwrap}>
            <div className={styled.homepage}>
              <div className={styled.headertext}>
                <div className={styled.infoheader}>
                  Move ahead in career, faster
                </div>
                <div className={styled.infoheader} style={{fontSize:"20px",marginTop:"5px"}}>with our paid services</div>
              </div>
              <div className={styled.servicecontainer}>
                <div className={styled.servicerow1}>
                  <div className={styled.mediacard}>
                    <div className={styled.cards}>
                      <a href="" className={styled.cursorpointer}>
                        <figure>
                          <div className={styled.LazyLoadisvisible}>
                            <img
                              src="https://static.naukimg.com/s/7/123/i/priorityApp.4d581f13.png"
                              className="Lazyimg"
                              alt="RESUME DISPLAY"
                            />
                          </div>
                          <span className={styled.textStrip}>MOST POPULAR</span>
                        </figure>
                        <div className={styled.cardHead}>
                          <div className={styled.serviceName}>
                            RESUME DISPLAY
                          </div>
                          <div className={styled.cardDescr}>
                            Increase your Profile Visibility to recruiters upto 3
                            times.
                          </div>
                          <span className={styled.cardDetail}>
                            Get a Featured Profile, Stand out and get noticed in
                            recruiter eyes.
                          </span>
                          <div className={styled.priceDetails}>
                            <div className={styled.startsFrom}>
                              Subscription starts from
                            </div>
                            <div className={styled.price}>
                              <div>
                                {" "}
                                ₹ 1949 <span>for 3 Months</span>
                              </div>

                              <div className={styled.knowMore}>KNOW MORE</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styled.servicerow1}>
                  <div className={styled.mediacard}>
                    <div className={styled.cards}>
                      <a href= "" className={styled.cursorpointer}>
                        <figure>
                          <div className={styled.LazyLoadisvisible}>
                            <img
                              src="https://static.naukimg.com/s/7/123/i/resumeDisplay.c7a649c3.png"
                              className="Lazyimg"
                              alt="RESUME DISPLAY"
                            />
                          </div>
                          <span className={styled.textStrip}>MOST POPULAR</span>
                        </figure>
                        <div className={styled.cardHead}>
                          <div className={styled.serviceName}>
                            RESUME DISPLAY
                          </div>
                          <div className={styled.cardDescr}>
                          Be a Priority Applicant & increase your chance of getting a call.
                          </div>
                          <span className={styled.cardDetail}>
                          Be the first one to apply and catch recruiter attention
                          </span>
                          <div className={styled.priceDetails}>
                            <div className={styled.startsFrom}>
                              Subscription starts from
                            </div>
                            <div className={styled.price}>
                              <div>
                                {" "}
                                ₹ 1949 <span>for 3 Months</span>
                              </div>

                              <div className={styled.knowMore}>KNOW MORE</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styled.servicerow1}>
                  <div className={styled.mediacard}>
                    <div className={styled.cards}>
                      <a  href= "" className={styled.cursorpointer}>
                        <figure>
                          <div className={styled.LazyLoadisvisible}>
                            <img
                              src="https://static.naukimg.com/s/7/123/i/jsb-homepage.93423568.png"
                              className="Lazyimg"
                              alt="RESUME DISPLAY"
                            />
                          </div>
                          <span className={styled.textStrip}>MOST POPULAR</span>
                        </figure>
                        <div className={styled.cardHead}>
                          <div className={styled.serviceName}>
                          JOB SEARCH BOOSTER
                          </div>
                          <div className={styled.cardDescr}>
                          Boost your job search with<br/> referrals
                          </div>
                          <span className={styled.cardDetail}>
                          Take help from over 20,000 seniors in top companies like TCS, HCL, Accenture etc.
                          </span>
                          <div className={styled.priceDetails}>
                            <div className={styled.startsFrom}>
                              Subscription starts from
                            </div>
                            <div className={styled.price}>
                              <div>
                                {" "}
                                ₹ 839 <span>Only</span>
                              </div>

                              <div className={styled.knowMore}>KNOW MORE</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>



          <div style={{ display: "flex" }}>
            <div className={styled.resumeWriting1}>
              <div className={styled.waveseffect1}>
                <a href= "" className={styled.cursorpointer1}>
                  <figure>
                    <div className={styled.LazyLoadisvisible1}>
                      <img
                        src="https://static.naukimg.com/s/7/123/i/resumeWriting.1962981a.png"
                        className={styled.Lazyimg1}
                        style={{ width: "176px" }}
                        alt="RESUME WRITING"
                      />
                    </div>
                  </figure>
                  <div className={styled.cardHead1}>
                    <div className={styled.serviceName1}>RESUME WRITING</div>
                    <div className={styled.cardDescr1}>
                      Standout from the crowd with our professionally written Resume
                      by expert
                    </div>
                    <span className={styled.cardDetail1}>
                      Resume that highlights your strengths and showcase your
                      experience
                    </span>
                    <div className={styled.rwlinks1}>
                      <a href= "" title="Resume Samples">Text Resume</a>
                      <a href= "" title="Visual Resume Samples">Visual Resume</a>
                      <a href= "" title="Resume Score">Resume Score</a>
                    </div>
                   
                    <div className={styled.priceDetails1}>
                      <div className={styled.startsFrom1}>Starts from</div>
                      <div className={styled.price1}>
                        <i className={styled.fficonfficonrupee1}></i>
                        <span>₹ 1653 Only</span>
                      </div>
                    </div>
                    <div className={styled.knowMore}>KNOW MORE</div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styled.sidecards1}>
              <div className={styled.cards}>
                <a href =""  className={styled.cursorpointer}>
               
                  <figure>
                    <div className={styled.LazyLoadisvisible}>
                      <img
                        src="https://static.naukimg.com/s/7/123/i/resumeDisplay.c7a649c3.png"
                        className="Lazyimg"
                        alt="RESUME DISPLAY"
                      />
                    </div>
                    <span className={styled.textStrip}>MOST POPULAR</span>
                  </figure>
                  <div className={styled.cardHead}>
                    <div className={styled.serviceName}>
                      RESUME DISPLAY
                    </div>
                    <div className={styled.cardDescr}>
                      Increase your Profile Visibility to recruiters upto 3
                      times.
                    </div>
                    {/* <span className={styled.cardDetail}>
                        Get a Featured Profile, Stand out and get noticed in
                        recruiter eyes.
                      </span> */}
                    <div className={styled.priceDetails}>
                      <div className={styled.startsFrom}>
                        Subscription starts from
                      </div>
                      <div className={styled.price}>
                        <div>
                          {" "}
                          ₹ 1949 <span>for 3 Months</span>
                        </div>

                        <div className={styled.knowMore}>KNOW MORE</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={styled.servicerow1} style={{ display: "flex", marginLeft: "305px", marginTop: "160px" }}>
            <div className={styled.mediacard}>
              <div className={styled.cards}>
                <a href="" className={styled.cursorpointer}>
                  <figure>
                    <div className={styled.LazyLoadisvisible}>
                      <img
                        src="	https://static.naukimg.com/s/7/123/i/jobs4u.22bb9e85.png"
                        className="Lazyimg"
                        alt="RESUME DISPLAY"
                      />
                    </div>
                    <span className={styled.textStrip}>MOST POPULAR</span>
                  </figure>
                  <div className={styled.cardHead}>
                    <div className={styled.serviceName}>
                      JOBS FOR YOU
                    </div>
                    <div className={styled.cardDescr}>
                      Stand out as an Early Applicant with instant access to jobs.
                    </div>
                    <span className={styled.cardDetail}>
                      Get a Featured Profile, Stand out and get noticed in
                      recruiter eyes.
                    </span>
                    <div className={styled.priceDetails}>
                      <div className={styled.startsFrom}>
                        Subscription starts from
                      </div>
                      <div className={styled.price}>
                        <div>
                          {" "}
                          ₹ 1949 <span>for 3 Months</span>
                        </div>

                        <div className={styled.knowMore}>KNOW MORE</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styled.mediacard}>
              <div className={styled.cards}>
                <a href="" className={styled.cursorpointer}>
                  <figure>
                    <div className={styled.LazyLoadisvisible}>
                      <img
                        src="https://static.naukimg.com/s/7/123/i/recruiterConn.b993d2e1.png"
                        className="Lazyimg"
                        alt="RESUME DISPLAY"
                      />
                    </div>
                    <span className={styled.textStrip}>MOST POPULAR</span>
                  </figure>
                  <div className={styled.cardHead}>
                    <div className={styled.serviceName}>
                      RESUME DISPLAY
                    </div>
                    <div className={styled.cardDescr}>
                      RECRUITER CONNECTION
                    </div>
                    <span className={styled.cardDetail}>
                      Get a Featured Profile, Stand out and get noticed in
                      recruiter eyes.
                    </span>
                    <span className={styled.cardDetail}>
                      Get a Featured Profile,
                    </span>
                    <div className={styled.priceDetails}>
                      <div className={styled.startsFrom}>
                        Subscription starts from
                      </div>
                      <div className={styled.price}>
                        <div>
                          {" "}
                          ₹ 2500 <span>for 5 Months</span>
                        </div>

                        <div className={styled.knowMore}>KNOW MORE</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styled.mediacard}>
              <div className={styled.cards}>
                <a  href="" className={styled.cursorpointer}>
                  <figure>
                    <div className={styled.LazyLoadisvisible}>
                      <img
                        src="https://static.naukimg.com/s/7/123/i/header-image.60ac1b14.png"
                        className="Lazyimg" s
                        alt="RESUME DISPLAY"
                      />
                    </div>
                    <span className={styled.textStrip}>MOST POPULAR</span>
                  </figure>
                  <div className={styled.cardHead}>
                    <div className={styled.serviceName}>
                      RESUME DISPLAY
                    </div>
                    <div className={styled.cardDescr}>
                      Increase your Profile Visibility to recruiters upto 3
                      times.
                    </div>
                    <span className={styled.cardDetail}>
                      Get a Featured Profile, Stand out and get noticed in
                      recruiter eyes.
                    </span>
                    <div className={styled.priceDetails}>
                      <div className={styled.startsFrom}>
                        Subscription starts from
                      </div>
                      <div className={styled.price}>
                        <div>
                          {" "}
                          ₹ 1949 <span>for 3 Months</span>
                        </div>

                        <div className={styled.knowMore}>KNOW MORE</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className={styled.contactdiv}>
            <div className={styled.contactdiv1}>
              <div>Talk to us</div>
              <div>Call us Toll Free: 1800-102-5557</div>
              <div>(9.00 AM to 9.00PM IST)</div>
              <div>International Customer Call: +91-120-4021100</div>
              <div>For bulk queries call: 18001034477</div>
            </div>
            <div className={styled.contactdiv2}>
              <h1><b> CONTACT US</b></h1>
              <span style={{fontSize:"13px",color:"grey"}}>
                Our executive will get in touch with you soon</span>
              <div>
                <label>Name*
                <input placeholder="Enter your name" className={styled.contactinp}/>
                </label>
               </div>
              <div><label>Email ID*</label>
                <br />
                <input placeholder="Enter your email"  type={"text"}  className={styled.contactinp}/></div>
              <div><label>Mobile*</label>
                <br />
                <input placeholder="Enter your mobile" className={styled.contactinp}/>
              </div>
              <span>Write your queries here</span>
              <br />
              <div className={styled.contactarea}>

                <textarea ></textarea>
              </div>

              <div>
                <button className={styled.contactbutton}>call me back</button>
              </div>

            </div>

          </div>
          <div className={styled.box121}>
            <div className={styled.title}>See Samples</div>
            <div className="rsInfo">
              <div className={styled.sampleDesc}>View select text resume, visual resume and cover letter samples across industries</div><div>
                <div style={{display:"flex", marginTop:"14px"}}>
                <a href="" title="Resume Samples" className={styled.sampleDesc1}>Text Resume</a>
                <a href="" title="Visual Resume Samples" className={styled.sampleDesc1}>Visual Resume</a>
                <a href="" title="Cover Letter" className={styled.sampleDesc1}>Cover Letter</a></div>
                </div>
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResumePage;
