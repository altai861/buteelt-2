// 1-3 30min 4tsag odort
// 4-8 7 honogt 34 tsagiin hicheel 
// 9-10 6tsag odort
// Bugd 45 min neg tsag ni


function findOldStudentInterest() {
    let startDate = new Date('1978-09-04');
    let endDate = new Date('1988-06-01')
    let grade = 1
    let niitSonirhsonTsag = 0
    console.log(startDate.getDay())
    console.log(endDate.getDay())
    
    while (startDate <= endDate) {
    
        if (startDate.getMonth() === 5) {
            console.log("zun bolloo")
            // Skip summer months by adding three months (going to September 1st)
            startDate.setMonth(startDate.getMonth() + 3);
            grade += 1
            continue;
        }
    
        var futureDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        if (futureDate <= endDate) {
            niitSonirhsonTsag += 45 * 4
            console.log(niitSonirhsonTsag)
        }
            // Increment the currentDate by one day for the next iteration
        startDate = futureDate
        
    }
    return {
        "niitSonirhson": niitSonirhsonTsag / 60
    }
}


export default findOldStudentInterest
