import React from "react";
import Footer from "../HomePageFooter/Footer";
import style from "../JobsRecomndation/jobs.module.css";
import RecomandedCources from "./RecomandedCources";

const SearchJob = () => {
  return (

    <>
    <div className={style.SearchBox_form}>
      <p className={style.cource_hed_name}>Search Jobs on the Go !!</p>
      <p className={style.headerdescription}>
        Download the Naukri app for free & browse from a variety of jobs based
        on your preferences
      </p>
      <form className={style.from_search}>
        <input
          type="mobile"
          placeholder="48715987456"
          className={style.mobileinput}
        />
        <button className={style.sendLink}>Send Me Link</button>
        <p className={style.appBodyText}>
          Available on both Android &amp; iOS devices
        </p>
      </form>

      <div className={style.appInstallContainerHeaderImage}>
        <img
          className={style.headerImage}
          src="https://static.naukri.com/s/7/121/i/app-install.e6dbe7d2.png"
        />
      </div>

      <div className={style.stores}>
        <span className={style.stores}>
          <img
            className={style.storeImg}
            src="https://static.naukri.com/s/7/121/i/android-store.7408f521.png"
          />
          <label  className={style.storeLabel}>Google play</label>
        </span>

        <span className={style.stores}>
          <img
            className={style.storeImg}
            src="https://static.naukri.com/s/7/121/i/apple-store.f137bc22.png"
          />{" "}
          <label className={style.storeLabel}>App store</label>
        </span>
      </div>
    </div>
    <div className={style.recmdCources}><RecomandedCources/></div>

   
</>
    
  );
};

export default SearchJob;
