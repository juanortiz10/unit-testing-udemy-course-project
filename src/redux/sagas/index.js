import { all } from 'redux-saga/effects';

import login from "./login";
import profile from "./profile";

export default function* rootSaga() {
	yield all([ login(), profile() ]);
}
