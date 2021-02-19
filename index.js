
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
        message: "What is the Manager's Name?",
        name: 'name'
      },
    {
        type: 'input',
        message: "What is the Manager's ID Number?",
        name: 'id'
      },
    {
        type: 'input',
        message: "What is the Manager's Email Address?",
        name: 'email'
      },
    {
        type: 'input',
        message: "What is the Manager's Office Number?",
        name: 'email'
      },
    {
        type: 'list',
        message: "What is the Manager's Office Number?",
        name: 'email'
      },
    
      
];






