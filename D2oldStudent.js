// 1-3 30min 4tsag odort
// 4-8 7 honogt 34 tsagiin hicheel 
// 9-10 6tsag odort
// Bugd 45 min neg tsag ni


function findOldStudentInterest() {
    let startDate = new Date('1978-09-04');
    let endFutureDate = new Date('1979-06-01')
    let endDate = new Date('1988-06-01')
    let grade = 1
    let niitSonirhsonTsag = 0
    let counter = 0
    console.log(startDate.getDay())
    console.log(endDate.getDay())
    
    while (startDate <= endDate) {
        console.log(startDate)
        if (startDate.getMonth() === 5) {
            console.log("zun bolloo")
            console.log(counter)
            counter = 0
            // Skip summer months by adding three months (going to September 1st)
            startDate.setMonth(startDate.getMonth() + 3);
            startDate.setDate(1)
            while (startDate.getDay() != 1) {
                startDate.setDate(startDate.getDate() + 1)
            }
            endFutureDate.setFullYear(startDate.getFullYear() + 1);
            grade += 1
            continue;
        }
    
        var futureDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        if (futureDate <= endDate && futureDate <= endFutureDate) {
            niitSonirhsonTsag += 45 * 4
            counter ++
            //console.log(niitSonirhsonTsag)
        }
            // Increment the currentDate by one day for the next iteration
        startDate = futureDate
        
    }
    return {
        "niitSonirhson": niitSonirhsonTsag / 60
    }
}

findOldStudentInterest()

export default findOldStudentInterest
