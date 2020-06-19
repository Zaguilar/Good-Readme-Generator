let fs = require("fs");
let inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
/*
TITLE
Description
Table of Contents
Installation
Usage
license
Contributing
Tests
Questions
*/

function promptUser(){
    return inquirer.prompt(
        [
            {
                type: "input",
                message: "What is your README title?",
                name: "title"
            },
            {
                type: "input",
                message: "Enter a brief description.",
                name: "description"
            },
            {
                type: "input",
                message: "Enter your table of contents.",
                name: "tableContents"
            },
            {
              type: "input",
              message: "Enter your installation instructions",
              name: "install" 
            },
            {
              type: "input",
              message: "Enter usage information",
              name: "usage"  
            },
            {
                type: "list",
                message: "License?",
                name: "licensing",
                choices: ["[MIT](https://choosealicense.com/licenses/mit/)", "ISC"]
            },
            {
                type: "input",
                message: "Contributing guidelines",
                name: "contribute" 
            },
            {
                type: "input",
                message: "Tests",
                name: "test"
            },
            {
                type: "input",
                message: "Questions?",
                name: "questions"
            }
        ]
    );
}

inqPromise = promptUser();
inqPromise.then(function(userInput) {
   let md = `
   ##${userInput.title}
   `;
   let writePromise = writeFileAsync("profile.md", md);
   writePromise.then(function() {
       console.log("Successfully wrote out to profile.md");
   }).catch(function(err) {
        console.log("Problem with writing file profile.md");
        console.log(err);
   }).catch(function(err) {
        console.log("Problem with inquirer.prompt");
        console.log(err);
   });
});