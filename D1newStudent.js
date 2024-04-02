

function findNewStudent() {
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

    let dundSurguuliDays = 0
    let deedSurguuliDays = 0
    
    
    let startDate = new Date(newStudent.startYear.toString() + "-09-01")
    let endDate = new Date((newStudent.startYear + newStudent.schoolYear + newStudent.uni).toString() + "-06-02")
    
    let currentDate = new Date(startDate)
    
    let NiitSuraltsahTsag = 0;
    let NiitDundSurguuliinTsag = 0
    let NiitOyutniiTsag = 0
    let counter = 0
    
    
    let grade = 1;
    while (currentDate <= endDate) {
        console.log(currentDate)
        if (currentDate.getMonth() === 5 && currentDate.getDate() === 1) {
            // Skip summer months by adding three months (going to September 1st)
            currentDate.setMonth(currentDate.getMonth() + 3);
            grade += 1
            console.log(counter)
        }
        let heddehOdor = currentDate.getDay() + 1
        let hedenSar = currentDate.getMonth() + 1
        let odor = currentDate.getDate()
    
    
        if (grade >= 1 && grade <= 5) {
            if (heddehOdor !== 7 && heddehOdor !== 6) {
                NiitDundSurguuliinTsag += 4 * 30
                dundSurguuliDays += 1
                counter++
            }
        } else if (grade >= 6 && grade <= 12) {
            if (heddehOdor !== 7 && heddehOdor !== 6) {
                NiitDundSurguuliinTsag += 6 * 35
                dundSurguuliDays += 1
                counter++
            }
        } else {
            if (heddehOdor !== 7 && heddehOdor !== 6) {
                NiitOyutniiTsag += 3 * 90
                deedSurguuliDays += 1
                counter++
            }
        }
        
    
    
        currentDate.setDate(currentDate.getDate() + 1);
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

findNewStudent()
export default findNewStudent;