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

userWelecome = prompting('What is your name?');
console.log(`Welcome${userWelecome} to this porfessional readme generator.`)
gitHubUserName = prompting('What is your Github user name');
console.log(gitHubUserName)
emailAddress = prompting('What is your email')
console.log(emailAddress)
//console.log(`Your git hub is ${gitHubUserName} and you can be reached at ${emailAddress}`)
description = prompting('What does your program do');
console.log(description)



createfile.appendFile('log.txt', `${gitHubUserName} and ${emailAddress} plus ${description}\n`, (err) =>
  err ? console.error(err) : console.log('Commit logged!')
);
