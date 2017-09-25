describe("Point Of Sale Test", function () {
    it("Product Found", function () {
        var display = new Display();
        var sale = new Sale(display);
        sale.onBarcode("12345");
        expect(display.getText()).toBe("7.95");
    });
    xit("Another Product Found", function () {
        var display = new Display();
        var sale = new Sale(display);
        sale.onBarcode("23456");
        expect(display.getText()).toBe("12.50");
    });
});
//# sourceMappingURL=pointOfSale.spec.js.map