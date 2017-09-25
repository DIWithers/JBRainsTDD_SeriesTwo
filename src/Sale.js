var Sale = (function () {
    function Sale(display) {
        console.log(display);
        this.display = display;
    }
    Sale.prototype.onBarcode = function (barcode) {
        this.display.setText("7.95");
    };
    return Sale;
}());
//# sourceMappingURL=Sale.js.map