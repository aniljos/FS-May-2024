class Employee {
    // properties
    get Id() {
        return this.id;
    }
    set Id(value) {
        this.id = value;
    }
    get Name() {
        return this.name;
    }
    set Name(value) {
        this.name = value;
    }
    get Salary() {
        return this.salary;
    }
    set Salary(value) {
        this.salary = value;
    }
}
var emp = new Employee();
emp.Id = 1;
console.log("empId", emp.Id);
emp.Name = "Anil";
console.log("empname", emp.Name);
emp.Salary = 10000;
console.log("empSalary", emp.Salary);
