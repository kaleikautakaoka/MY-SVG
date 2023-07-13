// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Circle, Square, Triangle } = require('./lib/Shapes.js');
const questions = require('./lib/question.js');

class SVG {
    constructor(textColor, backgroundColor, letter) {
        this.letter = letter;
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
    }
    render() {
        return `<svg width="100" height="100" xmlns="http://>
        <rect width="100" height="100" style="fill:${this.backgroundColor};stroke-width:3;stroke:rgb(0,0,0)" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="fill:${this.textColor};">${this.letter}</text>
        </svg>`
    }
}

function writeToFile(shape, fileName) {
    fs.writeFile(fileName, logo.svg, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
    // Shape.setColor(response.Text_color);
    shape.render();
    fs.writeFile("logo.svg", shape.render());
}

let shape;
let shapeChoices = [];

function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        
        //if property: shape on the object: response, which is [ "string"] is equals to the string literal "circle"
            //then do some work
        if (response.shape.any(a => a === 'Circle')) {
            shape = new Circle(response.letter, response.Text_color, response.Background_color);
            shapeChoices = response.shape;
        } else if (response.shape == 'Square') {
            shape = new Square(response.letter, response.Text_color, response.Background_color);
            shapeChoices = response.shape;
        } else if (response.shape == 'Triangle') {
            shape = new Triangle(response.letter, response.Text_color, response.Background_color);
            shape.render();
        }
        
    });
}

init();


