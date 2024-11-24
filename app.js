/*-------------------------------- Constants --------------------------------*/
const displayElement = document.querySelector(".display")
/*-------------------------------- Variables --------------------------------*/
let num1 = 0;
let num2 = 0;
let operator = null;
let total = 0;
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
console.log(buttons)
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button=>{
    button.addEventListener('click', (event)=>{
        // console.log(typeof(event.target.innerText))
        // console.log(Number(event.target.innerText))
        processInput(event.target.innerText)
    })
}))
/*-------------------------------- Functions --------------------------------*/

function processInput(value){
    // Check the vaule if it number of 
    if(Number(value) || Number(value) === 0 && total === 0){
        // console.log('numbers')
        if(num2 === 0 && operator === null){
            if(num1 === 0) num1 = value
            else{
                num1 = num1 + value
            }
            console.log(num1)
            displayElement.innerHTML = num1
        }else if (num1 !==0 && operator !== null && total === 0){
            if(num2 === 0) num2 = value
            else{
                num2 = num2 + value
            }
            console.log(num2)
            displayElement.innerHTML = num1 + operator + num2
        }
    }else{
        if(num1 !== 0 && num2 === 0){
            if(value === 'C' || value === '=') {

            }else{
                operator = value
                displayElement.innerHTML = num1 + operator
            }
        }else if (num1 !== 0 && num2 !== 0 && value === "=")
        {
            total = getTotal(num1,num2, operator)
            console.log(total)
            displayElement.innerHTML = total
        }else if (total !== 0 && value !== 'C' && value !== '='){
            operator = value
            num1 = total
            num2 = 0
            total = 0
            displayElement.innerHTML = num1 + operator
        }
        else if(value === 'C'){
            num1 = 0;
            num2 = 0;
            operator = null;
            total = 0;
            displayElement.innerHTML = ""
        }
    }
}

function getTotal(num1_, num2_, operator_){
    if(operator_ === '+')      return Number(num1_) + Number(num2_)
    else if(operator_ === '-') return Number(num1_) - Number(num2_)
    else if(operator_ === '*') return Number(num1_) * Number(num2_)
    else if(operator_ === '/') return Number(num1_) / Number(num2_)
}