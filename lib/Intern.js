const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school=school;
    }
    get getSchool(){
        return this.school;
    }

    get getRole(){
        return "Intern &#9881";
    }
    get html(){
        let temp =
        `
            <div class="card m-3 bg-primary" style="width: 18rem;">
                <div class="card-header">
                    <p>Name: ${this.getName}</p>
                    <p>${this.getRole}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${this.getId}</li>
                    <li class="list-group-item">Email: <a href="mailto:${this.getEmail}">${this.getEmail}</a></li>
                    <li class="list-group-item">School: ${this.school}</li>
                </ul>
            </div>
        `;
        return temp;
    }

}
module.exports = Intern;