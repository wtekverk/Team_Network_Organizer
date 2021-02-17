const fs = require('fs')

const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown')

inquirer.prompt([

    {
        type: 'input',
        message: 'What is you team name?',
        name: 'teamName'
    },


]).then((response) => {




    const fileName = `${response.teamName}.html`;

    fs.writeFile(fileName, generateMarkdown(response), (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Great Job!')
            }
        }

    )



}).catch(function (err) {
    if (err) {
        console.log("I'm so sad an error occurred. Me broken :(")
        console.log(err);
    }
})