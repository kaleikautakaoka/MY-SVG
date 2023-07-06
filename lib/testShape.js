const { describe } = require('yargs');
const { Shape, Circle, Square, Triangle } = require('./Shapes.js');
const { test } = require('node:test');

describe('Triangle', () => {
    test('should return a new triangle object', () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
    });

describe('Square', () => {
    test('should return a new square object', () => {
const shape = new Square();
shape.setColor("red");
expect(shape.render()).toEqual('<rect width="200" height="200" style="fill:red;stroke-width:3;stroke:rgb(0,0,0)" />');
    })
    });

describe('circle', () => {
    test('should return a new circle object', () => {
const shape = new Circle();
shape.setColor("green");
expect(shape.render()).toEqual('<circle cx="100" cy="100" r="80" stroke="black" stroke-width="3" fill="green" />');
})
    });

