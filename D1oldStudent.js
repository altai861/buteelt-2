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
    
    let startDate = new Date(oldStudent.startYear.toString() + "-09-01")
    let endDate = new Date((oldStudent.startYear + oldStudent.schoolYear + oldStudent.uniYear).toString() + "-06-01")
    
    let currentDate = new Date(startDate)
    
    let NiitSuraltsahTsag = 0;
    let NiitDundSurguuliinTsag = 0
    let NiitOyutniiTsag = 0
    
    
    let grade = 1;
    while (currentDate <= endDate) {
        let heddehOdor = currentDate.getDay() + 1
        let hedenSar = currentDate.getMonth() + 1
        let odor = currentDate.getDate()
    
    
        if (grade >= 1 && grade <= 3) {
            if (heddehOdor !== 7) {
                NiitDundSurguuliinTsag += 4 * 45
            }
        } else if (grade >= 4 && grade <= 8) {
            if (heddehOdor !== 7) {
                NiitDundSurguuliinTsag += 6 * 45
            }
        } else if (grade >= 9 && grade <= 10) {
            if (heddehOdor !== 7) {
                NiitDundSurguuliinTsag += 6 * 45
            }
        } else {
            if (heddehOdor !== 7) {
                NiitOyutniiTsag += 3 * 90
            }
        }
        
    
    
        if (currentDate.getMonth() === 5) {
            // Skip summer months by adding three months (going to September 1st)
            currentDate.setMonth(currentDate.getMonth() + 3);
            grade += 1
        } else {
            // Increment the currentDate by one day for the next iteration
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }
    
    NiitSuraltsahTsag = NiitDundSurguuliinTsag + NiitOyutniiTsag

    return {
        "niit": NiitSuraltsahTsag / 60,
        "dund": NiitDundSurguuliinTsag / 60,
        "deed": NiitOyutniiTsag / 60
    }
}

export default findOldStudent;



////asndkjan skdjnakjsdkjansjkdn