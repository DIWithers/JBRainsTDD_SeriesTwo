class Sale {
    private display: Display;
    private pricesByBarcode: Map<any, any>;

    constructor(display: Display, pricesByBarcode: any) {
        this.display = display;
        //details in data
        this.pricesByBarcode = pricesByBarcode
    }
    onBarcode(barcode: string): void {
        //abstraction in code
        if (barcode === "") this.display.setText("Scanning error: empty barcode");
        else {
            if (this.pricesByBarcode.has(barcode)) this.display.setText(this.pricesByBarcode.get(barcode));
            else this.display.setText("Product not found for " + barcode);
        }
    }
}