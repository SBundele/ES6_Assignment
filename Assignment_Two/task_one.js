// Example Invocation
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

function employeeInformation(employees){
    let [secondEmployeeName,secondEmployeeDepartment] = [employees[1].name, employees[1].department]
    return {secondEmployeeName, secondEmployeeDepartment}
}

console.log(employeeInformation(employees)); 
// Expected Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }
