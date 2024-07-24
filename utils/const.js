// JavaScript Const 

//Cannot be Reassigned 
//MUST be assigned 

const PI = 3.1415926536899793; 
//PI = 3.14; //This will give an error 
//PI = pi+10; //This will give an error as well 

/**
 * THIS IS NOT ALLOWED 
 * const PI; 
 * PI = 3.1414432;
 * 
 */

//constant array creation
const cars = ['Saab', 'Volvo', 'BMW']; 

//change elements of a constant array 
cars[0] = 'Toyota'; 

//Array adding in JavaScript 
cars.push('Audi'); 

//We can NOT reassign the array:
//const cars = ['Saab', 'Volvo', 'BMW']; 
// cars = ['Toyota', 'Volvo', 'Audi']; //ERROR 

//Constant Object creation 

//const object 
const car = {type: 'Fiat', model:'500', color: 'white'}; 

//changing an object property 
car.color = 'red'; 

//adding a property 
car.owner = 'Johnson'; 

//We can NOT reassign an object 
// car = {type: 'Volvo', model: '600', color: 'red', owner: 'Jhonson'}; //ERROR 
// const keyword Block Scope 
const x = 10; 
//Here x is 10 

{
    const x = 2; 
    
    //Here x is 2 
}
// Here x is 10 
//Redeclaring 

