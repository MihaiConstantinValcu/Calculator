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

function operator(op, num1, num2){
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
const numButtons = document.querySelectorAll(".num");
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');

clearButton.addEventListener('click', ()=>{
    display.textContent = '';
}
)

deleteButton.addEventListener('click', ()=>{
    display.textContent = display.textContent.slice(0,-1)
})

numButtons.forEach((button) => {
    button.addEventListener('click',()=>{
        display.textContent += button.textContent;
    })
    
})