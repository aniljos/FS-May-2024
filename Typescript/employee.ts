class Employee{

    //data members
    private id: number;
    private name: string;
    private salary: number;

    // properties
    public get Id(){
        return this.id;
    }
    public set Id(value: number){
        this.id = value;
    }

    public get Name(){
        return this.name;
    }
    public set Name(value: string){
        this.name = value;
    }

    public get Salary(){
        return this.salary;
    }
    public set Salary(value: number){
        this.salary = value;
    }
}

var emp = new Employee();

emp.Id = 1;
console.log("empId", emp.Id);
emp.Name = "Anil";
console.log("empname", emp.Name);
emp.Salary= 10000;
console.log("empSalary", emp.Salary);