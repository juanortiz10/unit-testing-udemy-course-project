import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";

import { Home } from "../../pages/Home";
import { GITHUB_TOKEN } from "../../consts";

describe("<Home/>", () => {
  let wrapper;
  const props = {
    classes: {},
    getProfileData: sinon.spy(),
    getProfileRepos: sinon.spy(),
    githubData: {}
  };

  const localStorage = {
    getItem: sinon.spy(),
    setItem: sinon.spy(),
    clear: sinon.spy()
  };

  global.localStorage = localStorage;
  global.location.reload = sinon.spy();

  beforeEach(() => {
    wrapper = mount(<Home {...props} />);
  });

  it("Renderea correctamente", () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.instance()).toBeDefined();
    expect(wrapper).toBeTruthy();
  });

  it("Renderea las props correctamente", () => {
    expect(wrapper.props()).toBeDefined();
    expect(wrapper.props().getProfileData).toBeDefined();
    expect(wrapper.props().getProfileRepos).toBeDefined();
    expect(wrapper.props().classes).toEqual({});
  });

  it("Llama a localStorage y a getProfileData en componentDidMount", () => {
    expect(wrapper.state().githubToken).toBeUndefined();

    expect(localStorage.getItem.getCall(0)).toBeDefined();
    expect(localStorage.getItem.getCall(0).lastArg).toEqual(GITHUB_TOKEN);

    expect(wrapper.props().getProfileData.getCall(0)).toBeTruthy();
    expect(wrapper.props().getProfileData.getCall).toHaveLength(1);
    expect(wrapper.props().getProfileData.getCall(0).lastArg).toEqual({});
  });

  it("Llama a getProfileRepos si la url de los repositorios existe", () => {
    expect(wrapper.instance().props.getProfileRepos.getCall(0)).toBeFalsy();
    wrapper.setProps({ githubData: { repos_url: "something.com.mx" } });
    expect(wrapper.instance().props.getProfileRepos.getCall(0)).toBeDefined();
    expect(
      wrapper.instance().props.getProfileRepos.getCall(0).lastArg
    ).toBeDefined();
  });

  it("Limpia el storage y hace refresh de la pagina", () => {
    expect(location.reload.getCall(0)).toBeFalsy();
    expect(localStorage.clear.getCall(0)).toBeFalsy();

    wrapper.instance().handleLogoutClick();

    expect(localStorage.clear.getCall(0)).toBeTruthy();
    expect(localStorage.clear.getCall(0).lastArg).toBeUndefined();

    expect(location.reload.getCall(0)).toBeTruthy();
    expect(location.reload.getCall(0).lastArg).toBeUndefined();
  });
});
