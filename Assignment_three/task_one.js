// Example Invocation:
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

function highestPaid(employees) {
  let mx_salary = -Infinity;
  let highestSalaryEmployee = null;
  for (let item of employees) {
    let { salary } = item;
    if (salary > mx_salary) {
      mx_salary = salary;
      highestSalaryEmployee = item;
    }
  }
  return highestSalaryEmployee;
}

console.log(highestPaid(employees));
// Expected Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }
