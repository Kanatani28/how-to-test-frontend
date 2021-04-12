import { mount } from "@vue/test-utils";
import DeleteButton from "@/components/DeleteButton.vue";

const disableData = {
  isAdmin: true,
  onClick: jest.fn(),
  targetId: 1,
};
const enableData = {
  isAdmin: false,
  onClick: jest.fn(),
  targetId: 1,
};

describe("DeleteButton: disableDataでのテスト", () => {
  const wrapper = mount(DeleteButton, {
    props: { ...disableData },
  });
  it("propsでdisabled: trueを受け取った場合、disabled属性が付与される", () => {
    expect(wrapper.attributes()).toHaveProperty("disabled");
  });
  it("disabled属性がある場合はクリック時にonClickが発火されないこと", () => {
    wrapper.trigger("click");
    expect(disableData.onClick).not.toHaveBeenCalled();
  });
});

describe("DeleteButton: enableDataでのテスト", () => {
  const wrapper = mount(DeleteButton, {
    props: { ...enableData },
  });
  it("propsでdisabled: falseを受け取った場合、disabled属性が付与される", () => {
    expect(wrapper.attributes()).not.toHaveProperty("disabled");
  });
  it("disabled属性がない場合はクリック時にonClickが発火されること", () => {
    wrapper.trigger("click");
    expect(enableData.onClick).toHaveBeenCalled();
  });
});
