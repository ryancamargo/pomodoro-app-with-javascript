const audio = new Audio('bell.mp3');
const startBtn = document.querySelector('.btn-start'); 
const session = document.querySelector('.minutes'); 
let myInterval; 
let state = true;

// Function to add later: 
// "Reset" button that pauses the timer and brings it back to its initial time.
// "Pause" button that stops the timer when pressed and resumes the timer when pressed again.

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent)
  
    if(state) {
        state = false;
        let totalSeconds = sessionAmount * 60;
  
        const updateSeconds = () => {
        const minuteDiv = document.querySelector('.minutes');
        const secondDiv = document.querySelector('.seconds');
        
        totalSeconds--;
        
        let minutesLeft = Math.floor(totalSeconds/60);
        let secondsLeft = totalSeconds % 60;
        
        if(secondsLeft < 10) {
            secondDiv.textContent = '0' + secondsLeft;
        } else {
            secondDiv.textContent = secondsLeft;
        }
        minuteDiv.textContent = `${minutesLeft}`
        
        if(minutesLeft === 0 && secondsLeft === 0) {
            audio.play();
            clearInterval(myInterval);
        }
        }
        myInterval = setInterval(updateSeconds, 1000);
    } else {
        alert('Session has already started.')
    }
  }
startBtn.addEventListener('click', appTimer);