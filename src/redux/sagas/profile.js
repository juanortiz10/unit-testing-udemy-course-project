import { put, call , takeLatest } from "redux-saga/effects";
import { apiCall } from "../api";

import {
  GET_PROFILE_GITHUB_DATA_START,
  GET_PROFILE_GITHUB_DATA_SUCCESS,
  GET_PROFILE_GITHUB_DATA_ERROR,
  GET_PROFILE_GITHUB_REPOS_START,
  GET_PROFILE_GITHUB_REPOS_ERROR,
  GET_PROFILE_GITHUB_REPOS_SUCCESS
} from "../../consts/actionTypes";

export function* getProfileData({ payload: { githubToken }}) {
  try {
    const githubData = yield call(apiCall, `https://api.github.com/user?access_token=${githubToken}`,null, null, "GET");
    yield put({ type: GET_PROFILE_GITHUB_DATA_SUCCESS, githubData });
  } catch (error) {
    yield put({ type: GET_PROFILE_GITHUB_DATA_ERROR, error });
  }
}

export function* getProfileRepos({ payload: { githubToken, reposURL } }) {
  try {
    const userRepos = yield call(apiCall, reposURL, null, null, "GET");
    yield put({ type: GET_PROFILE_GITHUB_REPOS_SUCCESS, userRepos });
  } catch (error) {
    yield put({ type: GET_PROFILE_GITHUB_REPOS_ERROR, error });
  }
}


export default function* profileWatcher() {
  yield takeLatest(GET_PROFILE_GITHUB_DATA_START, getProfileData);
  yield takeLatest(GET_PROFILE_GITHUB_REPOS_START, getProfileRepos);
}
