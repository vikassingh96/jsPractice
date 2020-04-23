/**********************************
 * variables and data types

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
  
/* *************************************
Variables mutation and type coercion
 

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
*/
 
/***************************** 
Basic Operators 

var year, yearVikas, yearSingh;
year = 2020;
ageVikas = 23;
ageSingh = 25;

// Math operators
yearVikas = year - ageVikas;
yearSingh = year - ageSingh;

console.log(yearSingh);
console.log(year * 2);
console.log(year + 4);

// Logical operators
var vikasOlder = yearVikas > yearSingh;
console.log(vikasOlder );

//typeof operators

console.log(typeof vikasOlder);
console.log(typeof ageSingh);
console.log(typeof 'vikas is older then singh' );
var x;
console.log(typeof x);

*/

/* **********************************
****Operator precedence 

var now = 2020;
var yearVikas = 1995;
var fullAge = 25;

//Multiple operators
var isfullAge = now - yearVikas >= fullAge;
console.log(isfullAge);

//Grouping
var yearVikas = 25;
var yearSingh = 23;
var average = (yearSingh + yearVikas) / 2;
console.log(average);  

**/

/*************************************
 * If / else statements
 * 

 var firstName = 'vikas';
 var civilStatus = 'married';

 if (civilStatus === 'married') {
     console.log(firstName + ' ' + 'is a married person');
 } else {
     console.log( firstName + ' ' + 'is a single person');
 }
*/

/************************************
 * Boolean logic
 */

var firstName = 'vikas';
var age = 20;

if (age < 13) {
    console.log(firstName + ' ' + 'is a young boy');
} else if (age >= 13 && age < 20){
    console.log(firstName + ' ' + 'is a boy');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' ' + 'is a adult');
} else {
    console.log (firstName + ' ' + 'is a men');
}
 

