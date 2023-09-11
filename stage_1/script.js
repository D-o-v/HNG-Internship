// script.js
document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.getTime();
    console.log(currentUTCTime)
    console.log(currentDate)

    // Update the elements with data-testid attributes
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = "Today is: " + currentDay;
    document.querySelector("[data-testid='currentUTCTime']").textContent = "You have used " + currentUTCTime + " milliseconds today";

    // Set your track and GitHub URL
    document.querySelector("[data-testid='myTrack']").textContent = "Frontend";
    const githubURL = "https://github.com/D-o-v/HNG-Internship/tree/main/stage_1"; // Replace with your GitHub URL
    document.querySelector("[data-testid='githubURL']").href = githubURL;
});
