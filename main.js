import findOldStudent from "./D1oldStudent.js"
import findNewStudent from "./D1newStudent.js"
import findNewStudentInterest from "./D2newStudent.js"
import findOldStudentInterest from "./D2oldStudent.js"

let oldStudent = findOldStudent()
let newStudent = findNewStudent()
let newStudentInterest = findNewStudentInterest()
let oldStudentInterest = findOldStudentInterest()

console.log("1978: ", oldStudent)
console.log("2006: ",newStudent)
console.log("2006 Interest: ", newStudentInterest)
console.log("1978 Interest: ", oldStudentInterest)