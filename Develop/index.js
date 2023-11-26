// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [{
    type: 'input', 
    name: 'UserName',
    message: 'What is your Github username?',
},
    {
    type: 'input', 
    name: 'Email',
    message: 'What is your email?', 
    }, 
    {
     type: 'input', 
    name: 'Title',
    message: 'What is the title of your project?', 
    },
    {
    type: 'input', 
    name: 'Description',
    message: 'Give a description of your project.', 
    },
    {
    type: 'input', 
    name: 'Installation',
    message: 'List instructions for installation.',
    },
    {
    type: 'input', 
    name: 'Usage',
    message: 'List any languages or technologies that have been used for this project.',
    },
    {
    type: 'checkbox', 
    name: 'License',
    message: 'Choose a license from the list of options.',
    choices: ["MIT", "APACHE2.0",]
    },
    {
    type: 'input', 
    name: 'Contributing',
    message:'List contributers here. ',
    },
    {
    type: 'input', 
    name: 'Test',
    message: 'Give a list of test that were done here if any.',
    },
]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("running ReadMe..");
        const markdown = generateMarkdown(inquirerResponses)
        writeToFile("README.md", markdown)
    })
}

// Function call to initialize app
init();
