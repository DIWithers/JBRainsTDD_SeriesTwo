var Sale = (function () {
    function Sale(display) {
        this.display = display;
    }
    Sale.prototype.onBarcode = function (barcode) {
        if (barcode === "")
            this.display.setText("Scanning error: empty barcode");
        else {
            // introduce lookup table
            var pricesByBarcode = new Map();
            pricesByBarcode.set("12345", "7.95");
            pricesByBarcode.set("23456", "12.50");
            if (pricesByBarcode.has(barcode))
                this.display.setText(pricesByBarcode.get(barcode));
            else
                this.display.setText("Product not found for " + barcode);
        }
    };
    return Sale;
}());
//# sourceMappingURL=Sale.js.map