import React from "react";

import loginReducer from "../../../../redux/reducers/login";
import {
  GET_OAUTH_GITHUB_TOKEN_START,
  GET_OAUTH_GITHUB_TOKEN_SUCCESS,
  GET_OAUTH_GITHUB_TOKEN_ERROR
} from "../../../../consts/actionTypes";

describe("Login reducer", () => {
  const initialState = {};
  const localStorageMock = {
    setItem: jest.fn()
  };

  global.localStorage = localStorageMock;

  it("Regresa el initialState si el action es undefined", () => {
    expect(loginReducer(undefined, {})).toBeDefined();
    expect(loginReducer(undefined, {})).toEqual({});
    expect(loginReducer(undefined, {})).toEqual(new Object());
  });

  it("Regresa el githubToken", () => {
    const action = {
      type: GET_OAUTH_GITHUB_TOKEN_SUCCESS,
      loginResponse: { data: { githubToken: "GITHU8_T0K3N" } }
    };

    const loginReducerCall = loginReducer(initialState, action);

    expect(loginReducerCall).toBeDefined();
    expect(loginReducerCall.githubToken).toBeDefined();
    expect(loginReducerCall.githubToken).toEqual("GITHU8_T0K3N");
    expect(localStorage.setItem.mock.calls.length).toEqual(1);
  });

  it("Regresa correctamente un error", () => {
    const action = { type: GET_OAUTH_GITHUB_TOKEN_ERROR, error: true };
    const loginReducerCall = loginReducer(initialState, action);

    expect(loginReducerCall).toBeDefined();
    expect(loginReducerCall.error).toBeDefined();
  });
});
