import { combineReducers } from 'redux';

import login from "./login";
import demoReducer from './demoReducer';

const rootReducer = combineReducers({
	demoReducer,
	login
});

export default rootReducer;
