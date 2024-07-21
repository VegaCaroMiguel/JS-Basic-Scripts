//Let reserved keyword in JavaScript 

//Redefining problems 
//Remember that let keyword doesn't allow variable redefining 


//Block Hoisting problem with var keyword 
var x = 10; 
//Here x is 10 

{
    var x = 2; 
    //Here x is 2
}
//Here x is 2


//Block Hoisting problem with var keyword solution, using let keyword 
let x = 10; 
//Here x is 10

{
    let x = 2; 
    //Here x is 2
}

//Here x is 10 


//REMEMBER 

//GOOD THINGS 

// let and const have block scope. 
// let and const can not be redeclared 
// let and const mus be declared before use 
// let and const does not bind to this 
// let and const are not hoisted 

//BAD THINGS 

//var does not have to be declared 
//var is hoisted 
//var binds to this 

