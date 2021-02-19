//adding so files can be created 
const fs = require('fs')

//attaching inquirer 
const inquirer = require('inquirer')

//attaching classes 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


//attaching constants that have the HTML for the cards for each teamMember 
const WrapperHTML = require('./src/HeaderFooterHTML');
const ManagerCard = require('./src/ManagerCard');
const EngineerCard = require('./src/EngineerCard');
const InternCard = require('./src/InternCard');





const group = []

const addManager = [{
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
    name: 'officeNumber'
  },
  {
    type: 'list',
    message: "Would you like to add another group teamMember?",
    choices: ['Add Engineer', 'Add Intern', 'Finish'],
    name: 'nextStep'
  },


];

const addIntern = [{
    type: 'input',
    message: "What is the Intern's Name?",
    name: 'name'
  },
  {
    type: 'input',
    message: "What is the Intern's ID Number?",
    name: 'id'
  },
  {
    type: 'input',
    message: "What is the Intern's Email Address?",
    name: 'email'
  },
  {
    type: 'input',
    message: "What is the Intern's School?",
    name: 'school'
  },
  {
    type: 'list',
    message: "Would you like to add another group teamMember?",
    choices: ['Add Engineer', 'Add Intern', 'Finish'],
    name: 'nextStep'
  },


];

const addEngineer = [{
    type: 'input',
    message: "What is the Engineer's Name?",
    name: 'name'
  },
  {
    type: 'input',
    message: "What is the Engineer's ID Number?",
    name: 'id'
  },
  {
    type: 'input',
    message: "What is the Engineer's Email Address?",
    name: 'email'
  },
  {
    type: 'input',
    message: "What is the Engineer's GitHub Username?",
    name: 'github'
  },
  {
    type: 'list',
    message: "Would you like to add another group teamMember?",
    choices: ['Add Engineer', 'Add Intern', 'Finish'],
    name: 'nextStep'
  },


];


ask(addManager);


function ask(arr) {

  inquirer.prompt(arr)

    .then((teamMember) => {

      group.push(teamMember);

      if (teamMember.nextStep === 'Add Engineer') {
        ask(addEngineer);
      } else if (teamMember.nextStep === 'Add Intern') {
        ask(addIntern);
      } else {
        createProfiles(group);
      }
    })
    .catch((err) => console.log(err));
}







function createProfiles(group) {

  const profiles = group.map((teamMember) => {
    const {
      name,
      id,
      email
    } = teamMember;




    if (teamMember.hasOwnProperty('officeNumber')) {
      const {
        officeNumber
      } = teamMember;
      return new Manager(name, id, email, officeNumber);
    }

    if (teamMember.hasOwnProperty('school')) {
      const {
        school
      } = teamMember;
      return new Intern(name, id, email, school);
    }



    if (teamMember.hasOwnProperty('github')) {
      const {
        github
      } = teamMember;
      return new Engineer(name, id, email, github);
    }


  });

  generateHtml(profiles);
}

function generateHtml(profiles) {


  let profileCards = '';



  profiles.forEach((profile) => {
    if (profile instanceof Manager) {

      const card = ManagerCard(profile);
      profileCards += card;

    } else if (profile instanceof Intern) {

      const card = InternCard(profile);
      profileCards += card;

    } else if (profile instanceof Engineer) {
      const card = EngineerCard(profile);
      profileCards += card;
    }
  })


  const newHtml = WrapperHTML(profileCards);

  writeHtml(newHtml);
};







function writeHtml(newHtml) {
  fs.writeFile('./dist/group-profile.html', newHtml, (err) => {
    if (err) throw err;
    console.log('HTML document successfully created in the /dist folder.');
  });
};