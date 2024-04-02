import findOldStudent from "./D1oldStudent.js"
import findNewStudent from "./D1newStudent.js"
import findNewStudentInterest from "./D2newStudent.js"
import findOldStudentInterest from "./D2oldStudent.js"
import findOldIntern from "./D3oldStudent.js"
import findNewIntern from "./D3newStudent.js"

function formatHours(realNumber) {
    // Extract hours and minutes
    var hours = Math.floor(realNumber);
    var minutes = Math.round((realNumber - hours) * 60);

    // Construct the result string
    var result = hours + " цаг";
    if (minutes !== 0) {
        result += " " + minutes + " минут";
    }

    return result;
}



let oldStudent = findOldStudent()
let newStudent = findNewStudent()
let newStudentInterest = findNewStudentInterest()
let oldStudentInterest = findOldStudentInterest()
let oldIntern = findOldIntern()
let newIntern = findNewIntern()

console.log("1978: ", oldStudent)
console.log("2006: ",newStudent)
console.log("2006 Interest: ", newStudentInterest)
console.log("1978 Interest: ", oldStudentInterest)
console.log("1978 Intern proportion", oldIntern)
console.log("2006 Intern proportion", newIntern.internshipProportion)
console.log("days: ", newStudent.d);

const oldDundDays = document.getElementById("oldDundDays")
const oldDeedDays = document.getElementById("oldDeedDays")
const oldDund = document.getElementById("oldDund")
const oldDeed = document.getElementById("oldDeed")
const oldNiit = document.getElementById("oldNiit")
const oldInt = document.getElementById("oldInt")
const oldDad = document.getElementById("oldDad")
const oldDadPercent = document.getElementById("oldDadPercent")


const newDundDays = document.getElementById("newDundDays")
const newDeedDays = document.getElementById("newDeedDays")
const newDund = document.getElementById("newDund")
const newDeed = document.getElementById("newDeed")
const newNiit = document.getElementById("newNiit")
const newInt = document.getElementById("newInt")
const newDad = document.getElementById("newDad")
const newDadPercent = document.getElementById("newDadPercent")


oldDundDays.innerText = oldStudent.dundSurguuliDays + " өдөр"
oldDeedDays.innerText = oldStudent.deedSurguuliDays + " өдөр"
oldDund.innerText = formatHours(oldStudent.dund)
oldDeed.innerText = formatHours(oldStudent.deed)
oldNiit.innerText = formatHours(oldStudent.niit)
oldInt.innerText = formatHours(oldStudentInterest.niitSonirhson)
oldDad.innerText = formatHours(oldIntern.internDuration)
oldDadPercent.innerText = oldIntern.internshipProportion + "%"

newDundDays.innerText = newStudent.dundSurguuliDays + " өдөр"
newDeedDays.innerText = newStudent.deedSurguuliDays + " өдөр"
newDund.innerText = formatHours(newStudent.dund)
newDeed.innerText = formatHours(newStudent.deed)
newNiit.innerText = formatHours(newStudent.niit)
newInt.innerText = formatHours(newStudentInterest.niitSonirhson)
newDad.innerText = formatHours(newIntern.internDuration)
newDadPercent.innerText = newIntern.internshipProportion + "%"