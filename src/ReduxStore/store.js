import {
	legacy_createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from "redux";
import thunk from "redux-thunk";
import { jobRecomandationReducer } from "./Jobs/job.reducer";
import authReducer from "../Components/RegisterAndLogin/storeLogin/reducerLogin";
import regReducer from "../Components/RegisterAndLogin/storeRegister/reducerRegister";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	job: jobRecomandationReducer,
	login: authReducer,
	register: regReducer,
});
export const store = legacy_createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
