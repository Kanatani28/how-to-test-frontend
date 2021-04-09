import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  const wrapper = mount(App);
  it("初期描画ではcountが0であること", () => {
    expect(wrapper.vm.count).toBe(0);
  });

  it("increment実行時にcountが+1されること", () => {
    wrapper.vm.increment();
    expect(wrapper.vm.count).toBe(1);
  });

  it("クリック時にincrementがコールされること", () => {
    const spy = jest.spyOn(wrapper.vm, "increment");

    const button = wrapper.find("button");
    button.trigger("click");

    expect(spy).toHaveBeenCalled();
  });
});
