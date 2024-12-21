const timerInputs = document.querySelectorAll('.inputTimer');
const setTimeBtn = document.querySelector('.setButton');
const displayTimers = document.querySelector('.displayTimers');




setTimeBtn.addEventListener('click',()=>{
    const hours = parseInt(timerInputs[0].value);
    const minutes = parseInt(timerInputs[1].value);
    const seconds = parseInt(timerInputs[2].value);

    const d = new Date("Dec 21, 2023");
    d.setHours(`${hours}`); 
    d.setMinutes(`${minutes}`);
    d.setSeconds(`${seconds}`);

    
    let x = setInterval(function () {
        let deadlineTime = d.getTime();
    
            // Getting current time in required format
            let now = new Date("Dec 21, 2023").getTime();
    
            // Calculating the difference
            let t = deadlineTime - now;
    
            // Getting value of days, hours, minutes, seconds
            let hours = Math.floor(
                (t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor(
                (t % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor(
                (t % (1000 * 60)) / 1000);
    
            // Output the remaining time
            displayTimers.innerHTML = `
            <div class="displayCard">
                <span class="stopTime">Time left:</span>
                <div class="timerInputs">
                    <input class="inputTimer" type="number" value="${hours}">:
                    <input class="inputTimer" type="number" value="${minutes }">:
                    <input class="inputTimer" type="number" value="${seconds }">
                </div>
                <button class="deleteButton">Delete</button>
            </div>
`
    
            // Output for over time
            // if (t < 0) {
            //     clearInterval(x);
            //     document.getElementById("demo")
            //         .innerHTML = "Time up!";
            // }
        }, 1000);

   
})


