//Example Invocation:
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

function thirdEmployeeInfo(employees){
    let {name, age, salary} = employees[2]
    let [thirdEmployeeName, thirdEmployeeAge, thirdEmployeeSalary] = [name, age, salary]
    let bonus = salary/100*10
    return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus}`
}

console.log(thirdEmployeeInfo(employees)); 
// Expecetd Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"
