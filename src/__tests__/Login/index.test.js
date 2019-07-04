import React from "react";
import { shallow } from "enzyme";
import Card from "@material-ui/core/Card";
import TestRenderer from "react-test-renderer";

import { Login } from "../../pages/Login";

let wrapper;

describe("<Login/>", () => {
  beforeEach(() => {
    const props = {
      classes: {},
      getGithubToken: jest.fn()
    };

    wrapper = shallow(<Login {...props} />);
  });

  it("Renderea sin error", () => {
    expect(wrapper).toBeDefined();
  });

  it("Renderea un Card", () => {
    expect(wrapper.find(Card)).toHaveLength(1);
  });

  it("Renderea correctamente las props", () => {
    expect(wrapper.instance().props.classes).toBeDefined();
    expect(wrapper.instance().props.classes).toEqual({});
    expect(wrapper.instance().props.getGithubToken).toBeDefined();
  });

  it("onSuccess test con response valido", () => {
    const response = { code: 12345 };

    wrapper.instance().onSuccess(response);
    expect(wrapper.instance().props.getGithubToken).toHaveBeenCalled();
  });

  it("onSuccess test con response invalido", () => {
    wrapper.instance().onSuccess();
    expect(wrapper.instance().props.getGithubToken).toHaveBeenCalledTimes(0);
  });

  it("Muestra una alerta, si la respuesta de github es erronea", () => {
    window.alert = jest.fn();
    wrapper.instance().onFailure({ error: "Hey" });
    expect(alert).toHaveBeenCalled();
    expect(alert).toHaveBeenCalledTimes(1);
  });

  it("El snapshot es correcto", () => {
    const props = {
      classes: {
        container: "container"
      },
      getGithubToken: jest.fn()
    };

    const tree = TestRenderer.create(<Login {...props} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
