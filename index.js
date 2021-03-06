// Required files
const createfile = require('fs');
const inqui = require('inquirer');

inqui
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'usersName',
    },
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'What is your Github user name?',
      name: 'gitHub',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What does your program do?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do people install the application?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do people use this application?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'which license is this application under?',
      choices: ["CC0", "Apache", "MIT"],
      name: 'license',
    },
    {
      type: 'input',
      message: 'How do people contribute to the project?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'How is testing done?',
      name: 'testing',
    }, 
  ])


  .then((data) =>
  createfile.writeFile('./output/README.md', `# ${data.projectTitle}
  [![Licens](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)](https://opensource.org/licenses/${data.license})
  ### Description
  ${data.description}
  ### Table of Content
  [Installation](#Installation)\n
  [Usage](#Usage)\n
  [License](#License)\n
  [Contributing](#Contributing)\n
  [Test](#Test)\n
  [Questions](#Questions)\n
  ### Installation
  ${data.installation}
  ### Usage
  ${data.usage}
  ### License
  ##### Type of license ${data.license}
  Projects with the ${data.license} license ${checktype(data.license)} 
  ### Contributing
  ${data.contributing}
  ### Test
  ${data.testing}
  ### Questions
  [${data.gitHub}](https://github.com/${data.gitHub})
  Please contact ${data.usersName} at ${data.email} with any questions`, (err) =>
  err ? console.error(err) : console.log('Readme file')
)
);

var checktype = (license) => {
  if (license === "CC0") {
    return "allows users to copy, modify, distribute and perform the work, even for commercial purposes, without asking permission.\n ##### For a full overview please visit\n[CCO](https://creativecommons.org/publicdomain/zero/1.0/legalcode) "
  } else if (license === "Apache") {
    return "allows users to reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that users meet the conditions.\n ##### For a full overview please vist\n [Apache](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "MIT") {
    return "are free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to conditions.\n ##### For a full overview please vist\n[MIT](https://opensource.org/licenses/MIT)"
  } else {
    return "no value yet"
  }
};


