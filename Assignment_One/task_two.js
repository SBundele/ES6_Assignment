// Example Invocation
const person = { name: "John", age: 30, address: "123 Main St" };

function cloningObjects(person){
    let personCopy = {...person}
    return personCopy
}

console.log(cloningObjects(person)); 
// Expected Output: { name: "John", age: 30, address: "123 Main St" }
