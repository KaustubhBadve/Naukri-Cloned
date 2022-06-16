import {
	LOGIN_FAILURE,
	LOGIN_LOADING,
	LOGIN_SUCCESS,
	LOGOUT,
} from "./actionTypesLogin";

const initState = {
	loading: false,
	error: false,
	isAuth: false,
	token: "",
};

const authReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case LOGIN_LOADING: {
			return { ...state, loading: true, error: false };
		}
		case LOGIN_SUCCESS: {
            alert("Login successful!")
			return {
				...state,
				loading: false,
				error: false,
				isAuth: true,
				token: payload.token,
			};
            
		}
		case LOGIN_FAILURE: {
            alert("Login failed. Kindly check email or password!")
			return { ...state, error: true, loading: false, isAuth: false };
		}
		case LOGOUT: {
			return { ...state, isAuth: false };
		}
		default:
			return state;
	}
};

export default authReducer;
