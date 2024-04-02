function findOldStudent() {
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
    
    let dundSurguuliDays = 0
    let deedSurguuliDays = 0

    let startDate = new Date(oldStudent.startYear.toString() + "-09-01")
    let endDate = new Date((oldStudent.startYear + oldStudent.schoolYear + oldStudent.uniYear).toString() + "-06-01")
    
    let currentDate = new Date(startDate)
    
    let NiitSuraltsahTsag = 0;
    let NiitDundSurguuliinTsag = 0
    let NiitOyutniiTsag = 0
    let counterDay = 0
    
    let grade = 1;
    while (currentDate <= endDate) {
        let heddehOdor = currentDate.getDay()
        
        if (grade >= 1 && grade <= 3) {
            if (heddehOdor !== 0) {
                NiitDundSurguuliinTsag += 4 * 45
                dundSurguuliDays += 1
                counterDay ++
            }
        } else if (grade >= 4 && grade <= 8) {
            if (heddehOdor !== 0) {
                NiitDundSurguuliinTsag += 6 * 45
                dundSurguuliDays += 1
                counterDay ++
            }
        } else if (grade >= 9 && grade <= 10) {
            if (heddehOdor !== 0) {
                NiitDundSurguuliinTsag += 6 * 45
                dundSurguuliDays += 1
                counterDay ++
            }
        } else {
            if (heddehOdor !== 0) {
                NiitOyutniiTsag += 3 * 90
                deedSurguuliDays += 1
                counterDay ++
            }
        }
        
    
    
        if (currentDate.getMonth() === 5 && currentDate.getDate() === 1) {
            // Skip summer months by adding three months (going to September 1st)
            currentDate.setMonth(currentDate.getMonth() + 3);
            grade += 1
            console.log(counterDay)
            counterDay = 0
        } else {
            // Increment the currentDate by one day for the next iteration
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }
    
    NiitSuraltsahTsag = NiitDundSurguuliinTsag + NiitOyutniiTsag

    return {
        "niit": NiitSuraltsahTsag / 60,
        "dund": NiitDundSurguuliinTsag / 60,
        "deed": NiitOyutniiTsag / 60,
        "dundSurguuliDays": dundSurguuliDays,
        "deedSurguuliDays": deedSurguuliDays
    }
}

findOldStudent();
export default findOldStudent;