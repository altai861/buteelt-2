let oldStudent = {
    startYear: 1978,
    schoolYear: 10,
    uniYear: 5,
    workDays: 6,
    firstToThird: 4,
    fourthToEighth: 5.66,
    ninthToTenth: 6,
    uni: 3,
    schoolDuration: 45,
    uniDuration: 90
}

let startDate = new Date(oldStudent.startYear.toString() + "-09-01")
let endDate = new Date((oldStudent.startYear + oldStudent.schoolYear + oldStudent.uniYear).toString() + "-06-01")

let currentDate = new Date(startDate)

let NiitSuraltsahTsag = 0;
let NiitDundSurguuliinTsag = 0
let NiitOyutniiTsag = 0


let DundSurguuliSonirhsonHicheel = 0
let howManyDays = 0


let grade = 1;
while (currentDate <= endDate) {
    let heddehOdor = currentDate.getDay() + 1
    let hedenSar = currentDate.getMonth() + 1
    let odor = currentDate.getDate()


    if (grade >= 1 && grade <= 3) {
        if (heddehOdor !== 7) {
            NiitDundSurguuliinTsag += 4 * 45 * 60
        }
    } else if (grade >= 4 && grade <= 8) {
        if (heddehOdor !== 7) {
            NiitDundSurguuliinTsag += 5.66 * 45 * 60
        }
    } else if (grade >= 9 && grade <= 10) {
        if (heddehOdor !== 7) {
            NiitDundSurguuliinTsag += 6 * 45 * 60
        }
    } else {
        if (heddehOdor !== 7) {
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

// 7 honogt 1 ees 3 dugaar angiin suragch 24 tsag uzne * 3 = 72
// 4-8 dugaar angi 34 tsag * 5 = 170
// 9-10 dugaar angi 36 tsag * 2 = 72

// 170 + 72 + 72 = 314

let firstToThirdIN = NiitDundSurguuliinTsag * 72 / 314 * 4 / 24 / 3600
let fourthToEigthIN = NiitDundSurguuliinTsag * 170 / 314 * 4 / 34 / 3600
let nineToTenthIN = NiitDundSurguuliinTsag * 72 / 314 * 4 / 36 / 3600

let niitInterest = firstToThirdIN + fourthToEigthIN + nineToTenthIN

console.log(firstToThirdIN, fourthToEigthIN, nineToTenthIN)
console.log("Нийт сонирхсон хичээлд суух цаг: " + niitInterest)


let dadlagiinTsag = 8 * 5 * 8 + 8 * 1 * 6
console.log("Нийт үйлдвэрлэлийн дадлагын цаг: " + dadlagiinTsag)


