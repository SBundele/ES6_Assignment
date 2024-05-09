//Example Invocation:
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];


function averageSalary(employees){
    let allSalary = []
    sum = 0
    for (let item of employees){
        let {salary} = item
        sum += salary
        allSalary.push(salary)
    }

    return (sum/allSalary.length)
}

console.log(averageSalary(employees)); 
// Expected Output: 60000
