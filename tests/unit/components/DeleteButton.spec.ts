import { mount } from "@vue/test-utils";
import DeleteButton from "@/components/DeleteButton.vue";

const adminData = {
  isAdmin: true,
  onClick: jest.fn(),
  targetId: 1,
};
const userData = {
  isAdmin: false,
  onClick: jest.fn(),
  targetId: 1,
};

describe("DeleteButton: 管理者でのテスト", () => {
  const wrapper = mount(DeleteButton, {
    props: { ...adminData },
  });
  it("propsでisAdmin: trueを受け取った場合、disabled属性が付与される", () => {
    expect(wrapper.attributes()).toHaveProperty("disabled");
  });
  it("disabled属性がある場合はクリック時にonClickが発火されないこと", () => {
    wrapper.trigger("click");
    expect(adminData.onClick).not.toHaveBeenCalled();
  });
});

describe("DeleteButton: 一般ユーザーでのテスト", () => {
  const wrapper = mount(DeleteButton, {
    props: { ...userData },
  });
  it("propsでisAdmin: falseを受け取った場合、disabled属性が付与されないこと", () => {
    expect(wrapper.attributes()).not.toHaveProperty("disabled");
  });
  it("disabled属性がない場合はクリック時にonClickが発火されること", () => {
    wrapper.trigger("click");
    expect(userData.onClick).toHaveBeenCalled();
  });
});
