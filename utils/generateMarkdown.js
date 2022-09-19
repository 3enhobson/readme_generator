// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `![License](https://img.shields.io/badge/License-${license}-green)`
  } 
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None"){
    return `* [License](#license)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `## License 
This project is licensed under the ${license} license`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  
  * [Description](#description)
  
  * [Installation](#installation)
 
  ${renderLicenseLink(data.license)}
  
  * [Contribute](#contribute)

  * [Usage](#usage)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Description
    
   ${data.description}
  
  ## Installation
  
   \`\`\`
   ${data.install}
   \`\`\`
  
   ## Test
   \`\`\` 
    ${data.test}
   \`\`\`
   
   ## Usage
  
   ${data.use}
    
   ${renderLicenseSection(data.license)} 
  
   ## Contribute
    
   ${data.contribute}
   
   ## Questions
  
   Contact me with any questions.
  
   Email: ${data.email}
  
   Github: https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;

