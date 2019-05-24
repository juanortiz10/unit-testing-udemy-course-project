import { GET_OAUTH_GITHUB_TOKEN_START, GET_OAUTH_GITHUB_TOKEN_SUCCESS, GET_OAUTH_GITHUB_TOKEN_ERROR} from "../../consts/actionTypes";
import { GITHUB_TOKEN } from "../../consts";
import { saveData } from "../../utils/storage";

import get from "lodash/get";


const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OAUTH_GITHUB_TOKEN_START:
      return { ...state};
      break;
    case GET_OAUTH_GITHUB_TOKEN_SUCCESS:
      const githubToken = get(action, "loginResponse.data.githubToken");
      saveData(GITHUB_TOKEN, githubToken);
      return { ...state, githubToken }
      break;
    case GET_OAUTH_GITHUB_TOKEN_ERROR:
      return { ...state, error: true };
     break;
    default:
      return {...state};
  }
}
