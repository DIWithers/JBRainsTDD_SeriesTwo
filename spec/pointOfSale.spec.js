describe("Point Of Sale Test", function () {
    it("Product Found", function () {
        var display = new Display();
        var sale = new Sale();
        sale.onBarcode("12345");
        expect(display.getText()).toBe("7.95");
    });
});
//# sourceMappingURL=pointOfSale.spec.js.map