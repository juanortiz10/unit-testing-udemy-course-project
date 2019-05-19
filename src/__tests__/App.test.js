import React from "react";
import { mount } from "enzyme";

import App  from "../App";

// describe
// it
// beforeAll

describe("<App>", () => {
  let wrapper;

  beforeAll(() => {
    const props = {
      store: {
        getState: jest.fn(),
        subscribe: jest.fn(),
        dispatch: jest.fn()
      }
    }
    wrapper = mount(<App {...props}/>);
  })

  it("Renderea correctamente", () => {
    expect(wrapper).toBeDefined();
  })
})
