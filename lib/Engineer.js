const Employee = require('./Employee');



class Engineer extends Employee {


    //stores variables in constructor variable 
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }


    //runs the value of github for user
    getGithub() {
        return this.github;
    }


    //defines role of employee as Engineer 
    getRole() {
        return "Engineer";
    }
}


module.exports = Engineer;