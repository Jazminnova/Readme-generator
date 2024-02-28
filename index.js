// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = requirer("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    message: "What is the Title of the project?",
    name: "title"
},
{
    type: "input",
    message: "Give a short Discription of your project?",
    name: "discription"
},
{
    type: "input",
    message: " Add a Table Of Content",
    name: "tableofcontent"
},
{
    type: "input",
    message: "How is this App Used",
    name: "usage"
},
{
    type: "input",
    message: "What LICENSE did you want to use?",
    name: "license",
    license:["MIT","APACHE2","GNU","BOOST","ECLIPSE","MOZILLA"]
     
},
{
    type:"input",
    message:"What are the step required for Instillation?",
    name:"install"

},
{
    type:"input",
    message: "test",
    name:"test"
},
{



    type: "input",
    message: "What is your GitHub username?",
    name: "username"
},
{
    type: "input",
    message: "What is your GITHUB repo link?",
    name: "link"
},
{
    type: "input",
    message: "What is your email address?",
    name: "email"
}

],

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!");
        }
    });
}
// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    writeToFile('.README.md', answers)
 }

// Function call to initialize app
init();
