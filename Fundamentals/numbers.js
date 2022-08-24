/*
*********************
Arithmetic Operations
*********************
A typical arithmetic operation operates on two numbers

*/

//The two numbers can be literals
let x = 100 + 50;

// or Variables
let a;
let b;
let y = a + b;

// or expressions

let z = (100 + 50) * a;

/*
**********************
Operators and Operands
**********************
The numbers (in an arithmetic operation) are called *operands*
The operation (to be performed between the two operands) is defined by an operator

Operand                 Operator                    Operand
100                     +                           50

*/

/*
******
Adding
******
The addition operator (+) adds numbers
*/

let num1 = 5;
let num2 = 2;
let addingNums = num1 + num2;

/*
***********
Subtracting
***********
The subtraction operator (-) subtracts numbers
*/

let subNum1 = 5;
let subNum2 = 3;
let subCalculation = subNum1 - subNum2;

/*
***********
Multiplying
***********
The multiplication operator (*) multiplies numbers
*/

let multNum1 = 5;
let multNum2 = 2;
let multCalculation = multNum1 * multNum2;

/*
********
Dividing
********
The division operator (/) divides numbers
*/

let divNum1 = 5;
let divNum2 = 2;
let divCalculation = divNum1 / divNum2;

/*
*********
Remainder
*********
The modulus operator (%) returns the division remainder
*/

let remainNum1 = 5;
let remainNum2 = 2;
let remainCalculation = remainNum1 % remainNum2;
console.log(remainCalculation);

/*
************
Incrementing
************
The increment operator (++) increments numbers
*/

let incrementNum1 = 5;
incrementNum1++;
let incrementCalculation = incrementNum1
console.log(incrementCalculation);

/*
************
Decrementing
************
The decrement operator (--) decrements numbers
*/

let decrementNum = 5;
decrementNum--;
let decrementCalculation = decrementNum;
console.log(decrementCalculation);

/*
*************
Exponentiation
*************
The exponentiation operator (**) raises the firs operand to the power of the second operand.
*/

let expoNum = 5;
let expoCalculation = expoNum ** 2;
console.log(expoCalculation);

// expoNum ** powerNum produces the same result as Math.pow(expoNum,powerNum)

let powerNum = 2;
let expoCalculation2 = Math.pow(expoNum,powerNum);
console.log(expoCalculation);

/*
*******************
Operator Precedence
*******************
Operator precedence describes the order in which operators are performed in an arithmetic expression
*/

let operatorPrec = 100 + 50 * 3;
console.log(operatorPrec);