var Sale = (function () {
    function Sale(display) {
        this.display = display;
        this.pricesByBarcode = new Map();
        //details in data
        this.pricesByBarcode.set("12345", "7.95");
        this.pricesByBarcode.set("23456", "12.50");
    }
    Sale.prototype.onBarcode = function (barcode) {
        //abstraction in code
        if (barcode === "")
            this.display.setText("Scanning error: empty barcode");
        else {
            if (this.pricesByBarcode.has(barcode))
                this.display.setText(this.pricesByBarcode.get(barcode));
            else
                this.display.setText("Product not found for " + barcode);
        }
    };
    return Sale;
}());
//# sourceMappingURL=Sale.js.map