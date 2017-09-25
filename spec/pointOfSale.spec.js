describe("Point Of Sale Test", function () {
    it("Product Found", function () {
        var display = new Display();
        var sale = new Sale(display);
        sale.onBarcode("12345");
        expect(display.getText()).toBe("7.95");
    });
    it("Another Product Found", function () {
        var display = new Display();
        var sale = new Sale(display);
        sale.onBarcode("23456");
        expect(display.getText()).toBe("12.50");
    });
    it("Product not Found", function () {
        var display = new Display();
        var sale = new Sale(display);
        sale.onBarcode("99999");
        expect(display.getText()).toBe("Product not found for 99999");
    });
});
//# sourceMappingURL=pointOfSale.spec.js.map