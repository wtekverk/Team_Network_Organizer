
//adding so files can be created 
const fs = require('fs')

//attaching inquirer 
const inquirer = require('inquirer')

//attaching classes 
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


//attaching constants that have the HTML for the cards for each member 
const WrapperHTML = require('./src/HeaderFooterHTML');
const ManagerCard = require('./src/ManagerCard');
const EngineerCard = require('./src/EngineerCard');
const InternCard = require('./src/InternCard');


const addManager = [
    {
        type: 'input',
        message: 'What is '
      },
      {
        name: 'name',
        type: 'input',
        message: 'Please enter the name of the manager:'
      },
      {
        name: 'id',
        type: 'input',
        message: 'What is your employee ID?'
      },
      {
        name: 'email',
        type: 'input',
        message: 'Please enter your email address:'
      },
      {
        name: 'officeNumber',
        type: 'input',
        message: 'What is your office number?'
      },
      {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
      },
];






