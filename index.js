// import inquirer from "inquirer";
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Helper = require('./src/helper')
// const footer = require('./src/helper');
const fs = require('fs');

var cont = true;


let employees = [];


async function continuePrompt(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'cont',
            message: "Do you want to add another Employee?"
        }
    ]);
}
async function specifityPrompt(type){
    let question="";
    console.log(type.type);
    switch(type.type){
        case "Manager":
            question = "What is the office number of the manager?"
            break;
        case "Engineer":
            question = "What is the employee's GitHub username?"
            break;
        case "Intern":
            question = "What is the school the intern goes to?"
            break;
        default:
            question = "";
            break;
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'stuff',
            message: `${question}`
        }
    ]);
}

async function employeePrompt(){
    return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is this Employees name? '
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is this employee id? '
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the employees email? '
            },
            {
                type: 'list',
                name: 'type',
                message: 'What kind of employee is this? ',
                choices: [
                    "Employee",
                    "Manager",
                    "Engineer",
                    "Intern",
                ]
        
            }
    
        ]);
}


async function init(){
    while(true){
        let t = await employeePrompt();
        console.log(t);
        let t2=null;
        if(t.type!="Employee"){
            t2 = await specifityPrompt(t);
        }
        let sw = t.type;
        delete t['type'];
        let temp = Object.values(Object.assign({},t,t2));
        switch(sw){
            case "Manager":
                employees.push(new Manager(...temp))
                break;
            case "Engineer":
                employees.push(new Engineer(...temp))
                break;
            case "Intern":
                employees.push(new Intern(...temp))
                break;
            default:
                employees.push(new Employee(...temp))
                break;
        }
        let temp2 = await continuePrompt();
        if(temp2.cont=="false"){
            console.log(employees);
            break;
        }
    }
    let temp='';
    for(let i in employees){
        let tem=`
        <div class="card m-3 bg-primary" style="width: 18rem;">
            <div class="card-header">
                <p>Name: ${employees[i].getName}</p>
                <p>${employees[i].getRole}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employees[i].getId}</li>
                <li class="list-group-item">Email: ${employees[i].getEmail}</li>
                <li class="list-group-item">A third item</li>
            </ul>
        </div>`;
        temp+=tem;
    }
    // console.log(header);
    // console.log(footer);
    let val = 
    `
    ${Helper.header}
    ${temp}
    ${Helper.footer}
    `;
    fs.writeFile("./dist/index.html",val,() =>{
        console.log("pog");
    })

}

init();