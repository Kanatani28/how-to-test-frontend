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

describe("UserRow.vue", () => {
  it("有効なユーザーのテスト", () => {
    const wrapper = mount(UserRow, {
      props: {
        user: testUser,
        onDeleteBtnClick: jest.fn(),
      },
    });

    const tdList = wrapper.findAll("td");

    expect(tdList[0].text()).toBe(testUser.id.toString());
    expect(tdList[1].text()).toBe(testUser.name);
    expect(tdList[2].text()).toBe(testUser.mail);

    const deleteBtn = wrapper.find("button");
    expect(deleteBtn.attributes()).not.toHaveProperty("disabled");

    expect(wrapper.classes()).not.toContain("disabled");

    deleteBtn.trigger("click");
    expect(wrapper.vm.onDeleteBtnClick).toHaveBeenCalled();
  });

  it("管理者ユーザーのテスト", () => {
    const wrapper = mount(UserRow, {
      props: {
        user: adminUser,
        onDeleteBtnClick: jest.fn(),
      },
    });

    const deleteBtn = wrapper.find("button");
    expect(deleteBtn.attributes()).toHaveProperty("disabled");

    deleteBtn.trigger("click");
    expect(wrapper.vm.onDeleteBtnClick).not.toHaveBeenCalled();
  });

  it("無効なユーザーにはスタイルが適用されること", () => {
    const wrapper = mount(UserRow, {
      props: {
        user: disableUser,
        onDeleteBtnClick: jest.fn(),
      },
    });

    expect(wrapper.classes()).toContain("disabled");
  });
});
