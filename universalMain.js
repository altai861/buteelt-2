import findAll from "./universal.js";

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


let oldStart = 1978
let newStart = 2006
const oldTable = document.getElementById("old")
const newTable = document.getElementById("new")

let oldNiitOdor = 0
let oldNiitTsag = 0
let oldNiitSonirhol = 0
let oldNiitDadlaga = 0

let newNiitOdor = 0
let newNiitTsag = 0
let newNiitSonirhol = 0
let newNiitDadlaga = 0


let grade = 1
for (let i = oldStart; i <= 1992; i++) {
    //console.log(findAll(i, "old", grade))
    const { niitOdor, hicheellehTsag, sonirhsonTsag, dadlagiinTsag } = findAll(i, "old", grade)
    oldNiitOdor += niitOdor
    oldNiitTsag += hicheellehTsag
    oldNiitSonirhol += sonirhsonTsag
    oldNiitDadlaga += dadlagiinTsag
    oldTable.innerHTML +=  `
        <tr>
            <td>${i}-${i + 1}</td>
            <td>${niitOdor}</td>
            <td>${formatHours(hicheellehTsag)}</td>
            <td>${formatHours(sonirhsonTsag)}</td>
            <td>${formatHours(dadlagiinTsag)}</td>
        </tr>
    `
    grade++;
}

let g = 1
for (let i = newStart; i <= 2021; i++) {
    //console.log(findAll(i, "new", grade))
    const { niitOdor, hicheellehTsag, sonirhsonTsag, dadlagiinTsag } = findAll(i, "new", g)
    newNiitOdor += niitOdor
    newNiitTsag += hicheellehTsag
    newNiitSonirhol += sonirhsonTsag
    newNiitDadlaga += dadlagiinTsag
    newTable.innerHTML +=  `
        <tr>
            <td>${i}-${i + 1}</td>
            <td>${niitOdor}</td>
            <td>${formatHours(hicheellehTsag)}</td>
            <td>${formatHours(sonirhsonTsag)}</td>
            <td>${formatHours(dadlagiinTsag)}</td>
        </tr>
    `
    g++;
}


oldTable.innerHTML +=  `
        <tr>
            <td>Нийт</td>
            <td>${oldNiitOdor}</td>
            <td>${formatHours(oldNiitTsag)}</td>
            <td>${formatHours(oldNiitSonirhol)}</td>
            <td>${formatHours(oldNiitDadlaga)}</td>
        </tr>
    `
newTable.innerHTML +=  `
        <tr>
            <td>Нийт</td>
            <td>${newNiitOdor}</td>
            <td>${formatHours(newNiitTsag)}</td>
            <td>${formatHours(newNiitSonirhol)}</td>
            <td>${formatHours(newNiitDadlaga)}</td>
        </tr>
    `
