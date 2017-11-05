var Sale = (function () {
    function Sale(display, pricesByBarcode) {
        this.display = display;
        this.pricesByBarcode = pricesByBarcode;
    }
    Sale.prototype.onBarcode = function (barcode) {
        if (barcode === "") {
            this.display.setText("Scanning error: empty barcode");
            return;
        }
        if (this.pricesByBarcode.has(barcode))
            this.display.setText(this.pricesByBarcode.get(barcode));
        else
            this.display.setText("Product not found for " + barcode);
    };
    return Sale;
}());
//# sourceMappingURL=Sale.js.map