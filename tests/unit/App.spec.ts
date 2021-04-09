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
    enable: true,
  },
  {
    id: 2,
    name: "test2",
    mail: "test2@example.com",
    isAdmin: false,
    enable: true,
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

  it("deleteUserを実行するとenableがfalseになること", () => {
    expect(wrapper.vm.users[0].enable).toBe(true);
    wrapper.vm.deleteUser(1);
    expect(wrapper.vm.users[0].enable).toBe(false);
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
