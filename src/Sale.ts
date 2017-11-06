class Sale {
    private display: Display;
    private pricesByBarcode: Map<string, string>;

    constructor(display: Display, pricesByBarcode: any) {
        this.display = display;
        this.pricesByBarcode = pricesByBarcode;
    }
    onBarcode(barcode: string): void {
        if (barcode === "") {
            this.displayEmptyBarcodeMessage();
            return;
        }
            if (this.pricesByBarcode.has(barcode)) this.displayPrice(barcode);
            else this.displayProductNotFoundMessage(barcode);
    }

    private displayPrice(barcode: string): void {
        this.display.setText(this.pricesByBarcode.get(barcode));
    }

    private displayProductNotFoundMessage(barcode: string): void {
        this.display.setText("Product not found for " + barcode);
    }

    private displayEmptyBarcodeMessage(): void {
        this.display.setText("Scanning error: empty barcode");
    }
}