//To check the difference between "var" and "let"

/**
 * var: Can be used before declaration 
 * var: similar to static 
 * var: Function scoped based
 * var: Ignores Block scope 
 * var: Can be redefined without problem 
 * var: Initializes with "undefined"
 */

/**
 * let: Cannot be used before declaration
 * let: Hoisted to the top of the block 
 * let: Cannot be redefined 
 * let: It's Block limited 
 * let: Introduced in ES6 (2015)
 */
let y; 
example();

function example(){
    if(true){
        var x = 1; 
        y = 2; 
    }
    console.log(x); 
    console.log(y); 
}