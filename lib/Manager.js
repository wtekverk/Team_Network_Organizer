const Employee = require('./Employee');


class Manager extends Employee {


    //sets up variables in a constructor function 
    constructor(name, id, email, officeNumber) {

        //takes in information from Employee 
        super(name, id, email);

        //takes info from Manager object
        this.officeNumber = officeNumber;


    }


    //function gets officeNumber
    getOffice() {

        return this.officeNumber;
    }



    //Shows role as manager
    getRole() {

        return "Manager";
    }
}



module.exports = Manager;