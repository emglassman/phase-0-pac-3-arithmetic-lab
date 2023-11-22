function add(a,b) {
    return a+b
}
function subtract(a,b) {
    return a-b
}
function multiply(a,b) {
    return a*b
}
function divide(a,b) {
    return a/b
}

function increment(n) {
    return n+1
}
let number=5
number++
function decrement(n){
    return n-1
}
number--

function makeInt(n){
    return parseInt(n,10)
}
function parse(n) {
    return makeInt(n)
}
let parsedNumber = parse("2")

function preserveDecimal(n){
    return parseFloat(n)
}
function customParseFloat(n){
    return preserveDecimal(n)
}
let customparsedFloatedInt= customparseFloat("80.123999")
console.log(customParsedFloatedInt)