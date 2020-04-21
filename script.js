/********variables and data types

// strings
var firstName = 'vikas';
console.log(firstName);  

// numbers
var digit = 22;
console.log(digit);

// boolean logic
var fullAge = true;
console.log(fullAge); 

*/
  
/* Variables mutation and type coercion
 */

var firstName = 'vikas';
var Age = '23';

//type coercion
console.log(firstName + ' ' + Age);

var job, isMarried;
job = 'Engineer';
isMarried = false;

console.log(firstName + ' is a ' + Age + ' year old ' + job + ' is he married ? ' + isMarried);

// Variable mutation

Age = 'twenty three';
job = 'coder';
isMarried = true;

alert(firstName + ' is a ' + Age + ' year old ' + job + ' is he engaged ? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

