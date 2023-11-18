// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [{
    type: 'input', 
    name: 'userName',
    message: 'What is your user name?',
},
    {
    type: 'input', 
    name: 'email',
    message: 'What is your email?', 
    }, 
    {
     type: 'input', 
    name: 'title',
    message: 'What is the title of your project?', 
    },
    {
    type: 'input', 
    name: 'description',
    message: 'Write a description of your project.', 
    },
    {}
]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("running ReadMe..");
        writeToFile("README.md", generateMarkdown)
    })
}

// Function call to initialize app
init();
