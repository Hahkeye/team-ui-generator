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

    get html(){
        let temp=
        `
            <div class="card m-3 bg-primary" style="width: 18rem;">
                <div class="card-header">
                    <p>Name: ${this.getName}</p>
                    <p>${this.getRole}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${this.getId}</li>
                    <li class="list-group-item">Email: <a href="mailto:${this.getEmail}">${this.getEmail}</a></li>
                    <li class="list-group-item">GitHub Username: ${this.usr}</li>
                </ul>
            </div>
        `;
        return temp;
    }

}
module.exports = Engineer;