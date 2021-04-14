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


//try a frist question with a readable string function

// const readline = require("readline")
// const readable = readline.createInterface({
//     input: process.stringin,
//     output: process.stringout
// });

// readable.question("Your cool name", function(coolName){
//     console.log(`users really cool name is${coolName}`);
//     readable.close();
// });

// readable.on("close", function(){
//     console.log("Done");
//     process.exit(0);
// });

// didn't work

//Using propmts

const prompted = require('prompt');
const prompting = require('prompt-sync')({sigint: true});

    let gitHubUserName;
    let emailAddress;
 


// prompted.start();

// prompted.get(["Git Hub User Name", "email Address"], function(err, result){
//     if (err) {return onError(err);}
//     console.log(result)
// })

// function onError(err){
//     console.log(err);
//     return 1;
// }

gitHubUserName = prompting('What is your git hub user name');
console.log(gitHubUserName)
emailAddress = prompting('What is your email')
console.log(emailAddress)
console.log(`Your git hub is ${gitHubUserName} and you can be reached at ${emailAddress}`)