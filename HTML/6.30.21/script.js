// INTRO AND VARIABLES
console.log("hi")

// let is a keyword that tells JS we are setting up a variable
// x is the "name" of the variable, sometimes referred to as a reference 
// = is know as hte assignment operator
// 5 is the literal value, otherwise what the x literally represents

let x = 5;

// when you set up a variable that is known as a declaration
let y;
// when you set a value that is known as initialization
y = 3;

let z = 6 + 7;

console.log("the value of z is " + z)

// belopw is a template litereal that shows the value of x 
console.log(`the value of x is ${x}`)
// below is a concatonation that does the same thing
console.log("the value of y is " + y)

const MY_CONST = 7;

console.log(MY_CONST)

// the code below is not legal
// you cannot reassign const variables
// MY_CONST = 9;

// TYPES


// below we have a string
// this is series of characters or numbers
// wrapped around quotes
let myString = "This is a string value";
console.log(myString)

// below are boolean values
// they can be either true or false and nothing else
// they align neatly with the state of a bit
// which is either 0 or 1
let myBoolean = true;
let myOtherBoolean = false;

//
let myVariable = "ABC";
console.log(typeof myVariable)

myVariable = 1
console.log(typeof myVariable)

//
let coercedVariable = 7 + 7 + 7;
console.log(`value of coerced variable is ${coercedVariable}`)

coercedVariable = 7 + 7 + "7";
console.log(`value of coerced variable is ${coercedVariable}`)

coercedVariable = "7" + 7 + 7;
console.log(`value of coerced variable is ${coercedVariable}`)

//

let parsedInt = parseInt("10")
console.log(parsedInt)

let foo = null;
console.log(`This is the value of foo: ${foo}`)
console.log(`This is the type of foo ${typeof foo}`)

//boolean

let conditional = true;

if (conditional){
    console.log("the conditional was true")
}   else{
    console.log("the conditional is false")
}

let numberConditional = 5;

if(numberConditional === 5){
    console.log("The number is equal to 5")
}   else if(numberConditional > 3){
    console.log("the number is a least bigger than 3")
}   else if(numberConditional < 10){
    console.log("the numnber is less than 10")
}

let equalityCheckNumber = 10;

if (equalityCheckNumber == "10"){
    console.log("the values are equal")
}  

// i++ is the same as: i = i +1
for (let i = 0; i <= 9; i++){
    console.log(i);
}

// challenge 3 starter code

for (let i = 99; i >= 0; i--){
    if (i>0){
        console.log(`${i} bottles of beer on the wall`);
    } else console.log(`hey we need more beer!`)
} 

// challenge 3 

let cups = 3;

if (cups<3){
    console.log(`yes i need another cup`)
}   else{
    console.log(`i dont need more coffee`)
}

// challenge 2

let temp = 80;
let precip = false;
let indoors = true

console.log(`The temperature is ${temp} degrees.`)

if(temp>80 && temp===false){
    console.log(`time to swim`)
} else if (indoors===true){
    console.log(`time to swim anyways`)
}