/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (num, factorial = 1) {
  if (num === 1 || num === 0) {
    return factorial
  }
  factorial = factorial * num
  num--
  return findFactorial(num, factorial)
}

console.log(findFactorial(5))
console.log(findFactorial(8))

//Exercise 2
const reverseString = function (str, reversed = "") {
  if (!str.length) {
    return reversed
  }
  reversed += str.charAt(str.length - 1)
  str = str.slice(0, str.length - 1)
  return reverseString(str, reversed)
}

console.log(reverseString("hey"))
console.log(reverseString("green"))

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function (firstArray, secondArray) {
  if (!firstArray.length) {
    return secondArray
  }
  secondArray.push(firstArray.shift())
  return swap(firstArray, secondArray)
}

swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]


//Extension:
const stack1 = [1, 2, 3]
const stack2 = []

const swapStacks = function (firstStack, secondStack) {
  if (!firstStack.length) {
    return secondStack
  }
  secondStack.push(firstStack.pop())
  return swapStacks(firstStack, secondStack)
}

swapStacks(stack1, stack2)
console.log(stack1) //[]
console.log(stack2) //[3, 2, 1]

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }