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
  return `# ${data.title}
// put render for license badge 

##Description 
${data.description}

## Questions
If you have questions about this repo, please contact me at ${
    data.email
    }.You can find more about my work at [${data.github}](https://github.com/${
    data.github
}/).
}
`;
}

module.exports = generateMarkdown;
