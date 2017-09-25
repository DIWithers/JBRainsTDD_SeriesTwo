class Display {
    private text: string;

    getText(): string {
        return this.text;
    }

    setText(text: string): void {
        this.text = text;
    }
}