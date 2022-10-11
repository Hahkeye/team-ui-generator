import {Employee} from './Employee.js';

export class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.num=officeNumber;
    }
    get getRole(){
        return "Manager";
    }

}