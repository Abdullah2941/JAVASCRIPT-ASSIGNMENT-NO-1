// Question 1: Variable Declarations and Initialization Create three variables: productName
// (string with value "Laptop"), price(number with value 999.99),
//  and inStock(boolean with value true).Console.log all three variables in a single statement.

let productName ="Laptop";
let price =999.99;
let inStock =true;
console.log(productName,price,inStock);



// Calculate and display:
// The remainder when 27 is divided by 4
// The square of 12 (using exponentiation operator **)
// The result of incrementing 8 by 1 using the ++ operator
// The result of decrementing 15 by 2 using the -= operator

let div=27%4;
console.log(div);

let sq=12**2;
console.log(sq)


let incre=8;
incre++; // ya ++num1
console.log(incre)


let decre=15;
decre -=2;
console.log(decre);


// Question 3: String Concatenation and Case Conversion
// Create two string variables: firstName = "alex" and lastName = "SMITH". Concatenate them with a space, 
// then convert the result to proper case (first letter uppercase, rest lowercase). Also find the total 
// length of the full name.


let firstName="alex";
let lastName="SMITH";

let fullName=firstName+" " +lastName;
// console.log(fullName);

let properName=fullName.toLowerCase()
// console.log(properName);

let proper=properName.charAt(0).toUpperCase() + properName.slice(1)
console.log(proper)


// Question 4: if-else Conditional Logic
// Write an if-else statement that checks a temperature variable. If temperature is above 30
// , console.log "Hot day". If between 20 and 30 (inclusive), console.log "Pleasant day". Otherwise,
//  console.log "Cold day". Test with temperature = 25.


let temp=25;
if(temp>30){
    console.log("Hot Day");
}else if(temp>=20 || temp>=30){
    console.log("Pleasant Day");
}else{
    console.log("Cold Day");
}




// Question 5: Comparison Operators
// Create three comparison operations:

// Check if 15 is strictly equal to "15"
// Check if 20 is greater than 15 AND less than 25
// Check if 10 is not equal to 10 OR 5 is greater than 3


let compire1=15==="15";
console.log(compire1);

let compire2=20>15 && 20<25;
console.log(compire2);

let compire3=10!==10 || 5>3;
console.log(compire3);



// Question 6: Array Manipulation - Basics
// Create an array colors with values ["red", "green", "blue"]. Then:

// Add "yellow" to the end
// Remove the first element
// Insert "purple" at index 1
// Console.log the final array and its length



let arr=["red","green","blue"]
arr.push("yellow")
console.log(arr);

arr.shift()
console.log(arr);

arr.splice(1,0,"purple")
console.log(arr)