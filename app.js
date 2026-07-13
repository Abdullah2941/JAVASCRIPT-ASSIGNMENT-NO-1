// Question 1: Variable Declarations and Initialization Create three variables: productName
// (string with value "Laptop"), price(number with value 999.99),
//  and inStock(boolean with value true).Console.log all three variables in a single statement.

let productName = "Laptop";
let price = 999.99;
let inStock = true;
console.log(productName, price, inStock);



// Calculate and display:
// The remainder when 27 is divided by 4
// The square of 12 (using exponentiation operator **)
// The result of incrementing 8 by 1 using the ++ operator
// The result of decrementing 15 by 2 using the -= operator

let div = 27 % 4;
console.log(div);

let sq = 12 ** 2;
console.log(sq)


let incre = 8;
incre++; // ya ++num1
console.log(incre)


let decre = 15;
decre -= 2;
console.log(decre);


// Question 3: String Concatenation and Case Conversion
// Create two string variables: firstName = "alex" and lastName = "SMITH". Concatenate them with a space, 
// then convert the result to proper case (first letter uppercase, rest lowercase). Also find the total 
// length of the full name.


let firstName = "alex";
let lastName = "SMITH";

let fullName = firstName + " " + lastName;
// console.log(fullName);

let properName = fullName.toLowerCase()
// console.log(properName);

let proper = properName.charAt(0).toUpperCase() + properName.slice(1)
console.log(proper)


// Question 4: if-else Conditional Logic
// Write an if-else statement that checks a temperature variable. If temperature is above 30
// , console.log "Hot day". If between 20 and 30 (inclusive), console.log "Pleasant day". Otherwise,
//  console.log "Cold day". Test with temperature = 25.


let temp = 25;
if (temp > 30) {
    console.log("Hot Day");
} else if (temp >= 20 || temp >= 30) {
    console.log("Pleasant Day");
} else {
    console.log("Cold Day");
}




// Question 5: Comparison Operators
// Create three comparison operations:

// Check if 15 is strictly equal to "15"
// Check if 20 is greater than 15 AND less than 25
// Check if 10 is not equal to 10 OR 5 is greater than 3


let compire1 = 15 === "15";
console.log(compire1);

let compire2 = 20 > 15 && 20 < 25;
console.log(compire2);

let compire3 = 10 !== 10 || 5 > 3;
console.log(compire3);



// Question 6: Array Manipulation - Basics
// Create an array colors with values ["red", "green", "blue"]. Then:

// Add "yellow" to the end
// Remove the first element
// Insert "purple" at index 1
// Console.log the final array and its length



let arr = ["red", "green", "blue"]
arr.push("yellow")
console.log(arr);

arr.shift()
console.log(arr);

arr.splice(1, 0, "purple")
console.log(arr)



// Question 7: Array Manipulation - splice()
// Start with array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. Use splice() to:

// Remove "cherry"
// Replace "date" with "dragonfruit"
// Extract the middle 3 elements into a new array


let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

fruits.splice(2, 1, "dragonfruit")
console.log(fruits);

let middle3 = fruits.splice(1, 3);
console.log(middle3);
console.log(fruits)



// Question 8: for Loop - Number Sequence
// Write a for loop that prints numbers from 1 to 10, but skips number 5
//  using continue, and stops at 8 using break. Also calculate the sum of all printed numbers.
let sum = 0

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log(i);
    sum += i;
}
console.log(sum)




// Write nested for loops to create this pattern:

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}




// Question 10: String Methods - Search and Extract
// Given text = "The quick brown fox jumps over the lazy dog":

// Find the position of "fox"
// Extract "brown fox" using substring/slice
// Check if the text contains "dog"
// Get the character at position 10



// let text="The quick brown fox jumps over the lazy dog";
// console.log(text);
// let position=text.indexOf("fox");
// console.log(position);
// let extract=text.indexOf("brown")
// console.log(extract);


// let remove=text.slice(position,extract);
// console.log(remove);



let text = "The quick brown fox jumps over the lazy dog";
console.log(text);
let foxPosition = text.indexOf("fox");
console.log(foxPosition);
let brownStart = text.indexOf("brown");
let foxEnd = foxPosition + 3;
let extracted = text.slice(brownStart, foxEnd);
console.log(extracted);
let hasDog = text.includes("dog");
console.log(hasDog);
let charAt10 = text.charAt(10);
console.log(charAt10);




// Question 11: String Replacement
// Given sentence = "I love JavaScript and JavaScript is awesome":

// Replace the first "JavaScript" with "coding"
// Replace ALL "JavaScript" with "JS"
// Replace "awesome" with uppercase "AWESOME"



let sentence = "I love JavaScript and JavaScript is awesome";
console.log(sentence);
let step1 = sentence.replace("JavaScript", "coding");
console.log(step1);
let step2 = sentence.replaceAll("JavaScript", "JS");
console.log(step2);
let step3 = sentence.replace("awesome", "AWESOME");
console.log(step3);
let finalResult = sentence.replaceAll("JavaScript", "JS").replace("awesome", "AWESOME");
console.log(finalResult);






// Question 12: Number Rounding and Formatting
// Given num = 123.456789:

// Round to 2 decimal places
// Round to nearest integer
// Get the floor value
// Get the ceiling value
// Format to show exactly 4 decimal places



let num = 123.456789;
console.log(num);
let rounded2 = num.toFixed(2);
console.log(rounded2);
let rounded2Num = Number(num.toFixed(2));
console.log(rounded2Num);
let nearestInt = Math.round(num);
console.log(nearestInt);
let floorVal = Math.floor(num);
console.log(floorVal);
let ceilVal = Math.ceil(num);
console.log(ceilVal);
let fourDecimals = num.toFixed(4);
console.log(fourDecimals);





// Question 13: Random Number Generation
// Generate:

// A random integer between 1 and 100 (inclusive)
// A random decimal between 0 and 1 with 3 decimal places
// A random number between 50 and 75 (inclusive)


const randomUtils = {
    getInt: (min, max) => {
        return (Math.random() * (max - min + 1) + min);
    },

    getFloat: (places) => {
        return Math.round(Math.random() * 10 ** places) / 10 ** places;
    }
};



// Question 14: Type Conversion
// Perform these conversions:

// Convert string "123" to number
// Convert string "45.67" to decimal (float)
// Convert number 789 to string
// Check the type of "true" after converting to boolean



let str10 = "123";
let num10 = str10 * 1;
console.log(num10, typeof num10);


let str20 = "45.67";
let num20 = +str20;
console.log(num20, typeof num20);

let num30 = 789;
let str30 = `${num30}`;
console.log(str30, typeof str30);


let str40 = "true";
let bool10 = JSON.parse(str40);
console.log(bool10, typeof bool10);

console.log(Boolean("false"));
console.log(JSON.parse("false"));




// Question 15: Date and Time Operations
// Create a Date object for the current time and:

// Extract the year, month (0-11), and day
// Get the hours in 24-hour format
// Format it as "YYYY-MM-DD"
// Create a specific date for December 25, 2024



const dateUtils = {
    today: new Date(),


    getParts: (dateObj) => {
        const [year, month, day] = [
            dateObj.getFullYear(),
            dateObj.getMonth(),
            dateObj.getDate()
        ];
        return { year, month, day };
    },

    get24Hour: (dateObj) => String(dateObj.getHours()).padStart(2, '0'),
    formatISO: (dateObj) => dateObj.toISOString().split('T')[0],
    createSpecific: () => new Date(2024, 11, 25)
};


const parts = dateUtils.getParts(dateUtils.today);
console.log("Year:", parts.year);
console.log("Month 0-11:", parts.month);
console.log("Day:", parts.day);


const hours24 = dateUtils.get24Hour(dateUtils.today);
console.log("Hours 24-format:", hours24);


const formatted = dateUtils.formatISO(dateUtils.today);
console.log("Formatted:", formatted);


const xmas2024 = dateUtils.createSpecific();
console.log("Dec 25 2024:", xmas2024.toDateString());
console.log("Full ISO:", xmas2024.toISOString().split('T')[0]);




// Question 16: Function - Basic Calculator
// Write a function calculate that takes two numbers and an operator
//  (+, -, *, /) as parameters and returns the result
// . Handle division by zero by returning "Error: Division by zero".





function calculate(a, b, op) {

    if (op === '/' && b === 0) return "Error: Division by zero";

    return op === '+'? a + b
         : op === '-'? a - b
         : op === '*'? a * b
         : op === '/'? a / b
         : "Error: Invalid operator";
}

console.log(calculate(20, 4, '/'));
console.log(calculate(5, 0, '/'));



// Question 17: Function - Local vs Global Variables
// Create a global variable globalCounter = 0. Write a function 
// incrementCounter that declares a local variable with the same name
//  and increments it, while also incrementing the global variable.
//   Show the difference after calling the function twice.

let gCounter = 0;

const incrementCounter = () => {
    let gCounter = 100;
    
    gCounter++;
    console.log("Inside Function - Local gCounter:", gCounter);
    globalThis.gCounter++;
};

console.log("Before Call - Global:", gCounter);

incrementCounter(); 
console.log("1st Call - Global:", gCounter); 

incrementCounter();  
console.log("2nd Call - Global:", gCounter); 





// Question 18: switch Statement - Day of Week
// Write a switch statement that takes a number (0-6) and returns the
// corresponding day name (0=Sunday, 1=Monday, etc.). Include a default
// case for invalid numbers.



const getDayName = (dayNum) => {
    const days = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayNum]?? 'Error: Invalid day number. Use 0-6';
};

console.log(getDayName(0));
console.log(getDayName(3));
console.log(getDayName(6));
console.log(getDayName(9)); 
console.log(getDayName(-1));



// Question 19: while Loop - Countdown
// Write a while loop that starts at 10 and counts down to 1, printing
//  each number. Then print "Blast off!". Also calculate the factorial
//   of 5 using a while loop.


const countdown = () => {
    let num = 10;
    const values = [];
    
    while (num >= 1) {
        values.push(num--);
    } 
    console.log("Countdown:", values.join(' → '));
    console.log("Blast off!");
};

const calcFactorial = (n) => {
    let result = 1;
    let temp = n;
    while (temp > 0) {
        result *= temp--;
    }
    return `${n}! = ${result}`;
};
countdown();
console.log(calcFactorial(5));



// Question 20: do...while Loop - User Input Simulation
// Create a do...while loop that simulates asking for a password.
//  Start with enteredPassword = "" and keep "asking" (incrementing
// a counter) until enteredPassword === "secret123" or 5 attempts made.



const passwordCheck = () => {
    const correctPass = "secret123";
    let enteredPassword = "";
    let attempts = 0;
    const maxAttempts = 5;
    const attemptsLog = [];

    do {
        attempts++;
        enteredPassword = attempts === 3? correctPass : `wrong${attempts}`;
        
        attemptsLog.push(`Attempt ${attempts}: ${enteredPassword}`);
        
        if (enteredPassword === correctPass) {
            console.log(`Success! Correct password on attempt ${attempts}`);
            break; 
        }
        
        if (attempts >= maxAttempts) {
            console.log(`❌ Failed! Max ${maxAttempts} attempts reached`);
            break;
        }
        
    } while (enteredPassword!== correctPass && attempts < maxAttempts);

    console.log("\nAttempts Log:");
    console.log(attemptsLog.join('\n'));
};

passwordCheck();




// Question 21: Array Methods with for Loop
// Given numbers = [12, 45, 78, 23, 56, 89, 34]:
// Use a for loop to find the maximum value
// Use a for loop to calculate the average
// Create a new array with only numbers greater than 50
// Reverse the array without using reverse() method









let numbers = [12, 45, 78, 23, 56, 89, 34];

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Maximum:", max); 


let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}
let avg = total / numbers.length;
console.log("Average:", avg); 


let bigNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        bigNumbers.push(numbers[i]);
    }
}
console.log("Greater than 50:", bigNumbers);

let ultaArray = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    ultaArray.push(numbers[i]);
}
console.log("Reversed:", ultaArray);





// Question 22: Event Handling Simulation
// Create a function handleClick that:

// Gets a value from an input field with id "username"
// Checks if it's empty and shows an alert if so
// Otherwise, displays "Welcome, [username]!" in a paragraph with id "greeting"
// Resets the input field after greeting




const handleClick = () => {
    const { value: userName } = document.getElementById("username");
    const greetingPara = document.getElementById("greeting");
    const userInput = document.getElementById("username");

  
    const isEmpty = !userName.trim();

    isEmpty
        ? alert("Error: Username cannot be empty!")
        : (greetingPara.textContent = `Welcome, ${userName.trim()}!`,
           userInput.value = "");
};

document.querySelector("#submitBtn")?.addEventListener("click", handleClick);






// Question 23: Form Validation Function
// Write a function validateForm that:

// Takes email and password as parameters
// Returns true if email contains "@" and password length ≥ 8
// Otherwise returns false with specific error messages
// Test with multiple test cases




const validateForm = (email, password) => {
    const errors = [];
    
   
    !email?.includes('@') && errors.push("Error: Email must contain '@'");
    
    password?.length < 8 && errors.push("Error: Password must be at least 8 characters");
    
  
    return {
        isValid: errors.length === 0,
        errors: errors,
        message: errors.length === 0? "Validation passed!" : errors.join(' | ')
    };
};


const testCases = [
    { email: "test@gmail.com", pass: "password123" },
    { email: "invalid.com", pass: "pass" },
    { email: "user@site.com", pass: "1234567" },
    { email: "nodomain", pass: "validpass123" },
    { email: "", pass: "" }
];

console.log("=== FORM VALIDATION RESULTS ===");
testCases.forEach(({email, pass}, idx) => {
    const result = validateForm(email, pass);
    console.log(`\nTest ${idx + 1}: ${email} / ${pass}`);
    console.log(`Valid: ${result.isValid}`);
    console.log(`Message: ${result.message}`);
});



// Question 24: Temperature Converter
// Create a function convertTemperature that:

// Takes a temperature and a unit ("C" or "F") as parameters
// Converts Celsius to Fahrenheit: (C × 9/5) + 32
// Converts Fahrenheit to Celsius: (F - 32) × 5/9
// Returns the converted value with 1 decimal place





const convertTemperature = (temp, unit) => {
    const converters = {
        'C': (c) => (c * 9/5 + 32), // C to F
        'F': (f) => (f - 32) * 5/9, // F to C
        'c': (c) => (c * 9/5 + 32), // lowercase handle
        'f': (f) => (f - 32) * 5/9 // lowercase handle
    };

    const convert = converters[unit];
    if (!convert) return "Error: Unit must be 'C' or 'F'";

   
    const result = convert(temp);
    const targetUnit = unit.toUpperCase() === 'C'? 'F' : 'C';

    return `${result.toFixed(1)}°${targetUnit}`;
};

// Test cases
console.log("0°C to F:", convertTemperature(0, 'C')); 
console.log("32°F to C:", convertTemperature(32, 'F')); 
console.log("100°C to F:", convertTemperature(100, 'c')); 
console.log("98.6°F to C:", convertTemperature(98.6, 'F')); 
console.log("Invalid:", convertTemperature(25, 'K'));




// Question 25: Shopping Cart Array Operations
// Create an array cart = [] and write these functions:

// addItem(name, price): Adds item object to cart
// removeItem(name): Removes item by name
// calculateTotal(): Returns sum of all item prices
// applyDiscount(percent): Applies discount to total
// listItems(): Returns array of just item names





class ShoppingCart {
    constructor() {
        this.cart = [];
    }
    addItem = (name, price) => {
        this.cart = [...this.cart, { name, price: +price }];
        return `Added: ${name} - $${price}`;
    };

  
    removeItem = (name) => {
        const initialLength = this.cart.length;
        this.cart = this.cart.filter(item => item.name!== name);
        return initialLength > this.cart.length
           ? `Removed: ${name}`
            : `Error: ${name} not found`;
    };

    calculateTotal = () =>
        +this.cart.reduce((sum, {price}) => sum + price, 0).toFixed(2);
    applyDiscount = (percent) => {
        const total = this.calculateTotal();
        const discounted = +(total * (1 - percent / 100)).toFixed(2);
        return percent >= 0 && percent <= 100
           ? `Total: $${total} | After ${percent}% off: $${discounted}`
            : "Error: Invalid discount percent";
    };
    listItems = () => this.cart.map(({name}) => name);
}
const myCart = new ShoppingCart();
console.log(myCart.addItem("Laptop", 999.99));
console.log(myCart.addItem("Mouse", 25.50));
console.log(myCart.addItem("Keyboard", 75));
console.log(myCart.addItem("USB", 10));

console.log("\nItems:", myCart.listItems()); 
console.log("Total:", myCart.calculateTotal());
console.log(myCart.applyDiscount(10));
console.log(myCart.removeItem("USB"));
console.log("Items after remove:", myCart.listItems());
console.log("New Total:", myCart.calculateTotal()); 