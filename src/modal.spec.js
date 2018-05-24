import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { ModalRender } from "./modal.js";

it("tests click handler", () => {
  const body = <div>test</div>;
  const footer = <div>footer</div>;
  const wrapper = mount(
    <ModalRender
      open={true}
      toggle={() => "test"}
      body={body}
      footer={footer}
    />
  );
  expect(wrapper.find(".modal-footer").prop("children")).toBe(footer);
  expect(wrapper.find(".modal-body").prop("children")).toBe(body);
});
