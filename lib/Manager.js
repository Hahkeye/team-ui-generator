const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.num=officeNumber;
    }
    get getRole(){
        return "Manager";
    }

}

module.exports = Manager;