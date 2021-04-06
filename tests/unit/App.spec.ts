import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import { User } from "@/@types";
const testData: User[] = [
  {
    id: 1,
    name: "test",
    mail: "test@example.com",
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
});
