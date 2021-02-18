//adding parent class Employee
const Employee = require('./Employee');


class Intern extends Employee {

    //stores properties in constructor function 
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }



    //method to get school name
    getSchool() {
        return this.school;
    }



    //method to get Role of intern as intern
    getRole() {
        return "Intern";
    }


}






module.exports = Intern;