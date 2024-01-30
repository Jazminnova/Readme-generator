// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = requirer("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    message: "What is the title of the project?",
    name: "title"
},
{
    type: "input",
    message: "Give a short discription of your project?",
    name: "discription"
},
{
    type: "input",
    message: " Add a Table Of Content",
    name: "tableofcontent"
},
{
    type: "input",
    message: "How is this app used",
    name: "usage"
},
{
    type: "input",
    message: "What LICENSE did you want to use?",
    name: "license",
    license:["MIT","APACHE2","GNU","BOOST","ECLIPSE","MOZILLA"]
     
},
{
    
}
],

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
