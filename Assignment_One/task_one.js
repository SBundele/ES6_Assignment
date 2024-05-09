const combiningArrays = (fruits,vegetables) => {
    let groceries = [...fruits, ...vegetables]
    return groceries
}

// Example Invocation
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

console.log(combiningArrays(fruits, vegetables)); 
// Expected Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]
