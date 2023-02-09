let displayValue = {
    firstNum : [],
    secondNum : [],
    result : []
}

let helperNumber = []

//Stores the numbers in the correct place in displayValue according to the length
// and updates the display

const numButton = document.querySelectorAll('.num');

numButton.forEach(element => {
     element.addEventListener('click', () =>{
        let objLength = Object.keys(displayValue).length
        if(objLength == 3){
            displayValue.firstNum += element.innerHTML;
            upperDisplay.textContent = displayValue.firstNum;
        }else if(objLength == 4){
            displayValue.secondNum += element.innerHTML;
            helperNumber.push(element.innerHTML)
            upperDisplay.append(helperNumber[helperNumber.length -1]);

            
        };
    });
    }
    
);

//Adds the pressed operator function to the displayValue and to the display

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');

addButton.addEventListener('click', () =>{
    displayValue.operate = add;
    upperDisplay.append('+');
});

subtractButton.addEventListener('click', () =>{
    displayValue.operate = subtract;
    upperDisplay.append('-');
});

multiplyButton.addEventListener('click', () =>{
    displayValue.operate = multiply;
    upperDisplay.append('*');
});

divideButton.addEventListener('click', () =>{
    displayValue.operate = divide;
    upperDisplay.append('%');
});

//clears the display and the stored values upon pressing the clear button

clearButton.addEventListener('click', () =>{
    if(displayValue.firstNum.length > 0){
        displayValue.firstNum = [];
        delete displayValue.operate
    }if(displayValue.secondNum.length > 0){
        displayValue.secondNum = [];
        delete displayValue.operate
    };

    upperDisplay.textContent = "";
    lowerDisplay.textContent = "";

});

//gives the result based on the first number, operator and second number

equalButton.addEventListener('click', () =>{
    displayValue.result = operate(displayValue.operate, displayValue.firstNum, 
        displayValue.secondNum);
    lowerDisplay.textContent = displayValue.result;
});


// basic operator functions
function add(a, b){
    return +a + +b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function operate(operator, a, b){
    return operator(a, b);
};

//adds and updates the calculator display

let upperDisplay = document.getElementById('upper-display');
let lowerDisplay = document.getElementById('lower-display');
