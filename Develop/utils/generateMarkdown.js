// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === '') {
    return ('Project is unlicensed.');
  }
  return ` ![badge](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Description 
${data.Description}


## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${data.License}

## Contributing
${data.Contributing}

## Test
${data.Test}

## Questions
If you have questions about this repo, please contact me at ${data.Email}.You can find more about my work at [${data.UserName}](https://github.com/${data.UserName}/).`;
}

module.exports = generateMarkdown;
