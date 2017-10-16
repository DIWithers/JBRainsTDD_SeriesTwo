class Sale {
    private display: Display;
    constructor(display: Display) {
        this.display = display;

    }

    onBarcode(barcode: string): void {
        if (barcode === "") this.display.setText("Scanning error: empty barcode");
        else {
            // introduce lookup table
            let pricesByBarcode: Map = new Map();
            pricesByBarcode.set("12345", "7.95");
            pricesByBarcode.set("23456", "12.50");
            if (barcode === "12345") this.display.setText(pricesByBarcode.get(barcode));
            else if (barcode === "23456") this.display.setText(pricesByBarcode.get(barcode));
            else this.display.setText("Product not found for " + barcode);
        }
    }
}