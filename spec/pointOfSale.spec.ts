describe("Point Of Sale Test", () => {
    let display: Display;
    let sale: Sale;
    beforeEach(() => {
        display = new Display();
        sale = new Sale(display, new Map()
            .set("12345", "7.95")
            .set("23456", "12.50"));
    });
    it("Product Found", () => {
        sale.onBarcode("12345");
        expect(display.getText()).toBe("7.95");
    });
    it ("Another Product Found", () => {
        sale.onBarcode("23456");
        expect(display.getText()).toBe("12.50");
    });
    it("Product not Found", () => {
        sale.onBarcode("99999");
        expect(display.getText()).toBe("Product not found for 99999");
    });
    it("Empty Barcode", () => {
        //another form of Refused Bequest - this overrides the setup
        let sale: Sale = new Sale(display, null);
        sale.onBarcode("");
        expect(display.getText()).toBe("Scanning error: empty barcode");
    });
})
 //part 4!!!!!