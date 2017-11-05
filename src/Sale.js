var Sale = (function () {
    function Sale(display, pricesByBarcode) {
        this.display = display;
        //details in data
        this.pricesByBarcode = pricesByBarcode;
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