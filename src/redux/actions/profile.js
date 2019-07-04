import { GET_PROFILE_GITHUB_DATA_START, GET_PROFILE_GITHUB_REPOS_START} from "../../consts/actionTypes";

export const getProfileData = payload => ({
  type: GET_PROFILE_GITHUB_DATA_START,
  payload
});

export const getProfileRepos = payload => ({
  type: GET_PROFILE_GITHUB_REPOS_START,
  payload
});
