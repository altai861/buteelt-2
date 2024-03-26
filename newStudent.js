let newStudent = {
    startYear: 2006,
    schoolYear: 12,
    uniYear: 4,
    workDays: 5,
    firstToFifth: 4,
    sixthToTwelveth: 6,
    uni: 3,
    schoolDurationBaga: 30,
    schoolDurationAhlah: 35,
    uniDuration: 90
}


let startDate = new Date(newStudent.startYear.toString() + "-09-01")
let endDate = new Date((newStudent.startYear + newStudent.schoolYear + newStudent.uniYear).toString() + "-06-01")

let currentDate = new Date(startDate)

let NiitSuraltsahTsag = 0;
let NiitDundSurguuliinTsag = 0
let NiitOyutniiTsag = 0



let grade = 1;
while (currentDate <= endDate) {
    let heddehOdor = currentDate.getDay() + 1
    let hedenSar = currentDate.getMonth() + 1
    let odor = currentDate.getDate()


    if (grade >= 1 && grade <= 5) {
        if (heddehOdor !== 7 && heddehOdor !== 6) {
            NiitDundSurguuliinTsag += 4 * 30 * 60
        }
    } else if (grade >= 6 && grade <= 12) {
        if (heddehOdor !== 7 && heddehOdor !== 6) {
            NiitDundSurguuliinTsag += 6 * 35 * 60
        }
    } else {
        if (heddehOdor !== 7 && heddehOdor !== 6) {
            NiitOyutniiTsag += 3 * 90 * 60
        }
    }
    


    if (currentDate.getMonth() === 5 && currentDate.getDate() === 1) {
        // Skip summer months by adding three months (going to September 1st)
        currentDate.setMonth(currentDate.getMonth() + 3);
        grade += 1
    } else {
        // Increment the currentDate by one day for the next iteration
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

NiitSuraltsahTsag = NiitDundSurguuliinTsag + NiitOyutniiTsag

console.log(NiitSuraltsahTsag / 3600 + " цаг нийт")
console.log(NiitDundSurguuliinTsag / 3600 + " цаг дунд сургууль")
console.log(NiitOyutniiTsag / 3600 + " цаг оюутан" )

// 1 - 5 dugaar angi 30 minutaar 4 tsag = 4 * 30 = 120
// 6 - 12 35 aar 6 35 * 6 = 210
//suraltsaj bui jilee oruulbal = 120 * 5 = 600 210 * 7 = 1470
// 1470 + 600 = 2070

let firstToFifthIN = NiitDundSurguuliinTsag * 600 / 2070 * 4 / 20 / 3600
let sixthTo12IN = NiitDundSurguuliinTsag * 1470 / 2070 * 6 / 30 / 3600

let niitInterest = firstToFifthIN + sixthTo12IN

console.log(firstToFifthIN, sixthTo12IN)
console.log("Нийт сонирхсон хичээлд суух цаг: " + niitInterest)

let dadlagiinTsag = 8 * 5 * 8

console.log("Нийт үйлдвэрлэлийн дадлагын цаг: " + dadlagiinTsag)