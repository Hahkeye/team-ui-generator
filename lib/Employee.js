class Employee{
    constructor(name,id,email){
        this.name=name;
        this.id=id;
        this.email=email;
    }

    get getName(){
        return this.name;
    }

    get getId(){
        return this.id;
    }
    get getEmail(){
        return this.email;
    }
    get getRole(){
        return "Employee";
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
                </ul>
            </div>
        `;
        return temp;
    }
}
module.exports = Employee;