import Counter from "@/components/Counter.vue";
import { shallowMount } from "@vue/test-utils";
import { beforeEach, expect } from "vitest";
describe("Counter.vue ", () => {
    // it("should to snapshot match", () => {
    //     const wrapper = shallowMount(Counter);
    //     expect(wrapper.html()).toMatchSnapshot();
    // });
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });

    it("h2 Debe de tener el valor por defecto", () => {
        expect(wrapper.find("h2").exists()).toBeTruthy();
        const h = wrapper.find("h2").text();
        expect(h).toBe("Counter2");
    });

    it("El valor por defecto debe ser 100 en p", () => {
        const ptags = wrapper.find("[data-testid='counter'");
        // h[1].html  todo el html
        expect(ptags.text()).toBe("3");
    });

    it("debe de incremente en 1 el valor del contador", async () => {
        const incrementbtn = wrapper.find("button");
        await incrementbtn.trigger("click");
        const ptags = wrapper.find("[data-testid='counter'");
        // h[1].html  todo el html
        expect(ptags.text()).toBe("4");
    });
});
