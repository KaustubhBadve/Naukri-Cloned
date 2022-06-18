import React from "react";
import styled from "./styled.module.css";
// import Link
import datajson from "../../dbs.json";
import Footer from "../HomePageFooter/Footer";
// import WithSubnavigation from "./RecNavbar";
import WithSubnavigation from '../HomePageNavbar/Navbar'

const Recruters = () => {
  console.log(datajson.profile);
  // useEffect(()=>{
  // fetch("")
  // })

  return (
    <>
      <div >
      <WithSubnavigation/>
      </div>

      <div className={styled.positiondiv}>
        <div className={styled.forNabvar}>
          <div>All Sectors</div>
          <div>IT</div>

          <div>BankingBPO / KPO</div>
          <div>Infrastructure</div>
          <div>Manifacturing</div>
        </div>
        <div className={styled.forgridtop}>
          <div className={styled.forgrid}>
            {datajson.profile.map((item) => {
              return (
                <>
                  <div>
                    <div className={styled.divrs}>
                      <div className={styled.forflex}>
                        <div>
                          <img src={item.pic}></img>
                        </div>
                        <div>
                          <div>{item.name}</div>
                          <div> {item.position}</div>
                          <div>{item.skill}</div>
                          <div>{item.location}</div>
                        </div>
                      </div>

                      <div className={styled.forskills}>{item.Roles}</div>
                    </div>
                    <div className={styled.forbutton}>
                      <div>
                        <button>Follow</button>
                      </div>
                      <div>
                        <a src=""> send message</a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styled.siderecruterspage}>
            <p>Most Active Recruiters</p>
            <div className={styled.siderheight}>
              <div className={styled.siderecontaint}>
                <div>
                  <img src="	https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1654608690rp5464473_medium4"></img>
                </div>
                <div>
                  <div>Hitesh Shah</div>

                  <div>Talent Acquisition Specialist</div>
                  <div>ITfirst Consultants</div>
                  <div>Pune</div>
                </div>
              </div>
              <div className={styled.foldiv}>
                <div className={styled.folbtn}>
                  <button>Follow</button>
                </div>
                <div>see more</div>
              </div>
            </div>
            <div className={styled.siderheight}>
              <div className={styled.siderecontaint}>
                <div>
                  <img src="	https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1523424451rp3601272_medium4"></img>
                </div>
                <div>
                  <div>Vinita Raut</div>

                  <div>Talent Acquisition Specialist</div>
                  <div>ITfirst Consultants</div>
                  <div>Pune</div>
                </div>
              </div>
              <div className={styled.foldiv}>
                <div className={styled.folbtn}>
                  <button>Follow</button>
                </div>
                <div>see more</div>
              </div>
            </div>
            <div className={styled.siderheight}>
              <div className={styled.siderecontaint}>
                <div>
                  <img src="	https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1391522936rp1621088_medium4"></img>
                </div>
                <div>
                  <div>Roland Lancelot Pavamani</div>

                  <div>Business Owner Ex Defense Scientist...</div>
                  <div>Roland & Associates</div>
                  <div>Pune</div>
                </div>
              </div>
              <div className={styled.foldiv}>
                <div className={styled.folbtn}>
                  <button>Follow</button>
                </div>
                <div>see more</div>
              </div>
            </div>
            <div className={styled.siderheight}>
              <div className={styled.siderecontaint}>
                <div>
                  <img src="	https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1654608690rp5464473_medium4"></img>
                </div>
                <div>
                  <div>Hitesh Shah</div>

                  <div>Talent Acquisition Specialist</div>
                  <div>ITfirst Consultants</div>
                  <div>Pune</div>
                </div>
              </div>
              <div className={styled.foldiv}>
                <div className={styled.folbtn}>
                  <button>Follow</button>
                </div>
                <div>see more</div>
              </div>
            </div>
            <div className={styled.siderheight}>
              <div className={styled.siderecontaint}>
                <div>
                  <img src="https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1526975906rp1893990_medium4"></img>
                </div>
                <div>
                  <div>Gauri Bhosle</div>

                  <div>Talent Acquisition Specialist</div>
                  <div>ITfirst Consultants</div>
                  <div>Pune</div>
                </div>
              </div>
              <div className={styled.foldiv}>
                <div className={styled.folbtn}>
                  <button>Follow</button>
                </div>
                <div>see more</div>
              </div>
            </div>
            <div className={styled.siderheight}>
              <div className={styled.siderecontaint}>
                <div>
                  <img src="	https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1441089191rp1929352_medium4"></img>
                </div>
                <div>
                  <div>Hitesh Shah</div>

                  <div>Talent Acquisition Specialist</div>
                  <div>ITfirst Consultants</div>
                  <div>Pune</div>
                </div>
              </div>
              <div className={styled.foldiv}>
                <div className={styled.folbtn}>
                  <button>Follow</button>
                </div>
                <div>see more</div>
              </div>
            </div>
            <div className={styled.siderheight}>
              <div className={styled.siderecontaint}>
                <div>
                  <img src="	https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1654608690rp5464473_medium4"></img>
                </div>
                <div>
                  <div>Hitesh Shah</div>

                  <div>Talent Acquisition Specialist</div>
                  <div>ITfirst Consultants</div>
                  <div>Pune</div>
                </div>
              </div>
              <div className={styled.foldiv}>
                <div className={styled.folbtn}>
                  <button>Follow</button>
                </div>
                <div>see more</div>
              </div>
            </div>
            <div className={styled.siderheight}>
              <div className={styled.siderecontaint}>
                <div>
                  <img src="	https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1456740943rp2621246_medium4"></img>
                </div>
                <div>
                  <div>Ankur</div>

                  <div>Talent Acquisition Specialist</div>
                  <div>ITfirst Consultants</div>
                  <div>Pune</div>
                </div>
              </div>
              <div className={styled.foldiv}>
                <div className={styled.folbtn}>
                  <button>Follow</button>
                </div>
                <div>see more</div>
              </div>
            </div>
            <div className={styled.siderheight}>
              <div className={styled.siderecontaint}>
                <div>
                  <img src="	https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1425631112rp2061318_medium4"></img>
                </div>
                <div>
                  <div>Akash</div>

                  <div>Talent Acquisition Specialist</div>
                  <div>ITfirst Consultants</div>
                  <div>Pune</div>
                </div>
              </div>
              <div className={styled.foldiv}>
                <div className={styled.folbtn}>
                  <button>Follow</button>
                </div>
                <div>see more</div>
              </div>
            </div>
            <div className={styled.siderheight}>
              <div className={styled.siderecontaint}>
                <div>
                  <img src="	https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1437031823rp2301988_medium4"></img>
                </div>
                <div>
                  <div>Shah</div>

                  <div>Talent Acquisition Specialist</div>
                  <div>ITfirst Consultants</div>
                  <div>Pune</div>
                </div>
              </div>
              <div className={styled.foldiv}>
                <div className={styled.folbtn}>
                  <button>Follow</button>
                </div>
                <div>see more</div>
              </div>
            </div>
            <div className={styled.siderheight}>
              <div className={styled.siderecontaint}>
                <div>
                  <img src="	https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1425037518rp2074148_medium4"></img>
                </div>
                <div>
                  <div>Hit Shah</div>

                  <div>Talent Acquisition Specialist</div>
                  <div>ITfirst Consultants</div>
                  <div>Pune</div>
                </div>
              </div>
              <div className={styled.foldiv}>
                <div className={styled.folbtn}>
                  <button>Follow</button>
                </div>
                <div>see more</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Recruters;
