//making parent class of Employee 
class Employee {

    //stores properties in constructor function 
    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;


    }

    //runs name for all employees 
    getName() {

        return this.name
    }

    //runs id number for all employees 
    getId() {

        return this.id
    }

    //runs email for all employees 
    getEmail() {

        return this.email
    }

    //runs the role of everyone as Employee 
    getRole() {

        return "Employee"

    }


}

module.exports = Employee