// My script

// Declare variables for display and buttons
const display = document.getElementById("displayText");
const buttons = document.querySelectorAll("button")

// Add eventlistners to all buttons
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        // Declare value to hold clicked buttons value
        const value = e.target.textContent;
        // If value of button is an integer add number to display
       if(isFinite(value)){
        console.log('Nummer')
        display.innerHTML += value
       }
    })
})

