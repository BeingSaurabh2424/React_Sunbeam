let num1 = 100
console.log(`num1: ${num1}, type = ${typeof num1}`)

const num2 = num1

console.log(`num2: ${num2}, type = ${typeof num2}`)


num1 = 200
console.log(`num1: ${num1}, type = ${typeof num1}`)
console.log(`num2: ${num2}, type = ${typeof num2}`)


function function1(){
    console.log("inside function 1")
}

//function1()
console.log(`function1: ${function1}, type = ${typeof function1}`)

//function1 is a function reference
const function2 = function1

function1()
function2()

