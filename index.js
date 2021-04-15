// This file will use node to run outside a browser I need to create a program that will make a good readme file based on user 
//imputs. Will promtped user for information and than fill in the data to the readme file under the correct section titles


// Sections that needs to be added
// Project Title:       The tile at the top of the readme
                        // Licence badge is near here at the top
// Description:         About the project 
// table of content:    When clicked will bring user to the corasponding part of the file
// Installation:        Instuctions on how to install
// Usage:               Info on how to use application
// License:             Explains the license the project is listed under.
// Contributing:        Info on contriduting to a project
// Tests:               Info about testing
// Questions:           contains a link to the users github
                        // Github user name and email with instraction to reach the user for more info


//Using propmts

const prompted = require('prompt');
const prompting = require('prompt-sync')({sigint: true});
const createfile = require('fs');

    let title;
    let gitHubUserName;
    let emailAddress;
    let description;
    let installation;
    let usage;
    let license;
    let contributing;
    let test;
    let question;


// prompted.start();

// prompted.get(["Git Hub User Name", "email Address"], function(err, result){
//     if (err) {return onError(err);}
//     console.log(result)
// })

// function onError(err){
//     console.log(err);
//     return 1;
// }

// prompted for info
//Ask for a name first not nessasary but a firendly welcome
userWelecome = prompting('What is your name? ');
      console.log(`Welcome ${userWelecome} to this porfessonal readme generator. 
      Fill in the information as prompted to build a professonal README.md file`)
//Rest of the questions
      title = prompting('What is the title of your project? ');
      gitHubUserName = prompting('What is your Github user name? ');
      emailAddress = prompting('What is your email? ')
      description = prompting('What does your program do? ');
console.log("Generating File...")


// builds file with data given by the user.
createfile.writeFile('log.md', `<h1>${title}</h1>\n
<h3>description</h3>\n
${description}\n
<h3>table of content</h3>\n
<ul>
<li>Installation</li>\n<li>Usage</li>\n<li>License</li>\n<li>Contributing</li>\n<li>Tests</li>\n<li>Questions</li>
</ul>\n
<h3>Installation</h3>\n
<h3>Usage</h3>\n
<h3>Licence</h3>\n
<h3>Conributing</h3>\n
<h3>Test</h3>\n
<h3>Questions</h3>\n`, (err) =>
  err ? console.error(err) : console.log('file generated')
);

//Cheat sheet for markdown stuff might be useful https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#headers