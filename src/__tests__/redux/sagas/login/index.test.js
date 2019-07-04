import React from "react";
import sinon from "sinon";

import { apiCall } from "../../../../redux/api";
import { recordSaga } from "../../../../redux/utils";
import { getGithubToken as getGithubTokenSaga } from "../../../../redux/sagas/login";
import {
  GET_OAUTH_GITHUB_TOKEN_START,
  GET_OAUTH_GITHUB_TOKEN_SUCCESS,
  GET_OAUTH_GITHUB_TOKEN_ERROR
} from "../../../../consts/actionTypes";

jest.mock("../../../../redux/api", () => {
  return {
    apiCall: jest.fn(() => ({
      githubToken: "GITHUB_TOKEN"
    }))
  };
});

describe("Login saga", () => {
  it("Regresa un token valido", async () => {
    const initialAction = {
      type: GET_OAUTH_GITHUB_TOKEN_START,
      payload: { code: "123456GITH8UB" }
    };

    //sinon.stub(api, "apiCall").callsFake(() => fakeResponse);
    const dispatched = await recordSaga(getGithubTokenSaga, initialAction);

    expect(dispatched[0]).toBeDefined();
    expect(dispatched).toHaveLength(1);
    expect(dispatched[0].type).toBe(GET_OAUTH_GITHUB_TOKEN_SUCCESS);

    expect(apiCall.mock.calls.length).toEqual(1);
    expect(apiCall.mock.calls[0][0]).toEqual(
      "https://reactjsteachingproj.herokuapp.com/users/github"
    );
    expect(apiCall.mock.calls[0][2]).toEqual(null);
    expect(apiCall.mock.calls[0][3]).toEqual("POST");
  });
});
