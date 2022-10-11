const Intern = require('../lib/Intern');

describe("Intern", ()=>{
    // describe("getName", () =>{
    //     it("Should return the name of the Intern",() =>{
    //         let tE = new Intern("john");
    //         let name = "john";
    //         // console.log(tE.getName);
    //         expect(tE.getName).toEqual(name);
    //     });
    // });
    // describe("getId",() =>{
    //     it("Should return the id of the Intern",()=>{
    //         let tE = new Intern("john",2);
    //         let number = 2;
    //         // console.log(tE.getId);
    //         expect(tE.getId).toEqual(number);
    //     });
    // });
    // describe("getEmail",() =>{
    //     it("Should return the email of the Intern",()=>{
    //         let tE = new Intern("john",2,"email@email.com");
    //         let email = "email@email.com";
    //         // console.log(tE.getEmail);
    //         expect(tE.getEmail).toEqual(email);
    //     });
    // });
    // describe("getRoll",() =>{
    //     it("What is the role of this Intern",()=>{
    //         let tE = new Intern("john",2,"email@email.com");
    //         let role = "Intern";
    //         // console.log(tE.getRole);
    //         expect(tE.getRole).toEqual(role);
    //     });
    // });
    describe("getSchool",() =>{
        it("What is the school of this Intern",()=>{
            let tE = new Intern("john",2,"email@email.com","UCLA");
            let school = "UCLA";
            // console.log(tE.getRole);
            expect(tE.getSchool).toEqual(school);
        });
    });
});