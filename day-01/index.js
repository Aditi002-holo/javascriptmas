const countdownDisplay = document.getElementById("countdown-display")
const countdownTimeDisplay = document.getElementById("countdown-time-display")

function renderCountdown(){
    const christmas = 25
    const currentDate = new Date().getDate()
    const remainingDays = christmas - currentDate
    
    countdownDisplay.textContent = `${remainingDays}D`
    let countdownDateTime = new Date("Dec 25, 2023 00:00:00").getTime()
    
    let countdown = setInterval(function() {
        let currentDateTime = new Date().getTime()
        let timeInterval = countdownDateTime - currentDateTime
        
        let hours = Math.floor((timeInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeInterval % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeInterval % (1000 * 60)) / 1000);
        
        countdownTimeDisplay.textContent = `${hours}H:${minutes}M:${seconds}S`
    }, 1000)
}

renderCountdown()

