
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
        alert("Error: Division by zero is undefined.");
    }
    return a / b;
}

function operate(a, operator, b) {
    switch (`${operator}`) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    };
};



document.addEventListener("DOMContentLoaded", () => {
    let operatorSymbol = null;
    let number1 = 0;
    const display = document.querySelector(".container #display")
    const buttons = document.querySelectorAll(".container button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {

            const value = e.target.innerHTML.trim();
            console.log(value);
            if (value === "AC") {
                display.value = "";
                operatorSymbol = null;
            } else if (value === '.') {
                if (!display.value.includes('.')) {
                    display.value += value;
                }
            }            
            else if (["+", "-", "/", "*"].includes(value) && value !== '=' && display.value !== "") {
                // Next If is in case user press two operations without pressing '=', it wil automatically do it
                if(number1 > 0 && operatorSymbol !== null){
                    display.value = operate(number1, operatorSymbol, parseFloat(display.value));
                    operatorSymbol = null;
                    number1 = 0; 
                }
                number1 = parseFloat(display.value);
                operatorSymbol = value;
                display.value = "";
            } else if (value === "=") {
                if (operatorSymbol!== null){
                display.value = operate(number1, operatorSymbol, parseFloat(display.value));
                operatorSymbol = null;
                number1 = 0;
                }
            }
            else {
                display.value += value;
            }

        })
    });
});

