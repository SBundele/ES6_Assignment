function mergingObjects(students, course){
    let studentWithCourse = {...students, ...course}
    return studentWithCourse
}

// Example Invocation
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };

console.log(mergingObjects(student, course)); 
// Expected Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }
