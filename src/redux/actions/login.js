import { GET_OAUTH_GITHUB_TOKEN_START } from "../../consts/actionTypes";

export const getGithubToken = payload => ({
  type: GET_OAUTH_GITHUB_TOKEN_START,
  payload
});
