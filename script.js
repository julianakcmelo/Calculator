function sum(number1, number2) {
  return number1 + number2
}

function subtraction(number1, number2) {
  return number1 - number2
}

function multiplication(number1, number2) {
  return number1 * number2
}

function division(number1, number2) {
  return number1 / number2
}

function rest(number1, number2) {
  return number1 % number2
}

let number1 = Number(prompt("Enter the first number:"))
let number2 = Number(prompt("Enter the second number:"))

const option = Number(prompt(`Enter the number of the desired operation:
1 - Sum
2 - Subtraction
3 - Multiplication
4 - Division
5 - Rest of division`))

let result

switch(option) {
  case 1:
    result = sum(number1, number2)
    alert(`The sum of the two number is: ${result}`)

    if(result % 2 == 0) alert(`The sum of the two numbers is even.`)
    else alert(`The sum of the two numbers is odd.`)

    break
  case 2:
    result = subtraction(number1, number2)
    alert(`The subtraction of the two number is: ${result}`)
    break
  case 3:
    result = multiplication(number1, number2)
    alert(`The multiplication of the two number is: ${result}`)
    break
  case 4:
    result = division(number1, number2)
    alert(`The division of the two number is: ${result}`)
    break
  case 5:
    result = rest(number1, number2)
    alert(`The rest of division of the two number is: ${result}`)
    break
  default:
    alert("Invalid option!")
    break
}

if(number1 == number2) {
  alert("The entered numbers are the same.")
} else {
  alert("The entered numbers are different.")
}
