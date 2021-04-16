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
      choices: ["CC0", "Apache", "MIT", "d"],
      name: 'license',
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
  [![Licens](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)](https://opensource.org/licenses/${data.license})
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
  Projects with the ${data.license} license allow ${checktype(data.license)} 
  ### Contributing
  ${data.contributing}
  ### Test
  ${data.testing}
  ### Questions
  [${data.gitHub}](href='https://github.com/${data.gitHub}')
  Please contact ${data.email} with any questions`, (err) =>
  err ? console.error(err) : console.log('complete')
)
);

var checktype = (license) => {
  if (license === "CC0") {
    return "users to copy, modify, distribute and perform the work, even for commercial purposes, without asking permission.\n ##### For a full overview please visit\n https://creativecommons.org/publicdomain/zero/1.0/legalcode "
  } else if (license === "Apache") {
    return "users to reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that users meet the conditions.\n ##### For a full overview please vist\n https://opensource.org/licenses/Apache-2.0"
  } else if (license === "MIT") {
    return "are free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to conditions.\n ##### For a full overview please vist\n https://opensource.org/licenses/MIT"
  } else {
    return "no value yet"
  }
};

//Cheat sheet for markdown stuff might be useful https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#headers
// links https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

