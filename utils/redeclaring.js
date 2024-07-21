//Grasp on Redeclaring paradigm in JavaScript 


//var x = 2; 

//et x = 3;  // Not allowed 


{
    //let x = 2; //Allowed 
    //let x = 3; //Not allowed 
}


{
    //let x = 2; //Allowed
    //var x = 3; //Not allowed 
}


//Allowed Redeclaring 

let x = 2; 

{
    let x = 3; //Allowed 
}

{
    let x = 3; //Allowed 
}

{
    let x = 4; //Allowed 
}
