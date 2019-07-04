import React from "react";
import { render } from "enzyme";

import { LeftContainer } from "../../../../pages/Home/components/LeftContainer";

describe("<LeftContainer/>", () => {
  const props = {
    classes: "",
    avatar_url: "something.com",
    bio: "something",
    blog: "some blog",
    email: "myemail.com",
    name: "my name",
    onLogout: jest.fn()
  };

  const wrapper = render(<LeftContainer {...props} />);

  it("Renderea correctamente", () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toBeDefined();
  });

  it("Renderea el tree correctamente con props iniciales", () => {
    expect(wrapper.find("p")).toBeDefined();
    expect(wrapper.find("p")).toHaveLength(3);

    expect(wrapper.find("img")).toBeDefined();
    expect(wrapper.find("img")).toHaveLength(1);

    expect(wrapper.find("button")).toBeDefined();
    expect(wrapper.find("button")).toHaveLength(1);

    expect(wrapper.find("span")).toBeDefined();
    expect(wrapper.find("span")).toHaveLength(2);
  });

  it("Renderea la imagen correctamente", () => {
    const img = wrapper.find("img")[0];

    expect(img.attribs.alt).toBeDefined();
    expect(img.attribs.alt).toEqual(props.email);

    expect(img.attribs.src).toBeDefined();
    expect(img.attribs.src).toEqual(props.avatar_url);
  });

  it("Renderea el nombre correcto", () => {
    const name = wrapper.find("p")[0];

    expect(name.children[0].data).toBeDefined();
    expect(name.children[0].data).toEqual(props.name);
    expect(name.children[1]).toBeUndefined();
  });
});
