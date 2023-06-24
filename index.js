// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown.js')
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [
   inquirer.createPromptModule([
    {
        name: 'title',
        message: 'What is the title of your ReadMe?'
    },
    
    {
        name: 'description',
        message: 'Please describe your ReadMe?'
    },
    {
        name: 'install',
        message: 'Please explain how to install your application?'
    },
    {
        name: 'usage',
        message: 'What is the usage of your project?'
    },
    {
        name: 'contributers',
        message: 'Who contributed to your project?'
    },
    {
        name: 'test',
        message: 'What forms of testing were done on your project?'
    },
   ])
];
.then(({title, description, install, usage, contributers, test}))
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {} 

// Function call to initialize app
init();
