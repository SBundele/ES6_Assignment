const combiningArrays = (fruits,vegetables) => {
    let newArr = [...fruits, ...vegetables]
    return newArr
}


const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

console.log(combiningArrays(fruits, vegetables)); 
// Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]
