class Sale {
    private display: Display;
    private pricesByBarcode: Map<any, any>;

    constructor(display: Display, pricesByBarcode: any) {
        this.display = display;
        this.pricesByBarcode = pricesByBarcode
    }
    onBarcode(barcode: string): void {
        if (barcode === "") {
            this.display.setText("Scanning error: empty barcode");
            return;
        }
            if (this.pricesByBarcode.has(barcode)) this.display.setText(this.pricesByBarcode.get(barcode));
            else this.display.setText("Product not found for " + barcode);
    }
}