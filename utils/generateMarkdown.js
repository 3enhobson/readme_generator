// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName} ![License](https://img.shields.io/badge/License-${data.license}-green)

## ${data.username}

### ${data.email}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contribute](#contribute)

* [Tests](#test)


## Description
  
 ${data.description}
  
## Usage
  
 ${data.use}
  
## License
  
 ${data.license}
  
## Installation
  
 ${data.install}
  
## Test
  
 ${data.test}
  
## Contribute
  
 ${data.contribute}
`;
}

module.exports = generateMarkdown;

