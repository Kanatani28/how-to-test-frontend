import { mount } from "@vue/test-utils";
import UserRow from "@/components/UserRow.vue";
import { User } from "@/@types";

const testUser: User = {
  id: 1,
  name: "Test Name",
  mail: "test@example.com",
  enable: true,
  isAdmin: false,
};

const disableUser: User = {
  id: 2,
  name: "Test Disable Name",
  mail: "test_disable@example.com",
  enable: false,
  isAdmin: false,
};

const adminUser: User = {
  id: 3,
  name: "Test Admin Name",
  mail: "test_admin@example.com",
  enable: true,
  isAdmin: true,
};

describe("UserRowに有効なユーザーが渡されたとき", () => {
  const wrapper = mount(UserRow, {
    props: {
      user: testUser,
      onDeleteBtnClick: jest.fn(),
    },
  });
  it("渡されたデータが正常に描画されること", () => {
    const tdList = wrapper.findAll("td");

    expect(tdList[0].text()).toBe(testUser.id.toString());
    expect(tdList[1].text()).toBe(testUser.name);
    expect(tdList[2].text()).toBe(testUser.mail);
  });
  it("disabledスタイルが適用されていないこと", () => {
    expect(wrapper.classes()).not.toContain("disabled");
  });
  it("ボタンが非活性でないこと", () => {
    const deleteBtn = wrapper.find("button");
    expect(deleteBtn.attributes()).not.toHaveProperty("disabled");
  });
  it("ボタンクリック時にonDeleteBtnClickがコールされること", () => {
    const deleteBtn = wrapper.find("button");
    deleteBtn.trigger("click");
    expect(wrapper.vm.onDeleteBtnClick).toHaveBeenCalled();
  });
});

describe("UserRowに無効なユーザーが渡されたとき", () => {
  const wrapper = mount(UserRow, {
    props: {
      user: disableUser,
      onDeleteBtnClick: jest.fn(),
    },
  });
  it("disabledスタイルが適用されていること", () => {
    expect(wrapper.classes()).toContain("disabled");
  });
});

describe("UserRowに管理者ユーザーが渡されたとき", () => {
  const wrapper = mount(UserRow, {
    props: {
      user: adminUser,
      onDeleteBtnClick: jest.fn(),
    },
  });
  it("ボタンが非活性であること", () => {
    const deleteBtn = wrapper.find("button");
    expect(deleteBtn.attributes()).toHaveProperty("disabled");
  });

  it("ボタンをクリックしてもonDeleteBtnClickがコールされること", () => {
    const deleteBtn = wrapper.find("button");

    deleteBtn.trigger("click");
    expect(wrapper.vm.onDeleteBtnClick).not.toHaveBeenCalled();
  });
});
