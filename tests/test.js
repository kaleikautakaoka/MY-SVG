const { circle, square, triangle } = require('../lib/Shapes.js');

test('circle constructor', () => {
    const c = new circle('A', 'red');
    expect(c.letter).toBe('A');
    expect(c.backgroundColor).toBe('red');
}
);

test('square constructor', () => {
    const s = new square('B', 'blue');
    expect(s.letter).toBe('B');
    expect(s.backgroundColor).toBe('blue');
}
);

test('triangle constructor', () => {
    const t = new triangle('C', 'green');
    expect(t.letter).toBe('C');
    expect(t.backgroundColor).toBe('green');
}
);







  






