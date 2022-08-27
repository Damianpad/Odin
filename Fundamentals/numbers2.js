console.log('Numbers 2 connected');

// JavaScript has only one type of number. Numbers can be written with or without decimals
let floating = 3.14; // A number with decimals
let wholeNum = 3; // A number without decimals

// Extra long or extra small numbers can be written with scientific (exponent) notation:
let largeNum = 123e5;
let smallNum = 123e-5;

// JavaScript Numbers are Always 64-bit Floating Point
// Unlike other programming languages, JavaScript does not define different type of numbers, like integers, short, long, floating-point, etc

// Integer Precision
// Integers are accurate up to 15 digits
let intExample1 = 999999999999999;
let intExample2 = 9999999999999999;

console.log(intExample1);
console.log(intExample2);

// If you add two strings, the result will be concatenation:
let stringCat1 = "10";
let stringCat2 = "20"
let combinedCat = stringCat1 + stringCat2;

console.log(combinedCat);

// If you add a number and a string, the result will be a string concatenation:
let stringCat3 = 10;
let stringCat4 = "20";
let combinedCat2 = stringCat3 + stringCat4;

console.log(combinedCat2);

// A common mistake is to expect this result to be 30
let ten = 10;
let twenty = 20;
let result1 = 'Result will be: ' + ten + twenty;
console.log(result1);

// NaN Not a Number
// NaN is a JavaScript reserved word indiciating that a number is not a legal number

let notNum1 = 100 / "Apple";
console.log(notNum1);

// However if the string contains a numeric value, the result will be a number
let isNum = 100 / "10";
console.log(isNum);