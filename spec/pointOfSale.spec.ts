describe("Point Of Sale Test", () => {
    it("Product Found", () => {
        let display: Display = new Display();
        let sale: Sale = new Sale(display);
        sale.onBarcode("12345");
        expect(display.getText()).toBe("7.95");
    });
    it ("Another Product Found", () => {
        let display: Display = new Display();
        let sale: Sale = new Sale(display);
        sale.onBarcode("23456");
        expect(display.getText()).toBe("12.50");
    });
})
