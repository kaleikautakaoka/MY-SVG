class shape {
    constructor(letter, backgroundColor) {
        this.letter = letter;
        this.backgroundColor = backgroundColor;
    }
    setColor(backgroundColor) {
        this.backgroundColor = backgroundColor;
    }
    render() {
        return `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">${this.letter}${this.shape}
        <rect width="100" height="100" style="fill:${this.backgroundColor};stroke-width:3;stroke:" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="black">${this.letter}</text>
        </svg>
        `;
    }
}

class circle extends shape {
    constructor(letter, backgroundColor) {
        super(letter, backgroundColor);
    }
    render() {
        return `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.backgroundColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="black">${this.letter}</text>
        </svg>
        `;
    }
}
class square extends shape {
    constructor(letter, backgroundColor) {
        super(letter, backgroundColor);
    }
    render() {
        return `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" style="fill:${this.backgroundColor};stroke-width:3;stroke:black" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="black">${this.letter}</text>
        </svg>
        `;
    }
}
class triangle extends shape {
    constructor(letter, backgroundColor) {
        super(letter, backgroundColor);
    }
    render() {
        return `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,0 100,100 0,100" style="fill:${this.backgroundColor};stroke-width:3;stroke: black" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="black">${this.letter}</text>
        </svg>
        `;
    }
}

module.exports = { shape, circle, square, triangle };
