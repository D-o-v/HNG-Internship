// script.js
document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    function updateUTCTime() {
        const currentDate = new Date();
        console.log(currentDate)
        const currentDay = daysOfWeek[currentDate.getUTCDay()];
        const currentUTCTime = currentDate.getTime();
        console.log(currentUTCTime)
        
        document.querySelector("[data-testid='currentDayOfTheWeek']").innerHTML = `Current Day of the Week is:<br>${currentDay}`;
        document.querySelector("[data-testid='currentUTCTime']").innerHTML = `Current UTC time in milliseconds:<br>${currentUTCTime}`;
    }
    
    updateUTCTime();
    
    setInterval(updateUTCTime, 500);
    
    document.querySelector("[data-testid='myTrack']").textContent = "Frontend";
    const githubURL = "https://github.com/D-o-v/HNG-Internship/tree/main/stage_1"; 
    document.querySelector("[data-testid='githubURL']").href = githubURL;
});
