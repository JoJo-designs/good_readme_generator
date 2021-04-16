// Required files
const createfile = require('fs');
const inqui = require('inquirer');

// Need a way to make some standard text appear with the license.
let type;
const CC0 = "copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission"
const Apache20 = "This is a type of license2. is auto text that is added in the sections based on the licence that is selected"
const ctype = "This is a type of license3. is auto text that is added in the sections based on the licence that is selected"
const dtype = "This is a type of license4. is auto text that is added in the sections based on the licence that is selected"

inqui
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project? ',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'What is your Github user name? ',
      name: 'gitHub',
    },
    {
      type: 'input',
      message: 'What is your email? ',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What does your program do? ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do people install the application? ',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do people use this application? ',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'which license is this application under? ',
      choices: ["CC0", "Apache-2.0", "c", "d"],
      name: 'license',
      //when: (answers) => answers.isCc0 === CCO,
    },
    {
      type: 'input',
      message: 'How do people contribute to the project? ',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'How is testing done? ',
      name: 'testing',
    }, 
  ])


  .then((data) =>
  createfile.writeFile('Read.md', `# ${data.projectTitle}
  ### Description
  ${data.description}
  ### Table of Content
  [Installation](href='#Installation')
  [Usage](href='#Usage')
  [License](href='#License')
  [Contributing](href='#Contributing')
  [Testing](href='#Testing')
  [Questions](href='#Questions')
  ### Installation
  ${data.installation}
  ### Usage  
  ${data.usage}
  ### License
  ##### Type of license ${data.license}
  Projects with the ${data.license} allow users to 
  ### Contributing
  ${data.contributing}
  ### Test
  ${data.testing}
  ### Questions
  Github: ${data.gitHub}
  Please contact ${data.email} with any questions`, (err) =>
  err ? console.error(err) : console.log('complete')
)
);

var checktype = (data) => {
  if (data.license === "CC0") {
    type = "copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission"
  } else if (data.license === "Apache20") {
    type = Apache20
  }
}

//Cheat sheet for markdown stuff might be useful https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#headers
// links https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

