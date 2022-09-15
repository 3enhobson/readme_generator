// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync('./dist/' + fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your Github user name?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: "What is your project's name?",
        name: 'projectName',
      },
      {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
      },
      {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license',
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: "install",
        default: "npm i"
      },
      {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
        default: "npm test"
      },
      {
        type: "input",
        message: 'What does the user need to know about using the repo?',
        name: "use"
      },
      {
        type: "input",
        message: 'What does the user need to know about contributing to the repo?',
        name: "contribute",
      },
    ])
    .then((response) => {
      console.log(response)
      writeToFile('README.md', response);
    });
}

// Function call to initialize app
init();
