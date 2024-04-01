// 1-5 30min 4tsag odort
// 6-12 35min 6tsag odort
function findNewStudentInterest() {
    let startDate = new Date('2006-09-04');
    let endDate = new Date('2018-06-01')
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
            if (grade >= 1 && grade <= 5) {
                console.log("baga angi: ", startDate)
                niitSonirhsonTsag += 30 * 4
            } else {
                console.log("Dund ahlah angi: ", startDate)
                niitSonirhsonTsag += 35 * 4
            }
            console.log(niitSonirhsonTsag)
        }
            // Increment the currentDate by one day for the next iteration
        startDate = futureDate
        
    }
    return {
        "niitSonirhson": niitSonirhsonTsag / 60
    }
}


export default findNewStudentInterest
