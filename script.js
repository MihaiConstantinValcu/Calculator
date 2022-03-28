function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b){
        return a / b ;
    }
    return 'ERROR!';
}

function operate(op, num1, num2){
    switch(op){
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

const display = document.querySelector(".display");
const allButtons = document.querySelectorAll(".button");
const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".op");
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const egal = document.querySelector(".egal");
const point = document.querySelector(".point")
const operators = ['/','*','-','+'];
let inFloat = false;
let floatN = 0;
let displayValue;

allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(display.textContent == 'ERROR!'){
            display.textContent = '';
        }
    })
})

clearButton.addEventListener('click', ()=>{
    display.textContent = '';
    displayValue = 0;
}
)

deleteButton.addEventListener('click', ()=>{
    display.textContent = display.textContent.slice(0,-1)
})

point.addEventListener('click', () => {
    if(display.textContent == ''){
        display.textContent = '0.';
        inFloat = true;
    }
    else if(!operators.includes(display.textContent.slice(-1))){
        display.textContent += '.';
        inFloat = true;
    }
})

numButtons.forEach((button) => {
    button.addEventListener('click',()=>{
        if(floatN == 0){
        if(operators.includes(display.textContent.slice(-1)))
            display.textContent +=  " " + button.textContent;
        else display.textContent += button.textContent;
        displayValue = display.textContent;
        if(inFloat == true){
            floatN++;
        }
        }
    })  
})

operatorButtons.forEach((op)=>{
    op.addEventListener('click',()=>{
        if(display.textContent == ''){
            display.textContent += '0';
        }
        if(!operators.includes(display.textContent.slice(-1))){
            display.textContent += " " + op.textContent;
            inFloat = false;
            floatN = 0;
        }
        else{
            display.textContent = display.textContent.slice(0,-1) + op.textContent;
            inFloat = false;
            floatN = 0;
        }
        displayValue = display.textContent;
    })
})

egal.addEventListener("click", () => {
    console.log(displayValue);
    let numsOps = displayValue.split(" ")

    if(numsOps.length == 1){
        return;
    }

    if(numsOps.length !=0 && numsOps.length % 2 == 0 ){
        display.textContent = 'ERROR!';
        return;
    }

    let finalValue = 0;
    finalValue = operate(numsOps[1],parseFloat(numsOps[0]),parseFloat(numsOps[2]));

    if(finalValue == 'ERROR!'){
        display.textContent = finalValue;
        return;
    }

    numsOps.shift();
    numsOps.shift();
    numsOps.shift();

    while(numsOps.length != 0){
        console.log("sunt aici")
        finalValue = operate(numsOps[0], finalValue, parseFloat(numsOps[1]));

        if(finalValue == 'ERROR!'){
            display.textContent = finalValue;
            return;
        }

        numsOps.shift();
        numsOps.shift();
    }

    finalValue = Math.round(finalValue*100)/100;

    display.textContent = finalValue.toString();

})