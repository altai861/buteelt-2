// Start date: September 1, 1978
var startDate = new Date('1978-09-01');

// End date: June 1, 1994
var endDate = new Date('1993-06-01');

// Initialize a loop variable with the start date
var currentDate = new Date(startDate);

// Loop until the currentDate reaches the end date
while (currentDate <= endDate) {
    // Output or perform operations with the current date
    console.log(currentDate.toDateString()); // Example: Output the date
    
    // Increment the currentDate by one day for the next iteration
    currentDate.setDate(currentDate.getDate() + 1);
}