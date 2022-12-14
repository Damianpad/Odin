/* 
**********************
Working with variables
**********************

1. Declare two variables: admin and name.
2. Assign the value "John" to name.
3. Copy the value from name to admin.
4. Show the value of admin using alert (must output “John”).
*/

let userName;
let admin;

userName = 'john';
admin = userName;
alert(admin);

/*
*********************
Giving the right name
*********************

1. Create a variable with the name of our planet. How would you name such a variable?
2. Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/

let ourPlanet = 'Earth';
let currentUserName = 'John';

/*
****************
Uppercase const?
****************

Examine the following code:
____________________________________________________________
const birthday = '18.04.1982';

const age = someCode(birthday);
____________________________________________________________

Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).

Would it be right to use upper case for birthday? For age? Or even for both?

*/

const BIRTHDAY = '18.04.1982'; // make uppercase?
// Yes because it's hard coded

const AGE = someCode(BIRTHDAY); // make uppercase?
// No because it's evaluated at run-time