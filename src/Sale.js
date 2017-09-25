var Sale = (function () {
    function Sale(display) {
        this.display = display;
    }
    Sale.prototype.onBarcode = function (barcode) {
        if (barcode === "12345")
            this.display.setText("7.95");
        else if (barcode === "23456")
            this.display.setText("12.50");
        else if (barcode === "99999")
            this.display.setText("Product not found for 99999");
    };
    return Sale;
}());
//# sourceMappingURL=Sale.js.map