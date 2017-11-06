var Sale = (function () {
    function Sale(display, pricesByBarcode) {
        this.display = display;
        this.pricesByBarcode = pricesByBarcode;
    }
    Sale.prototype.onBarcode = function (barcode) {
        if (barcode === "") {
            this.displayEmptyBarcodeMessage();
            return;
        }
        if (this.pricesByBarcode.has(barcode))
            this.displayPrice(barcode);
        else
            this.displayProductNotFoundMessage(barcode);
    };
    Sale.prototype.displayPrice = function (barcode) {
        this.display.setText(this.pricesByBarcode.get(barcode));
    };
    Sale.prototype.displayProductNotFoundMessage = function (barcode) {
        this.display.setText("Product not found for " + barcode);
    };
    Sale.prototype.displayEmptyBarcodeMessage = function () {
        this.display.setText("Scanning error: empty barcode");
    };
    return Sale;
}());
//# sourceMappingURL=Sale.js.map