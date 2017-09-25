class Sale {
    private display: Display;
    constructor(display: Display) {
        console.log(display);
        this.display = display;

    }

    onBarcode(barcode: string): void {
        this.display.setText("7.95");
    }
}