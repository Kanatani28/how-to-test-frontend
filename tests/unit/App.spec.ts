import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  const wrapper = mount(App);
  it("初期描画ではcountが0であること", () => {
    expect(wrapper.vm.count).toBe(0);
  });

  it("クリック時にcountがインクリメントされること", () => {
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
