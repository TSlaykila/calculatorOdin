 
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is undefined.";
    }
    return a / b;
}

function operate(a, operator, b){
    switch(`${operator}`){
        case "+":                                                                             
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;        
    };
};

document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".container #display")
    const buttons = document.querySelectorAll(".container button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {

            const value = e.target.innerHTML.trim();
            if(value === "AC") {
                display.value = "";
            } else{
            
                display.value += value;
            }
        })
    });
});