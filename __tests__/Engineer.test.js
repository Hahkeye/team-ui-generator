const Engineer = require('../lib/Engineer');

describe("Engineer", ()=>{
    describe("getName", () =>{
        it("Should return the name of the engineer?",() =>{
            let tE = new Engineer("john");
            let name = "john";
            // console.log(tE.getName);
            expect(tE.getName).toEqual(name);
        });
    });
    describe("getId",() =>{
        it("Should return the id of the engineer?",()=>{
            let tE = new Engineer("john",2);
            let number = 2;
            // console.log(tE.getId);
            expect(tE.getId).toEqual(number);
        });
    });
    describe("getEmail",() =>{
        it("Should return the email of the engineer?",()=>{
            let tE = new Engineer("john",2,"email@email.com");
            let email = "email@email.com";
            // console.log(tE.getEmail);
            expect(tE.getEmail).toEqual(email);
        });
    });
    describe("getRoll",() =>{
        it("What is the role of this engineer?",()=>{
            let tE = new Engineer("john",2,"email@email.com");
            let role = "Engineer";
            // console.log(tE.getRole);
            expect(tE.getRole).toEqual(role);
        });
    });
    describe("getGithub", () =>{
        it("What is the user name of this engineer?",()=>{
            let tE = new Engineer("john",2,"email@email.com","johngithub")
        let git = "johngithub";
        // console.log((tE.getGithub));
        expect(tE.getGithub).toEqual(git);
        });
    });
});