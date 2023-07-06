class shape {
    constructor(letter, fill, Background_color) {
        this.letter = letter;
        this.fill = fill;
        this.Background_color = Background_color;
    }
    setColor(fill) {
        this.fill = fill;
    }
    render() {
        return `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" style="fill:${this.Background_color};stroke-width:3;stroke:${this.fill}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${this.fill}">${this.letter}</text>
        </svg>
        `;
    }
}
class Circle extends shape {
    constructor(letter, fill, Background_color) {
        super(letter, fill, Background_color);
    }
    render() {
        return `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.Background_color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${this.fill}">${this.letter}</text>
        </svg>
        `;
    }
}
class Square extends shape {
    constructor(letter, fill, Background_color) {
        super(letter, fill, Background_color);
    }
    render() {
        return `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" style="fill:${this.Background_color};stroke-width:3;stroke:${this.fill}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${this.fill}">${this.letter}</text>
        </svg>
        `;
    }
}
class Triangle extends shape {
    constructor(letter, fill, Background_color) {
        super(letter, fill, Background_color);
    }
    render() {
        return `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,0 100,100 0,100" style="fill:${this.Background_color};stroke-width:3;stroke:${this.fill}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${this.fill}">${this.letter}</text>
        </svg>
        `;
    }
}
module.exports = { shape, Circle, Square, Triangle };
