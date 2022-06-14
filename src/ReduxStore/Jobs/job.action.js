import {
  FETCH_JOBS_POST_REQUEST,
  FETCH_JOBS_POST_SUCCESS,
  FETCH_JOBS_POST_FAILURE,
} from "./job.action.type";

import axios from "axios";

//getting localhost josn data
export const getJobsApi = () => (dispatch) => {
  dispatch({ type: FETCH_JOBS_POST_REQUEST });

  axios
    .get("http://localhost:8080/jobs")
    .then((r) => {
      // console.log(r.data);
      dispatch({ type: FETCH_JOBS_POST_SUCCESS, payload: r.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_JOBS_POST_FAILURE });
    });
};
