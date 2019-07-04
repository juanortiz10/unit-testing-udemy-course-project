import React from "react";

import { getGithubToken } from "../../../../redux/actions/login";
import { GET_OAUTH_GITHUB_TOKEN_START } from "../../../../consts/actionTypes";

describe("Login actions", () => {
  it("Deberia crear una accion para iniciar el proceso de obtener el token", () => {
    const fakePayload = {
      code: "GITHU8_TOKEN"
    };

    const expectedAction = {
      type: GET_OAUTH_GITHUB_TOKEN_START,
      payload: fakePayload
    };

    expect(getGithubToken(fakePayload)).toBeDefined();
    expect(getGithubToken(fakePayload)).toEqual(expectedAction);
  });

  it("Regresa un objeto vacio si el payload es vacio", () => {
    const fakePayload = {};
    const call = getGithubToken(fakePayload);

    expect(call).toBeDefined();
    expect(call.payload).toEqual(fakePayload);
    expect(call.payload).toEqual(new Object());
  });
});
