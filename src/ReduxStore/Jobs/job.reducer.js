import {
  FETCH_JOBS_POST_REQUEST,
  FETCH_JOBS_POST_SUCCESS,
  FETCH_JOBS_POST_FAILURE,
  ADD_JOBS_TO_APPLY,
  REMOVE_JOBS_FROM_APPLY,
} from "./job.action.type";

const initialState = {
  loading: false,
  error: false,
  data: [],
  applyjob: [],
};

export const jobRecomandationReducer = (
  state = initialState,
  { type, payload }
) => {
  // console.log(type, payload);
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
    case ADD_JOBS_TO_APPLY: {
      return {
        ...state,
        applyjob: [...state.applyjob, payload],
      };
    }
    case REMOVE_JOBS_FROM_APPLY: {
      let abc = state.applyjob.filter((job) => job.value !== payload.job);
      return {
        ...state,
        //  abc = state.applyjob.filter((job) => job.value !== payload.job),

        applyjob: [
          ...abc,
          //     ...state.applyjob.filter((job) => job.value !== payload.job)
        ],
      };
    }

    default: {
      return state;
    }
  }
};
