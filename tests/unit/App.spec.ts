import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("初期描画ではcountが0であること", () => {
    const wrapper = mount(App);

    expect(wrapper.vm.count).toBe(0);
  });

  it("クリック時にcountがインクリメントされること", () => {
    const wrapper = mount(App);

    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
