function findNewIntern(){    
    const totalInternWeeks = 8;

    function calculateTotalStudyTime(startDate, endDate) {
        let totalStudyTime = 0;
        let currentDate = new Date(startDate.getTime());
        while (currentDate < endDate) {
            const dayOfWeek = currentDate.getDay();
            console.log(currentDate, dayOfWeek)
            if (dayOfWeek !== 6 && dayOfWeek !== 5) {
                totalStudyTime += 4.5
            }
            currentDate.setDate(currentDate.getDate() + 1);
            if (currentDate.getMonth() === 5) {
                console.log("zun bolloo")
                // Skip summer months by adding three months (going to September 1st)
                currentDate.setMonth(currentDate.getMonth() + 3);
                continue;
            }
        }
        return totalStudyTime;
    }

    const startDate = new Date("2018-09-01");
    const endDate = new Date("2022-06-01");
    const totalStudyTime = calculateTotalStudyTime(startDate, endDate);

    const internshipDuration = 5 * totalInternWeeks * (5 * 8); 
    const internshipProportion = internshipDuration / totalStudyTime * 100;

    console.log("Total study time: ", totalStudyTime)
    console.log(`Дадлагын цаг: ${internshipDuration}`);
    console.log(`Эзлэх хувь: ${(internshipProportion).toFixed(2)}%`);

    return {
        "internDuration": internshipDuration,
        "internshipProportion": internshipProportion.toFixed(2)
    }

}
export default findNewIntern;