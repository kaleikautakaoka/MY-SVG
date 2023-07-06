// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Circle, Square, Triangle } = require('./lib/Shapes.js');
const questions = require('./lib/question.js');

class SVG {
    constructor(Shape, Text_color, Background_color) {
        this.letter = 'letter';
        this.Shape = 'Shape';
        this.Text_color = 'Color';
        this.Background_color = 'Background';
    }
    render() {
        return `<svg width="100" height="100" xmlns="http://>
        <rect width="100" height="100" style="fill:${this.Background_color};stroke-width:3;stroke:rgb(0,0,0)" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="fill:${this.Text_color};">${this.letter}</text>
        </svg>`
    }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, logo.svg, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
    // Shape.setColor(response.Text_color);
    Shape.render();
    fs.writeFile("logo.svg", Shape.render());
}

let shape;
let shapeChoices = [];

function init(Shape, Circle, Square, Triangle) {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        if (response.shape == 'Circle') {
            shape = new Circle(response.letter, response.Text_color, response.Background_color);
            shapeChoices = response.shape;
        } else if (response.shape == 'Square') {
            shape = new Square(response.letter, response.Text_color, response.Background_color);
            shapeChoices = response.shape;
        } else if (response.shape == 'Triangle') {
            shape = new Triangle(response.letter, response.Text_color, response.Background_color);
            shapeChoices = response.shape;
        }
        
    });
}

init();


