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
    it("Product not Found", () => {
        let display: Display = new Display();
        let sale: Sale = new Sale(display);
        sale.onBarcode("99999");
        expect(display.getText()).toBe("Product not found for 99999");
    });
    it("Empty Barcode", () => {
        let display: Display = new Display();
        let sale: Sale = new Sale(display);
        sale.onBarcode("");
        expect(display.getText()).toBe("Scanning error: empty barcode");
    });
})
