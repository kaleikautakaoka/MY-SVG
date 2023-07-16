// TODO: Include packages needed for this application
//Function to writetofile for the svg file
//Init function to initialize the app



const inquirer = require("inquirer");
const fs = require("fs");
const { circle, square, triangle } = require("./lib/Shapes.js");
const questions = require("./lib/question.js");

function writeToFile(selectedShape, fileName) {
  fs.writeFile(fileName, selectedShape.render(), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    let choice = response.shape[0];
    let selectedShape;
    if (choice === "circle") {
      selectedShape = new circle(response.letter, response.backgroundColor);
    } else if (choice === "square") {
      selectedShape = new square(response.letter, response.backgroundColor);
    } else if (choice === "triangle") {
      selectedShape = new triangle(response.letter, response.backgroundColor);
    }
    console.log(selectedShape);
    writeToFile(selectedShape, "logo.svg");
  });
}

init();
