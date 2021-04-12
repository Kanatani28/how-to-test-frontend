import { shallowMount } from "@vue/test-utils";
import UserRow from "@/components/UserRow.vue";
import { User } from "@/@types";

const testUser: User = {
  id: 1,
  name: "Test Name",
  mail: "test@example.com",
  isDeleted: false,
  isAdmin: false,
};

const deletedUser: User = {
  id: 2,
  name: "Test Disable Name",
  mail: "test_disable@example.com",
  isDeleted: true,
  isAdmin: false,
};

describe("UserRowに有効なユーザーが渡されたとき", () => {
  const wrapper = shallowMount(UserRow, {
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
});

describe("UserRowに無効なユーザーが渡されたとき", () => {
  const wrapper = shallowMount(UserRow, {
    props: {
      user: deletedUser,
      onDeleteBtnClick: jest.fn(),
    },
  });
  it("disabledスタイルが適用されていること", () => {
    expect(wrapper.classes()).toContain("disabled");
  });
});
