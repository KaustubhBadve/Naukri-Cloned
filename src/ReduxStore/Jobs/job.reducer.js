import {
  FETCH_JOBS_POST_REQUEST,
  FETCH_JOBS_POST_SUCCESS,
  FETCH_JOBS_POST_FAILURE,
} from "./job.action.type";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const jobRecomandationReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case FETCH_JOBS_POST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case FETCH_JOBS_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case FETCH_JOBS_POST_FAILURE: {
      return {
        ...state,

        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
