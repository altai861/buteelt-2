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

//Хэрэв дунд сургуульдаа сурагч хичээллэх үедээ 7 хоног бүр 4 
//цагийг өөрт сонирхолтой хичээл үздэг байсан бол сонирхсон хичээлдээ зарцуулсан цагуудыг харьцуулна уу? 
let startDate = new Date(newStudent.startYear.toString() + "-09-01")
let endDate = new Date((newStudent.startYear + newStudent.schoolYear + newStudent.uniYear).toString() + "-06-01")

let currentDate = new Date(startDate)

let NiitSuraltsahTsag = 0;
let NiitDundSurguuliinTsag = 0
let NiitOyutniiTsag = 0
let NiitDurtaiTsag = 0
let NiitDadlagiinTsag = 0;
let grade = 1;
let thisYearEndDate = startDate;
let thisYearStartDate = startDate;
thisYearEndDate.setFullYear(currentDate.getFullYear() + 1, 5, 1);
while(currentDate <= endDate){
    if(currentDate.getFullYear() <= endDate.getFullYear() - newStudent.uniYear){ // school years
        let replica = thisYearEndDate
        replica.setDate(thisYearEndDate.getDate() - thisYearEndDate.getDay())
        if(thisYearStartDate.getDay() === 5 || thisYearStartDate.getDay() === 6){
            thisYearStartDate.setFullYear(thisYearStartDate.getFullYear(), thisYearStartDate.getMonth(), thisYearStartDate.getDate() + 7 - thisYearStartDate.getDay())
            currentDate.setFullYear(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7 - thisYearStartDate.getDay())
        }
        if((thisYearStartDate.getDay() != 0 && thisYearStartDate === currentDate)) { //if current day is start of a school year then it checks is the first week incomplate
            //if the start week is incomplate then it calculate NiitDundsurguuliin without DurtaiTsag
            if (grade < 6 && grade > 0){ 
                    NiitDundSurguuliinTsag += 4 * newStudent.schoolDurationBaga * 60 * (newStudent.workDays-currentDate.getDay());
            }
            else if (grade < 13 ){
                NiitDundSurguuliinTsag += 6 * newStudent.schoolDurationAhlah * 60 * (newStudent.workDays-currentDate.getDay());
            }
        } else if ((thisYearEndDate.getDay() != 5 || thisYearEndDate.getDay() != 6) && currentDate === replica){
            if (grade < 6 && grade > 0){ 
                NiitDundSurguuliinTsag += 4 * newStudent.schoolDurationBaga * 60 * thisYearEndDate.getDay();
            }
            else if (grade < 13 ){
                NiitDundSurguuliinTsag += 6 * newStudent.schoolDurationAhlah * 60 * thisYearEndDate.getDay();
            }
        } else {
            if (grade < 6 && grade > 0){
                NiitDundSurguuliinTsag += 7 * newStudent.schoolDurationBaga * 60 * newStudent.workDays;
            }
            else if (grade < 13 ){
                NiitDundSurguuliinTsag += 9 * newStudent.schoolDurationAhlah * 60 * newStudent.workDays;
            }
        }
        if (currentDate === thisYearStartDate) currentDate.setDate(currentDate.getDate() + 7 - thisYearStartDate.getDay())
        else if(currentDate === replica) {
            currentDate.setFullYear(currentDate.getFullYear(), 8, 1);
            grade++;
            thisYearEndDate.setFullYear(currentDate.getFullYear() + 1, 5, 1);
            startDate.setFullYear(currentDate.getFullYear(), 8, 1);
        } else currentDate.setDate(currentDate.getDate + 7)
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