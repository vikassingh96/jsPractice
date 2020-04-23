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
 */

 /*********************************
  * CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team

2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.

3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

  //solution*/

var teamJohn = (89 + 120 + 103)/ 3;
var teamMike = (116 + 94 + 123)/ 3;
var teamMary = (97 + 134 + 105)/ 3;

if (teamJohn > teamMike && teamJohn > teamMary) {
    console.log(teamJohn + ' John is the Winner');
} else if (teamMike > teamJohn &&  teamMike > teamMary) {
    console.log(teamMike + ' Mike is the Winner');
} else if (teamMary > teamJohn && teamMary > teamMike) {
    console.log(teamMary + ' Mary is the Winner');
} else { 
    console.log(' match is draw ');
}
