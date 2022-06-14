import { Checkbox, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsApi } from "../../ReduxStore/Jobs/job.action";
import style from "../JobsRecomndation/jobs.module.css";

const JobRecomandation = () => {
  const dispatch = useDispatch();
  //come from combine reducer
  const { data, loading, error } = useSelector((state) => state.job);

  console.log("yes", data);
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getJobsApi());
    }
  }, []);

  return (
    <div className={style.container}>
      <Heading size="md">Jobs based on Your Desired Preferences</Heading>
      {loading && <div>Loading</div>}

      {error && <div>error...</div>}

      {!loading &&
        data.map((p) => (
          <div key={p.id} className={style.JobRecomandation_template}>
            <div className={style.Checkbox}>
              <Checkbox value={p.id}></Checkbox>
            </div>

            <div className={style.JobRecomandation_template_values}>
              <p className={style.JobRecomandation_title}>{p.Requirement}</p>
              <p className={style.JobRecomandation_companyname}>
                {p.Company_name}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default JobRecomandation;
