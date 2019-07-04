import {
  GET_PROFILE_GITHUB_DATA_START,
  GET_PROFILE_GITHUB_DATA_SUCCESS,
  GET_PROFILE_GITHUB_DATA_ERROR,
  GET_PROFILE_GITHUB_REPOS_START,
  GET_PROFILE_GITHUB_REPOS_ERROR,
  GET_PROFILE_GITHUB_REPOS_SUCCESS
} from "../../consts/actionTypes";
import get from "lodash/get";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_GITHUB_DATA_START:
       return { ...state, error: null, githubData: null };
     case GET_PROFILE_GITHUB_DATA_SUCCESS:
       return { ...state, githubData: get(action, "githubData.data") };
     case GET_PROFILE_GITHUB_DATA_ERROR:
       return { ...state, error: true };
       break;
     case GET_PROFILE_GITHUB_REPOS_START:
        return { ...state, error: null };
        break;
     case GET_PROFILE_GITHUB_REPOS_SUCCESS:
        return { ...state, userRepos: get(action, "userRepos.data", []) };
        break;
     case GET_PROFILE_GITHUB_REPOS_ERROR:
        return { ...state, error: true };
        break;
     default:
       return {...state };
  }
}
