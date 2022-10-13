//imports
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Helper = require('./src/helper')
const fs = require('fs');
const { log } = require('console');

//list of employees
let employees = [];

//Promts the user if they would like to add another employee returns the value
async function validEmail(email){
    if(email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
        return true;
    }
    return false;
}


async function continuePrompt(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'cont',
            message: "Do you want to add another Employee?"
        }
    ]);
}
//Prompts the user for the specifc kind of employee and returns the value
async function specifityPrompt(type){
    let question="";
    // console.log(type.type);
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
//Prompts the user for the basic employee information
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

//mian function
async function init(){
    while(true){//loops until they are done entering employees
        let t = await employeePrompt();
        let check = await validEmail(t.email)
        if(!check){
            console.log("You have entered a invalid email. Please try again.");
            t = await employeePrompt();
        }
        let t2=null;
        if(t.type!="Employee"){
            t2 = await specifityPrompt(t);
        }
        let sw = t.type;
        delete t['type'];//cleans up the data because we really dont need it anymore.
        let temp = Object.values(Object.assign({},t,t2));
        switch(sw){//fancy switch to populate the new object
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
        if(temp2.cont=="false"){//if they are done quit
            // console.log(employees);
            break;
        }
    }
    let temp='';
    for(let i in employees){
        temp+=employees[i].html;//gets the html for the users and adds it to the body
    }
    let val = 
    `
    ${Helper.header}
    ${temp}
    ${Helper.footer}
    `;//Puts the predefined header and foot around the generated HTML
    fs.writeFile("./dist/index.html",val,() =>{//write to a file and then say pog
        // console.log("pog");
    });
}

init();