function findOldIntern(){    
    const totalInternWeeks = 8;

    function calculateTotalStudyTime(startDate, endDate) {
        let totalStudyTime = 0;
        let currentDate = new Date(startDate.getTime());
        while (currentDate < endDate) {
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 6) {
                totalStudyTime += 4.5
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return totalStudyTime;
    }

    const startDate = new Date("1988-09-01");
    const endDate = new Date("1993-06-01");
    const totalStudyTime = calculateTotalStudyTime(startDate, endDate);

    const internshipDuration = 5 * totalInternWeeks * (5 * 8 + 1 * 6); 
    const internshipProportion = internshipDuration / totalStudyTime * 100;

    console.log(`Дадлагын цаг: ${internshipDuration}`);
    console.log(`Эзлэх хувь: ${(internshipProportion).toFixed(2)}%`);


}
export default findOldIntern;