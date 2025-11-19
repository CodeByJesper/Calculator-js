// My script

// Declare variables for display and buttons
const display = document.getElementById("displayText");
const buttons = document.querySelectorAll("button");
// Declaring boolean to check if display is cleard and set to 0
let isCleard = false;
let firstNumber;
let secondnumber;
let currentOperator;
// Add eventlistners to all buttons
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        // Declare value to hold clicked buttons value
        const value = e.target.textContent;
        // If value of button is an integer add number to handleNumber()
       if(isFinite(value)){
            handleNumber(value);
       }
       // if not an integer then send operator to handleOperator()
       else if (value != "C" && value != "="){
            handleOperator(value);
       }
       else if(value == "C"){
            handleClear();
       }
       else if(value == "="){
            calculateResult();
       }

    })
})
// Handles the number buttons
function handleNumber(number){
     // Checking if the display placeholder "0" has to be removed
     if(!isCleard){          
        display.innerHTML = "";
        isCleard = true;
    }
    // Add the number to display
    display.innerHTML += number;
}
// Handles the operator buttons
function handleOperator(operator){
    // Add the display value to variable firstNumber
    firstNumber = display.innerHTML;
     // Do addition
     if(operator == "+"){
        // Add + operator to currentOperator
        currentOperator = "+";
    }
    // Do Subtraction
    else if (operator == "-"){
        currentOperator = "-";
    }
    // Do Multiplication
    else if(operator == "*"){
        currentOperator = "*";
    }
    //Do Division
    else if(operator == "/"){
        currentOperator = "/";
    }
    // Change state of isCleard - makes the display reset when user clicks numbers after operator
    isCleard = false;
}
// Handles the clear button
function handleClear(){
    display.innerHTML = "0";
    isCleard = false;
    
}
// Handles display of result when = is pressed
function calculateResult(){
    //Declare result variable
    let result = 0;
    // Get the second number from display and store it in secondNumber variable
    secondnumber = display.innerHTML;
    // Convert the number strings to int
    let firstNumber_Int = Number(firstNumber);
    let secondNumber_Int = Number(secondnumber);
    // Calculate the result
    switch(currentOperator){
        case "+":
            result = firstNumber_Int + secondNumber_Int;
            break;
        case "-":
            result = firstNumber_Int - secondNumber_Int;
            break;
        case "*": 
            result = firstNumber_Int * secondNumber_Int;
            break;
        case "/":
            result = firstNumber_Int / secondNumber_Int;
            break;
    }
    display.innerHTML = String(result)

}