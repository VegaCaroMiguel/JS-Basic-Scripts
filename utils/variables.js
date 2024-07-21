let carName = 'Volvo'; 

//Multiple variable declatarion A
let personA = 'John Doe', carNameA = 'Audi', price= 200; 


//Multiple variable declaration B
let personB = 'Sophie Doe',
carNameB = 'Mercedes', 
priceB = '250.000';

//Arithmetic operators within variable declaration 
let x = 5 + 2 + 3; 


//String concatenation 
let y = 'John' + ' ' + 'Doe'; 


//What happens when concatenating strings and ints 
let z = '5' + 2 + 3 

//What happens when concatenating ints and strings 
let w = 2 + 3 + '5'

//JavaScript Dollar sign $
let $ = 'Hello World'; 
let $$ = 2; 
let $myMoney = 5; 

//Dollar sign is not very common in JavaScript, it's used often as an 
// alias for the main function in a JavaScript library.

//JavaScript Underscore _ 
let _lastName = 'Johnson'; 
let _x = 2; 
let _100 = 5; 


//Block Scoping 
{
    let x = 2; 
}
// x can NOT be used here

// var doesn't allow Block Scoping 
{
    var a = 10; 
}
// a can be used here ! 


//LET VARIABLES: Cannot be redeclared 
// let x = 'John Doe'
// let x = 0 
// This isn't allowed and will throw an error 

// VAR VARIABLES: Can be redeclared 
// var x = 'John Doe' 
// var x = 10
// This is allowed in JavaScript 



writeCarName(); 

function writeCarName(){
    element = document.getElementById('demo'); 
    element.innerHTML = carName; 
}

