const { circle, square, triangle } = require('../lib/Shapes.js');

describe('triangle', () => {
    test('creates a triangle object', () => {
        const myNewColor = 'red';
        const expectations = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`;
        const newShape = new triangle([myNewColor]);
        expect(newShape.render()).toEqual(expectations);
    })
});

describe('circle', () => {
    test('creates a circle object', () => {
        const myNewColor = 'red';
        const expectations = `<circle cx="150" cy="150" r="80" fill="red" />`;
        const newShape = new circle([myNewColor]);
        expect(newShape.render()).toEqual(expectations);
    })
}
);

describe('square', () => {
    test('creates a square object', () => {
        const myNewColor = 'red';
        const expectations = `<rect x="50" y="50" width="200" height="200" fill="red" />`;
        const newShape = new square([myNewColor]);
        expect(newShape.render()).toEqual(expectations);
    })
}
);





  






