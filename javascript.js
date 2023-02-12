
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
        let objLength = Object.keys(displayValue).length;
        if(objLength == 3){
            displayValue.firstNum += element.innerHTML;
            upperDisplay.textContent = displayValue.firstNum;
            console.table(displayValue);
        }else if(objLength == 4){
            displayValue.secondNum += element.innerHTML;
            helperNumber.push(element.innerHTML)
            upperDisplay.append(helperNumber[helperNumber.length -1]);
            console.table(displayValue);
            console.log(helperNumber);
            
        };
    });
    });

//Adds the pressed operator function to the displayValue and to the display

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const floatingPointButton = document.getElementById('floatingPoint');

floatingPointButton.addEventListener('click', () =>{
    let objLength = Object.keys(displayValue).length;
    if(objLength == 3){
        displayValue.firstNum += ".";
    }else if(objLength == 4){
        displayValue.secondNum += ".";
        helperNumber.push(".")
        upperDisplay.append(helperNumber[helperNumber.length -1]);
    }
    
});

addButton.addEventListener('click', () =>{
    displayValue.operate = add;
    upperDisplay.append('+');
    console.table(displayValue);
});

subtractButton.addEventListener('click', () =>{
    displayValue.operate = subtract;
    upperDisplay.append('-');
    console.table(displayValue);
});

multiplyButton.addEventListener('click', () =>{
    displayValue.operate = multiply;
    upperDisplay.append('*');
    console.table(displayValue);
});

divideButton.addEventListener('click', () =>{
    displayValue.operate = divide;
    upperDisplay.append('/');
    console.table(displayValue);
});

//clears the display and the stored values upon pressing the clear button

clearButton.addEventListener('click', () =>{
    if(displayValue.firstNum.length > 0){
        displayValue.result = [];
        displayValue.firstNum = [];
        displayValue.secondNum = [];
        delete displayValue.operate
    }if(displayValue.secondNum.length >= 0){
        displayValue.result = [];
        displayValue.firstNum = [];
        displayValue.secondNum = [];
        delete displayValue.operate
    };
    console.table(displayValue);
    upperDisplay.textContent = "";
    lowerDisplay.textContent = "";

});

//gives the result based on the first number, operator and second number

equalButton.addEventListener('click', () =>{
    displayValue.result = operate(displayValue.operate, displayValue.firstNum, 
    displayValue.secondNum);
    //puts the result into to the first number then clears the second number array
    displayValue.firstNum = displayValue.result;
    displayValue.secondNum = [];
    console.table(displayValue);
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

