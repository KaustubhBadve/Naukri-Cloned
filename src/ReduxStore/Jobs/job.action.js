import {
  FETCH_JOBS_POST_REQUEST,
  FETCH_JOBS_POST_SUCCESS,
  FETCH_JOBS_POST_FAILURE,
  ADD_JOBS_TO_APPLY,
  REMOVE_JOBS_FROM_APPLY,
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

export const applyjob = (data) => (dispatch) => {
  // console.log("apply job yes",data);

  dispatch({ type: ADD_JOBS_TO_APPLY, payload: data });
};
export const removejob = (data) => (dispatch) => {
  console.log("apply job no",data.id);
  dispatch({ type: REMOVE_JOBS_FROM_APPLY, payload: data });
};
