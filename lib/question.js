//Created an array of questions for user input
//Type, name, and message or choices
//Validate function to check if the user input is valid
//Module.exports to export the questions array
const questions = [
    {
        type: 'input',
        name: 'letter',
        message: 'Please enter up to 3 characters for your SVG file',
        validate: function (answer) {
            if (answer.length > 3) {
                return 'Please enter 3 characters or less';
            }
            return true;
        }
    },
    {
        type: 'checkbox',
        name: 'shape',
        choices: ['circle', 'square', 'triangle'],
        validate: function (answer) {
            if (answer.length !== 1) {
                return 'Please select a Shape';
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'backgroundColor',
        message: 'Please enter a color for your shape',
    }
];
module.exports = questions;