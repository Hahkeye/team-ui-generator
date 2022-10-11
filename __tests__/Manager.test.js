const Manager = require('../lib/Manager');

describe("Manager", ()=>{
    describe("getName", () =>{
        it("Should return the name of the Manager",() =>{
            let tE = new Manager("john");
            let name = "john";
            // console.log(tE.getName);
            expect(tE.getName).toEqual(name);
        });
    });
    describe("getId",() =>{
        it("Should return the id of the Manager",()=>{
            let tE = new Manager("john",2);
            let number = 2;
            // console.log(tE.getId);
            expect(tE.getId).toEqual(number);
        });
    });
    describe("getEmail",() =>{
        it("Should return the email of the Manager",()=>{
            let tE = new Manager("john",2,"email@email.com");
            let email = "email@email.com";
            // console.log(tE.getEmail);
            expect(tE.getEmail).toEqual(email);
        });
    });
    describe("getRoll",() =>{
        it("What is the role of this Manager",()=>{
            let tE = new Manager("john",2,"email@email.com");
            let role = "Manager";
            // console.log(tE.getRole);
            expect(tE.getRole).toEqual(role);
        });
    });
});