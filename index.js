import {Employee} from './lib/Employee.js';
import {Engineer} from './lib/Engineer.js';
import {Manager} from './lib/Manager.js';
import {Intern} from './lib/Intern.js';
import inquirer from "inquirer";

var cont = true;
let emp = new Employee("test",1,"email");
let engi = new Engineer("test2",2,"email2","user");

console.log(emp.getRole);
console.log(engi.getRole);
let employees = [Employee];
employees.push(emp);
employees.push(engi);
console.log(employees);

function continuePrompt(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'cont',
            message: "Do you want to add another Employee?"
        }
    ]).then((answers) =>{
        cont = answers.message;
    }).catch((error)=>{
        console.log("error ",error);
    });
}
function specifityPrompt(type){
    let question="";
    console.log(type.type[0]);
    switch(type.type[0]){
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
    inquirer.prompt([
        {
            type: 'input',
            name: 'stuff',
            message: `${question}`
        }
    ]).then((answers) =>{
        console.log(type);
        let sw = type.type[0];
        delete type['type'];
        let temp = Object.values(Object.assign({},type,answers));
        console.log(temp);
        // console.log(Object.values(temp));
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
        console.log(employees);
        continuePrompt();
    }).catch((error)=>{
        console.log("error ",error);
    });
}

async function employeePrompt(){
    inquirer.prompt([
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
            type: 'checkbox',
            name: 'type',
            message: 'What kind of employee is this? ',
            choices: [
                "Employee",
                "Manager",
                "Engineer",
                "Intern",
            ]
    
        }

    ]).then((answers) =>{
        specifityPrompt(answers);
    }).catch((error)=>{
        console.log("error ",error);
    });
}


async function init(){
    while(true){
        const t = await employeePrompt();
    }
}

init();