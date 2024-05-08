const person = { name: "John", age: 30, address: "123 Main St" };

function cloningObjects(person){
    let personCopy = {...person}
    return personCopy
}

console.log(cloningObjects(person)); 
// Output: { name: "John", age: 30, address: "123 Main St" }
