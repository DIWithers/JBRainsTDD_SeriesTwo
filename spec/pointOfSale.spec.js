describe("Point Of Sale Test", function () {
    var display;
    var sale;
    beforeEach(function () {
        display = new Display();
        sale = new Sale(display, new Map()
            .set("12345", "7.95")
            .set("23456", "12.50"));
    });
    it("Product Found", function () {
        sale.onBarcode("12345");
        expect(display.getText()).toBe("7.95");
    });
    it("Another Product Found", function () {
        sale.onBarcode("23456");
        expect(display.getText()).toBe("12.50");
    });
    it("Product not Found", function () {
        sale.onBarcode("99999");
        expect(display.getText()).toBe("Product not found for 99999");
    });
    it("Empty Barcode", function () {
        //another form of Refused Bequest - this overrides the setup
        var sale = new Sale(display, null);
        sale.onBarcode("");
        expect(display.getText()).toBe("Scanning error: empty barcode");
    });
});
//# sourceMappingURL=pointOfSale.spec.js.map