describe("Point Of Sale Test", () => {
    it("Product Found", () => {
        let display: Display = new Display();
        let sale: Sale = new Sale();
        sale.onBarcode("12345");
        expect(display.getText()).toBe("7.95");
    })
})