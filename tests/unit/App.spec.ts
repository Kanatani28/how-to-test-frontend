import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import UserRow from "@/components/UserRow.vue";
import { User } from "@/@types";
import * as showUsers from "@/usecase/show-users";

const testData: User[] = [
  {
    id: 1,
    name: "test",
    mail: "test@example.com",
    isAdmin: false,
    isDeleted: true,
  },
  {
    id: 2,
    name: "test2",
    mail: "test2@example.com",
    isAdmin: false,
    isDeleted: true,
  },
];

describe("App.vue", () => {
  const wrapper = mount(App, {
    shallow: true,
    data() {
      return {
        users: testData,
      };
    },
  });

  it("deleteUserを実行すると削除フラグが立つこと", () => {
    expect(wrapper.vm.users[0].isDeleted).toBe(false);
    wrapper.vm.deleteUser(1);
    expect(wrapper.vm.users[0].isDeleted).toBe(true);
  });

  it("usersの数だけUserRowがあること", () => {
    expect(wrapper.findAllComponents(UserRow).length).toBe(2);
  });
});

describe("App.vue、マウント時の挙動の確認", () => {
  it("マウント時にgetUsersをコールすること", async () => {
    const spy = jest.spyOn(showUsers, "getUsers");
    const wrapper = mount(App);
    await wrapper.vm.$nextTick();
    expect(spy).toHaveBeenCalled();
  });
});
