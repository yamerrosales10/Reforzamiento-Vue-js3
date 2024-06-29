import { describe, it, expect } from "vitest";
describe("Name of the group", () => {
    it("Debe ser mayor a 10", () => {
        // Arreglar
        let value = 5;

        // Estimulo
        value += 10;
        // Observar el resultado

        expect(value).toBeGreaterThan(10);
    });
});
