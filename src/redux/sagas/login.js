import { put, call, takeLatest } from "redux-saga/effects";

import { GET_OAUTH_GITHUB_TOKEN_START, GET_OAUTH_GITHUB_TOKEN_SUCCESS, GET_OAUTH_GITHUB_TOKEN_ERROR} from "../../consts/actionTypes";
import { apiCall } from "../api"


export function* getGithubToken({ payload }) {
  try {
    const body = {
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.REACT_APP_GITHUB_SECRET_ID,
      code: payload.code
    }


    const loginResponse = yield call(apiCall, "https://reactjsteachingproj.herokuapp.com/users/github", body, null, "POST");
    yield put({ type: GET_OAUTH_GITHUB_TOKEN_SUCCESS, loginResponse });
  } catch (error) {
    yield put({ type: GET_OAUTH_GITHUB_TOKEN_ERROR, error });
  }
}

export default function* login() {
  yield takeLatest(GET_OAUTH_GITHUB_TOKEN_START, getGithubToken);
}
