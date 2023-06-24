// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown.js')
const renderLicenseSection = generateMarkdown.renderLicenseSection;
const renderLicenseBadge = generateMarkdown.renderLicenseBadge;

const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the title of your ReadMe?'
    },

    {
        name: 'description',
        message: 'Please describe your Project?'
    },
    {
        name: 'install',
        message: 'Please explain how to install your application?'
    },
    {
        name: 'usage',
        message: 'What is the usage of your project?'
    },
    {
        name: 'license',
        type: 'checkbox',
        message: 'Please select your license',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU General Public License (GPL)',
            'BSD 2-Clause License',
            'BSD 3-Clause License',
            'ISC License',
            'Mozilla Public License 2.0',
            'Creative Commons licenses (various versions)',
            'GNU Lesser General Public License (LGPL)',
            'The Unlicense',
            'WTFPL (Do What The F*ck You Want To Public License)',
            'Beerware License',
            'zlib License',
            'Dojo Toolkit License',
            'Eclipse Public License',
            'Microsoft Public License (Ms-PL)',
            'PostgreSQL License',
            'SQLite License',
            'Open Software License (OSL)',
            'Academic Free License (AFL)',
            'Artistic License 2.0'
        ]
    },
    {
        name: 'contributors',
        message: 'Who contributed to your project?'
    },
    {
        name: 'test',
        message: 'What forms of testing were done on your project?'
    },
    {
        name: 'question',
        message: 'How can one reach out for support or with general questions?'
    }
]
inquirer.prompt(questions)
    .then(({ title, description, install, usage, license, contributors, test, question }) => {
        const showLicenseBadge = renderLicenseBadge(license);
        const showLicenseSection = renderLicenseSection(license);

        const content = `
# ${title}
${showLicenseBadge}

## Description: 
${description}

## Table of Contents: 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Test](#test)
- [Questions](#questions)

## Installation: 
${install}
## Usage: 
${usage}
## License: 
${showLicenseSection}
## Contributors: 
${contributors}
## Test: 
${test}
## Questions: 
${question}
`
        //Function to create ReadME
        console.log('README.md file has been created successfully.')
        fs.writeFile('./README.md', content, err => {
            if (err) throw err
        })
    })


// TODO: Create a function to initialize app
// function init(generateMarkdown,
//     renderLicenseLink,
//     renderLicenseSection,
//     renderLicenseBadge) { }

// // Function call to initialize app
// init();

