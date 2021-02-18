
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








