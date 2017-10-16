class Sale {
    private display: Display;
    constructor(display: Display) {
        this.display = display;
        this.pricesByBarcode = new Map();
        //details in data
        this.pricesByBarcode.set("12345", "7.95");
        this.pricesByBarcode.set("23456", "12.50");
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