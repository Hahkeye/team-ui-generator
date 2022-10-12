// import {Employee} from './Employee.js';
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,username){
        super(name,id,email);
        this.usr=username;
    }

    get getGithub(){
        return this.usr;
    }
    get getRole(){
        return "Engineer &#9963;";
    }

}
module.exports = Engineer;